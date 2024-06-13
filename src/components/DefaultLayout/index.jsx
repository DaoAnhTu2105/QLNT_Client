import PropTypes from "prop-types";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <div style={{ height: "90vh" }}>{children}</div>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
