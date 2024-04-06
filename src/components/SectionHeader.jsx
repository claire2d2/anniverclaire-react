import PropTypes from "prop-types";

const SectionHeader = ({ children }) => {
  return (
    <h2 className="font-limelight text-white bg-pink-600 text-3xl py-2">
      {children}
    </h2>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.node, //
};

export default SectionHeader;
