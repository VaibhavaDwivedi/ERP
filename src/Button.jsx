function Button({ className, ...props }) {
  return (
    <button
      className={
        "focus:bg-[#1A13CB] font-poppins font-semibold text-[14px] focus:text-white rounded-r-[8px] mr-[30px] py-[18px] w-[190px] text-left pl-[29px] leading-[21px] flex gap-[10px]" +
        " " +
        className
      }
      {...props}
    ></button>
  );
}

export default Button;
