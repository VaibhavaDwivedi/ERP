function Button({ className, ...props }) {
  return (
    <button
      className={
        "focus:bg-[#1A13CB] font-poppins font-semibold text-[14px] focus:text-white rounded-r-md mr-6 py-2 text-left pl-8 inline-flex items-baseline gap-2" +
        " " +
        className
      }
      {...props}
    ></button>
  );
}

export default Button;
