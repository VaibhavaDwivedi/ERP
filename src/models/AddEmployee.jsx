import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function AddEmployee({ closeAddEmployee }) {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-[#E9E9E9] opacity-[70%]"></div>
      <div className="fixed left-[50%] top-[50%] h-[746px] w-[800px] translate-x-[-50%] translate-y-[-50%] bg-white">
        <div className="mx-[30px] mt-[27px]">
          <div className=" flex h-[31px] w-[741px] items-center gap-[556px]">
            <h3 className="font-poppins text-[22px] font-semibold">
              Add Employee
            </h3>
            <FontAwesomeIcon
              className="cursor-pointer"
              onClick={closeAddEmployee}
              icon={faCircleXmark}
              size="xl"
            />
          </div>
          <div className="mt-[17px] flex gap-[40px]">
            <div className="h-[71px] w-[350px] bg-red-300">First Name</div>
            <div className="h-[71px] w-[350px] bg-red-300">Second Name</div>
          </div>
          <div className="mt-[11px] h-[71px] w-[740px] bg-green-300">
            Personal Email
          </div>
          <div className="mt-[11px] h-[71px] w-[740px] bg-blue-300">
            Company Email
          </div>
          <div className="mt-[17px] flex gap-[40px]">
            <div className="h-[71px] w-[350px] bg-red-300">
              Phone Number
              <sup className="text-[16px] font-medium text-red-800">*</sup>
            </div>
            <div className="h-[71px] w-[350px] bg-red-300">Gender</div>
          </div>
          <div className="mt-[17px] flex gap-[40px]">
            <div className="h-[71px] w-[350px] bg-red-300">Joining Date</div>
            <div className="h-[71px] w-[350px] bg-red-300">Rollover Date</div>
          </div>
          <div className="mt-[17px] flex gap-[40px]">
            <div className="h-[71px] w-[350px] bg-red-300">Department</div>
            <div className="h-[71px] w-[350px] bg-red-300">Role</div>
          </div>
          <div className="mr-[420px] mt-[55px] h-[23px] w-[349px] bg-yellow-300">
            Invite to discord radio button{" "}
          </div>
          <div className="mr-[420px] mt-[17px] h-[23px] w-[349px] bg-orange-300">
            Invite to discord radio button{" "}
          </div>
          <div className="ml-[515px] h-[50px] w-[225px] bg-red-300">
            <Button onClick={closeAddEmployee}>close</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEmployee;
