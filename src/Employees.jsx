import { data } from "./data";

function Employees() {
  return (
    <>
      <div className="bg-green-500 w-[1621px] h-[65px]"></div>
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
            <div className="ml-[55px] mt-[24px] mb-[23px]">{items.id}</div>
            <div className="flex w-[164px] ml-[158px]  my-[15px]">
              <div className=" self-center">
                <img src={items.imageUrl} alt="image" />
              </div>
              <div className="flex flex-col">
                <div className="w-[118px] text-[16px]">{items.name}</div>
                <div className="w-[112px] text-[12px]">{items.email}</div>
              </div>
            </div>
            <div className="my-[23px] h-[25px] w-[200px] justify-between ml-[217px] flex flex-row">
              {items.projects.map((item) => {
                return (
                  <div
                    key={item}
                    className="w-[100px] bg-green-500 px-[3px] py-[3px] text-[14px] text-white rounded-xl text-center"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="ml-[140px] my-[23px] h-[25px] w-[165px]">
              <div className="bg-green-500 px-[30px] py-[3px] rounded-2xl w-[100px] text-[14px] text-center">
                {items.hours}
              </div>
            </div>
            <div className=" my-[23px] ml-[160px] h-[25px] w-[73px] text-[16px] text-[#A59F9F]">
              {items.role}
            </div>
            <div className="my-[23px] ml-[160px] h-[25px] w-[69px]">
              {items.actions}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Employees;
