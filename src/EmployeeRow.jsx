import { Link } from "react-router-dom";

function EmployeeRow({
  id,
  imageUrl,
  name,
  email,
  projects,
  hours,
  role,
  actions,
}) {
  return (
    <>
      {" "}
      <div
        className="flex h-[70px] w-[1621px] items-center border bg-white"
        key={id}
      >
        <div className="ml-[55px] mr-[97px] text-[16px]">{id}</div>
        <div className="ml-[61px] mr-[108px] flex h-[40px] w-[164px]">
          <div className="w-[36px] self-center">
            <img className="rounded-full" src={imageUrl} alt="image" />
          </div>
          <div className="flex flex-col">
            <div className="w-[118px] text-[16px]">{name}</div>
            <div className="w-[112px] text-[12px]">{email}</div>
          </div>
        </div>
        <div className=" ml-[108px] mr-[126px] flex h-[25px] w-[90px] flex-row justify-center text-[14px]">
          {projects.map((item) => {
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
            {hours}
          </button>
        </div>
        <div className=" ml-[102px] mr-[90px] h-[23px] w-[73px] border-[1px] border-white text-[14px] text-[#A59F9F]">
          {role}
        </div>
        <div className=" ml-[91px] mr-[45px] h-[25px] w-[69px]">
          <Link
            to={"/employee/" + id}
            className="hover:bg-primary-light focus:ring-primary-default text-primary-default rounded-md bg-white px-1.5 py-0.5 text-sm hover:border  focus:ring"
          >
            {actions}
          </Link>
        </div>
      </div>
    </>
  );
}

export default EmployeeRow;
