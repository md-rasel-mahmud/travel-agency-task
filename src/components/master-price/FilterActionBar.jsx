import Button from "../Button";
import Inputs from "../Inputs";

const FilterActionBar = () => {
  const extraOptionInputs = [
    {
      id: "extra-option",
      label: "Extra Option",
      type: "checkbox",
      name: "extraOption",
      defaultValue: "",
    },
  ];

  const environmentInputs = [
    {
      id: "dummy",
      label: "Dummy",
      type: "radio",
      name: "environment",
      defaultValue: "DUMMY",
    },
    {
      id: "pdt",
      defaultValue: "PDT",
      label: "PDT",
      type: "radio",
      name: "environment",
    },
  ];

  return (
    <div className="flex gap-2 items-center justify-between flex-wrap py-3  border-b border-blue-500">
      <div className="flex items-center">
        {/* EXTRA OPTION CHECKBOX */}
        <Inputs inputData={extraOptionInputs} />
      </div>

      <div className="flex gap-3 font-bold">
        <h4 className="text-md ">Environment</h4>
        {/* ENVIRONMENT RADIO INPUTS */}
        <Inputs inputData={environmentInputs} />
      </div>

      <Button type="submit">Submit</Button>
    </div>
  );
};

export default FilterActionBar;
