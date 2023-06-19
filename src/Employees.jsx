function Employees() {
  const data = [
    {
      id: "01", //numbers starting with zero are not permissable in strict mode so changed them in string to use
      name: "Pratham Singh",
      email: "abc@domain.com",
      projects: ["ABC"],
      hours: "8 hrs",
      role: "Full-time",
      actions: "icon",
    },
    {
      id: "02",
      name: "Pragati Mishra",
      email: "abc@domain.com",
      projects: ["ABC-4th"],
      hours: "4 hrs",
      role: "Intern",
      actions: "icon",
    },
    {
      id: "03",
      name: "Satya Mall",
      email: "abc@domain.com",
      projects: ["ABC"],
      hours: "3 hrs",
      role: "Full-time",
      actions: "icon",
    },
    {
      id: "04",
      name: "Aditi Singh",
      email: "abc@domain.com",
      projects: ["ABC"],
      hours: "5 hrs",
      role: "Contractor",
      actions: "icon",
    },
    {
      id: "05",
      name: "Ankit Rao",
      email: "abc@domain.com",
      projects: ["XYZ-6h", "TCS-4"],
      hours: "10 hrs",
      role: "Intern",
      actions: "icon",
    },
    {
      id: "06",
      name: "Akriti Rao",
      email: "abc@domain.com",
      projects: ["ABC"],
      hours: "5 hrs",
      role: "Full-time",
      actions: "icon",
    },
    {
      id: "07",
      name: "Edda Maviya",
      email: "abc@domain.com",
      projects: ["ABC"],
      hours: "7 hrs",
      role: "Contractor",
      actions: "icon",
    },
    {
      id: "08",
      name: "Anuj Verma",
      email: "abc@domain.com",
      projects: ["XYZ-5h", "ABC-4h"],
      hours: "9 hrs",
      role: "Intern",
      actions: "icon",
    },
    {
      id: "09",
      name: "Priya Singh",
      email: "abc@domain.com",
      projects: ["ABC"],
      hours: "7 hrs",
      role: "Contractor",
      actions: "icon",
    },
  ];

  return (
    <>
      <div className="bg-green-500 w-[1621px] h-[65px] mt-[21px]"></div>
      <div className="bg-[#F6F6F6] border-[#EBEBEB] border-[1px] w-[1621px] h-[70px] mt-[26px] flex ">
        <div className="ml-[54px] my-[23px] w-[18px] h-[25px]">ID</div>
        <div className="w-[91px] ml-[194px] my-[23px]  h-[25px]">FullName</div>
        <div className="w-[73px] h-[25px] ml-[267px] my-[23px] ">Projects</div>
        <div className="ml-[233px] my-[23px] h-[25px] w-[165px]">
          Hours Engagement
        </div>
        <div className="my-[23px] ml-[189px] h-[25px] w-[39px]">Role</div>
        <div className="my-[23px] ml-[188px] h-[25px] w-[69px]">Actions</div>
      </div>
      {data.map((items) => {
        return (
          <div
            className="border bg-white w-[1621px] h-[70px] flex items-center"
            key={items.id}
          >
            <div className="ml-[54px] my-[23px]">{items.id}</div>
            <div className="flex flex-col w-[130px] ml-[170px] my-[10px]">
              <div>{items.name}</div>
              <div>{items.email}</div>
            </div>
            <div className="w-[200px] my-[23px] ml-[150px] flex flex-row justify-end">
              {items.projects.map((item) => {
                return (
                  <div className=" bg-green-500 px-3 rounded-xl text-center">
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="ml-[233px] my-[23px] h-[25px] w-[165px]">
              <div className="bg-green-500 rounded-2xl w-20 text-center">
                {items.hours}
              </div>
            </div>
            <div className=" my-[23px] ml-[150px] h-[25px] w-[90px]">
              {items.role}
            </div>
            <div className="my-[23px] ml-[150px] h-[25px] w-[69px]">
              {items.actions}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Employees;
