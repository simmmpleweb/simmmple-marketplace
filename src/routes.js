import Apps from "pages/Apps.jsx";
import Blog from "pages/Blog.jsx";
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
    path: "/homepage",
    secondary: false,
    component: Home,
  },
  {
    name: "Product Page",
    path: "/product/:productName",
    secondary: true,
    component: Product,
  },
  {
    name: "Templates Page",
    path: "/templates/:templateName",
    secondary: false,
    component: Templates,
  },
  {
    name: "Apps and Plugins",
    path: "/apps",
    secondary: true,
    component: Apps,
  },
  {
    name: "Bundles Page",
    path: "/bundles",
    secondary: false,
    component: Bundles,
  },
  {
    name: "Blog / Tutorials",
    path: "/blog",
    secondary: true,
    component: Blog,
  },
  {
    name: "Contact & Support - General Contact",
    path: "/contact",
    secondary: true,
    component: Contact,
  },
  // {
  //   name: "Contact & Support - Others",
  //   path: "/support/others",
  //   secondary: true,
  //   component: Others,
  // },
  // {
  //   name: "Contact & Support - Support",
  //   path: "/support/support-page",
  //   secondary: true,
  //   component: SupportPage,
  // },
  // {
  //   name: "Contact & Support - Partnerships",
  //   path: "/support/partnerships",
  //   secondary: true,
  //   component: Partnerships,
  // },
  // {
  //   name: "Contact & Support - Submission Received",
  //   path: "/support/received",
  //   secondary: true,
  //   component: SubmissionReceived,
  // },
  {
    name: "Licenses",
    path: "/licenses",
    secondary: true,
    component: Licenses,
  },
  {
    name: "Terms & Conditions",
    path: "/terms-of-service",
    secondary: true,
    component: TermsConditions,
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
    secondary: true,
    component: PrivacyPolicy,
  },
  {
    name: "Affiliates",
    path: "/affiliates",
    secondary: true,
    component: Affiliates,
  },
  {
    name: "AboutUs",
    path: "/about",
    secondary: true,
    component: AboutUs,
  },
  {
    name: "404",
    path: "/404",
    secondary: true,
    component: Page404,
  },
    {
    name: "Search",
    path: "/search",
    secondary: false,
    component: Search
  }
];

export default routes;
