import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Tag,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import productFooter from "assets/img/product/product-footer.png";
import { NavLink } from "react-router-dom";
import {
  ChevronRight,
  DribbleIcon,
  SimmmpleLogoWhiteMobile,
} from "components/icons/Icons";
import Layout from "components/layout/Layout";
import ProductList from "components/products/ProductList";
import React, { useEffect, useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { productData } from "variables/productData";
import { featuredProducts } from "variables/products";

const Product = (props) => {
  const {
    isOpen: isOpenImage1,
    onOpen: onOpenImage1,
    onClose: onCloseImage1,
  } = useDisclosure();
  const {
    isOpen: isOpenImage2,
    onOpen: onOpenImage2,
    onClose: onCloseImage2,
  } = useDisclosure();
  const {
    isOpen: isOpenImage3,
    onOpen: onOpenImage3,
    onClose: onCloseImage3,
  } = useDisclosure();
  const {
    isOpen: isOpenImage4,
    onOpen: onOpenImage4,
    onClose: onCloseImage4,
  } = useDisclosure();

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
    free: "",
    buttonLinks: {
      live: "",
      upgrade: "",
      free: "",
      buy: {
        freelancer: "",
        team: "",
        enterprise: "",
      },
    },
  });

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeLicense, setActiveLicense] = useState({
    freelancer: true,
    team: false,
    enterprise: false,
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    const productName = props.match.params.productName.split("-").join("");
    const foundProduct = productData.find((product) => product[productName]);
    setProduct(foundProduct[productName]);
  }, [window.location.href]);

  useEffect(() => {
    const productName = props.match.params.productName.split("-").join("");
    let count = 0;
    const filteredProducts = featuredProducts.filter((product, index) => {
      if (
        product.title.split(" ").join("").toLowerCase() !== productName &&
        count < 3
      ) {
        count++;
        return product;
      }
    });
    setFilteredProducts(filteredProducts);
  }, [window.location.href]);

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
    free,
    buttonLinks,
  } = product;

  document.title = `${title} - Premium and Stunning UI Kits, Templates and Themes for developers, designers & startups @ Simmmple`;

  return (
    <Layout>
      <Flex
        bg='#fff'
        pb='225px'
        pt={{ sm: "45px", lg: "90px" }}
        direction='column'>
        <Grid
          templateColumns={{ sm: "1fr", lg: "2.7fr 1fr" }}
          gap='40px'
          maxW={{ sm: "350px", md: "700px", lg: "975px", xl: "1170px" }}
          mx='auto'
          position='relative'>
          <Flex direction='column'>
            <Tag
              color='brand.300'
              bg='#ECE9FF'
              w='90px'
              h='30px'
              fontSize='xs'
              borderRadius='25px'
              p='7px 12px'
              mt={{ base: "40px", lg: "0px" }}
              mb='25px'>
              {tag}
            </Tag>
            <Text
              color='brand.700'
              fontSize={{ sm: "36px", lg: "56px" }}
              fontWeight='bold'
              mb='40px'
              letterSpacing='-1px'
              maxW={{ sm: "80%", lg: "100%" }}>
              {title}
            </Text>
            <Breadcrumb
              spacing='8px'
              separator={<ChevronRight color='#878CBD' />}
              mb='56px'>
              <BreadcrumbItem
                fontSize={{ base: "14px", md: "16px" }}
                color='#878CBD'>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem
                fontSize={{ base: "14px", md: "16px" }}
                color='#878CBD'>
                <BreadcrumbLink href='/templates/all-templates'>
                  Products
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem
                fontSize={{ base: "14px", md: "16px" }}
                isCurrentPage>
                <BreadcrumbLink href='' color='brand.300'>
                  {title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Flex direction='column' mb='50px'>
              <Box
                w={{ sm: "350px", md: "720px", lg: "650px", xl: "818px" }}
                h={{ sm: "220px", md: "450px", lg: "425px", xl: "556px" }}
                mb='20px'>
                <Image src={images[0]} borderRadius='24px' w='100%' h='100%' />
              </Box>
              <Grid
                templateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
                gap={{ sm: "20px", lg: "10px", xl: "20px" }}>
                <Box
                  w={{ sm: "160px", lg: "130px", xl: "190px" }}
                  h={{ sm: "120px", lg: "90px", xl: "140px" }}
                  onClick={onOpenImage1}>
                  <Image
                    src={images[1]}
                    borderRadius='14px'
                    cursor='pointer'
                    w='100%'
                    h='100%'
                  />
                  <Modal isOpen={isOpenImage1} onClose={onCloseImage1}>
                    <ModalOverlay />
                    <ModalContent
                      minW={{
                        sm: "350px",
                        md: "630px",
                        lg: "770px",
                        xl: "1130px",
                      }}
                      minH={{
                        sm: "230px",
                        md: "400px",
                        lg: "525px",
                        xl: "680px",
                      }}
                      borderRadius='20px'>
                      <ModalBody w='100%' h='100%' p='0px' borderRadius='20px'>
                        <Image
                          src={images[1]}
                          w='100%'
                          h='100%'
                          borderRadius='20px'
                        />
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Box>
                <Box
                  w={{ sm: "160px", lg: "130px", xl: "190px" }}
                  h={{ sm: "120px", lg: "90px", xl: "140px" }}
                  onClick={onOpenImage2}>
                  <Image
                    src={images[2]}
                    borderRadius='14px'
                    cursor='pointer'
                    w='100%'
                    h='100%'
                  />
                  <Modal isOpen={isOpenImage2} onClose={onCloseImage2}>
                    <ModalOverlay />
                    <ModalContent
                      minW={{
                        sm: "350px",
                        md: "630px",
                        lg: "770px",
                        xl: "1130px",
                      }}
                      minH={{
                        sm: "230px",
                        md: "400px",
                        lg: "525px",
                        xl: "680px",
                      }}
                      borderRadius='20px'>
                      <ModalBody w='100%' h='100%' p='0px' borderRadius='20px'>
                        <Image
                          src={images[2]}
                          w='100%'
                          h='100%'
                          borderRadius='20px'
                        />
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Box>
                <Box
                  w={{ sm: "160px", lg: "130px", xl: "190px" }}
                  h={{ sm: "120px", lg: "90px", xl: "140px" }}
                  onClick={onOpenImage3}>
                  <Image
                    src={images[3]}
                    borderRadius='14px'
                    cursor='pointer'
                    w='100%'
                    h='100%'
                  />
                  <Modal isOpen={isOpenImage3} onClose={onCloseImage3}>
                    <ModalOverlay />
                    <ModalContent
                      minW={{
                        sm: "350px",
                        md: "630px",
                        lg: "770px",
                        xl: "1130px",
                      }}
                      minH={{
                        sm: "230px",
                        md: "400px",
                        lg: "525px",
                        xl: "680px",
                      }}
                      borderRadius='20px'>
                      <ModalBody w='100%' h='100%' p='0px' borderRadius='20px'>
                        <Image
                          src={images[3]}
                          w='100%'
                          h='100%'
                          borderRadius='20px'
                        />
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Box>
                <Box
                  w={{ sm: "160px", lg: "130px", xl: "190px" }}
                  h={{ sm: "120px", lg: "90px", xl: "140px" }}
                  onClick={onOpenImage4}>
                  <Image
                    src={images[4]}
                    borderRadius='14px'
                    cursor='pointer'
                    w='100%'
                    h='100%'
                  />
                  <Modal isOpen={isOpenImage4} onClose={onCloseImage4}>
                    <ModalOverlay />
                    <ModalContent
                      minW={{
                        sm: "350px",
                        md: "630px",
                        lg: "770px",
                        xl: "1130px",
                      }}
                      minH={{
                        sm: "230px",
                        md: "400px",
                        lg: "525px",
                        xl: "680px",
                      }}
                      borderRadius='20px'>
                      <ModalBody w='100%' h='100%' p='0px' borderRadius='20px'>
                        <Image
                          src={images[4]}
                          w='100%'
                          h='100%'
                          borderRadius='20px'
                        />
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Box>
              </Grid>
            </Flex>
            <Flex direction='column' lineHeight='44px'>
              <Text
                fontSize='24px'
                color='brand.700'
                fontWeight='500'
                mb='24px'>
                {firstParagraph.title}
              </Text>
              {firstParagraph.description}
              <Text
                fontSize='24px'
                color='brand.700'
                fontWeight='500'
                mb='24px'>
                Summary
              </Text>
              <UnorderedList color='#878CBD' mb='72px'>
                {summary.map((item, index) => {
                  return (
                    <ListItem fontSize='18px' lineHeight='44px' key={index}>
                      {item}
                    </ListItem>
                  );
                })}
              </UnorderedList>
              <Box mb='72px'>
                <Image src={mainImage} borderRadius='24px' />
              </Box>
              {secondParagraph ? (
                <>
                  <Text
                    fontSize='24px'
                    color='brand.700'
                    fontWeight='500'
                    mb='24px'>
                    {secondParagraph.title}
                  </Text>
                  <UnorderedList color='#878CBD' mb='72px'>
                    {secondParagraph.description.map((item, index) => {
                      return (
                        <ListItem fontSize='18px' lineHeight='44px' key={index}>
                          {item}
                        </ListItem>
                      );
                    })}
                  </UnorderedList>
                </>
              ) : null}
              <Text
                fontSize='24px'
                color='brand.700'
                fontWeight='500'
                mb='24px'>
                {thirdParagraph.title}
              </Text>
              <UnorderedList color='#878CBD' mb='72px'>
                {thirdParagraph.description.map((item, index) => {
                  return (
                    <ListItem fontSize='18px' lineHeight='44px' key={index}>
                      {item}
                    </ListItem>
                  );
                })}
              </UnorderedList>
              <Text
                fontSize='24px'
                color='brand.700'
                fontWeight='500'
                mb='24px'>
                {fourthParagraph.title}
              </Text>
              <Text color='#878CBD' mb='72px'>
                {fourthParagraph.description}
              </Text>
              <Flex
                align='center'
                justify='center'
                bgImage={productFooter}
                bgSize='cover'
                w='100%'
                minH='160px'
                borderRadius='24px'>
                <Stack
                  direction='row'
                  spacing='22px'
                  align='center'
                  lineHeight='26px'>
                  <SimmmpleLogoWhiteMobile w='54px' h='54px' />
                  <Flex
                    direction='column'
                    color='#fff'
                    fontSize={{ sm: "lg", lg: "xl" }}>
                    <Text>Made with ❤️ by Simmmple,</Text>
                    <Text fontWeight='500'>for a better UI process.</Text>
                  </Flex>
                </Stack>
              </Flex>
            </Flex>
          </Flex>

          <Flex direction='column' pt={{ lg: "75px" }}>
            <Text fontSize='sm' color='brand.700' fontWeight='500' mb='16px'>
              License Options
            </Text>
            {free ? (
              <Flex
                direction='column'
                boxShadow={"0px 43px 113px -9px rgba(112, 144, 176, 0.12)"}
                p='24px'
                mb='32px'
                border={"1px solid #422AFB"}
                borderColor='brand.300'
                borderRadius='30px'
                cursor='pointer'>
                <Tag
                  color='#fff'
                  bg='brand.300'
                  _hover={{ bg: "#1A05B7" }}
                  _active={{ bg: "#1A05B7" }}
                  w='72px'
                  h='34px'
                  fontSize='sm'
                  borderRadius='46px'
                  textAlign='center'
                  p='6px 18px'
                  mb='14px'>
                  FREE
                </Tag>
                <Text color='brand.300' fontSize='lg' fontWeight='500' mb='8px'>
                  Free License
                </Text>
                <Text color='#878CBD'>
                  Limited plan for people who want to see how looks and works.
                </Text>
              </Flex>
            ) : (
              <Grid
                templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)", lg: "1fr" }}
                gap='14px'
                lineHeight='28px'
                mb='32px'>
                <Flex
                  direction='column'
                  transition='.10s all ease'
                  boxShadow={
                    activeLicense.freelancer
                      ? "0px 43px 113px -9px rgba(112, 144, 176, 0.12)"
                      : null
                  }
                  p='24px'
                  border={
                    activeLicense.freelancer
                      ? "1px solid #422AFB"
                      : "1px solid #ECE9FF"
                  }
                  borderColor={
                    activeLicense.freelancer ? "brand.300" : "#ECE9FF"
                  }
                  borderRadius='30px'
                  cursor='pointer'
                  onClick={() =>
                    setActiveLicense({
                      freelancer: true,
                      team: false,
                      enterprise: false,
                    })
                  }>
                  <Tag
                    color={activeLicense.freelancer ? "#fff" : "brand.300"}
                    bg={activeLicense.freelancer ? "brand.300" : "#ECE9FF"}
                    w='64px'
                    h='34px'
                    fontSize='md'
                    borderRadius='46px'
                    textAlign='center'
                    p='6px 18px'
                    mb='14px'>
                    {`$${price.freelancer}`}
                  </Tag>
                  <Text
                    color={activeLicense.freelancer ? "brand.300" : "brand.700"}
                    fontSize='lg'
                    fontWeight='500'
                    mb='8px'>
                    Freelancer
                  </Text>
                  <Text color='#878CBD'>
                    A single license for solo designers, developers and
                    freelancers.
                  </Text>
                </Flex>
                <Flex
                  direction='column'
                  transition='.10s all ease'
                  p='24px'
                  boxShadow={
                    activeLicense.team
                      ? "0px 43px 113px -9px rgba(112, 144, 176, 0.12)"
                      : null
                  }
                  border={
                    activeLicense.team
                      ? "1px solid #422AFB"
                      : "1px solid #ECE9FF"
                  }
                  borderRadius='30px'
                  cursor='pointer'
                  onClick={() =>
                    setActiveLicense({
                      freelancer: false,
                      team: true,
                      enterprise: false,
                    })
                  }>
                  <Tag
                    color={activeLicense.team ? "#fff" : "brand.300"}
                    bg={activeLicense.team ? "brand.300" : "#ECE9FF"}
                    w='64px'
                    h='34px'
                    fontSize='md'
                    borderRadius='46px'
                    textAlign='center'
                    p='6px 14px'
                    mb='14px'>
                    {`$${price.team}`}
                  </Tag>
                  <Text
                    color={activeLicense.team ? "brand.300" : "brand.700"}
                    fontSize='lg'
                    fontWeight='500'
                    mb='8px'>
                    Team Version
                  </Text>
                  <Text color='#878CBD'>
                    Up to 5 users. Perfect for designers and developers teams
                    working on UI/UX projects. Good for commercial projects.
                  </Text>
                </Flex>
                <Flex
                  direction='column'
                  transition='.10s all ease'
                  p='24px'
                  boxShadow={
                    activeLicense.enterprise
                      ? "0px 43px 113px -9px rgba(112, 144, 176, 0.12)"
                      : null
                  }
                  border={
                    activeLicense.enterprise
                      ? "1px solid #422AFB"
                      : "1px solid #ECE9FF"
                  }
                  borderRadius='30px'
                  cursor='pointer'
                  onClick={() =>
                    setActiveLicense({
                      freelancer: false,
                      team: false,
                      enterprise: true,
                    })
                  }>
                  <Tag
                    color={activeLicense.enterprise ? "#fff" : "brand.300"}
                    bg={activeLicense.enterprise ? "brand.300" : "#ECE9FF"}
                    w='64px'
                    h='34px'
                    fontSize='md'
                    borderRadius='46px'
                    textAlign='center'
                    p='6px 14px'
                    mb='14px'>
                    {`$${price.enterprise}`}
                  </Tag>
                  <Text
                    color={activeLicense.enterprise ? "brand.300" : "brand.700"}
                    fontSize='lg'
                    fontWeight='500'
                    mb='8px'>
                    Enterprise
                  </Text>
                  <Text color='#878CBD'>
                    Unlimited users. Perfect for companies & agencies working on
                    UI & Web projects. Good for commercial projects.
                  </Text>
                </Flex>
              </Grid>
            )}
            {free ? (
              <>
                <Link href={buttonLinks.live} textDecoration='none'>
                  <Button
                    borderRadius='70px'
                    bg='#ECE9FF'
                    _hover={{
                      bg: "#ECE9FF",
                    }}
                    _active={{
                      bg: "#ECE9FF",
                    }}
                    w='100%'
                    border='1px solid'
                    borderColor='brand.300'
                    h='60px'
                    mb='14px'>
                    <Text color='brand.300' fontSize='sm'>
                      Live Preview
                    </Text>
                  </Button>
                </Link>
                <Link href={buttonLinks.free} textDecoration='none'>
                  <Button
                    borderRadius='70px'
                    bg='brand.300'
                    _hover={{ bg: "#1A05B7" }}
                    _active={{ bg: "#1A05B7" }}
                    w='100%'
                    h='60px'
                    mb='14px'
                    _hover={{ bg: "#1A05B7" }}>
                    <Text color='#fff' fontSize='sm'>
                      Download For Free
                    </Text>
                  </Button>
                </Link>
                {title === "Glassy - Glassmorphism Cards" ||
                title === "Task List UI - React" ||
                title === "Saturn - Headers UI Kit" ? null : (
                  <NavLink to={buttonLinks.upgrade} textDecoration='none'>
                    <Button
                      borderRadius='70px'
                      bg='linear-gradient(114.41deg, #29E9F5 10.84%, #7A64FF 36.58%, #FF508B 66.69%, #FD6D53 94.62%, #FD6D53 94.62%)'
                      w='100%'
                      h='60px'
                      _hover='none'
                      _active='none'>
                      <Text color='#fff' fontSize='sm'>
                        Upgrade to PRO
                      </Text>
                    </Button>
                  </NavLink>
                )}
              </>
            ) : (
              <>
                <Link href={buttonLinks.live} textDecoration='none'>
                  <Button
                    borderRadius='70px'
                    bg='#ECE9FF'
                    _hover={{
                      bg: "#ECE9FF",
                    }}
                    _active={{
                      bg: "#ECE9FF",
                    }}
                    w='100%'
                    border='1px solid'
                    borderColor='brand.300'
                    h='60px'
                    mb='14px'>
                    <Text color='brand.300' fontSize='sm'>
                      Live Preview
                    </Text>
                  </Button>
                </Link>
                <Link
                  href={
                    activeLicense.freelancer
                      ? buttonLinks.buy.freelancer
                      : activeLicense.team
                      ? buttonLinks.buy.team
                      : buttonLinks.buy.enterprise
                  }
                  textDecoration='none'>
                  <Button
                    borderRadius='70px'
                    bg='brand.300'
                    w='100%'
                    h='60px'
                    _hover={{ bg: "#1A05B7" }}
                    _active={{ bg: "#1A05B7" }}
                    w='100%'
                    h='60px'
                    _hover={{ bg: "#1A05B7" }}>
                    <Text color='#fff' fontSize='sm'>
                      Buy it Now!
                    </Text>
                  </Button>
                </Link>
              </>
            )}
            <Divider h='1px' bg='rgba(135, 140, 189, 0.2)' my='32px' />
            <Flex
              direction='column'
              p='24px'
              bg='#F8F7FF'
              borderRadius='30px'
              mb='26px'>
              <Text color='brand.300' fontSize='md' fontWeight='500' mb='10px'>
                Features
              </Text>
              <Stack direction='column' spacing='6px'>
                <Flex align='center'>
                  <Icon
                    as={BsPatchCheckFill}
                    me='12px'
                    w='18px'
                    h='18px'
                    color='brand.300'
                  />
                  <Text color='#878CBD' fontSize='sm'>
                    Perfect for construction businesses
                  </Text>
                </Flex>
                <Flex align='center'>
                  <Icon
                    as={BsPatchCheckFill}
                    me='12px'
                    w='18px'
                    h='18px'
                    color='brand.300'
                  />
                  <Text color='#878CBD' fontSize='sm'>
                    Production Quality Build
                  </Text>
                </Flex>
                <Flex align='center'>
                  <Icon
                    as={BsPatchCheckFill}
                    me='12px'
                    w='18px'
                    h='18px'
                    color='brand.300'
                  />
                  <Text color='#878CBD' fontSize='sm'>
                    Beautiful & Modern
                  </Text>
                </Flex>
                <Flex align='center'>
                  <Icon
                    as={BsPatchCheckFill}
                    me='12px'
                    w='18px'
                    h='18px'
                    color='brand.300'
                  />
                  <Text color='#878CBD' fontSize='sm'>
                    Easily Edited
                  </Text>
                </Flex>
              </Stack>
              <Divider h='1px' bg='rgba(135, 140, 189, 0.2)' my='22px' />
              <Text color='brand.300' fontWeight='500' mb='20px'>
                Compatibility
              </Text>
              <Stack direction='row' spacing='14px'>
                {compatibility.map((item, index) => item)}
              </Stack>
              <Divider h='1px' bg='rgba(135, 140, 189, 0.2)' my='22px' />
              <Text fontSize='sm' color='#878CBD' textAlign='center'>
                Sold via gumroad.com
              </Text>
            </Flex>
            <Link href='https://dribbble.com/simmmple' target='_blank'>
              <Flex
                justify='space-between'
                p='22px'
                border='1px solid #ECE9FF'
                borderRadius='30px'
                align='center'
                mb='24px'>
                <Flex align='center' me='auto'>
                  <DribbleIcon w='36px' h='36px' me='20px' />
                  <Flex direction='column'>
                    <Text color='brand.700' fontSize='md'>
                      Simmmple
                    </Text>
                    <Text color='#878CBD' fontSize='sm'>
                      Follow us on Dribbble
                    </Text>
                  </Flex>
                </Flex>
                <ChevronRight w='16px' h='16px' />
              </Flex>
            </Link>
            <Text
              textAlign='center'
              color='#878CBD'
              fontSize='xs'
              maxW='80%'
              mx='auto'>
              *Product sales are made via the official Gumroad marketplace.
            </Text>
          </Flex>
        </Grid>
        <Divider h='1px' bg='rgba(135, 140, 189, 0.2)' my='80px' />
        <Flex direction='column' maxW='1170px' mx='auto' textAlign='center'>
          <Text
            color='brand.300'
            fontSize='xs'
            fontWeight='bold'
            mb='16px'
            letterSpacing='2px'>
            RELATED PRODUCTS
          </Text>
          <Text
            color='brand.700'
            fontSize={{ sm: "32px", md: "40px" }}
            fontWeight='500'
            mb='54px'>
            Other products you might like
          </Text>
          <ProductList products={filteredProducts} />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Product;
