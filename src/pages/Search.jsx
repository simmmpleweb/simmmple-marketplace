import React, { useEffect, useState, useRef } from "react";
import {
  Flex,
  Text,
  FormControl,
  Input,
  Icon,
  Box,
  Button,
} from "@chakra-ui/react";
import templatesBg from "assets/img/templates/templates-background.png";
import Layout from "components/layout/Layout";
import { SearchIcon } from "components/icons/Icons";
import ProductList from "components/products/ProductList";
import { templatesProducts } from "variables/templates";
import { useHistory } from "react-router-dom";

const Search = ({ match }) => {
  const [products, setProducts] = useState([]);

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
    setProducts(filteredProducts);
  }, [window.location.href]);

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
            {products.length} products found for: "
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
        <Box maxW='1170px' mx='auto' pt='60px' pb='200px'>
          <ProductList products={products} />
        </Box>
      </Flex>
    </Layout>
  );
};

export default Search;
