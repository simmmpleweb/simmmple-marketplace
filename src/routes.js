import Apps from "pages/Apps.jsx";
import Blog from "pages/Blog.jsx";
import Bundles from "pages/Bundles";
import Home from "pages/Home.jsx";
import Product from "pages/Product";
import Contact from "pages/Contact.jsx";
import Templates from "pages/Templates";
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
    path: "/contact",
    secondary: true,
    component: Contact,
  },
];

export default routes;
