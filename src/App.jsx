import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Employees from "./Employees";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex bg-[#EBEBEB] h-[924px] w-[1920px]">
          <Sidebar />
          <div>
            <Navbar />
            <div className="ml-[41px] mr-[38px]">
              <Employees />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
