import React from "react";
import PropTypes from "prop-types";
import "./page.scss";

const Page: React.FC<any> = ({ children }) => (
  <main className="page">{children}</main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(Page);
