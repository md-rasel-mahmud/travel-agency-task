import PropTypes from "prop-types";

/**
 *
 * @param {object} props
 * @param {string} props.type - The type of button.
 * @param {string} props.children - The content of the button.
 * @param {string} props.className - The class name of the button.
 * @param {function} props.onClick - The function to call when the button is clicked. // ! if button type is submit then do not pass onClick
 * @returns {JSX.Element}
 * @example
 * // Example of Submit Button
 * <Button type="submit" className="bg-blue-500">
 * // Example of Button with onClick
 * <Button type="button" onClick={() => alert("Button Clicked")}>
 *
 * **/
const Button = ({ type, children, className, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-6 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
