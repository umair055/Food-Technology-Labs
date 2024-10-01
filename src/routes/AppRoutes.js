import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";
import BlogsIndex from "../components/Blogs";
import { NAVIGATION_ROUTE } from "../constants";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={NAVIGATION_ROUTE.homepage} element={<HomePage />}></Route>
      <Route
        path={`${NAVIGATION_ROUTE.blogs}/:slug`}
        element={<BlogsIndex />}
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
