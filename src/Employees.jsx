import Button from "./Button";
import { data } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Employees() {
  return (
    <>
      <div className="flex h-[65px] w-[1621px] items-end justify-between bg-transparent">
        <div className="h-[33px] w-[136px] text-left font-poppins text-[24px] font-semibold">
          Employee
        </div>
        <div className="flex ">
          <input
            placeholder="Search keyword"
            className="mr-[20px] h-[50px] w-[501px] border-[1px] placeholder:text-justify placeholder:opacity-100 "
          />
          <input placeholder="filter" className="ml-[20px] mr-[17px]" />
          <Button className="ml-[17px] h-[50px] w-[180px] rounded-[8px] bg-[#1A13CB] pr-[11px] text-left font-poppins text-[16px] font-semibold text-white">
            <FontAwesomeIcon icon={faPlus} className="" />
            Add Employee
          </Button>
        </div>
      </div>
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
      {data.map((items) => {
        return (
          <div
            className="flex h-[70px] w-[1621px] items-center border bg-white"
            key={items.id}
          >
            <div className="ml-[55px] mr-[97px] text-[16px]">{items.id}</div>
            <div className="ml-[61px] mr-[108px] flex h-[40px] w-[164px]">
              <div className="w-[36px] self-center">
                <img src={items.imageUrl} alt="image" />
              </div>
              <div className="flex flex-col">
                <div className="w-[118px] text-[16px]">{items.name}</div>
                <div className="w-[112px] text-[12px]">{items.email}</div>
              </div>
            </div>
            <div className=" ml-[108px] mr-[126px] flex h-[25px] w-[90px] flex-row justify-center text-[14px]">
              {items.projects.map((item) => {
                return (
                  <button
                    key={item}
                    className="h-[30px] w-[100px] rounded-[15px] bg-[#00D100] px-[30px] py-[4px] text-white"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <div className="my-[23px] ml-[126px] mr-[102px] h-[25px] w-[165px]">
              <button className="w-[100px] rounded-[15px] bg-[#00D100] px-[30px] py-[3px] text-center text-[14px] text-white">
                {items.hours}
              </button>
            </div>
            <div className=" ml-[102px] mr-[90px] h-[23px] w-[73px] border-[1px] border-white text-[14px] text-[#A59F9F]">
              {items.role}
            </div>
            <div className=" ml-[91px] mr-[45px] h-[25px] w-[69px]">
              {items.actions}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Employees;
