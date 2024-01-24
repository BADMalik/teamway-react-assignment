import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
const Layout = ({ children, props }) => {
  const isLoggedIn = !!localStorage.getItem("loginUser");
  console.log({ props });
  return (
    <>
      {!isLoggedIn && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
