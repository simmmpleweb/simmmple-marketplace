import Apps from "pages/Apps.jsx";
import Bundles from "pages/Bundles";
import Home from "pages/Home.jsx";
import PrivacyPolicy from "pages/PrivacyPolicy";
import Licenses from "pages/Licenses";
import TermsConditions from "pages/TermsConditions";
import Product from "pages/Product";
import Affiliates from "pages/Affiliates";
import Contact from "pages/Contact.jsx";
import Templates from "pages/Templates";
import AboutUs from "pages/AboutUs";
import Page404 from "pages/Page404";
import Search from "pages/Search";

const routes = [
  {
    name: "Home page",
    path: "/",
    exact: true,
    secondary: false,
    component: Home,
  },
  {
    name: "Product Page",
    path: "/product/:productName",
    exact: false,
    secondary: true,
    component: Product,
  },
  {
    name: "Templates Page",
    path: "/templates/:templateName",
    exact: false,
    secondary: false,
    component: Templates,
  },
  {
    name: "Apps and Plugins",
    path: "/apps",
    exact: false,
    secondary: true,
    component: Apps,
  },
  {
    name: "Bundles Page",
    path: "/bundles",
    exact: false,
    secondary: false,
    component: Bundles,
  },
  {
    name: "Contact & Support - General Contact",
    path: "/contact",
    exact: false,
    secondary: true,
    component: Contact,
  },
  {
    name: "Licenses",
    path: "/licenses",
    exact: false,
    secondary: true,
    component: Licenses,
  },
  {
    name: "Terms & Conditions",
    path: "/terms-of-service",
    exact: false,
    secondary: true,
    component: TermsConditions,
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
    exact: false,
    secondary: true,
    component: PrivacyPolicy,
  },
  {
    name: "Affiliates",
    path: "/affiliates",
    exact: false,
    secondary: true,
    component: Affiliates,
  },
  {
    name: "AboutUs",
    path: "/about",
    exact: false,
    secondary: true,
    component: AboutUs,
  },
  {
    name: "404",
    path: "/404",
    exact: false,
    secondary: true,
    component: Page404,
  },
  {
    name: "Search",
    path: "/search/:userInput",
    exact: false,
    secondary: false,
    component: Search,
  },
];

export default routes;
