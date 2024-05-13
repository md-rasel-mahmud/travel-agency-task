import PropTypes from "prop-types";
import { Fragment } from "react";

/**
 * @param {Array} cell
 * @param {Array} keys
 * @param {Node | string} divider
 * @returns {JSX.Element}
 * @constructor
 * @description MultipleCell component to render multiple cell with divider
 * @example
 * const cell = [
 * { name: 'John Doe', email: 'demo@mail.com' },
 * ]
 * const keys = ['name', 'email']
 * <MultipleCell cell={cell} keys={keys} divider="," />
 **/
const MultipleCell = ({ cell, keys, divider }) => {
  return (
    <div>
      {cell.map((item, index) => (
        <p key={index}>
          {typeof item === "string" // <- CHECK IF ITEM IS STRING
            ? item
            : keys?.map((key, keyIndex) => (
                <Fragment key={keyIndex}>
                  {item[key]} {/* <- DISPLAY ITEM ACCORDING TO KEY */}
                  {cell.length - 1 !== keyIndex && divider}{" "}
                  {/* ADD DIVIDER IF NOT LAST ITEM */}
                </Fragment>
              ))}
        </p>
      ))}
    </div>
  );
};

MultipleCell.propTypes = {
  cell: PropTypes.array.isRequired,
  keys: PropTypes.array,
  divider: PropTypes.node || PropTypes.string,
};

export default MultipleCell;
