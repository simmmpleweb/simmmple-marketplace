import { extendTheme } from "@chakra-ui/react";
import { CardComponent } from "./additions/card/Card";
import { CardBodyComponent } from "./additions/card/CardBody";
import { CardHeaderComponent } from "./additions/card/CardHeader";
import { buttonStyles } from "./components/button";
import { breakpoints } from "./foundations/breakpoints";
import { globalStyles } from "./styles";
// import { mode } from "@chakra-ui/theme-tools";
export default extendTheme(
  { breakpoints }, // Breakpoints
  globalStyles,
  buttonStyles, // Button styles
  CardComponent, // Card component
  CardBodyComponent, // Card Body component
  CardHeaderComponent, // Card Header component
);