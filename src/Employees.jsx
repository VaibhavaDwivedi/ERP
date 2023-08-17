import Button from "./Button";
import { data } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFilter, faXmark } from "@fortawesome/free-solid-svg-icons";
import EmployeeList from "./EmployeeList";
import { useState } from "react";
import Filter from "./models/Filter";
import { createPortal } from "react-dom";
import AddEmployee from "./models/AddEmployee";

function Employees() {
  const [showFilter, setShowFilter] = useState(false);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const closeFilter = () => setShowFilter(false);
  const closeAddEmployee = () => setShowAddEmployee(false);
  const openFilter = () => setShowFilter(true);
  const openAddEmployee = () => setShowAddEmployee(true);
  return (
    <>
      <div className="flex h-[65px] w-[1621px] items-center justify-between bg-transparent">
        <div className="flex h-[33px] w-[136px] text-left font-poppins text-[24px] font-semibold">
          Employee
        </div>
        <div className="mt-[15px] flex">
          <input
            placeholder="Search keyword"
            className="mr-[20px] h-[50px] w-[501px] rounded-[8px] border-[1px] placeholder:text-justify placeholder:opacity-100 "
          />
          <Button
            className="ml-[20px]  mr-[17px] h-[50px] w-[140px] rounded-[8px] border-[1px] border-black px-[11px] py-[12px]"
            onClick={openFilter}
          >
            <FontAwesomeIcon icon={faFilter} size="xl" />
            filter
          </Button>
          {showFilter && <Filter closeFilter={closeFilter} />}
          {/* <Button className="mr-[17px] w-[50px] border-[1px] border-black">
            <FontAwesomeIcon icon={faXmark} size="xs" />
          </Button> */}
          <Button
            onClick={openAddEmployee}
            className="ml-[17px] h-[50px] w-[180px] rounded-[8px] bg-[#1A13CB]  px-[11px] py-[14px] font-poppins text-[16px] font-semibold text-white"
          >
            <FontAwesomeIcon icon={faPlus} className="" />
            Add Employee
          </Button>
          {showAddEmployee && (
            <AddEmployee closeAddEmployee={closeAddEmployee} />
          )}
        </div>
      </div>
      <EmployeeList data={data} />
    </>
  );
}

export default Employees;
