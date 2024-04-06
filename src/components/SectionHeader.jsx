import PropTypes from "prop-types";

const SectionHeader = ({ children }) => {
  return (
    <h2 className="w-full font-limelight text-white bg-blue-800 text-3xl py-2 shadow-lg border border-white">
      {children}
    </h2>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.node, //
};

export default SectionHeader;
