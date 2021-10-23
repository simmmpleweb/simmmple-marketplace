import Apps from "pages/Apps.jsx";
import Blog from "pages/Blog.jsx";
import Bundles from "pages/Bundles";
import Home from "pages/Home.jsx";
import Product from "pages/Product";
import Contact from "pages/support/Contact.jsx";
import Others from "pages/support/Others.jsx";
import Partnerships from "pages/support/Partnerships.jsx";
import SubmissionReceived from "pages/support/SubmissionReceived.jsx";
import SupportPage from "pages/support/SupportPage.jsx";
const routes = [
  {
    name: "Homepage",
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
    name: "Apps and Plugins",
    path: "/apps",
    secondary: false,
    component: Apps,
  },
  {
    name: "Bundles Page",
    path: "/bundles",
    secondary: true,
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
    path: "/support/contact",
    secondary: true,
    component: Contact,
  },
  {
    name: "Contact & Support - Others",
    path: "/support/others",
    secondary: true,
    component: Others,
  },
  {
    name: "Contact & Support - Support",
    path: "/support/support-page",
    secondary: true,
    component: SupportPage,
  },
  {
    name: "Contact & Support - Partnerships",
    path: "/support/partnerships",
    secondary: true,
    component: Partnerships,
  },
  {
    name: "Contact & Support - Submission Received",
    path: "/support/received",
    secondary: true,
    component: SubmissionReceived,
  },
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
];

export default routes;
