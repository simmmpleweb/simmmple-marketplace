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

const Licenses = () => {
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
          <Flex
            justify='center'
            align='center'
            w='130px'
            borderRadius='30px'
            bg='white'>
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
            <NavLink to='privacy-policy' color='brand.300'>
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
            End User License Agreement
          </Text>
          <HSeparator w='100%' mb='40px' mx='auto' />
        </Flex>
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

export default Licenses;
