import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Employees from "./Employees";
import Department from "./Department";
import Dashboard from "./Dashboard";
import ErrorPage from "./ErrorPage";
import Clients from "./Clients";
import Devices from "./Devices";
import Calender from "./Calender";
import Leaves from "./Leaves";
import Inovices from "./Inovices";
import Reports from "./Reports";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex bg-[#EBEBEB] h-[924px] w-[1920px]">
          <Sidebar />
          <div>
            <Navbar />

            <div className="ml-[41px] mr-[38px] mt-[21px]">
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="employee" element={<Employees />} />
                <Route path="projects" element={<Projects />} />
                <Route path="department" element={<Department />} />
                <Route path="clients" element={<Clients />} />
                <Route path="devices" element={<Devices />} />
                <Route path="calender" element={<Calender />} />
                <Route path="leaves" element={<Leaves />} />
                <Route path="inovices" element={<Inovices />} />
                <Route path="reports" element={<Reports />} />
                <Route path="*" element={<ErrorPage />} />
                {/* <Route path="" element={}/>
                <Route path="" element={}/>
                <Route path="" element={}/> */}
              </Routes>
              {/* <Employees /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
