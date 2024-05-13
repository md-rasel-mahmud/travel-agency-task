import Button from "../Button";

const FilterActionBar = () => {
  return (
    <div className="flex gap-2 items-center justify-between flex-wrap py-3  border-b border-blue-500">
      <div className="flex items-center">
        <input
          id="extra-option"
          type="checkbox"
          name="extraOption"
          defaultValue=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded outline-blue-500 "
        />
        <label
          htmlFor="extra-option"
          className="ms-2 text-sm text-gray-900 font-bold"
        >
          Extra Option
        </label>
      </div>

      <div className="flex gap-3 font-bold">
        <h4 className="text-md ">Environment</h4>
        <div className="flex items-center">
          <input
            id="dummy"
            type="radio"
            defaultValue="DUMMY"
            name="environment"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
          />
          <label htmlFor="dummy" className="ms-2 text-sm text-gray-900 ">
            Dummy
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="pdt"
            type="radio"
            defaultValue="PDT"
            name="environment"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
          />
          <label htmlFor="pdt" className="ms-2 text-sm text-gray-900 ">
            PDT
          </label>
        </div>
      </div>

      <Button type="submit">Submit</Button>
    </div>
  );
};

export default FilterActionBar;
