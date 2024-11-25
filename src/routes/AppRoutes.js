import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";
import BlogsIndex from "../components/Blogs";
import { NAVIGATION_ROUTE } from "../constants";
import ContactUsPage from "../pages/ContactUsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={NAVIGATION_ROUTE.homepage} element={<HomePage />}></Route>
      <Route
        path={`${NAVIGATION_ROUTE.blogs}/:slug`}
        element={<BlogsIndex />}
      ></Route>
      <Route
        path={`${NAVIGATION_ROUTE.contactUs}`}
        element={<ContactUsPage />}
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
