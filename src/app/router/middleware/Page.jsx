import { redirect } from "react-router-dom";

import { ValidateAuthState } from "../../utils/auth/validateRoute";
import { ROOT } from "../constant/ROUTE";
import { useAppContext } from "../../Providers/contextProvider";
const Page = ({ route }) => {
  const { contextValue } = useAppContext();

  useEffect(() => {
    document.title = route?.meta?.title
      ? `${route.meta.title} - Teamway`
      : "Teamway";
  }, [route?.meta?.title]);

  if (route?.meta?.requiresAuth && !contextValue?.userName) {
    // Redirect the user to login screen if no valid access token available
    return redirect(ROOT);
  }

  const next = (newRoute) => {
    if (
      newRoute &&
      (typeof newRoute === "string" || typeof newRoute === "object")
    ) {
      return redirect(newRoute);
    }
    console.log({ element: route?.element });
    return route?.element;
  };
  return next();
};
export default Page;
