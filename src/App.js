import { Box, useColorMode, Button } from "@chakra-ui/react";
import "assets/css/App.css";
// Custom Components
import Navbar from "components/navbar/Navbar";
import MainLayout from "layouts/Main.js";
import Footer from "components/footer/Footer";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Navbar />
      <MainLayout />
      <Footer />
    </Box>
  );
}

export default App;
