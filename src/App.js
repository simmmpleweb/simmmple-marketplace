import { Box, useColorMode, ChakraProvider, LightMode } from "@chakra-ui/react";
import "assets/css/App.css";
// Custom Components
import MainLayout from "layouts/main.js";
import ScrollToTop from "components/scroll/ScrollToTop";
import theme from "./theme/theme";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  setTimeout(() => toggleColorMode, 50);
  return (
    <ChakraProvider theme={theme}>
      <LightMode>
        <Box overflowX='hidden' maxW='100%'>
          <ScrollToTop>
            <MainLayout />
          </ScrollToTop>
        </Box>
      </LightMode>
    </ChakraProvider>
  );
}

export default App;
