import { Box, LightMode } from "@chakra-ui/react";
import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import Promotion from "components/promotion/Promotion";
import React from "react";

const Layout = (props) => {
  return (
    <Box overflowX='hidden' maxW='100%'>
      <Promotion />
      <Navbar />
      {props.children}
      <Footer />
    </Box>
  );
};

export default Layout;
