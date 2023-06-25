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
  const activeClass =
    "bg-[#1A13CB] text-white rounded-r-[8px] mr-[30px] py-[18px] pl-[29px] w-[190px] text-[14px]";
  const inActiveClass =
    "rounded-r-[8px] mr-[30px] py-[18px] w-[190px] text-[14px] pl-[29px]";

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
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          {/* Added NavLink instead of Link to use property isActive which is
          in-built in NavLink */}
          <Button>
            <FontAwesomeIcon icon={faChartLine} />
            DashBoard
          </Button>
        </NavLink>
        {/* </NavLink> */}
        {/*</NavLink> */}
        <NavLink
          to="/employee"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <Button>
            <FontAwesomeIcon icon={faUserGroup} />
            Employees
          </Button>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <Button>
            <FontAwesomeIcon icon={faTableList} size="lg" />
            Projects
          </Button>
        </NavLink>
        <NavLink
          to="/department"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <Button>
            <FontAwesomeIcon icon={faSitemap} />
            Departments
          </Button>
        </NavLink>
        <NavLink
          to="/clients"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <Button>
            <FontAwesomeIcon icon={faUserSecret} size="lg" />
            Clients
          </Button>
        </NavLink>
        <NavLink
          to="/devices"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <Button>
            <FontAwesomeIcon icon={faLaptop} />
            Devices
          </Button>
        </NavLink>
        <NavLink
          to="/calender"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <Button>
            <FontAwesomeIcon icon={faCalendarDays} size="lg" />
            Calender
          </Button>
        </NavLink>
        <NavLink
          to="/leaves"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <Button>
            <FontAwesomeIcon icon={faUmbrellaBeach} />
            Leaves
          </Button>
        </NavLink>
        <NavLink
          to="/inovices"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <Button>
            <FontAwesomeIcon icon={faFileInvoiceDollar} size="lg" />
            Inovices
          </Button>
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <Button>
            <FontAwesomeIcon icon={faFileLines} size="lg" />
            Reports
          </Button>
        </NavLink>
      </div>
    </>
  );
}

export default Sidebar;
