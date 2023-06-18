import { FiSearch } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";

function Navbar() {
  return (
    <>
      <div className="w-[1700px] h-[80px] bg-white shadow-md flex items-center h-[80px] font-poppins font-semibold">
        <FiSearch className="text-4xl " />
        <span>
          <input
            className="w-[1568px] text-2xl focus:outline-none placeholder:text-black placeholder:text-justify placeholder:font-bold"
            placeholder="Search"
          />
        </span>
        <HiUserCircle className="text-5xl " />
      </div>
    </>
  );
}

export default Navbar;
