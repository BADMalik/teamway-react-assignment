import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
const Layout = ({ children, props }) => {
  return (
    <>
      {<Navbar />}
      {children}
    </>
  );
};

export default Layout;
