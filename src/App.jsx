import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Projects from "./pages/Projects.page";
import Employees from "./Employees";
import Department from "./pages/Department.page";
import Dashboard from "./pages/Dashboard.page";
import ErrorPage from "./pages/ErrorPage.page";
import Clients from "./pages/Clients.page";
import Devices from "./pages/Devices.page";
import Calender from "./pages/Calender.page";
import Leaves from "./pages/Leaves.page";
import Inovices from "./pages/Inovices.page";
import Reports from "./pages/Reports.page";
import { Routes, Route } from "react-router-dom";
import EmployeeDetail from "./pages/EmployeeDetail.page";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex h-[924px] w-[1920px] bg-[#EBEBEB]">
          <Sidebar />
          <div>
            <Navbar />

            <div className="ml-[41px] mr-[38px] mt-[21px]">
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="employee" element={<Employees />} />
                <Route path="employee/:id/" element={<EmployeeDetail />} />
                <Route path="projects" element={<Projects />} />
                <Route path="department" element={<Department />} />
                <Route path="clients" element={<Clients />} />
                <Route path="devices" element={<Devices />} />
                <Route path="calender" element={<Calender />} />
                <Route path="leaves" element={<Leaves />} />
                <Route path="inovices" element={<Inovices />} />
                <Route path="reports" element={<Reports />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
