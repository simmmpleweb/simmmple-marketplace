import { Box } from "@chakra-ui/react";
import "assets/css/App.css";
// Custom Components
import Navbar from "components/navbar/Navbar";
import MainLayout from "layouts/main.js";
import Footer from "components/footer/Footer";

function App() {
  return (
    <Box overflowX='hidden' maxW='100%'>
      <MainLayout />
    </Box>
  );
}

export default App;
