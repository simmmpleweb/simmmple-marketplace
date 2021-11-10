import React from "react";
import { Flex } from "@chakra-ui/react";

export default function IconBox(props) {
  const { children, ...rest } = props;

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"14px"}
      {...rest}
    >
      {children}
    </Flex>
  );
}