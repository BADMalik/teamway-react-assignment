import React, { useContext } from "react";
import { AppContext } from "../Providers/contextProvider";
import { useNavigation } from "react-router-dom";
import { ROOT } from "../router/constant/ROUTE";

const TestScreen = () => {
  const { contextValue } = useContext(AppContext);

  return <div>TestScreen</div>;
};

export default TestScreen;
