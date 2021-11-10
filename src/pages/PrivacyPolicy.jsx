import {
  Button,
  Flex,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Layout from "components/layout/Layout";
// Custom Components
import { HSeparator } from "components/separator/Separator";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title =
      "Privacy - Premium and Stunning UI Kits, Templates and Themes for developers, designers & startups @ Simmmple";
  }, []);

  return (
    <Layout>
      <Flex
        direction='column'
        bg='white'
        maxW='100%'
        overflowX='hidden'
        mb='100px'>
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
                bg='white'
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
                bg='transparent'
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
            boxShadow='75px 85px 113px 0px #7090B014'
            bg='white'
            border='1px solid'
            borderColor='#E9EDF7'
            borderRadius='30px'
            flexDirection='column'
            w='774px'
            px={{ base: "16px", md: "50px" }}
            mx='auto'
            pt='80px'
            maxW='95%'
            pb='50px'>
            <Text
              fontSize='40px'
              fontWeight='700'
              textAlign='center'
              mx='auto'
              mb='15px'
              color='brand.700'>
              Privacy Policy
            </Text>
            <Text
              color='#878CBD'
              textAlign='center'
              mx='auto'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              Last updated January 29, 2021
            </Text>
            <HSeparator w='100%' mb='40px' mx='auto' />
            {/* 1. */}
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              Thank you for choosing to be part of our community at Simmmple Web
              LLC ("
              <Text fontWeight='500' mx='1px' as='span'>
                Company
              </Text>
              ", "
              <Text fontWeight='500' mx='1px' as='span'>
                we
              </Text>
              ", "
              <Text fontWeight='500' mx='1px' as='span'>
                us
              </Text>
              ", "
              <Text fontWeight='500' mx='1px' as='span'>
                our
              </Text>
              "). We are committed to protecting your personal information and
              your right to privacy. If you have any questions or concerns about
              this privacy notice, or our practices with regards to your
              personal information, please contact us at our{" "}
              <NavLink to='/contact'>
                <Text
                  textDecoration='underline'
                  color='brand.300'
                  fontWeight='500'
                  as='span'
                  mx='3px'>
                  contact page.
                </Text>
              </NavLink>
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              When you visit our website
              <NavLink to='/'>
                <Text
                  textDecoration='underline'
                  color='brand.300'
                  fontWeight='500'
                  as='span'
                  mx='3px'>
                  https://simmmple.com
                </Text>
              </NavLink>
              {""}
              (the "
              <Text fontWeight='500' mx='1px' as='span'>
                Website
              </Text>
              "), and more generally, use any of our services (the "Services",
              which include the Website ), we appreciate that you are trusting
              us with your personal information. We take your privacy very
              seriously. In this privacy notice, we seek to explain to you in
              the clearest way possible what information we collect, how we use
              it and what rights you have in relation to it. We hope you take
              some time to read through it carefully, as it is important. If
              there are any terms in this privacy notice that you do not agree
              with, please discontinue use of our Services immediately.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              This privacy notice applies to all information collected through
              our Services (which, as described above, includes our Website ),
              as well as, any related services, sales, marketing or events.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
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
              fontWeight='700'
              mb='22px'
              display='flex'>
              Table of Contents
            </Text>
            <OrderedList>
              <ListItem color='brand.300' fontWeight='500' mb='24px'>
                <Link href='#1' textDecoration='none !important'>
                  WHAT INFORMATION DO WE COLLECT?
                </Link>
              </ListItem>
              <ListItem color='brand.300' fontWeight='500' mb='24px'>
                <Link href='#2' textDecoration='none !important'>
                  HOW DO WE USE YOUR INFORMATION?
                </Link>
              </ListItem>
              <ListItem color='brand.300' fontWeight='500' mb='24px'>
                <Link href='#3' textDecoration='none !important'>
                  WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                </Link>
              </ListItem>
              <ListItem color='brand.300' fontWeight='500' mb='24px'>
                <Link href='#4' textDecoration='none !important'>
                  DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </Link>
              </ListItem>
              <ListItem color='brand.300' fontWeight='500' mb='24px'>
                <Link href='#5' textDecoration='none !important'>
                  WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                </Link>
              </ListItem>
              <ListItem color='brand.300' fontWeight='500' mb='24px'>
                <Link href='#6' textDecoration='none !important'>
                  HOW LONG DO WE KEEP YOUR INFORMATION?
                </Link>
              </ListItem>
              <ListItem color='brand.300' fontWeight='500' mb='24px'>
                <Link href='#7' textDecoration='none !important'>
                  WHAT ARE YOUR PRIVACY RIGHTS?
                </Link>
              </ListItem>
              <ListItem color='brand.300' fontWeight='500' mb='24px'>
                <Link href='#8' textDecoration='none !important'>
                  CONTROLS FOR DO-NOT-TRACK FEATURES
                </Link>
              </ListItem>
              <ListItem color='brand.300' fontWeight='500' mb='24px'>
                <Link href='#9' textDecoration='none !important'>
                  DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </Link>
              </ListItem>
              <ListItem color='brand.300' fontWeight='500' mb='24px'>
                <Link href='#10' textDecoration='none !important'>
                  DO WE MAKE UPDATES TO THIS NOTICE?
                </Link>
              </ListItem>
              <ListItem color='brand.300' fontWeight='500' mb='24px'>
                <Link href='#11' textDecoration='none !important'>
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </Link>
              </ListItem>
              <ListItem color='brand.300' fontWeight='500' mb='40px'>
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
              fontWeight='700'
              mb='16px'
              display='flex'>
              1. What information do we collect?
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='38px'>
              <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                In Short:
              </Text>
              We collect personal information that you provide to us.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='38px'>
              We collect personal information that you voluntarily provide to us
              when you register on the Website, express an interest in obtaining
              information about us or our products and Services, when you
              participate in activities on the Website or otherwise when you
              contact us.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='38px'>
              The personal information that we collect depends on the context of
              your interactions with us and the Website, the choices you make
              and the products and features you use. The personal information we
              collect may include the following:
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='38px'>
              <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                Personal Information Provided by You.
              </Text>
              We collect names; email addresses; passwords; and other similar
              information.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='38px'>
              <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                Payment Data.
              </Text>{" "}
              We may collect data necessary to process your payment if you make
              purchases, such as your payment instrument number (such as a
              credit card number), and the security code associated with your
              payment instrument. All payment data is stored by Gumroad. You may
              find their privacy notice link(s) here:
              <Link
                href='https://gumroad.com/privacy'
                textDecoration='underline'
                color='brand.300'
                mx='3px'
                fontWeight='500'>
                https://gumroad.com/privacy.
              </Link>
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='38px'>
              All personal information that you provide to us must be true,
              complete and accurate, and you must notify us of any changes to
              such personal information.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='500'
              mb='38px'>
              Information automatically collected
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='38px'>
              <Text fontWeight='500' mx='3px' me='0px' as='span'>
                In Short
              </Text>
              : Some information — such as your Internet Protocol (IP) address
              and/or browser and device characteristics — is collected
              automatically when you visit our Website.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='38px'>
              We automatically collect certain information when you visit, use
              or navigate the Website. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Website and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Website, and for our
              internal analytics and reporting purposes.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='38px'>
              Like many businesses, we also collect information through cookies
              and similar technologies.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='38px'>
              The information we collect includes:
            </Text>
            <UnorderedList ps='8px'>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='45px'>
                  <em>Log and Usage Data</em>. Log and usage data is
                  service-related, diagnostic, usage and performance information
                  our servers automatically collect when you access or use our
                  Website and which we record in log files. Depending on how you
                  interact with us, this log data may include your IP address,
                  device information, browser type and settings and information
                  about your activity in the Website (such as the date/time
                  stamps associated with your usage, pages and files viewed,
                  searches and other actions you take such as which features you
                  use), device event information (such as system activity, error
                  reports (sometimes called 'crash dumps') and hardware
                  settings).
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='45px'>
                  <em>Device Data</em>. We collect device data such as
                  information about your computer, phone, tablet or other device
                  you use to access the Website. Depending on the device used,
                  this device data may include information such as your IP
                  address (or proxy server), device and application
                  identification numbers, location, browser type, hardware model
                  Internet service provider and/or mobile carrier, operating
                  system and system configuration information.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='45px'>
                  <em>Location Data</em>. We collect location data such as
                  information about your device's location, which can be either
                  precise or imprecise. How much information we collect depends
                  on the type and settings of the device you use to access the
                  Website. For example, we may use GPS and other technologies to
                  collect geolocation data that tells us your current location
                  (based on your IP address). You can opt out of allowing us to
                  collect this information either by refusing access to the
                  information or by disabling your Location setting on your
                  device. Note however, if you choose to opt out, you may not be
                  able to use certain aspects of the Services.
                </Text>
              </ListItem>
            </UnorderedList>
            {/* 4. */}
            <Text
              id='2'
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              2. How do we use your information?
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                In Short:
              </Text>{" "}
              We process your information for purposes based on legitimate
              business interests, the fulfillment of our contract with you,
              compliance with our legal obligations, and/or your consent.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We use personal information collected via our Website for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations. We indicate the specific processing grounds
              we rely on next to each purpose listed below.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We use the information we collect or receive:
            </Text>
            <UnorderedList ps='8px'>
              <ListItem color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                  <Text fontWeight='500' mx='3px' as='span'>
                    To facilitate account creation and logon process
                  </Text>{" "}
                  . If you choose to link your account with us to a third-party
                  account (such as your Google or Facebook account), we use the
                  information you allowed us to collect from those third parties
                  to facilitate account creation and logon process for the
                  performance of the contract.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                  <Text fontWeight='500' mx='3px' as='span'>
                    To post testimonials
                  </Text>
                  . We post testimonials on our Website that may contain
                  personal information. Prior to posting a testimonial, we will
                  obtain your consent to use your name and the content of the
                  testimonial. If you wish to update, or delete your
                  testimonial, please contact us at{" "}
                  <NavLink to='/contact'>
                    <Text
                      textDecoration='underline'
                      color='brand.300'
                      fontWeight='500'
                      as='span'
                      mx='3px'>
                      https://simmmple.com/contact
                    </Text>
                  </NavLink>
                  {""}
                  and be sure to include your name, testimonial location, and
                  contact information.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                  <Text fontWeight='500' mx='3px' as='span'>
                    Request feedback
                  </Text>
                  . We may use your information to request feedback and to
                  contact you about your use of our Website.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                  <Text fontWeight='500' mx='3px' as='span'>
                    To enable user-to-user communications
                  </Text>
                  . We may use your information in order to enable user-to-user
                  communications with each user's consent.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                  <Text fontWeight='500' mx='3px' as='span'>
                    To manage user accounts
                  </Text>
                  . We may use your information for the purposes of managing our
                  account and keeping it in working order.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                  <Text fontWeight='500' mx='3px' as='span'>
                    To send administrative information to you
                  </Text>
                  . We may use your personal information to send you product,
                  service and new feature information and/or information about
                  changes to our terms, conditions, and policies.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                  <Text fontWeight='500' mx='3px' as='span'>
                    To protect our Services
                  </Text>
                  . We may use your information as part of our efforts to keep
                  our Website safe and secure (for example, for fraud monitoring
                  and prevention).
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text fontWeight='500' mx='3px' as='span'>
                  To enforce our terms, conditions and policies for business
                  purposes, to comply with legal and regulatory requirements or
                  in connection with our contract.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                  <Text fontWeight='500' mx='3px' as='span'>
                    To respond to legal requests and prevent harm
                  </Text>
                  . If we receive a subpoena or other legal request, we may need
                  to inspect the data we hold to determine how to respond.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                  <Text fontWeight='500' mx='3px' as='span'>
                    Fulfill and manage your orders
                  </Text>
                  . We may use your information to fulfill and manage your
                  orders, payments, returns, and exchanges made through the
                  Website.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                  <Text fontWeight='500' mx='3px' as='span'>
                    Administer prize draws and competitions
                  </Text>
                  . We may use your information to administer prize draws and
                  competitions when you elect to participate in our
                  competitions.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text fontWeight='500' mx='3px' as='span'>
                  To deliver and facilitate delivery of services to the user
                </Text>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                  . We may use your information to provide you with the
                  requested service.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                  <Text fontWeight='500' mx='3px' as='span'>
                    To respond to user inquiries/offer support to users
                  </Text>
                  . We may use your information to respond to your inquiries and
                  solve any potential issues you might have with the use of our
                  Services.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                  <Text fontWeight='500' mx='3px' as='span'>
                    To send you marketing and promotional communications
                  </Text>
                  . We and/or our third-party marketing partners may use the
                  personal information you send to us for our marketing
                  purposes, if this is in accordance with your marketing
                  preferences. For example, when expressing an interest in
                  obtaining information about us or our Website, subscribing to
                  marketing or otherwise contacting us, we will collect personal
                  information from you. You can opt-out of our marketing emails
                  at any time (see the "WHAT ARE YOUR PRIVACY RIGHTS" below).
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='38px'
                  fontWeight='400'
                  mb='50px'>
                  <Text fontWeight='500' mx='3px' as='span'>
                    Deliver targeted advertising to you
                  </Text>
                  . We may use your information to develop and display
                  personalized content and advertising (and work with third
                  parties who do so) tailored to your interests and/or location
                  and to measure its effectiveness.
                </Text>
              </ListItem>
            </UnorderedList>
            {/* 5. */}
            <Text
              id='3'
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              3. Will your information be shared with anyone?
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              {" "}
              <Text fontWeight='500' mx='3px' as='span'>
                In Short:
              </Text>{" "}
              We only share information with your consent, to comply with laws,
              to provide you with services, to protect your rights, or to
              fulfill business obligations.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We may process or share your data that we hold based on the
              following legal basis:
            </Text>
            <UnorderedList>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='34px' fontWeight='400'>
                  <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                    Consent:
                  </Text>{" "}
                  We may process your data if you have given us specific consent
                  to use your personal information for a specific purpose.
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='34px' fontWeight='400'>
                  <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                    Legitimate Interests:
                  </Text>{" "}
                  We may process your data when it is reasonably necessary to
                  achieve our legitimate business interests.
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='34px' fontWeight='400'>
                  <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                    Performance of a Contract:
                  </Text>{" "}
                  Where we have entered into a contract with you, we may process
                  your personal information to fulfill the terms of our
                  contract.
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='34px' fontWeight='400'>
                  <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                    Legal Obligations:
                  </Text>{" "}
                  We may disclose your information where we are legally required
                  to do so in order to comply with applicable law, governmental
                  requests, a judicial proceeding, court order, or legal
                  process, such as in response to a court order or a subpoena
                  (including in response to public authorities to meet national
                  security or law enforcement requirements).
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='45px'>
                  <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                    Vital Interests
                  </Text>{" "}
                  : We may disclose your information where we believe it is
                  necessary to investigate, prevent, or take action regarding
                  potential violations of our policies, suspected fraud,
                  situations involving potential threats to the safety of any
                  person and illegal activities, or as evidence in litigation in
                  which we are involved.
                </Text>
              </ListItem>
            </UnorderedList>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              More specifically, we may need to process your data or share your
              personal information in the following situations:
            </Text>
            <UnorderedList>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='45px'>
                  <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                    Business Transfers
                  </Text>{" "}
                  . We may share or transfer your information in connection
                  with, or during negotiations of, any merger, sale of company
                  assets, financing, or acquisition of all or a portion of our
                  business to another company.
                </Text>
              </ListItem>
            </UnorderedList>

            {/* 6. */}
            <Text
              id='4'
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              4. Do we use cookies and other tracking technologies?
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                In Short
              </Text>{" "}
              : We may use cookies and other tracking technologies to collect
              and store your information.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to access or store information. Specific
              information about how we use such technologies and how you can
              refuse certain cookies is set out in our Cookie Notice.
            </Text>
            {/* 7. */}
            <Text
              id='5'
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              5. What is our stance on third-party websites?
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                In Short
              </Text>{" "}
              : We are not responsible for the safety of any information that
              you share with third-party providers who advertise, but are not
              affiliated with, our Website.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              The Website may contain advertisements from third parties that are
              not affiliated with us and which may link to other websites,
              online services or mobile applications. We cannot guarantee the
              safety and privacy of data you provide to any third parties. Any
              data collected by third parties is not covered by this privacy
              notice. We are not responsible for the content or privacy and
              security practices and policies of any third parties, including
              other websites, services or applications that may be linked to or
              from the Website. You should review the policies of such third
              parties and contact them directly to respond to your questions.
            </Text>
            {/* 8. */}
            <Text
              id='6'
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              6. How long do we keep your information?
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                In Short
              </Text>{" "}
              : We keep your information for as long as necessary to fulfill the
              purposes outlined in this privacy notice unless otherwise required
              by law.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting or other legal requirements). No purpose in this
              notice will require us keeping your personal information for
              longer than the period of time in which users have an account with
              us.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </Text>
            {/* 9. */}
            <Text
              id='7'
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              7. What are your privacy right?
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                In Short
              </Text>{" "}
              : In some regions, such as the European Economic Area, you have
              rights that allow you greater access to and control over your
              personal information. You may review, change, or terminate your
              account at any time.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              In some regions (like the European Economic Area), you have
              certain rights under applicable data protection laws. These may
              include the right (i) to request access and obtain a copy of your
              personal information, (ii) to request rectification or erasure;
              (iii) to restrict the processing of your personal information; and
              (iv) if applicable, to data portability. In certain circumstances,
              you may also have the right to object to the processing of your
              personal information. To make such a request, please use the
              <NavLink to='/'>
                <Text
                  textDecoration='underline'
                  color='brand.300'
                  fontWeight='500'
                  as='span'
                  mx='3px'>
                  contact details
                </Text>
              </NavLink>
              {""}
              provided below. We will consider and act upon any request in
              accordance with applicable data protection laws.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              If we are relying on your consent to process your personal
              information, you have the right to withdraw your consent at any
              time. Please note however that this will not affect the lawfulness
              of the processing before its withdrawal, nor will it affect the
              processing of your personal information conducted in reliance on
              lawful processing grounds other than consent.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              If you are a resident in the European Economic Area and you
              believe we are unlawfully processing your personal information,
              you also have the right to complain to your local data protection
              supervisory authority. You can find their contact details here:
              <Link
                href='http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html'
                textDecoration='underline'
                color='brand.300'
                mx='3px'
                fontWeight='500'>
                http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html.
              </Link>
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              If you are a resident in Switzerland, the contact details for the
              data protection authorities are available here:
              <Link
                href='https://www.edoeb.admin.ch/edoeb/en/home.html'
                textDecoration='underline'
                color='brand.300'
                mx='3px'
                fontWeight='500'>
                https://www.edoeb.admin.ch/edoeb/en/home.html.
              </Link>
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              If you have questions or comments about your privacy rights, you
              may
              <NavLink to='/contact'>
                <Text
                  textDecoration='underline'
                  color='brand.300'
                  fontWeight='500'
                  as='span'
                  mx='3px'>
                  contact us here.
                </Text>
              </NavLink>
              {""}
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              fontWeight='700'
              mb='45px'
              color='brand.700'>
              Account Information
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              If you would at any time like to review or change the information
              in your account or terminate your account, you can:
            </Text>
            <UnorderedList ps='8px'>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400'>
                  Log in to your account settings and update your user account.
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='38px'
                  fontWeight='400'
                  mb='45px'>
                  Contact us using the contact information provided.
                </Text>
              </ListItem>
            </UnorderedList>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              Upon your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, we may retain some information in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our Terms of Use and/or comply with applicable legal
              requirements.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              <Text
                fontWeight='500'
                mx='3px'
                ms='0px'
                as='span'
                color='brand.700'>
                Cookies and similar technologies:
              </Text>
              Most Web browsers are set to accept cookies by default. If you
              prefer, you can usually choose to set your browser to remove
              cookies and to reject cookies. If you choose to remove cookies or
              reject cookies, this could affect certain features or services of
              our Website. To opt-out of interest-based advertising by
              advertisers on our Website visit{" "}
              <Link
                href='http://www.aboutads.info/choices/'
                textDecoration='underline'
                color='brand.300'
                mx='3px'
                fontWeight='500'>
                http://www.aboutads.info/choices/.
              </Link>
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              <Text
                fontWeight='500'
                mx='3px'
                ms='0px'
                as='span'
                color='brand.700'>
                Opting out of email marketing:
              </Text>
              You can unsubscribe from our marketing email list at any time by
              clicking on the unsubscribe link in the emails that we send or by
              contacting us using the details provided below. You will then be
              removed from the marketing email list — however, we may still
              communicate with you, for example to send you service-related
              emails that are necessary for the administration and use of your
              account, to respond to service requests, or for other
              non-marketing purposes. To otherwise opt-out, you may:
            </Text>
            {/* 10. */}
            <Text
              id='8'
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='500'
              mb='16px'
              display='flex'>
              8. Controls for do-not-track features
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this privacy notice.
            </Text>
            {/* 11. */}
            <Text
              id='9'
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              9. Do Califorina residents have specific privacy rights?
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                In Short
              </Text>{" "}
              : Yes, if you are a resident of California, you are granted
              specific rights regarding access to your personal information.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              California Civil Code Section 1798.83, also known as the "Shine
              The Light" law, permits our users who are California residents to
              request and obtain from us, once a year and free of charge,
              information about categories of personal information (if any) we
              disclosed to third parties for direct marketing purposes and the
              names and addresses of all third parties with which we shared
              personal information in the immediately preceding calendar year.
              If you are a California resident and would like to make such a
              request, please submit your request in writing to us using the
              contact information provided below.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              If you are under 18 years of age, reside in California, and have a
              registered account with the Website, you have the right to request
              removal of unwanted data that you publicly post on the Website. To
              request removal of such data, please contact us using the contact
              information provided below, and include the email address
              associated with your account and a statement that you reside in
              California. We will make sure the data is not publicly displayed
              on the Website, but please be aware that the data may not be
              completely or comprehensively removed from all our systems (e.g.
              backups, etc.).
            </Text>
            <Text
              color='brand.700'
              fontSize='xl'
              lineHeight='34px'
              fontWeight='500'
              mb='45px'>
              CCPA Privacy Notice
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              The California Code of Regulations defines a "resident" as:
            </Text>
            <UnorderedList ps='8px'>
              <ListItem color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                  every individual who is in the State of California for other
                  than a temporary or transitory purpose and
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='38px'
                  fontWeight='400'
                  mb='40px'>
                  every individual who is domiciled in the State of California
                  who is outside the State of California for a temporary or
                  transitory purpose
                </Text>
              </ListItem>
            </UnorderedList>

            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              All other individuals are defined as "non-residents."
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              If this definition of "resident" applies to you, we must adhere to
              certain rights and obligations regarding your personal
              information.
            </Text>
            <Text
              color='brand.700'
              fontSize='xl'
              lineHeight='34px'
              fontWeight='500'
              mb='45px'>
              What categories of personal information do we collect?
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='56px'>
              We have collected the following categories of personal information
              in the past twelve (12) months:
            </Text>
            <HSeparator w='100%' mx='auto' />
            <Flex flexDirection='column' width='674px' maxW='100%' mb='56px'>
              <Flex mt='20px' px='20px'>
                <Text
                  color='#878CBD'
                  fontSize='md'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='56px'
                  minW={{ base: "100px", md: "155px" }}
                  me='10px'
                  w={{ base: "100px", md: "155px" }}>
                  Category
                </Text>
                <Text
                  color='#878CBD'
                  fontSize='md'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='56px'
                  minW={{ base: "100px", md: "335px" }}
                  w={{ base: "60px", md: "335px" }}
                  me={{ base: "10px", md: "45px" }}>
                  Examples
                </Text>
                <Text
                  color='#878CBD'
                  fontSize='md'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='56px'
                  w={{ base: "100px", lg: "100%" }}
                  textAlign='center'>
                  Collected
                </Text>
              </Flex>
              <Flex p='20px' maxW='100%' bg='#F4F7FE' borderRadius='10px'>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "100px", md: "155px" }}
                  me='10px'
                  w={{ base: "100px", md: "155px" }}>
                  A. Identifiers
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "140px", md: "335px" }}
                  w={{ base: "140px", md: "335px" }}
                  me={{ base: "0px", md: "45px" }}>
                  Contact details, such as real name, alias, postal address,
                  telephone or mobile contact number, unique personal
                  identifier, online identifier, Internet Protocol address,
                  email address and account name
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  w={{ base: "40px", lg: "100%" }}>
                  YES
                </Text>
              </Flex>
              <Flex p='20px' maxW='100%' borderRadius='10px'>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "100px", md: "155px" }}
                  me='10px'
                  w={{ base: "100px", md: "155px" }}>
                  B. Personal information categories listed in the California
                  Customer Records statute
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "140px", md: "335px" }}
                  w={{ base: "140px", md: "335px" }}
                  me={{ base: "0px", md: "45px" }}>
                  Name, contact information, education, employment, employment
                  history and financial information
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  w={{ base: "40px", lg: "100%" }}>
                  YES
                </Text>
              </Flex>
              <Flex p='20px' maxW='100%' bg='#F4F7FE' borderRadius='10px'>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "100px", md: "155px" }}
                  me='10px'
                  w={{ base: "100px", md: "155px" }}>
                  C. Protected classification characteristics under California
                  or federal law
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "140px", md: "335px" }}
                  w={{ base: "140px", md: "335px" }}
                  me={{ base: "0px", md: "45px" }}>
                  Gender and date of birth
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  w={{ base: "40px", lg: "100%" }}>
                  NO
                </Text>
              </Flex>
              <Flex p='20px' maxW='100%' borderRadius='10px'>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "100px", md: "155px" }}
                  me='10px'
                  w={{ base: "100px", md: "155px" }}>
                  D. Commercial information
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "140px", md: "335px" }}
                  w={{ base: "140px", md: "335px" }}
                  me={{ base: "0px", md: "45px" }}>
                  Transaction information, purchase history, financial details
                  and payment information
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  w={{ base: "40px", lg: "100%" }}>
                  YES
                </Text>
              </Flex>
              <Flex p='20px' maxW='100%' bg='#F4F7FE' borderRadius='10px'>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "100px", md: "155px" }}
                  me='10px'
                  w={{ base: "100px", md: "155px" }}>
                  E. Biometric information
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "140px", md: "335px" }}
                  w={{ base: "140px", md: "335px" }}
                  me={{ base: "0px", md: "45px" }}>
                  Fingerprints and voiceprints
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  w={{ base: "40px", lg: "100%" }}>
                  NO
                </Text>
              </Flex>
              <Flex p='20px' maxW='100%' borderRadius='10px'>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "100px", md: "155px" }}
                  me='10px'
                  w={{ base: "100px", md: "155px" }}>
                  F. Internet or other similar network activity
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "140px", md: "335px" }}
                  w={{ base: "140px", md: "335px" }}
                  me={{ base: "0px", md: "45px" }}>
                  Browsing history, search history, online behavior, interest
                  data, and interactions with our and other websites,
                  applications, systems and advertisements
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  w={{ base: "40px", lg: "100%" }}>
                  YES
                </Text>
              </Flex>
              <Flex p='20px' maxW='100%' bg='#F4F7FE' borderRadius='10px'>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "100px", md: "155px" }}
                  me='10px'
                  w={{ base: "100px", md: "155px" }}>
                  G. Geolocation data
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "140px", md: "335px" }}
                  w={{ base: "140px", md: "335px" }}
                  me={{ base: "0px", md: "45px" }}>
                  Device location
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  w={{ base: "40px", lg: "100%" }}>
                  YES
                </Text>
              </Flex>
              <Flex p='20px' maxW='100%' borderRadius='10px'>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "100px", md: "155px" }}
                  me='10px'
                  w={{ base: "100px", md: "155px" }}>
                  H. Audio, electronic, visual, thermal, olfactory, or similar
                  information
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "140px", md: "335px" }}
                  w={{ base: "140px", md: "335px" }}
                  me={{ base: "0px", md: "45px" }}>
                  Images and audio, video or call recordings created in
                  connection with our business activities
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  w={{ base: "40px", lg: "100%" }}>
                  NO
                </Text>
              </Flex>
              <Flex p='20px' maxW='100%' bg='#F4F7FE' borderRadius='10px'>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "100px", md: "155px" }}
                  me='10px'
                  w={{ base: "100px", md: "155px" }}>
                  I. Professional or employment-related information
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "140px", md: "335px" }}
                  w={{ base: "140px", md: "335px" }}
                  me={{ base: "0px", md: "45px" }}>
                  Business contact details in order to provide you our services
                  at a business level, job title as well as work history and
                  professional qualifications if you apply for a job with us
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  w={{ base: "40px", lg: "100%" }}>
                  NO
                </Text>
              </Flex>
              <Flex p='20px' maxW='100%' borderRadius='10px'>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "100px", md: "155px" }}
                  me='10px'
                  w={{ base: "100px", md: "155px" }}>
                  J. Education Information
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "140px", md: "335px" }}
                  w={{ base: "140px", md: "335px" }}
                  me={{ base: "0px", md: "45px" }}>
                  Student records and directory information
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  w={{ base: "40px", lg: "100%" }}>
                  NO
                </Text>
              </Flex>
              <Flex p='20px' maxW='100%' bg='#F4F7FE' borderRadius='10px'>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "100px", md: "155px" }}
                  me='10px'
                  w={{ base: "100px", md: "155px" }}>
                  K. Inferences drawn from other personal information
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  minW={{ base: "140px", md: "335px" }}
                  w={{ base: "140px", md: "335px" }}
                  me={{ base: "0px", md: "45px" }}>
                  Inferences drawn from any of the collected personal
                  information listed above to create a profile or summary about,
                  for example, an individual’s preferences and characteristics
                </Text>
                <Text
                  color='#878CBD'
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight='34px'
                  fontWeight='400'
                  w={{ base: "40px", lg: "100%" }}>
                  NO
                </Text>
              </Flex>
            </Flex>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We may also collect other personal information outside of these
              categories instances where you interact with us in-person, online,
              or by phone or mail in the context of:
            </Text>
            <UnorderedList>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='34px' fontWeight='400'>
                  Receiving help through our customer support channels;
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='34px' fontWeight='400'>
                  Participation in customer surveys or contests; and
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='40px'>
                  Facilitation in the delivery of our Services and to respond to
                  your inquiries.
                </Text>
              </ListItem>
            </UnorderedList>

            <Text
              color='brand.700'
              fontSize='xl'
              lineHeight='34px'
              fontWeight='500'
              mb='45px'>
              How do we use and share your personal information?
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              More information about our data collection and sharing practices
              can be found in this privacy notice.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              You may contact us by visiting{" "}
              <NavLink to='/contact'>
                <Text
                  textDecoration='underline'
                  color='brand.300'
                  fontWeight='500'
                  as='span'
                  mx='3px'>
                  https://simmmple.com/contact
                </Text>
              </NavLink>
              , or by referring to the contact details at the bottom of this
              document.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              If you are using an authorized agent to exercise your right to
              opt-out we may deny a request if the authorized agent does not
              submit proof that they have been validly authorized to act on your
              behalf.
            </Text>
            <Text
              color='brand.700'
              fontSize='xl'
              lineHeight='34px'
              fontWeight='700'
              mb='45px'>
              Will your information be shared with anyone else?
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We may disclose your personal information with our service
              providers pursuant to a written contract between us and each
              service provider. Each service provider is a for-profit entity
              that processes the information on our behalf.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We may use your personal information for our own business
              purposes, such as for undertaking internal research for
              technological development and demonstration. This is not
              considered to be "selling" of your personal data.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              Simmmple Web LLC has not disclosed or sold any personal
              information to third parties for a business or commercial purpose
              in the preceding 12 months. Simmmple Web LLC will not sell
              personal information in the future belonging to website visitors,
              users and other consumers.
            </Text>
            <Text
              color='brand.700'
              fontSize='xl'
              lineHeight='34px'
              fontWeight='500'
              mb='45px'>
              Your rights with respect to your personal data
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'
              textDecoration='underline'>
              Right to request deletion of the data - Request to delete
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              You can ask for the deletion of your personal information. If you
              ask us to delete your personal information, we will respect your
              request and delete your personal information, subject to certain
              exceptions provided by law, such as (but not limited to) the
              exercise by another consumer of his or her right to free speech,
              our compliance requirements resulting from a legal obligation or
              any processing that may be required to protect against illegal
              activities.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'
              textDecoration='underline'>
              Right to be informed - Request to know
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              Depending on the circumstances, you have a right to know:
            </Text>

            <UnorderedList>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400'>
                  whether we collect and use your personal information;
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400'>
                  the categories of personal information that we collect;
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400'>
                  the purposes for which the collected personal information is
                  used;
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400'>
                  whether we sell your personal information to third parties;
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400'>
                  the categories of personal information that we sold or
                  disclosed for a business purpose;
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400'>
                  the categories of third parties to whom the personal
                  information was sold or disclosed for a business purpose; and
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='40px'>
                  the business or commercial purpose for collecting or selling
                  personal information.
                </Text>
              </ListItem>
            </UnorderedList>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              In accordance with applicable law, we are not obligated to provide
              or delete consumer information that is de-identified in response
              to a consumer request or to re-identify individual data to verify
              a consumer request.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'
              textDecoration='underline'>
              Right to Non-Discrimination for the Exercise of a Consumer’s
              Privacy Rights
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We will not discriminate against you if you exercise your privacy
              rights.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'
              textDecoration='underline'>
              Verification process
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              Upon receiving your request, we will need to verify your identity
              to determine you are the same person about whom we have the
              information in our system. These verification efforts require us
              to ask you to provide information so that we can match it with
              information you have previously provided us. For instance,
              depending on the type of request you submit, we may ask you to
              provide certain information so that we can match the information
              you provide with the information we already have on file, or we
              may contact you through a communication method (e.g. phone or
              email) that you have previously provided to us. We may also use
              other verification methods as the circumstances dictate.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We will only use personal information provided in your request to
              verify your identity or authority to make the request. To the
              extent possible, we will avoid requesting additional information
              from you for the purposes of verification. If, however, we cannot
              verify your identity from the information already maintained by
              us, we may request that you provide additional information for the
              purposes of verifying your identity, and for security or
              fraud-prevention purposes. We will delete such additionally
              provided information as soon as we finish verifying you.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'
              textDecoration='underline'>
              Other privacy rights
            </Text>
            <UnorderedList>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400'>
                  you may object to the processing of your personal data
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400'>
                  you may request correction of your personal data if it is
                  incorrect or no longer relevant, or ask to restrict the
                  processing of the data
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text fontSize='lg' lineHeight='38px' fontWeight='400'>
                  you can designate an authorized agent to make a request under
                  the CCPA on your behalf. We may deny a request from an
                  authorized agent that does not submit proof that they have
                  been validly authorized to act on your behalf in accordance
                  with the CCPA.
                </Text>
              </ListItem>
              <ListItem lineHeight='38px' color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='38px'
                  fontWeight='400'
                  mb='40px'>
                  you may request to opt-out from future selling of your
                  personal information to third parties. Upon receiving a
                  request to opt-out, we will act upon the request as soon as
                  feasibly possible, but no later than 15 days from the date of
                  the request submission.
                </Text>
              </ListItem>
            </UnorderedList>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              To exercise these rights, you can contact us by visiting
              <NavLink to='/contact'>
                <Text
                  textDecoration='underline'
                  color='brand.300'
                  fontWeight='500'
                  as='span'
                  mx='3px'>
                  https://simmmple.com/contact
                </Text>
              </NavLink>
              , or by referring to the contact details at the bottom of this
              document. If you have a complaint about how we handle your data,
              we would like to hear from you.
            </Text>
            {/* 12. */}
            <Text
              id='10'
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              10. Do we make updates to this notice?
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                In Short
              </Text>
              : Yes, we will update this notice as necessary to stay compliant
              with relevant laws.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated "Revised" date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy notice, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this privacy notice frequently to be informed of how we are
              protecting your information.
            </Text>
            {/* 13. */}
            <Text
              id='11'
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              11. How can you contact us about this notice?
            </Text>
            <Text color='#878CBD' fontSize='lg' lineHeight='34px' mb='45px'>
              If you have questions or comments about this notice, you may{" "}
              <NavLink to='/contact'>
                <Text
                  textDecoration='underline'
                  color='brand.300'
                  fontWeight='500'
                  as='span'
                  mx='3px'>
                  contact us here
                </Text>
              </NavLink>
              and this is our mailing address:
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              Simmmple Web LLC, Str. Matei Voievod 103-113, Bloc O3, Scara 3,
              Ap.123, Bucharest,021453 Romania
            </Text>
            {/* 14. */}
            <Text
              id='12'
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              12. How can you review, update, or delete the data we collect from
              you?
            </Text>
            <Text color='#878CBD' fontSize='lg' lineHeight='34px' mb='45px'>
              Based on the applicable laws of your country, you may have the
              right to request access to the personal information we collect
              from you, change that information, or delete it in some
              circumstances. To request to review, update, or delete your
              personal information, please visit:
              <NavLink to='/contact'>
                <Text
                  textDecoration='underline'
                  color='brand.300'
                  fontWeight='500'
                  as='span'
                  mx='3px'>
                  https://simmmple.com/contact
                </Text>
              </NavLink>
              . We will respond to your request within 30 days.
            </Text>
            <HSeparator w='100%' mb='40px' mx='auto' />
            <Text
              fontSize='lg'
              lineHeight='34px'
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

export default PrivacyPolicy;
