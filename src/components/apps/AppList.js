import React from "react";
import { Grid, } from "@chakra-ui/react";

// Custom Components
import AppItem from "components/apps/AppItem";

const AppList = ({ apps }) => {
  return (
    <Grid templateColumns={{
      base: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
    }} gap="22px">
      {apps.map(({ ...otherAppProps }, index) => {
        return <AppItem key={index} {...otherAppProps} />;
      })}
    </Grid>
  );
};

export default AppList;
