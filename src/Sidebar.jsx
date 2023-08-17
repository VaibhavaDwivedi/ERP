import Button from "./Button";
import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSitemap,
  faUserGroup,
  faChartLine,
  faLaptop,
  faUserSecret,
  faCalendarDays,
  faUmbrellaBeach,
  faTableList,
  faFileLines,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

const NavData = [
  "Employees",
  "Projects",
  "Departments",
  "Clients",
  "Devices",
  "Calender",
  "Leaves",
  "Inovices",
  "Reports",
];

function Sidebar() {
  const className =
    "flex gap-[10px] font-poppins font-semibold leading-[21px] rounded-r-[8px] mr-[30px] py-[18px] pl-[29px] w-[190px] text-[14px]";
  const activeClass = "bg-[#1A13CB] text-white " + className;

  return (
    <>
      <div className="mb-[217px] flex  h-[924px] w-[220px] flex-col bg-white">
        <img
          className="mx-auto mb-[36px] mt-[44px] w-[87px]"
          src="./devlogo.png"
        />
        {/* <Outlet /> */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : className)}
        >
          {/* Added NavLink instead of Link to use property isActive which is
          in-built in NavLink */}
          <FontAwesomeIcon icon={faChartLine} />
          DashBoard
        </NavLink>
        {/* </NavLink> */}
        {/*</NavLink> */}

        <NavLink
          to="/employee"
          className={({ isActive }) => (isActive ? activeClass : className)}
        >
          <FontAwesomeIcon icon={faUserGroup} />
          Employees
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? activeClass : className)}
        >
          <FontAwesomeIcon icon={faTableList} size="lg" />
          Projects
        </NavLink>
        <NavLink
          to="/department"
          className={({ isActive }) => (isActive ? activeClass : className)}
        >
          <FontAwesomeIcon icon={faSitemap} />
          Departments
        </NavLink>
        <NavLink
          to="/clients"
          className={({ isActive }) => (isActive ? activeClass : className)}
        >
          <FontAwesomeIcon icon={faUserSecret} size="lg" />
          Clients
        </NavLink>
        <NavLink
          to="/devices"
          className={({ isActive }) => (isActive ? activeClass : className)}
        >
          <FontAwesomeIcon icon={faLaptop} />
          Devices
        </NavLink>
        <NavLink
          to="/calender"
          className={({ isActive }) => (isActive ? activeClass : className)}
        >
          <FontAwesomeIcon icon={faCalendarDays} size="lg" />
          Calender
        </NavLink>
        <NavLink
          to="/leaves"
          className={({ isActive }) => (isActive ? activeClass : className)}
        >
          <FontAwesomeIcon icon={faUmbrellaBeach} />
          Leaves
        </NavLink>
        <NavLink
          to="/inovices"
          className={({ isActive }) => (isActive ? activeClass : className)}
        >
          <FontAwesomeIcon icon={faFileInvoiceDollar} size="lg" />
          Inovices
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) => (isActive ? activeClass : className)}
        >
          <FontAwesomeIcon icon={faFileLines} size="lg" />
          Reports
        </NavLink>
      </div>
    </>
  );
}

export default Sidebar;
