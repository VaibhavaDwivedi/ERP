import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

// Navbar component
function Navbar() {
  return (
    <>
      <div className="w-[1700px] h-[80px] bg-white shadow-md flex items-center font-poppins font-semibold">
        {/* Search icon */}
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
        <span className="ml-8">
          {/* Search input field with placeholder text */}
          <input
            className="w-[1568px] text-2xl focus:outline-none placeholder:text-black placeholder:text-justify placeholder:font-bold placeholder:"
            placeholder="Search"
          />
        </span>
        {/* User icon */}
        <FontAwesomeIcon icon={faCircleUser} size="2xl" className="mr-4" />
      </div>
    </>
  );
}

export default Navbar;
