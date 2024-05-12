import PropType from "prop-types";

const ComponentHeading = ({ heading }) => {
  return (
    <h2 className="text-2xl font-bold capitalize border-b pb-1">{heading}</h2>
  );
};

ComponentHeading.propTypes = {
  heading: PropType.string.isRequired,
};

export default ComponentHeading;
