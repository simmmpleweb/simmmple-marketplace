import { Route, Switch } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "pages/Home";
import "assets/css/App.css";
import Footer from "components/Footer/Footer";
import MainLayout from "layouts/main";
import Navbar from "components/Navbar/Navbar";

function App() {
  return (
    <Box overflowX="hidden">
      <Navbar />
      <MainLayout />
      <Footer />
    </Box>
  );
}

export default App;
