import { Box } from "@chakra-ui/react";
import "assets/css/App.css";
// Custom Components
import MainLayout from "layouts/main.js";
import ScrollToTop from "components/scroll/ScrollToTop";

function App() {
  return (
    <Box overflowX='hidden' maxW='100%'>
      <ScrollToTop>
        <MainLayout />
      </ScrollToTop>
    </Box>
  );
}

export default App;
