import { Button, Flex, Text } from "@chakra-ui/react";
import Layout from "components/layout/Layout";
// Custom Components
import { HSeparator } from "components/separator/Separator";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Affiliates = () => {
  useEffect(() => {
    document.title =
      "Affiliates - Premium and Stunning UI Kits, Templates and Themes for developers, designers & startups @ Simmmple";
  }, []);

  return (
    <Layout>
      <Flex
        direction='column'
        bg='white'
        boxShadow='75px 85px 113px 0px #7090B014'
        overflowX='hidden'
        mb='100px'
        maxW='100%'>
        <Flex
          pb='100px'
          direction='column'
          w='775px'
          maxW='100%'
          mx='auto'
          mt='150px'>
          {/* Mini Navbar */}
          <Flex
            bg='#F6F8FD'
            borderRadius='70px'
            w='582px'
            minH={{ base: "140px", md: "80px" }}
            mx='auto'
            mb='70px'
            justify='space-between'
            p='10px'
            px={{ base: "30px", md: "10px" }}
            maxW='95%'
            flexWrap={{ base: "wrap", md: "nowrap" }}>
            <NavLink to='/licenses'>
              <Button
                h='100%'
                justify='center'
                align='center'
                w='130px'
                borderRadius='30px'
                bg='transparent'
                _hover={{
                  bg: "white",
                }}
                _active={{
                  bg: "white",
                }}>
                <Text fontWeight='500' color='brand.300'>
                  License
                </Text>
              </Button>
            </NavLink>
            <NavLink to='/terms-of-service' color='brand.300'>
              <Button
                h='100%'
                justify='center'
                align='center'
                w='138px'
                borderRadius='30px'
                bg='transparent'
                _hover={{
                  bg: "white",
                }}
                _active={{
                  bg: "white",
                }}>
                <Text fontWeight='500' color='brand.300'>
                  Terms of Usage
                </Text>
              </Button>
            </NavLink>
            <NavLink to='/privacy-policy' color='brand.300'>
              <Button
                h='100%'
                justify='center'
                align='center'
                w='130px'
                borderRadius='30px'
                bg='transparent'
                _hover={{
                  bg: "white",
                }}
                _active={{
                  bg: "white",
                }}>
                <Text fontWeight='500' color='brand.300'>
                  Privacy Policy
                </Text>
              </Button>
            </NavLink>
            <NavLink to='/affiliates' color='brand.300'>
              <Button
                h='100%'
                justify='center'
                align='center'
                w='130px'
                borderRadius='30px'
                bg='white'
                _hover={{
                  bg: "white",
                }}
                _active={{
                  bg: "white",
                }}>
                <Text fontWeight='500' color='brand.300'>
                  Affiliates
                </Text>
              </Button>
            </NavLink>
          </Flex>
          {/* Main Section */}
          <Flex
            bg='white'
            boxShadow='75px 85px 113px 0px #7090B014'
            border='1px solid'
            borderColor='#E9EDF7'
            borderRadius='30px'
            flexDirection='column'
            maxW='95%'
            w='774px'
            px='50px'
            mx='auto'
            pt='80px'
            pb='50px'>
            <Text
              fontSize='40px'
              fontWeight='700'
              textAlign='center'
              mx='auto'
              mb='50px'
              color='brand.700'>
              Affiliate Notice
            </Text>
            <HSeparator w='100%' mb='40px' mx='auto' />
            {/* 1. */}
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='28px'
              fontWeight='400'
              mb='45px'>
              Please note, some of the links used on our website (
              <Text fontWeight='500' mx='3px' as='span'>
                https://simmmple.com
              </Text>
              ) are affiliate links, meaning, at no additional cost to you, we
              can earn a commission if you click through and make a purchase.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='28px'
              fontWeight='400'
              mb='45px'>
              Affiliates help us keep the lights on, without impacting our users
              experience in anyway!
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='28px'
              fontWeight='400'
              mb='45px'>
              If you have any questions at all please feel free to contact us,
              we're here to help!
            </Text>
            {/* 2. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='500'
              mb='16px'
              display='flex'>
              Contact
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='38px'
              fontWeight='400'
              mb='45px'>
              You may contact us at any time via:
              <br />
              Simmmple
              <br />
              email: hello@simmmple.com
              <br />
              Version 1.0.0 (15/11/2021)
            </Text>
            <HSeparator w='100%' mb='40px' mx='auto' />
            <Text
              fontSize='lg'
              lineHeight='28px'
              fontWeight='400'
              textAlign='center'
              mx='auto'>
              Got a question?{" "}
              <NavLink to='/contact'>
                <Text
                  textDecoration='underline'
                  color='brand.300'
                  fontWeight='500'
                  as='span'
                  mx='3px'>
                  Contact us
                </Text>
              </NavLink>
              {""}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Affiliates;
