import { redirect, Route, Routes } from "react-router-dom";

import Page from "../middleware/Page";

export default function generateRoutesFromConfig(config) {
  console.log({ config });
  return (
    <Routes>
      {config.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          Component={() => <Page route={route} />}
        />
      ))}
    </Routes>
  );
}
