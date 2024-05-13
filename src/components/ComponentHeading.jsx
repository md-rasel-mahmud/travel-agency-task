import PropType from "prop-types";

/**
 * @param {string} heading
 * @returns {JSX.Element}
 * @constructor
 * @description ComponentHeading component to render heading
 * @example
 * <ComponentHeading heading="Demo Component" />
 **/
const ComponentHeading = ({ heading }) => {
  return (
    <h2 className="text-2xl font-bold capitalize border-b pb-1 my-2">
      {heading}
    </h2>
  );
};

ComponentHeading.propTypes = {
  heading: PropType.string.isRequired,
};

export default ComponentHeading;
