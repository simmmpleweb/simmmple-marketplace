import { extendTheme } from "@chakra-ui/react";
import { CardComponent } from "./additions/card/card";
import { CardBodyComponent } from "./additions/card/CardBody";
import { CardHeaderComponent } from "./additions/card/CardHeader";
import { buttonStyles } from "./components/button";
import { inputStyles } from "./components/input";
import { linkStyles } from "./components/link";
import { breakpoints } from "./foundations/breakpoints";
import { globalStyles } from "./styles";
// import { mode } from "@chakra-ui/theme-tools";
export default extendTheme(
  {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  { breakpoints }, // Breakpoints
  globalStyles,
  buttonStyles, // Button styles
  linkStyles, // Link styles
  inputStyles, // Input styles
  CardComponent, // Card component
  CardBodyComponent, // Card Body component
  CardHeaderComponent // Card Header component
);
