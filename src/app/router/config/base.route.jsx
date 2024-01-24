import { lazy } from "react";

import { APP, ROOT } from "../constant/ROUTE";

// const Layout = lazy(() => import("../../layout/Layout"));
import Layout from "../../layout/Layout";

function getRouteConfigs() {
  return [
    {
      meta: {
        title: "Home Page",
      },
      path: ROOT,
      requireAuth: false,
      element: <Layout d={"D"} />,
      exact: true,
    },

    // {
    //   path: "*",
    //   redirect: ROOT,
    // },
  ];
}

export default getRouteConfigs;
