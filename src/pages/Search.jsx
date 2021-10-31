import React from "react";
import { Flex, Text, FormControl, Input, Icon, Box } from "@chakra-ui/react";
import homeBg from "assets/img/homepage/home-background.png";
import Layout from "components/layout/Layout";
import { BsSearch } from "react-icons/bs";
import ProductList from "components/products/ProductList";
import { featuredProducts } from "variables/products";

const Search = () => {
  return (
    <Layout>
      <Flex direction='column'>
        <Flex
          direction='column'
          bgImage={homeBg}
          minH='500px'
          bgSize='cover'
          align='center'
          justify='flex-end'
          pb='100px'>
          <Text fontSize='xs' color='#fff' fontWeight='bold' mb='16px'>
            BUILD BETTER, BUILD FASTER
          </Text>
          <Text fontSize='30px' color='#fff' mb='64px'>
            12 products found for: "kit"
          </Text>
          <FormControl>
            <Flex align='center' justify='center'>
              <Flex
                justify='space-between'
                bg='#fff'
                borderRadius='70px'
                w='600px'
                maxW='100%'
                h='70px'
                p='22px 32px'
                align='center'>
                <Input
                  placeholder='eg. Venus Design System'
                  boxShadow='none'
                  border='none'
                  _focus={{ border: "none" }}
                  _placeholder={{ color: "#878CBD" }}
                />
                <Icon as={BsSearch} w='20px' h='20px' color='#878CBD' />
              </Flex>
            </Flex>
          </FormControl>
        </Flex>
        <Box maxW='1170px' mx='auto' pt='60px' pb='200px'>
          <ProductList products={featuredProducts} />
        </Box>
      </Flex>
    </Layout>
  );
};

export default Search;
