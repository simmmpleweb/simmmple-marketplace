import React from "react";
import { Grid, Flex, Box, Text, Image } from "@chakra-ui/react";
import simmmple3d from "assets/img/templates/simmmple-3d.png";
import Card from "components/card/Card";
import CardBody from "components/card/CardBody";

// Custom Components
import ProductItem from "components/products/ProductItem";

const ProductList = ({ products, comingSoon }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="22px">
      {products.map(({ ...otherProductProps }, index) => {
        return <ProductItem key={index} {...otherProductProps} />;
      })}
      {comingSoon ? (
        <Flex border="2px solid #E9EDF7" borderRadius="30px" align="center" justify="center" p="24px">
            <Flex direction="column" w="100%" align="center" justify="center" textAlign="center" maxW="90%">
              <Box w="168px" h="174px" mb="30px" transform="rotate(-9deg)">
                <Image src={simmmple3d} w="100%" h="100%" />
              </Box>
              <Text fontSize="24px" color="brand.700" fontWeight="500" mb="12px">More awesome tools coming soon! </Text>
              <Text color="#878CBD" fontSize="sm" fontWeight="normal">Awesome Design tools, UI Kits, Dashboards
are in progress and will come soon!</Text>
            </Flex>
        </Flex>
      ) : null}
    </Grid>
  );
};

export default ProductList;
