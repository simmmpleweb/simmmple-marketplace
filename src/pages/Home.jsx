import React, { useRef, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  Flex,
  Box,
  Image,
  Text,
  FormControl,
  Input,
  Icon,
  Grid,
  Button,
  Tag,
  Link,
} from "@chakra-ui/react";

// Custom Components
import Card from "components/card/Card";
import CardBody from "components/card/CardBody";
import ProductList from "components/products/ProductList";
import Countdown from "components/countdown/Countdown";
import { featuredProducts } from "variables/products";
import { latestProducts } from "variables/products";

// Icons
import {
  LeftButtonEffect,
  RightButtonEffect,
  SimmmpleLogoBundle,
  ArticleIcon1,
  ArticleIcon2,
  ArticleIcon3,
  SearchIcon,
} from "components/icons/Icons";
import { MdKeyboardArrowRight } from "react-icons/md";

// Images
import homeBg from "assets/img/homepage/home-background.png";
import onHomeBg from "assets/img/homepage/on-home-background.png";
import bundleBg from "assets/img/homepage/bundle-background.png";
import googleLogo from "assets/img/homepage/google.png";
import msnLogo from "assets/img/homepage/msn.png";
import microsoftLogo from "assets/img/homepage/microsoft.png";
import zohoLogo from "assets/img/homepage/zoho.png";
import georgiatechLogo from "assets/img/homepage/georgiatech.png";
import deloitteLogo from "assets/img/homepage/deloitte.png";
import figmaLogo from "assets/img/homepage/figma2.png";
import vscodeLogo from "assets/img/homepage/vscode2.png";
import mailLogo from "assets/img/homepage/mail2.png";
import simmmpleButtonLogo from "assets/img/homepage/simmmple-button.png";

import Layout from "components/layout/Layout";

const Home = () => {
  const leftEffect = useRef();
  const rightEffect = useRef();
  const inputValue = useRef("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.current.value === "") {
      history.push("/search/  ");
    } else {
      const urlParameter = inputValue.current.value.split(" ").join("-");
      history.push(`/search/${urlParameter}`);
    }
  };

  useEffect(() => {
    document.title =
      "Premium and Stunning UI Kits, Templates and Themes for developers, designers & startups @ Simmmple";
  }, []);

  return (
    <Layout>
      <Flex direction='column' bg='#fff' maxW='100%' overflowX='hidden'>
        {/* Hero */}
        <Flex
          minH={{ base: "800px", md: "870px" }}
          bgImage={homeBg}
          bgSize='cover'
          bgPosition={{ base: "-46px 0px", md: "center" }}
          position='relative'>
          <Box
            position='absolute'
            right={{ xl: "-250px", "2xl": "-150px", "3xl": "0px" }}
            mt='70px'
            display={{ base: "none", lg: "none", xl: "block" }}>
            <Image src={onHomeBg} w='100%' h='100%' />
          </Box>
          <Flex
            direction='column'
            w='1170px'
            maxW='100%'
            mx='auto'
            mt={{ base: "180px", md: "210px" }}
            px={{ base: "26px", xl: "0px" }}>
            <Flex direction='column' maxW='528px' mb='54px'>
              <Text
                fontSize='xs'
                color='#fff'
                fontWeight='bold'
                mb='16px'
                letterSpacing='2px'>
                BUILD BETTER, BUILD FASTER
              </Text>
              <Text
                fontSize={{ base: "27px", "2sm": "29px", md: "44px" }}
                color='#fff'
                fontWeight='500'
                letterSpacing='-1px'
                lineHeight={{ base: "40px", md: "56px" }}
                mb={{ base: "26px", md: "36px" }}>
                Premium Digital Solutions for developers, designers, agencies &
                startups
              </Text>
              <Text
                fontWeight='normal'
                fontSize='16px'
                lineHeight='28px'
                color='#fff'
                maxW='438px'>
                Join over{" "}
                <Text as='span' fontWeight='bold'>
                  10,000+ developers, designers & startups
                </Text>{" "}
                that use our digital solutions to quickly design and build
                responsive mobile-first websites and apps.
              </Text>
            </Flex>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Flex
                  justify='space-between'
                  bg='#fff'
                  borderRadius='70px'
                  w='470px'
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
              </FormControl>
            </form>
          </Flex>
        </Flex>

        {/* Categories */}
        <Flex direction='column' maxW='1170px' mx='auto' px='20px'>
          <Grid
            templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(6, 1fr)" }}
            gap={{ base: "40px", lg: "70px" }}
            align='center'
            justify='center'
            bg='#fff'
            borderRadius='30px'
            p={{ base: "45px 50px", lg: "45px 100px" }}
            boxShadow='0px 18px 40px rgba(112, 144, 176, 0.12)'
            w='100%'
            transform='translateY(-50%)'
            mb='50px'>
            <Flex align='center' justify='center'>
              <Image src={googleLogo} />
            </Flex>
            <Flex align='center' justify='center'>
              <Image src={msnLogo} />
            </Flex>
            <Flex align='center' justify='center'>
              <Image src={microsoftLogo} />
            </Flex>
            <Flex align='center' justify='center'>
              <Image src={zohoLogo} />
            </Flex>
            <Flex align='center' justify='center'>
              <Image src={georgiatechLogo} />
            </Flex>
            <Flex align='center' justify='center'>
              <Image src={deloitteLogo} />
            </Flex>
          </Grid>
          <Flex direction='column' pb='100px'>
            <Text
              fontSize='xs'
              color='brand.300'
              fontWeight='bold'
              mb='16px'
              letterSpacing='2px'>
              BUILD BETTER, BUILD FASTER
            </Text>
            <Text
              fontSize='34px'
              lineHeight='44px'
              letterSpacing='-1px'
              color='brand.700'
              fontWeight='500'
              mb='58px'>
              Browse popular categories
            </Text>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap='20px'
              w='100%'>
              <Card>
                <CardBody minH='300px'>
                  <Flex
                    direction='column'
                    align='center'
                    w='100%'
                    h='100%'
                    justify='center'>
                    <Box w='75px' h='110px' mb='50px'>
                      <Image src={figmaLogo} w='100%' h='100%' />
                    </Box>
                    <Text
                      color='brand.700'
                      fontWeight='500'
                      fontSize='22px'
                      mb='12px'>
                      Figma Products
                    </Text>
                    <NavLink to='/templates/figma'>
                      <Flex align='center' color='brand.300'>
                        <Text
                          fontSize='16px'
                          fontWeight='400'
                          color='brand.300'
                          me='4px'>
                          See all products
                        </Text>
                        <Icon
                          as={MdKeyboardArrowRight}
                          w='14px'
                          h='14px'
                          mt='4px'
                        />
                      </Flex>
                    </NavLink>
                  </Flex>
                </CardBody>
              </Card>
              <Card>
                <CardBody minH='300px'>
                  <Flex
                    direction='column'
                    align='center'
                    w='100%'
                    h='100%'
                    justify='center'>
                    <Box w='116px' h='110px' mb='50px'>
                      <Image src={vscodeLogo} w='100%' h='100%' />
                    </Box>
                    <Text
                      color='brand.700'
                      fontWeight='500'
                      fontSize='22px'
                      mb='12px'>
                      Coded Products
                    </Text>
                    <NavLink to='/templates/all-templates'>
                      <Flex align='center' color='brand.300'>
                        <Text
                          fontSize='16px'
                          fontWeight='400'
                          color='brand.300'
                          me='4px'>
                          See all products
                        </Text>
                        <Icon
                          as={MdKeyboardArrowRight}
                          w='14px'
                          h='14px'
                          mt='4px'
                        />
                      </Flex>
                    </NavLink>
                  </Flex>
                </CardBody>
              </Card>
              <Card>
                <CardBody minH='300px'>
                  <Flex
                    direction='column'
                    align='center'
                    w='100%'
                    h='100%'
                    justify='center'>
                    <Box w='140px' mb='32px'>
                      <Image src={mailLogo} w='100%' h='100%' />
                    </Box>
                    <Text
                      color='brand.700'
                      fontWeight='500'
                      fontSize='22px'
                      mb='12px'>
                      Articles & Guides
                    </Text>
                    <Link href='https://blog.simmmple.com'>
                      <Flex align='center' color='brand.300'>
                        <Text
                          fontSize='16px'
                          fontWeight='400'
                          color='brand.300'
                          me='4px'>
                          Learn more
                        </Text>
                        <Icon
                          as={MdKeyboardArrowRight}
                          w='14px'
                          h='14px'
                          mt='4px'
                        />
                      </Flex>
                    </Link>
                  </Flex>
                </CardBody>
              </Card>
              <Card>
                <CardBody minH='300px'>
                  <Flex
                    direction='column'
                    align='center'
                    w='100%'
                    h='100%'
                    justify='center'>
                    <Box w='165px' transform='rotate(-5deg)'>
                      <Image src={simmmpleButtonLogo} w='100%' h='100%' />
                    </Box>
                    <Text
                      color='brand.700'
                      fontWeight='500'
                      fontSize='22px'
                      mb='12px'>
                      Apps & Plugins
                    </Text>
                    <NavLink to='/apps'>
                      <Flex align='center' color='brand.300'>
                        <Text
                          fontSize='16px'
                          fontWeight='400'
                          color='brand.300'
                          me='4px'>
                          Learn more
                        </Text>
                        <Icon
                          as={MdKeyboardArrowRight}
                          w='14px'
                          h='14px'
                          mt='4px'
                        />
                      </Flex>
                    </NavLink>
                  </Flex>
                </CardBody>
              </Card>
            </Grid>
          </Flex>
        </Flex>

        {/* Featured */}
        <Flex bg='#F4F7FE' py='100px' overflowX='hidden' px='20px'>
          <Flex direction='column' w='1170px' mx='auto'>
            <Flex justify='space-between' align='center' w='100%' mb='72px'>
              <Flex direction='column'>
                <Text
                  fontSize='xs'
                  color='brand.300'
                  fontWeight='bold'
                  mb='16px'
                  letterSpacing='2px'>
                  OUR DIGITAL PRODUCTS
                </Text>
                <Text
                  fontSize='34px'
                  lineHeight='44px'
                  letterSpacing='-1px'
                  color='brand.700'
                  fontWeight='500'>
                  Featured products
                </Text>
              </Flex>

              <NavLink to='/templates/all-templates'>
                <Button
                  bg='#fff'
                  w='190px'
                  h='56px'
                  display={{ base: "none", md: "flex" }}
                  _hover={{
                    bg: "#ECE9FF",
                  }}
                  _active={{
                    bg: "#ECE9FF",
                  }}>
                  <Text color='brand.300' fontWeight='500' fontSize='sm'>
                    Explore all Products
                  </Text>
                </Button>
              </NavLink>
            </Flex>
            <ProductList products={featuredProducts} />
            <Button
              bg='#fff'
              w='190px'
              h='56px'
              display={{ base: "flex", md: "none" }}
              mt='50px'
              mx='auto'>
              <Text color='brand.300' fontWeight='500' fontSize='sm'>
                Explore all Products
              </Text>
            </Button>
          </Flex>
        </Flex>

        {/* Bundles */}
        <Flex
          justify='center'
          align='center'
          bgImage={bundleBg}
          h={{ md: "760px" }}
          py={{ base: "80px", md: "0px" }}
          px={{ base: "20px", md: "0px" }}
          bgSize='cover'
          bgPosition={{ base: "-620px 0px", md: "center" }}
          maxW='100%'>
          <Flex
            direction='column'
            justify='center'
            align='center'
            textAlign='center'
            maxW='100%'>
            <SimmmpleLogoBundle
              w={{ base: "162px", md: "182px" }}
              h='50px'
              mb='48px'
            />
            <Text
              fontSize={{ base: "48px", md: "64px" }}
              lineHeight={{ base: "58px", md: "72px" }}
              color='#fff'
              fontWeight='bold'
              mb='25px'>
              Exclusive Digital Bundle
            </Text>
            <Text
              color='#fff'
              fontSize={{ base: "16px", md: "20px" }}
              lineHeight={{ base: "30px", md: "40px" }}
              maxW={{ md: "70%" }}
              mb='50px'>
              <Text as='span' fontWeight='bold'>
                Save up to 80% OFF{" "}
              </Text>
              to all Premium Coded & Design Products & Tools with our Exclusive
              Digital Bundle!
            </Text>
            <Box>
              <Countdown date='17 December 2021' />
            </Box>
            <Flex align='center' mt='54px'>
              <LeftButtonEffect
                ref={leftEffect}
                color='#fff'
                w='35px'
                h='115px'
                transition='all .5s ease'
              />
              <NavLink to='/bundles'>
                <Button
                  bg='white'
                  variant='solid'
                  w='190px'
                  h='56px'
                  onMouseEnter={() => {
                    leftEffect.current.style.transform = "translateX(-5px)";
                    rightEffect.current.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={() => {
                    leftEffect.current.style.transform = "translateX(5px)";
                    rightEffect.current.style.transform = "translateX(-5px)";
                  }}>
                  <Text color='brand.700' fontSize='sm'>
                    Save up to 80% now
                  </Text>
                </Button>
              </NavLink>
              <RightButtonEffect
                ref={rightEffect}
                color='#fff'
                w='35px'
                h='115px'
                transition='all .5s ease'
              />
            </Flex>
          </Flex>
        </Flex>

        {/* Latest */}
        <Flex bg='#F4F7FE' py='100px' px='20px'>
          <Flex direction='column' w='1170px' mx='auto'>
            <Flex justify='space-between' align='center' w='100%' mb='72px'>
              <Flex direction='column'>
                <Text
                  fontSize='xs'
                  color='brand.300'
                  fontWeight='bold'
                  mb='16px'
                  letterSpacing='2px'>
                  OUR DIGITAL PRODUCTS
                </Text>
                <Text
                  fontSize='34px'
                  lineHeight='44px'
                  letterSpacing='-1px'
                  color='brand.700'
                  fontWeight='500'>
                  Latest products
                </Text>
              </Flex>
              <NavLink to='/templates/all-templates'>
                <Button
                  bg='#fff'
                  w='190px'
                  h='56px'
                  _hover={{
                    bg: "#ECE9FF",
                  }}
                  _active={{
                    bg: "#ECE9FF",
                  }}
                  display={{ base: "none", md: "flex" }}>
                  <Text color='brand.300' fontWeight='500' fontSize='sm'>
                    Explore all Products
                  </Text>
                </Button>
              </NavLink>
            </Flex>
            <ProductList products={latestProducts} />

            <Button
              bg='#fff'
              w='190px'
              h='56px'
              display={{ base: "flex", md: "none" }}
              mx='auto'
              mt='40px'>
              <Text color='brand.300' fontWeight='500' fontSize='sm'>
                Explore all Products
              </Text>
            </Button>
          </Flex>
        </Flex>

        {/* Resources */}
        <Flex direction='column' bg='#fff'>
          <Flex
            direction='column'
            w='1170px'
            mx='auto'
            pt='100px'
            pb='225px'
            maxW='100%'
            px='20px'>
            <Flex
              direction='column'
              align='center'
              justify='center'
              textAlign='center'
              mb='72px'>
              <Text
                fontSize='xs'
                color='brand.300'
                fontWeight='bold'
                mb='16px'
                letterSpacing='2px'>
                TUTORIALS, ARTICLES & RESOURCES
              </Text>
              <Text
                fontSize='34px'
                color='brand.700'
                fontWeight='bold'
                mb='20px'>
                Discover resources & guides
              </Text>
              <Text
                fontSize='md'
                color='#878CBD'
                fontWeight='normal'
                maxW='500px'>
                Discover resources, guides and articles that can help you build
                unique solutions. Visit our learning centre for heaps of
                content.
              </Text>
            </Flex>
            <Grid
              templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
              gap='22px'>
              <Link href='https://blog.simmmple.com'>
                <Card
                  boxShadow='45px 76px 113px 7px rgba(112, 144, 176, 0.08)'
                  pb='35px'>
                  <CardBody>
                    <Flex direction='column'>
                      <Flex
                        align='center'
                        mb='30px'
                        justify='center'
                        bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
                        borderRadius='24px'
                        w='100%'
                        h='230px'>
                        <ArticleIcon1 w='87' h='105' color='#fff' />
                      </Flex>
                      <Tag
                        color='brand.300'
                        bg='#ECE9FF'
                        borderRadius='30px'
                        p='7px 14px'
                        maxW='80px'
                        mb='10px'>
                        Articles
                      </Tag>
                      <Text
                        color='brand.700'
                        fontSize='lg'
                        fontWeight='500'
                        mb='14px'>
                        How to build a design system if you're the only designer
                        in a startup
                      </Text>
                      <Text fontSize='sm' color='#878CBD' fontWeight='normal'>
                        It's always hard to be the only person in a company who
                        is responsible for product design. Your day...
                      </Text>
                    </Flex>
                  </CardBody>
                </Card>
              </Link>
              <Link href='https://blog.simmmple.com'>
                <Card
                  boxShadow='45px 76px 113px 7px rgba(112, 144, 176, 0.08)'
                  pb='35px'>
                  <CardBody>
                    <Flex direction='column'>
                      <Flex
                        align='center'
                        direction='column'
                        mb='30px'
                        justify='center'
                        bg='linear-gradient(109.6deg, #FF9966 17.44%, #FF5E62 78.63%)'
                        borderRadius='24px'
                        w='100%'
                        h='230px'>
                        <ArticleIcon2
                          w='72px'
                          h='72px'
                          color='#fff'
                          mb='20px'
                        />
                        <Text color='#fff' fontSize='xl' fontWeight='bold'>
                          SEO Strategy
                        </Text>
                      </Flex>
                      <Tag
                        color='brand.300'
                        bg='#ECE9FF'
                        borderRadius='30px'
                        p='7px 14px'
                        maxW='80px'
                        mb='10px'>
                        Articles
                      </Tag>
                      <Text
                        color='brand.700'
                        fontSize='lg'
                        fontWeight='500'
                        mb='14px'>
                        How to build a design system if you're the only designer
                        in a startup
                      </Text>
                      <Text fontSize='sm' color='#878CBD' fontWeight='normal'>
                        It's always hard to be the only person in a company who
                        is responsible for product design. Your day...
                      </Text>
                    </Flex>
                  </CardBody>
                </Card>
              </Link>
              <Link href='https://blog.simmmple.com'>
                <Card
                  display={{ base: "none", lg: "flex" }}
                  boxShadow='45px 76px 113px 7px rgba(112, 144, 176, 0.08)'
                  pb='35px'>
                  <CardBody>
                    <Flex direction='column'>
                      <Flex
                        align='center'
                        mb='30px'
                        justify='center'
                        bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
                        borderRadius='24px'
                        w='100%'
                        h='230px'>
                        <ArticleIcon3 w='87' h='105' color='#fff' />
                      </Flex>
                      <Tag
                        color='brand.300'
                        bg='#ECE9FF'
                        borderRadius='30px'
                        p='7px 14px'
                        maxW='80px'
                        mb='10px'>
                        Articles
                      </Tag>
                      <Text
                        color='brand.700'
                        fontSize='lg'
                        fontWeight='500'
                        mb='14px'>
                        How to build a design system if you're the only designer
                        in a startup
                      </Text>
                      <Text fontSize='sm' color='#878CBD' fontWeight='normal'>
                        It's always hard to be the only person in a company who
                        is responsible for product design. Your day...
                      </Text>
                    </Flex>
                  </CardBody>
                </Card>
              </Link>
            </Grid>
            <Link href='https://blog.simmmple.com' mx='auto'>
              <Button
                bg='#ECE9FF'
                w='152px'
                h='56px'
                alignSelf='center'
                mt='52px'
                _hover={{
                  bg: "#ECE9FF",
                }}
                _active={{
                  bg: "#ECE9FF",
                }}>
                <Text color='brand.300' fontSize='sm'>
                  Learn more
                </Text>
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Home;
