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
            mb='15px'>
            Privacy Policy
          </Text>
          <Text
            color='#878CBD'
            textAlign='center'
            mx='auto'
            fontSize='md'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            Last updated January 29, 2021
          </Text>
          <HSeparator w='100%' mb='40px' mx='auto' />
          {/* 1. */}
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            Thank you for choosing to be part of our community at Simmmple Web
            LLC ("
            <Text fontWeight='500' mx='3px' as='span'>
              Company
            </Text>{" "}
            ", "
            <Text fontWeight='500' mx='3px' as='span'>
              we
            </Text>{" "}
            ", "
            <Text fontWeight='500' mx='3px' as='span'>
              us
            </Text>{" "}
            ", "
            <Text fontWeight='500' mx='3px' as='span'>
              our
            </Text>
            "). We are committed to protecting your personal information and
            your right to privacy. If you have any questions or concerns about
            this privacy notice, or our practices with regards to your personal
            information, please contact us at our{" "}
            <Link
              to='#'
              textDecoration='underline'
              color='brand.300'
              mx='3px'
              fontWeight='500'>
              contact page.
            </Link>
          </Text>
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            When you visit our website
            <Link
              to='#'
              textDecoration='underline'
              color='brand.300'
              mx='3px'
              fontWeight='500'>
              https://simmmple.com
            </Link>{" "}
            (the "
            <Text fontWeight='500' mx='3px' as='span'>
              Website
            </Text>
            "), and more generally, use any of our services (the "Services",
            which include the Website ), we appreciate that you are trusting us
            with your personal information. We take your privacy very seriously.
            In this privacy notice, we seek to explain to you in the clearest
            way possible what information we collect, how we use it and what
            rights you have in relation to it. We hope you take some time to
            read through it carefully, as it is important. If there are any
            terms in this privacy notice that you do not agree with, please
            discontinue use of our Services immediately.
          </Text>
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            This privacy notice applies to all information collected through our
            Services (which, as described above, includes our Website ), as well
            as, any related services, sales, marketing or events.
          </Text>
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='500'
            mb='45px'>
            Please read this privacy notice carefully as it will help you
            understand what we do with the information that we collect.
          </Text>
          {/* 2. */}
          <Text
            color='brand.700'
            fontSize='30px'
            lineHeight='40px'
            fontWeight='500'
            mb='16px'
            display='flex'>
            Table of Contents
          </Text>
          <OrderedList>
            <ListItem color='brand.300' fontWeight='500' mb='38px'>
              <Link href='#1' textDecoration='none !important'>
                WHAT INFORMATION DO WE COLLECT?
              </Link>
            </ListItem>
            <ListItem color='brand.300' fontWeight='500' mb='38px'>
              <Link href='#2' textDecoration='none !important'>
                HOW DO WE USE YOUR INFORMATION?
              </Link>
            </ListItem>
            <ListItem color='brand.300' fontWeight='500' mb='38px'>
              <Link href='#3' textDecoration='none !important'>
                WILL YOUR INFORMATION BE SHARED WITH ANYONE?
              </Link>
            </ListItem>
            <ListItem color='brand.300' fontWeight='500' mb='38px'>
              <Link href='#4' textDecoration='none !important'>
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </Link>
            </ListItem>
            <ListItem color='brand.300' fontWeight='500' mb='38px'>
              <Link href='#5' textDecoration='none !important'>
                WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
              </Link>
            </ListItem>
            <ListItem color='brand.300' fontWeight='500' mb='38px'>
              <Link href='#6' textDecoration='none !important'>
                HOW LONG DO WE KEEP YOUR INFORMATION?
              </Link>
            </ListItem>
            <ListItem color='brand.300' fontWeight='500' mb='38px'>
              <Link href='#7' textDecoration='none !important'>
                WHAT ARE YOUR PRIVACY RIGHTS?
              </Link>
            </ListItem>
            <ListItem color='brand.300' fontWeight='500' mb='38px'>
              <Link href='#8' textDecoration='none !important'>
                CONTROLS FOR DO-NOT-TRACK FEATURES
              </Link>
            </ListItem>
            <ListItem color='brand.300' fontWeight='500' mb='38px'>
              <Link href='#9' textDecoration='none !important'>
                DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </Link>
            </ListItem>
            <ListItem color='brand.300' fontWeight='500' mb='38px'>
              <Link href='#10' textDecoration='none !important'>
                DO WE MAKE UPDATES TO THIS NOTICE?
              </Link>
            </ListItem>
            <ListItem color='brand.300' fontWeight='500' mb='38px'>
              <Link href='#11' textDecoration='none !important'>
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </Link>
            </ListItem>
            <ListItem color='brand.300' fontWeight='500' mb='38px'>
              <Link href='#12' textDecoration='none !important'>
                HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM
                YOU?
              </Link>
            </ListItem>
          </OrderedList>
          {/* 3. */}
          <Text
            id='1'
            color='brand.700'
            fontSize='30px'
            lineHeight='40px'
            fontWeight='500'
            mb='16px'
            display='flex'>
            1. What information do we collect?
          </Text>
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            <Text fontWeight='500' mx='3px' ms='0px' as='span'>
              In Short:
            </Text>
            We collect personal information that you provide to us.
          </Text>
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            We collect personal information that you voluntarily provide to us
            when you register on the Website, express an interest in obtaining
            information about us or our products and Services, when you
            participate in activities on the Website or otherwise when you
            contact us.
          </Text>
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            The personal information that we collect depends on the context of
            your interactions with us and the Website, the choices you make and
            the products and features you use. The personal information we
            collect may include the following:
          </Text>
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            <Text fontWeight='500' mx='3px' ms='0px' as='span'>
              Personal Information Provided by You.
            </Text>
            We collect names; email addresses; passwords; and other similar
            information.
          </Text>
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            <Text fontWeight='500' mx='3px' ms='0px' as='span'>
              Payment Data.
            </Text>{" "}
            We may collect data necessary to process your payment if you make
            purchases, such as your payment instrument number (such as a credit
            card number), and the security code associated with your payment
            instrument. All payment data is stored by Gumroad. You may find
            their privacy notice link(s) here:
            <Link
              to='https://gumroad.com/privacy'
              textDecoration='underline'
              color='brand.300'
              mx='3px'
              fontWeight='500'>
              https://gumroad.com/privacy.
            </Link>
          </Text>
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            All personal information that you provide to us must be true,
            complete and accurate, and you must notify us of any changes to such
            personal information.
          </Text>
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='500'
            mb='45px'>
            Information automatically collected
          </Text>
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            <Text fontWeight='500' mx='3px' me='0px' as='span'>
              In Short
            </Text>
            : Some information — such as your Internet Protocol (IP) address
            and/or browser and device characteristics — is collected
            automatically when you visit our Website.
          </Text>
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            We automatically collect certain information when you visit, use or
            navigate the Website. This information does not reveal your specific
            identity (like your name or contact information) but may include
            device and usage information, such as your IP address, browser and
            device characteristics, operating system, language preferences,
            referring URLs, device name, country, location, information about
            how and when you use our Website and other technical information.
            This information is primarily needed to maintain the security and
            operation of our Website, and for our internal analytics and
            reporting purposes.
          </Text>
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            Like many businesses, we also collect information through cookies
            and similar technologies.
          </Text>
          <Text
            color='#878CBD'
            fontSize='md'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            The information we collect includes:
          </Text>
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
