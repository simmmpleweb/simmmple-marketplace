import { Box, Flex, Image, Tag, Text } from "@chakra-ui/react";
// Custom Components
import Card from "components/card/Card";
import CardBody from "components/card/CardBody";
import React, { useRef } from "react";
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
  const imageRef = useRef(<div></div>);

  return (
    <NavLink to={path}>
      <Card
        onMouseEnter={() => {
          imageRef.current.style.transform =
            "translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1.1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
        }}
        onMouseLeave={() => {
          imageRef.current.style.transform =
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
        }}>
        <CardBody>
          <Flex direction='column' w='100%'>
            <Box w='100%' mb='30px' overflow='hidden' borderRadius='24px'>
              <Image
                ref={imageRef}
                src={image}
                w='100%'
                h='100%'
                objectFit='cover'
                transform='translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                transition='all .25s ease'
              />
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
              <Text
                color='brand.700'
                fontSize='22px'
                fontWeight='500'
                textAlign='start'
                mb='5px'>
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
