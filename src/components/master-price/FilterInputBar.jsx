import { filterFormInputData } from "../../helpers/master-price/filterFormInputData";
import Inputs from "../Inputs";

const FilterInputBar = () => {
  return (
    <div className="flex gap-2 items-center flex-wrap py-3 mt-5 border-t border-b border-blue-500">
      {/* FILTER FORM INPUT DATA */}
      <Inputs inputData={filterFormInputData} />
    </div>
  );
};

export default FilterInputBar;
