import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-blue-500">This is an ERP web application</div>
      <div>{count}</div>
      <button
        className="bg-red-500 rounded-md border-2 p-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </>
  );
}

export default App;
