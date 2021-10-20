// import Apps from "../src/pages/Apps.jsx";
// import Blog from "../src/pages/Blog.jsx";
// import Bundles from "../src/pages/Bundles";
// import Home from "../src/pages/Home.jsx";
// import Contact from "../src/pages/Support/Contact.jsx";
// import Others from "../src/pages/Support/Others.jsx";
// import Partnerships from "../src/pages/Support/Partnerships.jsx";
// import SubmissionReceived from "../src/pages/Support/SubmissionReceived.jsx";
// import SupportPage from "../src/pages/Support/SupportPage.jsx";

import Apps from "../src/pages/Apps.jsx";
import Blog from "../src/pages/Blog.jsx";
import Bundles from "../src/pages/Bundles";
import Home from "../src/pages/Home.jsx";
import Contact from "../src/pages/Support/Contact.jsx";
import Others from "../src/pages/Support/Others.jsx";
import Partnerships from "../src/pages/Support/Partnerships.jsx";
import SubmissionReceived from "../src/pages/Support/SubmissionReceived.jsx";
import SupportPage from "../src/pages/Support/SupportPage.jsx";
const routes = [
  {
    name: "Homepage",
    path: "/homepage",
    secondary: false,
    component: Home,
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
];

export default routes;
