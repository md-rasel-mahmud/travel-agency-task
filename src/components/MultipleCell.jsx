import PropTypes from "prop-types";
import { Fragment } from "react";

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
