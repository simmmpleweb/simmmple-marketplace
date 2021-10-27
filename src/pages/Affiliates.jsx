import {
  Button,
  Flex,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
// Custom Components
import { HSeparator } from "components/separator/Separator";
import React from "react";
import { NavLink } from "react-router-dom";

const Affiliates = () => {
  return (
    <Flex
      direction='column'
      bg='white'
      boxShadow='75px 85px 113px 0px #7090B014'
      overflowX='hidden'>
      <Flex pb='100px' direction='column' w='775px' mx='auto' mt='136px'>
        {/* Mini Navbar */}
        <Flex
          bg='#F6F8FD'
          borderRadius='70px'
          w='582px'
          h='80px'
          mx='auto'
          mt='150px'
          mb='70px'
          justify='space-between'
          p='10px'>
          <Flex justify='center' align='center' w='130px' borderRadius='30px'>
            <NavLink to='/licenses'>
              <Text fontWeight='500' color='brand.300'>
                License
              </Text>
            </NavLink>
          </Flex>
          <Flex justify='center' align='center' w='138px' borderRadius='30px'>
            <NavLink to='/terms-of-service' color='brand.300'>
              <Text fontWeight='500' color='brand.300'>
                Terms of Usage
              </Text>
            </NavLink>
          </Flex>
          <Flex justify='center' align='center' w='130px' borderRadius='30px'>
            <NavLink to='/privacy-policy' color='brand.300'>
              <Text fontWeight='500' color='brand.300'>
                Privacy Policy
              </Text>
            </NavLink>
          </Flex>
          <Flex
            justify='center'
            align='center'
            w='130px'
            borderRadius='30px'
            bg='white'>
            <NavLink to='/affiliates' color='brand.300'>
              <Text fontWeight='500' color='brand.300'>
                Affiliates
              </Text>
            </NavLink>
          </Flex>
        </Flex>
        {/* Main Section */}
        <Flex
          bg='white'
          boxShadow='75px 85px 113px 0px #7090B014'
          border='1px solid'
          borderColor='#E9EDF7'
          borderRadius='30px'
          flexDirection='column'
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
            mb='50px'>
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
            ) are affiliate links, meaning, at no additional cost to you, we can
            earn a commission if you click through and make a purchase.
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
            <Link to='#' textDecoration='underline' color='brand.300' mx='3px'>
              Contact us.
            </Link>
          </Text>
        </Flex>
        {/* x. */}
        <Text
          color='brand.700'
          fontSize='30px'
          lineHeight='40px'
          fontWeight='500'
          mb='16px'
          display='flex'>
          General
        </Text>
        <Text
          color='#878CBD'
          fontSize='lg'
          lineHeight='28px'
          fontWeight='400'
          mb='45px'>
          Supplemental terms and conditions or documents that may be posted on
          the Site from time to time are hereby expressly incorporated herein by
          reference. We reserve the right, in our sole discretion, to make
          changes or modifications to these Terms of Use at any time and for any
          reason
        </Text>
        <Link to='#' textDecoration='underline' color='brand.300' mx='3px'>
          contact page
        </Link>
        <Text fontWeight='500' mx='3px' as='span'>
          X product from Simmmple
        </Text>{" "}
      </Flex>
    </Flex>
  );
};

export default Affiliates;
