import {
  Button,
  Flex,
  Link,
  ListItem,
  Text,
  UnorderedList,
  OrderedList,
} from "@chakra-ui/react";
// Custom Components
import { HSeparator } from "components/separator/Separator";
import React from "react";
import { NavLink } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <Flex direction='column' bg='white' overflowX='hidden'>
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
          <Flex
            justify='center'
            align='center'
            w='130px'
            borderRadius='30px'
            bg='white'>
            <NavLink to='/privacy-policy' color='brand.300'>
              <Text fontWeight='500' color='brand.300'>
                Privacy Policy
              </Text>
            </NavLink>
          </Flex>
          <Flex justify='center' align='center' w='130px' borderRadius='30px'>
            <NavLink to='/affiliates' color='brand.300'>
              <Text fontWeight='500' color='brand.300'>
                Affiliates
              </Text>
            </NavLink>
          </Flex>
        </Flex>
        {/* Main Section */}
        <Flex
          boxShadow='75px 85px 113px 0px #7090B014'
          bg='white'
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
            End User License Agreement
          </Text>
          <HSeparator w='100%' mb='40px' mx='auto' />
          <OrderedList>
            <ListItem color='#878CBD'>
              <Text fontSize='md' lineHeight='28px' fontWeight='400' mb='25px'>
                The Enterprise License grants you, the purchaser, an ongoing,
                non-exclusive, worldwide license to make use of the digital work
                (
                <Text fontWeight='500' mx='3px' as='span'>
                  Item
                </Text>
                ) you have selected. Read the rest of this license for the
                details that apply to your use of the Item.
              </Text>
            </ListItem>
            <ListItem color='#878CBD'>
              <Text fontSize='md' lineHeight='28px' fontWeight='400' mb='25px'>
                You are licensed to use the Item to create multiple End Products
                for yourself or for clients, and the End Product may be Sold.
              </Text>
            </ListItem>
            <ListItem color='#878CBD'>
              <Text fontSize='md' lineHeight='28px' fontWeight='400' mb='25px'>
                An End Product is one of the following things, both requiring an
                application of skill and effort.
              </Text>
            </ListItem>
            <Text
              ps='75px'
              color='#878CBD'
              fontSize='md'
              lineHeight='28px'
              fontWeight='400'
              mb='25px'>
              a. For an Item that is a template, the End Product is a customised
              implementation of the Item. For example: the item is a website
              template and the end product is the final website customised with
              your content.
            </Text>
            <Text
              ps='75px'
              color='#878CBD'
              fontSize='md'
              lineHeight='28px'
              fontWeight='400'
              mb='25px'>
              b. For other types of Item, an End Product is something that
              incorporates the Item as well as other things, so that it is
              larger in scope and different in nature than the Item. For
              example: the item is an UI Kit and the end product is a website.
            </Text>
          </OrderedList>
          <HSeparator w='100%' mb='40px' mx='auto' />
          <Text
            fontSize='md'
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
          fontSize='md'
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

export default PrivacyPolicy;

/*
 */
