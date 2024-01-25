import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Providers/contextProvider";

const PrivateRoutes = () => {
  const { contextValue } = useContext(AppContext);
  return <Outlet />;
  return contextValue?.userName ? <Outlet /> : null;
};
export default PrivateRoutes;
