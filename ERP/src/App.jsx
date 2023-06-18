import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <div className="flex bg-[#EBEBEB] h-[924px] w-[1920px]">
        <Sidebar />
        <Navbar />
      </div>
    </>
  );
}

export default App;
