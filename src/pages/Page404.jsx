import { Flex, Image, Text } from "@chakra-ui/react";
import img404 from "assets/img/404/404.png";
import Layout from "components/layout/Layout";
import ProductList from "components/products/ProductList";
import { HSeparator } from "components/separator/Separator";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { featuredProducts } from "variables/products";

const Page404 = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const filteredProducts = featuredProducts.filter(
      (product, index) => index < 3
    );
    setProducts(filteredProducts);
  }, []);

  useEffect(() => {
    document.title = "404";
  }, []);

  return (
    <Layout>
      <Flex
        direction='column'
        align='center'
        justify='center'
        pt={{ sm: "75px", lg: "170px" }}
        pb='155px'
        textAlign='center'>
        <Image
          src={img404}
          w={{ sm: "300px", lg: "400px" }}
          h={{ sm: "200px", lg: "245px" }}
          mb='35px'
        />
        <Text
          color='brand.700'
          fontWeight='bold'
          fontSize={{ sm: "34px", lg: "46px" }}
          mb='24px'>
          Ah, dang. We didn't find that page.
        </Text>
        <Text fontSize='lg' color='#878CBD'>
          Maybe it’s best you start back at our home page..{" "}
          <NavLink to='/'>
            <Text as='span' fontWeight='500' color='brand.300'>
              Return at home here.
            </Text>
          </NavLink>{" "}
        </Text>
        <HSeparator mt={{ sm: "100px", lg: "195px" }} mb='75px' />
        <Flex maxW='1170px' mx='auto' direction='column' textAlign='center'>
          <Text
            color='brand.300'
            fontSize='xs'
            fontWeight='500'
            letterSpacing='2px'>
            RELATED PRODUCTS
          </Text>
          <Text
            fontSize={{ sm: "34px", lg: "40px" }}
            color='brand.700'
            fontWeight='bold'
            letterSpacing='-1px'
            mb='55px'>
            Products you might like
          </Text>
          <ProductList products={products} />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Page404;
