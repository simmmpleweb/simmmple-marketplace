import { Box } from "@chakra-ui/react";
import "assets/css/App.css";
// Custom Components
import Navbar from "components/navbar/Navbar";
import MainLayout from "layouts/Main.js";
import Footer from "components/footer/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <MainLayout />
      <Footer />
    </Box>
  );
}

export default App;
