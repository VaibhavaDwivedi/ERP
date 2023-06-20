import Button from "./Button";
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

function Sidebar() {
  return (
    <>
      <div className="w-[220px] h-[924px]  flex flex-col bg-white mb-[217px]">
        <img
          className="w-[87px] mx-auto mt-[44px] mb-[36px]"
          src="./devlogo.png"
        />
        <Button>
          <FontAwesomeIcon icon={faChartLine} />
          DashBoard
        </Button>
        <Button>
          <FontAwesomeIcon icon={faUserGroup} />
          Employees
        </Button>
        <Button>
          <FontAwesomeIcon icon={faTableList} size="lg" />
          Projects
        </Button>
        <Button>
          <FontAwesomeIcon icon={faSitemap} />
          Departments
        </Button>
        <Button>
          <FontAwesomeIcon icon={faUserSecret} size="lg" />
          Clients
        </Button>
        <Button>
          <FontAwesomeIcon icon={faLaptop} />
          Devices
        </Button>
        <Button>
          <FontAwesomeIcon icon={faCalendarDays} size="lg" />
          Calender
        </Button>
        <Button>
          <FontAwesomeIcon icon={faUmbrellaBeach} />
          Leaves
        </Button>
        <Button>
          <FontAwesomeIcon icon={faFileInvoiceDollar} size="lg" />
          Inovices
        </Button>
        <Button>
          <FontAwesomeIcon icon={faFileLines} size="lg" />
          Reports
        </Button>
      </div>
    </>
  );
}

export default Sidebar;
