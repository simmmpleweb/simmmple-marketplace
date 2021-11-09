import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, LightMode } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <LightMode>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </LightMode>
  </ChakraProvider>,
  document.getElementById("root")
);
