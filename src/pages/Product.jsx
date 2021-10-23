import React from "react";
import { Flex, Text, Grid, Tag, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator, Box, Image, Stack } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";    
import productVenusDBPRO1 from "assets/img/product-venus-db-pro1.png";
import productVenusDBPRO2 from "assets/img/product-venus-db-pro2.png";
import productVenusDBPRO3 from "assets/img/product-venus-db-pro3.png";
import productVenusDBPRO4 from "assets/img/product-venus-db-pro4.png";
import productVenusDBPRO5 from "assets/img/product-venus-db-pro5.png";

const Product = (props) => {
  console.log(props);

  return (
    <Flex bg="#E5E5E5" py="225px">
      <Flex minW="1170px" mx="auto">
        <Flex direction="column">
          <Tag
            color="brand.300"
            bg="#ECE9FF"
            w="90px"
            h="30px"
            fontSize="xs"
            borderRadius="25px"
            p="7px 12px"
            mb="25px"
          >
            Design Tool
          </Tag>
          <Text color="brand.700" fontSize="56px" fontWeight="bold" mb="40px" letterSpacing="-1px">
            Venus Design System PRO
          </Text>
          <Breadcrumb
            spacing="8px"
            separator={FiChevronRight}
            mb="56px"
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Store</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" color="brand.300">Venus Design System PRO</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex direction="column">
              <Box w="818px" h="556px" mb="20px">
                  <Image src={productVenusDBPRO1} borderRadius="24px" w="100%" h="100%"/>
              </Box>
              <Stack direction="row" spacing="20px">
                  <Box w="190px" h="140px">
                    <Image src={productVenusDBPRO2} borderRadius="14px" w="100%" h="100%"/>
                  </Box>
                  <Box w="190px" h="140px">
                    <Image src={productVenusDBPRO3} borderRadius="14px" w="100%" h="100%"/>
                  </Box>
                  <Box w="190px" h="140px">
                    <Image src={productVenusDBPRO4} borderRadius="14px" w="100%" h="100%"/>
                  </Box>
                  <Box w="190px" h="140px">
                    <Image src={productVenusDBPRO5} borderRadius="14px" w="100%" h="100%"/>
                  </Box>
              </Stack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Product;
