import { Button, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React from "react";

const Promotion = () => {
  return (
    <NavLink to='/black-friday'>
      <Flex
        w='100%'
        px={{ base: "20px", md: "20px", lg: "0px" }}
        justify='center'
        align='center'
        bg='linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)'>
        <Flex h={{ base: "100px", md: "80px" }} justify='center' align='center'>
          <Text
            textAlign='center'
            fontWeight='500'
            fontSize='sm'
            color='white'
            me={{ base: "0px", md: "20px" }}>
            BLACK FRIDAY SALE 🔥
            <Text fontWeight='700' as='span' ms='0.5px'>
              Save up to 80% OFF to all Premium Coded & Design Products
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
    </NavLink>
  );
};

export default Promotion;
