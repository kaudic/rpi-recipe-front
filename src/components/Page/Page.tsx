import React from "react";
import "./page.scss";

const Page: React.FC<any> = ({ children }) => (
  <main className="page">{children}</main>
);


export default React.memo(Page);
