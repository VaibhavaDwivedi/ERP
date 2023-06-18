import Button from "./Button";

function Sidebar() {
  return (
    <>
      <div className="w-[220px] h-[924px] font-poppins font-medium text-[14px] flex flex-col gap-1 bg-white">
        <img className="w-[40%] mx-auto mt-8 mb-4" src="./devlogo.png" />
        <Button className=" inline-flex items-baseline gap-1">
          {" "}
          <span>
            <img className="w-[14px]" src="../public/Department.png" />
          </span>{" "}
          DashBoard
        </Button>
        <Button className=" inline-flex items-baseline">Employees</Button>
        <Button className=" inline-flex items-baseline">Projects</Button>
        <Button className=" inline-flex items-baseline">Departments</Button>
        <Button className=" inline-flex items-baseline">Clients</Button>
        <Button className=" inline-flex items-baseline">Devices</Button>
        <Button className=" inline-flex items-baseline">Calender</Button>
        <Button className=" inline-flex items-baseline">Leaves</Button>
        <Button className=" inline-flex items-baseline">Inovices</Button>
        <Button className=" inline-flex items-baseline">Reports</Button>
      </div>
    </>
  );
}

export default Sidebar;
