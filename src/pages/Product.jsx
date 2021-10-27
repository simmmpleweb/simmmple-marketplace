import React, { useState, useEffect, useRef } from "react";
import {
  Flex,
  Text,
  Grid,
  Tag,
  UnorderedList,
  ListItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
  Button,
  Box,
  Image,
  Icon,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { ChevronRight } from "components/icons/Icons";
import { BsPatchCheckFill } from "react-icons/bs";
import { productData } from "variables/productData";
import productFooter from "assets/img/product/product-footer.png";
import { SimmmpleLogoWhiteMobile } from "components/icons/Icons";
import ProductList from "components/products/ProductList";
import { featuredProducts } from "variables/products";
import { DribbleIcon } from "components/icons/Icons";

const Product = (props) => {
  const [product, setProduct] = useState({
    tag: "",
    title: "",
    images: [],
    firstParagraph: { title: "", description: [] },
    secondParagraph: { title: "", description: [] },
    thirdParagraph: { title: "", description: [] },
    fourthParagraph: { title: "", description: [] },
    summary: [],
    mainImage: "",
    price: {},
    compatibility: [],
  });

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeLicense, setActiveLicense] = useState({
    freelancer: false,
    team: false,
    enterprise: false,
  });

  useEffect(() => {
    const productName = props.match.params.productName.split('-').join('');
    console.log(productName);
    const foundProduct = productData.find((product) => product[productName]);
    setProduct(foundProduct[productName]);
  }, []);

  useEffect(() => {
    const productName = props.match.params.productName.split('-').join('');
    let count = 0;
    const filteredProducts = featuredProducts.filter((product, index) => {
      if (product.title.split(' ').join('').toLowerCase() !== productName && count < 3) {
        count++;
        return product;
      }
    });
    setFilteredProducts(filteredProducts);
  }, []);

  const {
    tag,
    title,
    images,
    firstParagraph,
    mainImage,
    secondParagraph,
    thirdParagraph,
    fourthParagraph,
    summary,
    price,
    compatibility,
  } = product;
  
  return (
    <Flex bg="#fff" py="225px" direction="column">
      <Grid templateColumns="2.7fr 1fr" gap="40px" maxW="1170px" mx="auto" position="relative">
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
            {tag}
          </Tag>
          <Text
            color="brand.700"
            fontSize="56px"
            fontWeight="bold"
            mb="40px"
            letterSpacing="-1px"
          >
            {title}
          </Text>
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRight color="#878CBD" />}
            mb="56px"
          >
            <BreadcrumbItem color="#878CBD">
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="#878CBD">
              <BreadcrumbLink href="#">Store</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" color="brand.300">
                {title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex direction="column" mb="50px">
            <Box w="818px" h="556px" mb="20px">
              <Image src={images[0]} borderRadius="24px" w="100%" h="100%" />
            </Box>
            <Stack direction="row" spacing="20px">
              <Box w="190px" h="140px">
                <Image src={images[1]} borderRadius="14px" w="100%" h="100%" />
              </Box>
              <Box w="190px" h="140px">
                <Image src={images[2]} borderRadius="14px" w="100%" h="100%" />
              </Box>
              <Box w="190px" h="140px">
                <Image src={images[3]} borderRadius="14px" w="100%" h="100%" />
              </Box>
              <Box w="190px" h="140px">
                <Image src={images[4]} borderRadius="14px" w="100%" h="100%" />
              </Box>
            </Stack>
          </Flex>
          <Flex direction="column" lineHeight="44px">
            <Text fontSize="24px" color="brand.700" fontWeight="500" mb="24px">
              {firstParagraph.title}
            </Text>
            {firstParagraph.description}
            <Text fontSize="24px" color="brand.700" fontWeight="500" mb="24px">
              Summary
            </Text>
            <UnorderedList color="#878CBD" mb="72px">
              {summary.map((item, index) => {
                return (
                  <ListItem fontSize="18px" lineHeight="44px" key={index}>
                    {item}
                  </ListItem>
                );
              })}
            </UnorderedList>
            <Box mb="72px">
              <Image src={mainImage} borderRadius="24px" />
            </Box>
            <Text fontSize="24px" color="brand.700" fontWeight="500" mb="24px">
              {secondParagraph.title}
            </Text>
            <UnorderedList color="#878CBD" mb="72px">
              {secondParagraph.description.map((item, index) => {
                return (
                  <ListItem fontSize="18px" lineHeight="44px" key={index}>
                    {item}
                  </ListItem>
                );
              })}
            </UnorderedList>
            <Text fontSize="24px" color="brand.700" fontWeight="500" mb="24px">
              {thirdParagraph.title}
            </Text>
            <UnorderedList color="#878CBD" mb="72px">
              {thirdParagraph.description.map((item, index) => {
                return (
                  <ListItem fontSize="18px" lineHeight="44px" key={index}>
                    {item}
                  </ListItem>
                );
              })}
            </UnorderedList>
            <Text fontSize="24px" color="brand.700" fontWeight="500" mb="24px">
              {fourthParagraph.title}
            </Text>
            <Text color="#878CBD" mb="72px">
              {fourthParagraph.description}
            </Text>
            <Flex
              align="center"
              justify="center"
              bgImage={productFooter}
              bgSize="cover"
              w="100%"
              minH="160px"
              borderRadius="24px"
            >
              <Stack
                direction="row"
                spacing="22px"
                align="center"
                lineHeight="26px"
              >
                <SimmmpleLogoWhiteMobile w="54px" h="54px" />
                <Flex direction="column" color="#fff" fontSize="xl">
                  <Text>Made with ❤️ by Simmmple,</Text>
                  <Text fontWeight="500">for a better UI process.</Text>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column" pt="75px">  
          <Text fontSize="sm" color="brand.700" fontWeight="500" mb="16px">
            License Options
          </Text>
          <Stack direction="column" spacing="14px" lineHeight="28px" mb="32px">
            <Flex
              direction="column"
              transition=".25s all ease"
              p="24px"
              border={
                activeLicense.freelancer
                  ? "1px solid #422AFB"
                  : "1px solid #ECE9FF"
              }
              borderColor={activeLicense.freelancer ? "brand.300" : "#ECE9FF"}
              borderRadius="30px"
              cursor="pointer"
              onClick={() =>
                setActiveLicense({
                  freelancer: true,
                  team: false,
                  enterprise: false,
                })
              }
            >
              <Tag
                color={activeLicense.freelancer ? "#fff" : "brand.300"}
                bg={activeLicense.freelancer ? "brand.300" : "#ECE9FF"}
                w="64px"
                h="34px"
                fontSize="md"
                borderRadius="46px"
                textAlign="center"
                p="6px 18px"
                mb="14px"
              >
                {`$${price.freelancer}`}
              </Tag>
              <Text
                color={activeLicense.freelancer ? "brand.300" : "brand.700"}
                fontSize="lg"
                fontWeight="500"
                mb="8px"
              >
                Freelancer
              </Text>
              <Text color="#878CBD">
                A single license for solo designers, developers and freelancers.
              </Text>
            </Flex>
            <Flex
              direction="column"
              transition=".25s all ease"
              p="24px"
              border={
                activeLicense.team ? "1px solid #422AFB" : "1px solid #ECE9FF"
              }
              borderRadius="30px"
              cursor="pointer"
              onClick={() =>
                setActiveLicense({
                  freelancer: false,
                  team: true,
                  enterprise: false,
                })
              }
            >
              <Tag
                color={activeLicense.team ? "#fff" : "brand.300"}
                bg={activeLicense.team ? "brand.300" : "#ECE9FF"}
                w="64px"
                h="34px"
                fontSize="md"
                borderRadius="46px"
                textAlign="center"
                p="6px 14px"
                mb="14px"
              >
                {`$${price.team}`}
              </Tag>
              <Text
                color={activeLicense.team ? "brand.300" : "brand.700"}
                fontSize="lg"
                fontWeight="500"
                mb="8px"
              >
                Team Version
              </Text>
              <Text color="#878CBD">
                Up to 5 users. Perfect for designers and developers teams
                working on UI/UX projects. Good for commercial projects.
              </Text>
            </Flex>
            <Flex
              direction="column"
              transition=".25s all ease"
              p="24px"
              border={
                activeLicense.enterprise
                  ? "1px solid #422AFB"
                  : "1px solid #ECE9FF"
              }
              borderRadius="30px"
              cursor="pointer"
              onClick={() =>
                setActiveLicense({
                  freelancer: false,
                  team: false,
                  enterprise: true,
                })
              }
            >
              <Tag
                color={activeLicense.enterprise ? "#fff" : "brand.300"}
                bg={activeLicense.enterprise ? "brand.300" : "#ECE9FF"}
                w="64px"
                h="34px"
                fontSize="md"
                borderRadius="46px"
                textAlign="center"
                p="6px 14px"
                mb="14px"
              >
                {`$${price.enterprise}`}
              </Tag>
              <Text
                color={activeLicense.enterprise ? "brand.300" : "brand.700"}
                fontSize="lg"
                fontWeight="500"
                mb="8px"
              >
                Enterprise
              </Text>
              <Text color="#878CBD">
                Unlimited users. Perfect for companies & agencies working on UI
                & Web projects. Good for commercial projects.
              </Text>
            </Flex>
          </Stack>
          <Link href="#" textDecoration="none">
            <Button
              borderRadius="70px"
              bg="#ECE9FF"
              w="100%"
              border="1px solid"
              borderColor="brand.300"
              h="60px"
              mb="14px"
            >
              <Text color="brand.300" fontSize="sm">
                Live Preview
              </Text>
            </Button>
          </Link>
          <Link href="#" textDecoration="none">
            <Button
              borderRadius="70px"
              bg="brand.300"
              w="100%"
              h="60px"
              _hover={{ bg: "#1A05B7" }}
            >
              <Text color="#fff" fontSize="sm">
                Buy it Now!
              </Text>
            </Button>
          </Link>
          <Divider h="1px" bg="rgba(135, 140, 189, 0.2)" my="32px" />
          <Flex
            direction="column"
            p="24px"
            bg="#F8F7FF"
            borderRadius="30px"
            mb="26px"
          >
            <Text color="brand.300" fontSize="md" fontWeight="500" mb="10px">
              Features
            </Text>
            <Stack direction="column" spacing="6px">
              <Flex align="center">
                <Icon
                  as={BsPatchCheckFill}
                  me="12px"
                  w="18px"
                  h="18px"
                  color="brand.300"
                />
                <Text color="#878CBD" fontSize="sm">
                  Perfect for construction businesses
                </Text>
              </Flex>
              <Flex align="center">
                <Icon
                  as={BsPatchCheckFill}
                  me="12px"
                  w="18px"
                  h="18px"
                  color="brand.300"
                />
                <Text color="#878CBD" fontSize="sm">
                  Production Quality Build
                </Text>
              </Flex>
              <Flex align="center">
                <Icon
                  as={BsPatchCheckFill}
                  me="12px"
                  w="18px"
                  h="18px"
                  color="brand.300"
                />
                <Text color="#878CBD" fontSize="sm">
                  Beautiful & Modern
                </Text>
              </Flex>
              <Flex align="center">
                <Icon
                  as={BsPatchCheckFill}
                  me="12px"
                  w="18px"
                  h="18px"
                  color="brand.300"
                />
                <Text color="#878CBD" fontSize="sm">
                  Easily Edited
                </Text>
              </Flex>
            </Stack>
            <Divider h="1px" bg="rgba(135, 140, 189, 0.2)" my="22px" />
            <Text color="brand.300" fontWeight="500" mb="20px">
              Compatibility
            </Text>
            <Stack direction="row" spacing="14px">
              {compatibility.map((item, index) => item)}
            </Stack>
            <Divider h="1px" bg="rgba(135, 140, 189, 0.2)" my="22px" />
            <Text fontSize="sm" color="#878CBD" textAlign="center">
              Sold via gumroad.com
            </Text>
          </Flex>
          <Link href="#">
            <Flex
              justify="space-between"
              p="22px"
              border="1px solid #ECE9FF"
              borderRadius="30px"
              align="center"
              mb="24px"
            >
              <Flex align="center" me="auto">
                <DribbleIcon w="36px" h="36px" me="20px" />
                <Flex direction="column">
                  <Text color="brand.700" fontSize="md">
                    Simmmple
                  </Text>
                  <Text color="#878CBD" fontSize="sm">
                    Follow us on Dribbble
                  </Text>
                </Flex>
              </Flex>
              <ChevronRight w="16px" h="16px" />
            </Flex>
          </Link>
          <Text
            textAlign="center"
            color="#878CBD"
            fontSize="xs"
            maxW="80%"
            mx="auto"
          >
            *Product sales are made via the official Gumroad marketplace.
          </Text>
        </Flex>
      </Grid>
      <Divider h="1px" bg="rgba(135, 140, 189, 0.2)" my="80px" />
      <Flex direction="column" maxW="1170px" mx="auto" textAlign="center">
        <Text color="brand.300" fontSize="xs" fontWeight="bold" mb="16px">
          RELATED PRODUCTS
        </Text>
        <Text color="brand.700" fontSize="40px" fontWeight="500" mb="54px">
          Other products you might like
        </Text>
        <ProductList products={filteredProducts} />
      </Flex>
    </Flex>
  );
};

export default Product;
