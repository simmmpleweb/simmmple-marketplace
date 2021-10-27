import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import Promotion from "components/promotion/Promotion";
import React from "react";

const Layout = (props) => {
  return (
    <>
      <Promotion />
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
