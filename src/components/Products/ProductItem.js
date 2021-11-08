import { Box, Flex, Icon, Image, Tag, Text } from "@chakra-ui/react";
// Custom Components
import Card from "components/card/Card";
import CardBody from "components/card/CardBody";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const ProductItem = ({
  image,
  tag,
  price,
  title,
  category,
  path,
  downloads,
  date,
}) => {
  return (
    <NavLink to={path}>
      <Card>
        <CardBody>
          <Flex direction='column' w='100%'>
            <Box w='100%' mb='30px'>
              <Image src={image} w='100%' h='100%' borderRadius='24px' />
            </Box>
            <Flex
              justify='space-between'
              align='center'
              w='100%'
              mb='10px'
              p='0px 12px 0px 12px'>
              <Flex align='center'>
                <Tag
                  color='brand.300'
                  bg='#ECE9FF'
                  borderRadius='30px'
                  me='12px'
                  p='7px 14px'>
                  {tag}
                </Tag>
              </Flex>
              <Tag
                bg={price === 0 ? "#5AC39B" : "brand.300"}
                color='#fff'
                borderRadius='30px'
                p='7px 14px'>
                {price === 0 ? "FREE" : `from $${price}`}
              </Tag>
            </Flex>
            <Flex
              direction='column'
              p='0px 12px 0px 12px'
              alignSelf='flex-start'>
              <Text color='brand.700' fontSize='22px' fontWeight='500' mb='5px'>
                {title}
              </Text>
              <Text
                color='#878CBD'
                fontWeight='400'
                fontSize='sm'
                alignSelf='flex-start'>
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
