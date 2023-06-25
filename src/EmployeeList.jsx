import EmployeeRow from "./EmployeeRow";

function EmployeeList({ data }) {
  return (
    <>
      <div className="mt-[26px] flex h-[70px] w-[1621px] items-center border-[1px] border-[#EBEBEB] bg-[#F6F6F6] text-left font-poppins text-[17px] font-semibold text-[#302F2F]">
        <div className="ml-[54px] mr-[97px] h-[25px] w-[18px]">ID</div>
        <div className="ml-[97px] mr-[133px] h-[25px] w-[91px]">FullName</div>
        <div className="ml-[134px] mr-[116px] h-[25px] w-[73px] ">Projects</div>
        <div className="ml-[117px] mr-[94px] h-[25px] w-[165px]">
          Hours Engagement
        </div>
        <div className="ml-[95px] mr-[94px] h-[25px] w-[39px]">Role</div>
        <div className="ml-[94px] mr-[41px] h-[25px] w-[69px]">Actions</div>
      </div>
      {data.map((items) => (
        <EmployeeRow key={items.id} {...items} />
      ))}
    </>
  );
}

export default EmployeeList;
