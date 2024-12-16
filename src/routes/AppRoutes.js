import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";
import BlogsIndex from "../components/Blogs";
import { NAVIGATION_ROUTE } from "../constants";
import ContactUsPage from "../pages/ContactUsPage";
import DisclaimerPage from "../pages/DisclaimerPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "../pages/TermsAndConditionsPage";
import CookiePolicyPage from "../pages/CookiePolicyPage";
import WriteForUsPage from "../pages/WriteForUsPage";
import AboutUsPage from "../pages/AboutUsPage";
import TermsAndServicePage from "../pages/TermsAndServicesPage";
import ServicesPage from "../pages/ServicesPage";

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
      <Route
        path={`${NAVIGATION_ROUTE.disclaimer}`}
        element={<DisclaimerPage />}
      ></Route>
      <Route
        path={`${NAVIGATION_ROUTE.privacyPolicy}`}
        element={<PrivacyPolicyPage />}
      ></Route>
      <Route
        path={`${NAVIGATION_ROUTE.cookiePolicy}`}
        element={<CookiePolicyPage />}
      ></Route>
      <Route
        path={`${NAVIGATION_ROUTE.termsAndConditions}`}
        element={<TermsAndConditionsPage />}
      ></Route>
      <Route
        path={`${NAVIGATION_ROUTE.writeForUs}`}
        element={<WriteForUsPage />}
      ></Route>
      <Route
        path={`${NAVIGATION_ROUTE.aboutUs}`}
        element={<AboutUsPage />}
      ></Route>
      <Route
        path={`${NAVIGATION_ROUTE.termsAndServices}`}
        element={<TermsAndServicePage />}
      ></Route>
      <Route
        path={`${NAVIGATION_ROUTE.services}`}
        element={<ServicesPage />}
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
