import { useParams } from "react-router";
import { data } from "../data";

function EmployeeDetail() {
  const empId = useParams();
  const detail = data.find((emp) => emp.id === empId.id);

  console.log(detail);
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
