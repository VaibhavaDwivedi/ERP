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
  return (
    <>
      <div className="w-[220px] h-[924px]  flex flex-col bg-white mb-[217px]">
        <img
          className="w-[87px] mx-auto mt-[44px] mb-[36px]"
          src="./devlogo.png"
        />
        <Outlet />
        {/* <Link to="/dashboard"> */}
        {/* <Link to={`employee`}> */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-[#1A13CB] text-white rounded-r-[8px]"
              : "rounded-r-[8px]"
          }
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
          className={({ isActive }) =>
            isActive
              ? "bg-[#1A13CB] text-white rounded-r-[8px]"
              : "rounded-r-[8px]"
          }
        >
          <Button>
            <FontAwesomeIcon icon={faUserGroup} />
            Employees
          </Button>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "bg-[#1A13CB] text-white rounded-r-[8px]"
              : "rounded-r-[8px]"
          }
        >
          <Button>
            <FontAwesomeIcon icon={faTableList} size="lg" />
            Projects
          </Button>
        </NavLink>
        <NavLink
          to="/department"
          className={({ isActive }) =>
            isActive
              ? "bg-[#1A13CB] text-white rounded-r-[8px]"
              : "rounded-r-[8px]"
          }
        >
          <Button>
            <FontAwesomeIcon icon={faSitemap} />
            Departments
          </Button>
        </NavLink>
        <NavLink
          to="/clients"
          className={({ isActive }) =>
            isActive
              ? "bg-[#1A13CB] text-white rounded-r-[8px]"
              : "rounded-r-[8px]"
          }
        >
          <Button>
            <FontAwesomeIcon icon={faUserSecret} size="lg" />
            Clients
          </Button>
        </NavLink>
        <NavLink
          to="/devices"
          className={({ isActive }) =>
            isActive
              ? "bg-[#1A13CB] text-white rounded-r-[8px]"
              : "rounded-r-[8px]"
          }
        >
          <Button>
            <FontAwesomeIcon icon={faLaptop} />
            Devices
          </Button>
        </NavLink>
        <NavLink
          to="/calender"
          className={({ isActive }) =>
            isActive
              ? "bg-[#1A13CB] text-white rounded-r-[8px]"
              : "rounded-r-[8px]"
          }
        >
          <Button>
            <FontAwesomeIcon icon={faCalendarDays} size="lg" />
            Calender
          </Button>
        </NavLink>
        <NavLink
          to="/leaves"
          className={({ isActive }) =>
            isActive
              ? "bg-[#1A13CB] text-white rounded-r-[8px]"
              : "rounded-r-[8px]"
          }
        >
          <Button>
            <FontAwesomeIcon icon={faUmbrellaBeach} />
            Leaves
          </Button>
        </NavLink>
        <NavLink
          to="/inovices"
          className={({ isActive }) =>
            isActive
              ? "bg-[#1A13CB] text-white rounded-r-[8px]"
              : "rounded-r-[8px]"
          }
        >
          <Button>
            <FontAwesomeIcon icon={faFileInvoiceDollar} size="lg" />
            Inovices
          </Button>
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive
              ? "bg-[#1A13CB] text-white rounded-r-[8px]"
              : "rounded-r-[8px]"
          }
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
