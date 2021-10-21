import React from "react";
import { Flex } from "@chakra-ui/react";
import homeBg from "assets/img/homepage/home-background.png";

const Contact = () => {
  return (
    <Flex
      minH='600px'
      bg='#333'
      bgImage={homeBg}
      bgSize='cover'
      bgPosition='center'>
      Contact
    </Flex>
  );
};
export default Contact;
