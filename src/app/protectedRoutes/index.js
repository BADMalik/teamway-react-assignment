import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { ROOT } from "../router/constant/ROUTE";
import { useContext, useEffect } from "react";
import { AppContext } from "../Providers/contextProvider";

const PrivateRoutes = ({ children }) => {
  const { contextValue } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Use useEffect to call navigate after the component has mounted
    if (!contextValue?.userName) {
      navigate(ROOT);
    }
  }, [contextValue, navigate]); // Include contextValue and navigate in the dependencies array

  return contextValue?.userName
    ? // Render the children if the user is authenticated
      children
    : null; // Return null if not authenticated, as you've already navigated
};
export default PrivateRoutes;
