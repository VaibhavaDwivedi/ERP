import Button from "./Button";
import { Outlet, Link } from "react-router-dom";
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
        <Link to="/">
          <Button>
            <FontAwesomeIcon icon={faChartLine} />
            DashBoard
          </Button>
        </Link>
        {/* </Link> */}
        {/*</Link> */}
        <Link to="/employee">
          <Button>
            <FontAwesomeIcon icon={faUserGroup} />
            Employees
          </Button>
        </Link>
        <Link to="/projects">
          <Button>
            <FontAwesomeIcon icon={faTableList} size="lg" />
            Projects
          </Button>
        </Link>
        <Link to="/department">
          <Button>
            <FontAwesomeIcon icon={faSitemap} />
            Departments
          </Button>
        </Link>
        <Link to="clients">
          <Button>
            <FontAwesomeIcon icon={faUserSecret} size="lg" />
            Clients
          </Button>
        </Link>
        <Link to="devices">
          <Button>
            <FontAwesomeIcon icon={faLaptop} />
            Devices
          </Button>
        </Link>
        <Link to="calender">
          <Button>
            <FontAwesomeIcon icon={faCalendarDays} size="lg" />
            Calender
          </Button>
        </Link>
        <Link to="leaves">
          <Button>
            <FontAwesomeIcon icon={faUmbrellaBeach} />
            Leaves
          </Button>
        </Link>
        <Link to="inovices">
          <Button>
            <FontAwesomeIcon icon={faFileInvoiceDollar} size="lg" />
            Inovices
          </Button>
        </Link>
        <Link to="reports">
          <Button>
            <FontAwesomeIcon icon={faFileLines} size="lg" />
            Reports
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
