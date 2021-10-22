import React from "react";
import { Tag, Flex, Box, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

// Custom Components
import Card from "components/card/Card";
import CardBody from "components/card/CardBody";

const ProductItem = ({ image, tag, price, title, category, path }) => {
  return (
    <NavLink to={path}>
      <Card>
        <CardBody>
          <Flex direction='column' w='100%'>
            <Box w='100%' h='230px' borderRadius='24px' mb='30px'>
              <Image src={image} w='100%' h='100%' />
            </Box>
            <Flex
              justify='space-between'
              align='center'
              w='100%'
              mb='10px'
              p='0px 12px 0px 12px'>
              <Tag
                color='brand.300'
                bg='#ECE9FF'
                borderRadius='30px'
                p='7px 14px'>
                {tag}
              </Tag>
              <Tag
                bg={price === "FREE" ? "#5AC39B" : "brand.300"}
                color='#fff'
                borderRadius='30px'
                p='7px 14px'>
                {price}
              </Tag>
            </Flex>
            <Flex direction='column' p='0px 12px 0px 12px' alignSelf="flex-start">
              <Text color='brand.700' fontSize='22px' fontWeight='500' mb='5px'>
                {title}
              </Text>
              <Text color='#878CBD' fontWeight='400' fontSize='sm' alignSelf="flex-start">
                Category: {category}
              </Text>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </NavLink>
  );
};

export default ProductItem;
