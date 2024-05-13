export const filterFormInputData = [
  {
    type: "text",
    name: "lhr",
    placeholder: "LHR",
  },
  {
    type: "text",
    name: "cdg",
    placeholder: "CDG",
  },
  {
    type: "date",
    name: "departure",
  },
  {
    type: "select",
    name: "dayMinus",
    options: [
      { value: "", label: "Day -" },
      { value: "1", label: "1" },
      { value: "2", label: "2" },
    ],
  },
  {
    type: "select",
    name: "dayPlus",
    options: [
      { value: "", label: "Day +" },
      { value: "1", label: "1" },
      { value: "2", label: "2" },
    ],
  },
  {
    type: "select",
    name: "time",
    width: "40",
    options: [
      { value: "", label: "Any Time" },
      { value: "1.00", label: "1.00" },
      { value: "2.00", label: "2.00" },
    ],
  },
  {
    type: "component",
    component: (
      <button className="font-bold text-xl" onClick={() => console.log("+")}>
        +
      </button>
    ),
  },
  {
    type: "select",
    name: "adt",
    options: [
      { value: "", label: "ADT" },
      { value: "1", label: "1" },
      { value: "2", label: "2" },
    ],
  },
  {
    type: "select",
    name: "passengerCount",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
    ],
  },
  {
    type: "component",
    component: (
      <button className="font-bold text-xl" onClick={() => console.log("+")}>
        +
      </button>
    ),
  },
];
