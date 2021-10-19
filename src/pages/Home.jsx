import React, { useRef } from "react";
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
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";

import homeBg from "../assets/img/home-background.png";
import onHomeBg from "../assets/img/on-home-background.png";
import bundleBg from "../assets/img/bundle-background.png";
import googleLogo from "../assets/img/google.png";
import msnLogo from "../assets/img/msn.png";
import microsoftLogo from "../assets/img/microsoft.png";
import zohoLogo from "../assets/img/zoho.png";
import georgiatechLogo from "../assets/img/georgiatech.png";
import deloitteLogo from "../assets/img/deloitte.png";
import figmaLogo from "../assets/img/figma2.png";
import vscodeLogo from "../assets/img/vscode2.png";
import mailLogo from "../assets/img/mail2.png";
import simmmpleButtonLogo from "../assets/img/simmmple-button.png";
import { LeftButtonEffect, RightButtonEffect, SimmmpleLogoBundle, ArticleIcon1, ArticleIcon2, ArticleIcon3 } from "../components/Icons/Icons";

import { BsSearch } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

import ProductList from "../components/Products/ProductList";
import { featuredProducts } from "../variables/products";
import Countdown from "../components/Countdown/Countdown";

const Home = () => {

  const leftEffect = useRef();
  const rightEffect = useRef();

  return (
    <Flex direction="column" bg="#fff" overflowX="hidden">
      <Flex
        minH="870px"
        bg="#333"
        bgImage={homeBg}
        bgSize="cover"
        bgPosition="center"
      >
        <Box position="absolute" right="0" mt="70px">
          <Image src={onHomeBg} w="100%" h="100%" />
        </Box>
        <Flex direction="column" w="1170px" mx="auto" mt="210px">
          <Flex direction="column" maxW="528px" mb="54px">
            <Text fontSize="xs" color="#fff" fontWeight="bold" mb="16px" letterSpacing="2px">
              BUILD BETTER, BUILD FASTER
            </Text>
            <Text fontSize="44px" color="#fff" fontWeight="500" letterSpacing="-1px" lineHeight="56px" mb="36px">
              Premium Digital Solutions for developers, designers, agencies &
              startups
            </Text>
            <Text fontWeight="normal" fontSize="16px" lineHeight="28px"  color="#fff" maxW="438px">
              Join over{" "}
              <Text as="span" fontWeight="bold">
                10,000+ developers, designers & startups
              </Text>{" "}
              that use our digital solutions to quickly design and build
              responsive mobile-first websites and apps.
            </Text>
          </Flex>
          <FormControl>
            <Flex
              justify="space-between"
              bg="#fff"
              borderRadius="70px"
              w="470px"
              h="70px"
              p="22px 32px"
              align="center"
            >
              <Input
                placeholder="eg. Venus Design System"
                boxShadow="none"
                border="none"
                _focus={{ border: "none" }}
                _placeholder={{ color: "#878CBD" }}
              />
              <Icon as={BsSearch} w="20px" h="20px" color="#878CBD" />
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
      <Flex direction="column" maxW="1170px" mx="auto">
        <Grid
          templateColumns="repeat(6, 1fr)"
          gap="70px"
          align="center"
          justify="center"
          bg="#fff"
          borderRadius="30px"
          p="45px 100px"
          boxShadow="0px 18px 40px rgba(112, 144, 176, 0.12)"
          w="100%"
          transform="translateY(-50%)"
          mb="50px"
        >
          <Flex align="center" justify="center">
            <Image src={googleLogo} />
          </Flex>
          <Flex align="center" justify="center">
            <Image src={msnLogo} />
          </Flex>
          <Flex align="center" justify="center">
            <Image src={microsoftLogo} />
          </Flex>
          <Flex align="center" justify="center">
            <Image src={zohoLogo} />
          </Flex>
          <Flex align="center" justify="center">
            <Image src={georgiatechLogo} />
          </Flex>
          <Flex align="center" justify="center">
            <Image src={deloitteLogo} />
          </Flex>
        </Grid>
        <Flex direction="column" pb="100px">
          <Text fontSize="xs" color="brand.300" fontWeight="bold" mb="16px" letterSpacing="2px">
            BUILD BETTER, BUILD FASTER
          </Text>
          <Text fontSize="34px" lineHeight="44px" letterSpacing="-1px" color="brand.700" fontWeight="500" mb="58px">
            Browse popular categories
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap="20px" h="340px" w="100%">
            <Card>
              <CardBody h="100%">
                <Flex
                  direction="column"
                  align="center"
                  w="100%"
                  h="100%"
                  justify="center"
                >
                  <Box w="75px" h="110px" mb="50px">
                    <Image src={figmaLogo} w="100%" h="100%" />
                  </Box>
                  <Text
                    color="brand.700"
                    fontWeight="500"
                    fontSize="22px"
                    mb="12px"
                  >
                    Figma Products
                  </Text>
                  <NavLink to="/">
                    <Flex align="center" color="brand.300">
                      <Text fontSize="16px" fontWeight="400" color="brand.300" me="4px">
                        See all products
                      </Text>
                      <Icon
                        as={MdKeyboardArrowRight}
                        w="14px"
                        h="14px"
                        mt="4px"
                      />
                    </Flex>
                  </NavLink>
                </Flex>
              </CardBody>
            </Card>
            <Card>
              <CardBody h="100%">
                <Flex
                  direction="column"
                  align="center"
                  w="100%"
                  h="100%"
                  justify="center"
                >
                  <Box w="116px" h="110px" mb="50px">
                    <Image src={vscodeLogo} w="100%" h="100%" />
                  </Box>
                  <Text
                    color="brand.700"
                    fontWeight="500"
                    fontSize="22px"
                    mb="12px"
                  >
                    Coded Products
                  </Text>
                  <NavLink to="/">
                    <Flex align="center" color="brand.300">
                      <Text fontSize="16px" fontWeight="400" color="brand.300" me="4px">
                        See all products
                      </Text>
                      <Icon
                        as={MdKeyboardArrowRight}
                        w="14px"
                        h="14px"
                        mt="4px"
                      />
                    </Flex>
                  </NavLink>
                </Flex>
              </CardBody>
            </Card>
            <Card>
              <CardBody h="100%">
                <Flex
                  direction="column"
                  align="center"
                  w="100%"
                  h="100%"
                  justify="center"
                >
                  <Box w="150px" w="140px" mb="32px">
                    <Image src={mailLogo} w="100%" h="100%" />
                  </Box>
                  <Text
                   color="brand.700"
                   fontWeight="500"
                   fontSize="22px"
                   mb="12px"
                  >
                    Articles & Guides
                  </Text>
                  <NavLink to="/">
                    <Flex align="center" color="brand.300">
                      <Text fontSize="16px" fontWeight="400" color="brand.300" me="4px">
                        Learn more
                      </Text>
                      <Icon
                        as={MdKeyboardArrowRight}
                        w="14px"
                        h="14px"
                        mt="4px"
                      />
                    </Flex>
                  </NavLink>
                </Flex>
              </CardBody>
            </Card>
            <Card>
              <CardBody h="100%">
                <Flex
                  direction="column"
                  align="center"
                  w="100%"
                  h="100%"
                  justify="center"
                >
                  <Box w="160px" w="165px" transform="rotate(-5deg)">
                    <Image src={simmmpleButtonLogo} w="100%" h="100%" />
                  </Box>
                  <Text
                    color="brand.700"
                    fontWeight="500"
                    fontSize="22px"
                    mb="12px"
                  >
                    Apps & Plugins
                  </Text>
                  <NavLink to="/">
                    <Flex align="center" color="brand.300">
                      <Text fontSize="16px" fontWeight="400" color="brand.300" me="4px">
                        Learn more
                      </Text>
                      <Icon
                        as={MdKeyboardArrowRight}
                        w="14px"
                        h="14px"
                        mt="4px"
                      />
                    </Flex>
                  </NavLink>
                </Flex>
              </CardBody>
            </Card>
          </Grid>
        </Flex>
        </Flex>
        <Flex bg="#F4F7FE" py="100px" overflowX="hidden">
          <Flex direction="column" w="1170px" mx="auto">
            <Flex justify="space-between" align="center" w="100%" mb="72px">
              <Flex direction="column">
                <Text
                  fontSize="xs"
                  color="brand.300"
                  fontWeight="bold"
                  mb="16px"
                  letterSpacing="2px"
                >
                  OUR DIGITAL PRODUCTS
                </Text>
                <Text
                  fontSize="34px"
                  lineHeight="44px"
                  letterSpacing="-1px"
                  color="brand.700"
                  fontWeight="500"
                >
                  Featured products
                </Text>
              </Flex>
              <Button bg="#fff" w="190px" h="56px">
                <Text color="brand.300" fontWeight="500" fontSize="sm">
                  Explore all Products
                </Text>
              </Button>
            </Flex>
            <ProductList products={featuredProducts}/>
          </Flex>
      </Flex>
          <Flex justify="center" align="center" bgImage={bundleBg} h="760px" bgSize="cover" bgPosition="center center">
                <Flex direction="column" justify="center" align="center" textAlign="center">
                    <SimmmpleLogoBundle w="182px" h="50px" mb="48px"/>
                    <Text fontSize="64px" color="#fff" fontWeight="bold" mb="25px">Exclusive Digital Bundle</Text>
                    <Text color="#fff" fontSize="20px" lineHeight="40px"  maxW="70%" mb="50px"><Text as="span" fontWeight="bold">Save up to 80% OFF </Text>to all Premium Coded & Design Products & Tools with our Exclusive Digital Bundle!</Text>
                    <Box >
                        <Countdown date='17 December 2021'/>
                    </Box>
                    <Flex align="center" mt="54px">
                        <LeftButtonEffect ref={leftEffect}color="#fff" w="35px" h="115px" transition="all .5s ease"/>
                        <Button variant="solid" w="190px" h="56px" onMouseEnter={() => {leftEffect.current.style.transform = "translateX(-5px)"; rightEffect.current.style.transform = "translateX(5px)"}} onMouseLeave={() => {leftEffect.current.style.transform = "translateX(5px)"; rightEffect.current.style.transform = "translateX(-5px)"}}>
                            <Text color="brand.700" fontSize="sm" >
                                Save up to 80% now
                            </Text>
                            </Button>
                        <RightButtonEffect ref={rightEffect} color="#fff" w="35px" h="115px" transition="all .5s ease"/>
                    </Flex>
                </Flex>
          </Flex>
          <Flex bg="#F4F7FE" py="100px">
          <Flex direction="column" w="1170px" mx="auto">
            <Flex justify="space-between" align="center" w="100%" mb="72px">
              <Flex direction="column">
                <Text
                  fontSize="xs"
                  color="brand.300"
                  fontWeight="bold"
                  mb="16px"
                  letterSpacing="2px"
                >
                  OUR DIGITAL PRODUCTS
                </Text>
                <Text
                  fontSize="34px"
                  lineHeight="44px"
                  letterSpacing="-1px"
                  color="brand.700"
                  fontWeight="500"
                >
                  Latest products
                </Text>
              </Flex>
              <Button bg="#fff" w="190px" h="56px">
                <Text color="brand.300" fontWeight="500" fontSize="sm">
                  Explore all Products
                </Text>
              </Button>
            </Flex>
            <ProductList products={featuredProducts}/>
          </Flex>
      </Flex>
          <Flex direction="column" bg="#fff">
            <Flex direction="column" w="1170px" mx="auto" pt="100px" pb="225px">
                <Flex direction="column" align="center" justify="center" textAlign="center" mb="72px">
                    <Text fontSize="xs" color="brand.300" fontWeight="bold" mb="16px">TUTORIALS, ARTICLES & RESOURCES</Text>
                    <Text fontSize="34px" color="brand.700" fontWeight="bold" mb="20px">Discover resources & guides</Text>
                    <Text fontSize="md" color="#878CBD" fontWeight="normal" maxW="500px">Discover resources, guides and articles that can help you build unique solutions. Visit our learning centre for heaps of content.</Text>
                </Flex>
                <Grid templateColumns="repeat(3, 1fr)" gap="22px">
                    <NavLink to="/">

                    <Card boxShadow="45px 76px 113px 7px rgba(112, 144, 176, 0.08)" pb="35px">
                        <CardBody>
                            <Flex direction="column">
                                <Flex align="center" mb="30px" justify="center" bg="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)" borderRadius="24px" w="100%" h="230px">
                                    <ArticleIcon1 w="87" h="105" color="#fff"/>
                                </Flex>
                                <Tag color="brand.300" bg="#ECE9FF" borderRadius="30px" p="7px 14px" maxW="80px" mb="10px">Articles</Tag>
                                <Text color="brand.700" fontSize="lg" fontWeight="500" mb="14px" >How to build a design system if you're the only designer in a startup</Text>
                                <Text fontSize="sm" color="#878CBD" fontWeight="normal">It's always hard to be the only person in a company who is responsible for product design. Your day...</Text>
                            </Flex>
                        </CardBody>
                    </Card>
                    </NavLink>
                    <NavLink to="/">

                    <Card boxShadow="45px 76px 113px 7px rgba(112, 144, 176, 0.08)" pb="35px">
                        <CardBody>
                            <Flex direction="column">
                                <Flex align="center" direction="column" mb="30px" justify="center" bg="linear-gradient(109.6deg, #FF9966 17.44%, #FF5E62 78.63%)" borderRadius="24px" w="100%" h="230px">
                                    <ArticleIcon2 w="72px" h="72px" color="#fff" mb="20px"/>
                                    <Text color="#fff" fontSize="xl" fontWeight="bold">SEO Strategy</Text>
                                </Flex>
                                <Tag color="brand.300" bg="#ECE9FF" borderRadius="30px" p="7px 14px" maxW="80px" mb="10px">Articles</Tag>
                                <Text color="brand.700" fontSize="lg" fontWeight="500" mb="14px" >How to build a design system if you're the only designer in a startup</Text>
                                <Text fontSize="sm" color="#878CBD" fontWeight="normal">It's always hard to be the only person in a company who is responsible for product design. Your day...</Text>
                            </Flex>
                        </CardBody>
                    </Card>
                    </NavLink>
                    <NavLink to="/">

                    <Card boxShadow="45px 76px 113px 7px rgba(112, 144, 176, 0.08)" pb="35px">
                        <CardBody>
                            <Flex direction="column">
                                <Flex align="center" mb="30px" justify="center" bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)" borderRadius="24px" w="100%" h="230px">
                                    <ArticleIcon3 w="87" h="105" color="#fff"/>
                                </Flex>
                                <Tag color="brand.300" bg="#ECE9FF" borderRadius="30px" p="7px 14px" maxW="80px" mb="10px">Articles</Tag>
                                <Text color="brand.700" fontSize="lg" fontWeight="500" mb="14px" >How to build a design system if you're the only designer in a startup</Text>
                                <Text fontSize="sm" color="#878CBD" fontWeight="normal">It's always hard to be the only person in a company who is responsible for product design. Your day...</Text>
                            </Flex>
                        </CardBody>
                    </Card>
                    </NavLink>
                </Grid>
                <Button bg="#ECE9FF" w="152px" h="56px" alignSelf="center" mt="52px">
                    <Text color="brand.300" fontSize="sm">
                    Learn more
                    </Text>
                </Button>
            </Flex>
          </Flex>
    </Flex>
  );
};

export default Home;
