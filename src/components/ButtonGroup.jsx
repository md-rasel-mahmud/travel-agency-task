import PropTypes from "prop-types";
import { useState } from "react";

/**
 * @param {Array} buttonData
 * @returns {JSX.Element}
 * @constructor
 * @description ButtonGroup component to render button group
 * @example
 * const buttonData = [
 * { title: 'Round Trip', onClick: () => console.log('Round Trip') },
 * { title: 'One Way', onClick: () => console.log('One Way') },
 * ]
 * <ButtonGroup buttonData={buttonData} />
 **/
const ButtonGroup = ({ buttonData }) => {
  // STATE FOR ACTIVE BUTTON
  const [index, setIndex] = useState(1);

  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        {buttonData.map((button, i) => (
          <button
            key={i}
            type="button"
            className={`px-4 py-1 text-sm font-medium text-gray-900 bg-transparent ${
              // BACKGROUND COLOR AND TEXT COLOR CHANGE ON ACTIVE BUTTON
              i === index ? "bg-blue-900 text-white" : ""
            }  ${
              // BORDER RADIUS AND BORDER CHANGE ON FIRST BUTTON
              i === 0 ? "rounded-s-sm border" : "border-t border-b"
            } ${
              // BORDER RADIUS AND BORDER CHANGE ON LAST BUTTON
              i === buttonData.length - 1
                ? "rounded-e-sm border"
                : "border-t border-b"
            } border-blue-900 hover:bg-blue-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white`}
            // SET INDEX AND CALL BUTTON ONCLICK FUNCTION
            onClick={() => {
              setIndex(i);
              button.onClick();
            }}
          >
            {button.title}
          </button>
        ))}
      </div>
    </div>
  );
};

ButtonGroup.propTypes = {
  buttonData: PropTypes.array.isRequired,
};

export default ButtonGroup;
