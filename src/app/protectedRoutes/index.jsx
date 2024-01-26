import { Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../providers/contextProvider";
import { useEffect } from "react";

const PrivateRoutes = () => {
  const { contextValue } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to "/" if userName is falsy
    if (!contextValue?.userName) {
      navigate("/");
    }
  }, [contextValue, navigate]);

  return contextValue?.userName ? <Outlet /> : null;
};
export default PrivateRoutes;
