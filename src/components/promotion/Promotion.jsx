import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Promotion = () => {
  return (
    <Flex
      w='100%'
      px={{ base: "20px", md: "20px", lg: "0px" }}
      justify='center'
      align='center'
      bg='linear-gradient(0deg, #422AFB, #422AFB),
  linear-gradient(79.89deg, #542AFB 39.09%, #BD31FF 94.7%)'>
      <Flex h={{ base: "100px", md: "80px" }} justify='center' align='center'>
        <Text fontWeight='500' fontSize='sm' color='white' me='20px'>
          Exclusive Digital Bundle is here 🔥
          <Text fontWeight='700' as='span' ms='0.5px'>
            Save up to 80% OFF to all Premium Coded & Design Products
          </Text>
        </Text>
        <Button
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
  );
};

export default Promotion;
