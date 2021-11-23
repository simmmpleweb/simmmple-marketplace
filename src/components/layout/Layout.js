import { Box } from "@chakra-ui/react";
import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import PromotionBF from "components/promotion/PromotionBF";
import React from "react";

const Layout = (props) => {
  return (
    <Box overflowX='hidden' maxW='100%'>
      <PromotionBF />
      <Navbar />
      {props.children}
      <Footer />
    </Box>
  );
};

export default Layout;
