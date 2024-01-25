import { useReducer } from "react";
import "./App.css";
import getRouteConfigs from "./app/router/config/base.route";
import generateRoutesFromConfig from "./app/router/utils/generateRoutesFromConfig";
import Layout from "./app/layout/Layout";
import Home from "./app/pages/home";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./app/Providers/contextProvider";
import { initialContextState } from "./app/actions/questionActions";
import { questionReducer } from "./app/reducers/questionReducer/questionsReducer";
import TestScreen from "./app/pages/testScreen";
import PrivateRoutes from "./app/protectedRoutes";

const App = () => {
  const [contextValue, setContextValue] = useReducer(
    questionReducer,
    initialContextState
  );
  // const configs = useMemo(getRouteConfigs, []);
  // return generateRoutesFromConfig(configs);
  return (
    <AppContext.Provider value={{ contextValue, setContextValue }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/test-screen" element={<TestScreen />} />
          </Route>
        </Routes>
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
