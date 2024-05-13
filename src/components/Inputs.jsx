import { Fragment } from "react";
import PropTypes from "prop-types";

/**
 *
 * @description A component that generates input fields based on the input data passed to it.
 * @param {inputData} inputData - An array of objects that contain the input fields' data.
 * @returns {JSX.Element} - An array of input fields.
 **/
const Inputs = ({ inputData }) => {
  // THE inputData PROP IS AN ARRAY OF OBJECTS THAT CONTAIN THE INPUT FIELDS' DATA.
  return inputData.reduce((acc, input, index) => {
    if (input.type === "select") {
      acc.push(
        <select
          key={index}
          name={input.name}
          placeholder={input.placeholder}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 w-${
            input.width ? input.width : "36"
          } p-2.5 outline-blue-500 ${input.className ? input.className : ""}`}
        >
          {input.options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    } else if (input.type === "component") {
      acc.push(<Fragment key={index}>{input.component}</Fragment>);
    } else if (input.type === "radio") {
      acc.push(
        <div key={index} className="flex items-center">
          <input
            id={input.id}
            type={input.type}
            defaultValue={input.defaultValue}
            name={input.name}
            defaultChecked={input.defaultChecked}
            className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 ${
              input.className ? input.className : ""
            }`}
          />
          <label
            htmlFor={input.id}
            className={`ms-2 text-sm text-gray-900 ${
              input.labelClassName ? input.labelClassName : ""
            }`}
          >
            {input.label}
          </label>
        </div>
      );
    } else if (input.type === "checkbox") {
      acc.push(
        <div key={index} className="flex items-center">
          <input
            id={input.id}
            type={input.type}
            name={input.name}
            defaultValue={input.defaultValue}
            className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded outline-blue-500 ${
              input.className ? input.className : ""
            }`}
          />
          <label
            htmlFor={input.id}
            className={`ms-2 text-sm text-gray-900 font-bold ${
              input.labelClassName ? input.labelClassName : ""
            }`}
          >
            {input.label}
          </label>
        </div>
      );
    } else {
      acc.push(
        <input
          key={index}
          type={input.type}
          placeholder={input.placeholder}
          defaultValue={input.defaultValue}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-${
            input.width ? input.width : "36"
          } p-2.5 outline-blue-500 ${input.className ? input.className : ""}`}
          name={input.name}
        />
      );
    }

    return acc;
  }, []);
};

Inputs.propTypes = {
  inputData: PropTypes.array.isRequired,
};

export default Inputs;
