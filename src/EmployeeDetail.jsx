import { useParams } from "react-router";
import { data } from "./data";
// import { useEffect, useState } from "react";
import showDetail from "./function";

function EmployeeDetail() {
  let { id } = useParams();
  const detail = showDetail(id, data);

  return (
    <>
      <div className="flex ">
        <div className="aspect-square w-80 flex-1 object-cover">
          <img className="w-[50vh]" src={detail.imageUrl} />
        </div>
        <div className="w-[50vh]">
          <h1>name: {detail.name}</h1>
          <p>Mail id: {detail.email}</p>
        </div>
      </div>
    </>
  );
}

export default EmployeeDetail;

// const [detail, setDetail] = useState({});

// useEffect(() => {
//   for (var i = 0; i < data.length; i++) {
//     if (data[i].id === id) {
//       setDetail(data[id]);
//       console.log("for data", data[i], setDetail);
//     }
//   }
// }, [id]);
// console.log("detail id", id);  //another way to get the data on passing id
