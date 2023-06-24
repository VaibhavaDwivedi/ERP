// import { NavLink } from "react-router-dom";
function Button({ className, ...props }) {
  return (
    <button
      className={
        "font-poppins font-semibold text-[14px] rounded-r-[8px] mr-[30px] py-[18px] w-[190px] text-left pl-[29px] leading-[21px] flex gap-[10px]" +
        " " +
        className
      }
      {...props}
    ></button>
  );
}

export default Button;

//  <NavLink
//     className={({ isActive }) =>
//       isActive
//         ? "bg-[#1A13CB] text-white font-poppins font-semibold text-[14px] rounded-r-[8px] mr-[30px] py-[18px] w-[190px] text-left pl-[29px]"
//         : "bg-transparent font-poppins font-semibold text-[14px] rounded-r-[8px] mr-[30px] py-[18px] w-[190px] text-left pl-[29px] "
//     }
//   >
//     <button
//       className={"leading-[21px] flex gap-[10px]" + " " + className}
//       {...props}
//     ></button>
//   </NavLink>
