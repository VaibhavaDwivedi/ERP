import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Filter({ closeFilter }) {
  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 bg-[#E9E9E9] opacity-[70%]"
        // onClick={closeFilter}
      ></div>
      <div className="fixed left-[50%] top-[50%] h-[512px] w-[550px] translate-x-[-50%] translate-y-[-50%] rounded-[8px] bg-[#FFFFFF] shadow-2xl">
        <div className="mx-[25px] my-[29px]">
          <div className="flex items-baseline">
            <div className="mr-[188px] flex h-[31px] w-[500px] items-baseline">
              <div className="mr-[6px]">
                <FontAwesomeIcon icon={faFilter} size="lg" />
              </div>
              <div className="ml-[6px] font-poppins text-[22px] font-semibold">
                Filters
              </div>
            </div>
            <div className="ml-[188px]">
              <FontAwesomeIcon
                onClick={closeFilter}
                icon={faCircleXmark}
                size="xl"
              />
            </div>
          </div>
          <div className="mr-[379px] mt-[19px] font-poppins text-[16px] font-medium text-[#4B5563]">
            Current Project
          </div>
          <select className="mt-[8px] h-[40px] w-[500px] rounded-[6px] border-[1px] border-[#A19D9D] text-[14px]">
            <option className="text-[#BBBABA]" hidden>
              Select Project
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div className="mr-[466px] mt-[19px] font-poppins text-[16px] font-medium text-[#4B5563]">
            Role
          </div>
          <select className="mt-[6px] h-[40px] w-[500px] rounded-[6px] border-[1px] border-[#A19D9D] text-[14px]">
            <option className="text-[#BBBABA]" hidden>
              Select Role
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div className="mr-[402px] mt-[19px] font-poppins text-[16px] font-medium text-[#4B5563]">
            Department
          </div>
          <select className="mt-[6px] h-[40px] w-[500px] rounded-[6px] border-[1px] border-[#A19D9D] text-[14px]">
            <option className="text-[#BBBABA]" hidden>
              Select Department
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div className="mr-[413px] mt-[19px] font-poppins text-[16px] font-medium text-[#4B5563]">
            Bandwidth
          </div>
          <select className="mt-[6px] h-[40px] w-[500px] rounded-[6px] border-[1px] border-[#A19D9D] text-[14px]">
            <option className="text-[#BBBABA]" hidden>
              Select Bandwidth
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div className="mt-[19px] flex justify-end font-poppins text-[20px]">
            <Button
              onClick={closeFilter}
              className="mr-[12px] rounded-[8px] border-[1px] border-[#1A13CB] bg-white px-[14px] py-[11px] text-center text-[#1A13CB]"
            >
              Cancel
            </Button>
            <Button
              onClick={closeFilter}
              className="ml-[13px] rounded-[8px] bg-[#1A13CB] px-[20px] py-[11px] text-center text-white"
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
//this is a modal component
