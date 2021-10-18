import { Route, Switch } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "pages/Home";
import "assets/css/App.css";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";

function App() {
  return (
    <Box overflowX="hidden">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Box>
  );
}

export default App;
