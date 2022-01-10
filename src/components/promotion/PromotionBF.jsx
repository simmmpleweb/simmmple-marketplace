import { Button, Flex, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React from "react";

const Promotion = () => {
  return (
    <Link href="https://discord.gg/5hGCbqaN">
      <Flex
        w='100%'
        px={{ base: "20px", md: "20px", lg: "0px" }}
        justify='center'
        align='center'
        bg='linear-gradient(108.54deg, #FF416C 6.56%, #FF4B2B 95.2%)'>
        <Flex h={{ base: "100px", md: "80px" }} justify='center' align='center'>
          <Text
            textAlign='center'
            fontWeight='500'
            fontSize='sm'
            color='white'
            me={{ base: "0px", md: "20px" }}>
            We launched the official community server! 
            <Text fontWeight='700' as='span' ms='4px'>
            Join Simmmple’s Discord Community now!
            </Text>
          </Text>
          <Button
            display={{ base: "none", lg: "flex" }}
            minW='110px'
            bg='rgba(255,255,255,0.15)'
            color='white'
            _hover={{ bg: "rgba(255,255,255,0.1)" }}
            _active={{ bg: "rgba(255,255,255,0.2)" }}
            fontWeight='500'>
            Learn more
          </Button>
        </Flex>
      </Flex>
    </Link>
  );
};

export default Promotion;
