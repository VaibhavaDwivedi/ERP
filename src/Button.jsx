function Button({ className, ...props }) {
  return (
    <button
      className={
        "focus:bg-[#1A13CB] focus:text-white rounded-r-md mr-6 py-2 text-left pl-8" +
        " " +
        className
      }
      {...props}
    ></button>
  );
}

export default Button;
