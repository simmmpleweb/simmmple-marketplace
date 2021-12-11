import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import templatesBg from "assets/img/templates/templates-background.png";
import { SearchIcon } from "components/icons/Icons";
import Layout from "components/layout/Layout";
import ProductList from "components/products/ProductList";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { featuredProducts } from "variables/products";
import { templatesProducts } from "variables/templates";
import { Helmet } from "react-helmet";

const Search = ({ match }) => {
  const [products, setProducts] = useState([]);
  const [alternativeProducts, setAlternativeProducts] = useState([]);
  const [isAlternative, setIsAlternative] = useState(false);

  useEffect(() => {
    const keywords = match.params.userInput.split("-");
    const filteredProducts = templatesProducts["alltemplates"].filter(
      (product) => {
        let count = 0;
        keywords.forEach((keyword) => {
          if (product.keywords.indexOf(keyword) !== -1) {
            count++;
          }
        });
        if (count > 0) {
          return product;
        }
      }
    );

    if (filteredProducts.length === 0) {
      const filteredFeaturedProducts = featuredProducts.filter(
        (product, index) => index < 3
      );
      setAlternativeProducts(filteredFeaturedProducts);
      setProducts([]);
      setIsAlternative(true);
    } else {
      setProducts(filteredProducts);
      setAlternativeProducts([]);
      setIsAlternative(false);
    }
  }, [window.location.href, match]);

  const history = useHistory();
  const inputValue = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.current.value === "") {
      history.push("/search/ ");
    } else {
      const urlParameter = inputValue.current.value.split(" ").join("-");
      history.push(`/search/${urlParameter}`);
    }

    inputValue.current.value = "";
  };

  return (
    <Layout>
      <Helmet>
        <title itemprop="name">Search - Simmmple</title>
      </Helmet>
      <Flex direction='column'>
        <Flex
          direction='column'
          bgImage={templatesBg}
          minH='500px'
          bgSize='cover'
          align='center'
          justify='flex-end'
          pb='100px'
          px='20px'>
          <Text
            fontSize='xs'
            color='#fff'
            fontWeight='bold'
            mb='16px'
            letterSpacing='2px'>
            BUILD BETTER, BUILD FASTER
          </Text>
          <Text fontSize='30px' color='#fff' mb='64px' textAlign='center'>
            {isAlternative ? 0 : products.length} products found for: "
            {match.params.userInput.split("-").join(" ")}"
          </Text>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Flex align='center' justify='center'>
                <Flex
                  justify='space-between'
                  bg='#fff'
                  borderRadius='70px'
                  w='600px'
                  maxW='100%'
                  h='70px'
                  p='22px 22px'
                  align='center'>
                  <Input
                    ref={inputValue}
                    placeholder='eg. Venus Design System'
                    boxShadow='none'
                    border='none'
                    _focus={{ border: "none" }}
                    _placeholder={{ color: "#878CBD" }}
                  />
                  <Button
                    type='submit'
                    boxShadow='none'
                    bg='transparent'
                    _hover='none'
                    _active='none'
                    p='0px'>
                    <SearchIcon w='18px' h='18px' color='#878CBD' />
                  </Button>
                </Flex>
              </Flex>
            </FormControl>
          </form>
        </Flex>
        <Box
          w={{ sm: "325px", md: "725px", lg: "975px", xl: "1170px" }}
          mx='auto'
          pt='60px'
          pb='200px'>
          {products.length === 0 ? (
            <Flex direction='column' w='100%' pt='40px'>
              <Text
                color='#878CBD'
                fontSize='26px'
                fontWeight='400'
                textAlign='center'
                mb='50px'>
                Your search didn't return any results!
              </Text>
              <Text
                fontSize='34px'
                color='brand.700'
                fontWeight='500'
                textAlign='start'
                mb='72px'>
                Latest Products
              </Text>
              <ProductList products={alternativeProducts} />
            </Flex>
          ) : (
            <ProductList products={products} />
          )}
        </Box>
      </Flex>
    </Layout>
  );
};

export default Search;
