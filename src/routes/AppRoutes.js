import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";
import Blogs from "../components/Blogs/blogs";
import SingleBlog from "../components/Blogs/singleBlog";
import { NAVIGATION_ROUTE } from "../constants";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={NAVIGATION_ROUTE.homepage} element={<HomePage />}></Route>
      <Route path={NAVIGATION_ROUTE.blogs} element={<Blogs />}></Route>
      <Route
        path={NAVIGATION_ROUTE.singleBlog}
        element={<SingleBlog />}
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
