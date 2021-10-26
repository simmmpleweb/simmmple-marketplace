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
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            Last updated January 29, 2021
          </Text>
          <HSeparator w='100%' mb='40px' mx='auto' />
          {/* 1. */}
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
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
            fontSize='lg'
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
            <Text fontWeight='500' mx='1px' as='span'>
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
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            This privacy notice applies to all information collected through our
            Services (which, as described above, includes our Website ), as well
            as, any related services, sales, marketing or events.
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
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
            lineHeight='28px'
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
            lineHeight='28px'
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
            lineHeight='28px'
            fontWeight='400'
            mb='38px'>
            The personal information that we collect depends on the context of
            your interactions with us and the Website, the choices you make and
            the products and features you use. The personal information we
            collect may include the following:
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
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
            lineHeight='28px'
            fontWeight='400'
            mb='38px'>
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
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='38px'>
            All personal information that you provide to us must be true,
            complete and accurate, and you must notify us of any changes to such
            personal information.
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='500'
            mb='38px'>
            Information automatically collected
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
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
            lineHeight='28px'
            fontWeight='400'
            mb='38px'>
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
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='38px'>
            Like many businesses, we also collect information through cookies
            and similar technologies.
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='38px'>
            The information we collect includes:
          </Text>
          <UnorderedList ps='8px'>
            <ListItem color='#878CBD'>
              <Text fontSize='lg' lineHeight='28px' fontWeight='400' mb='45px'>
                <em>Log and Usage Data</em>. Log and usage data is
                service-related, diagnostic, usage and performance information
                our servers automatically collect when you access or use our
                Website and which we record in log files. Depending on how you
                interact with us, this log data may include your IP address,
                device information, browser type and settings and information
                about your activity in the Website (such as the date/time stamps
                associated with your usage, pages and files viewed, searches and
                other actions you take such as which features you use), device
                event information (such as system activity, error reports
                (sometimes called 'crash dumps') and hardware settings).
              </Text>
            </ListItem>
            <ListItem color='#878CBD'>
              <Text fontSize='lg' lineHeight='28px' fontWeight='400' mb='45px'>
                <em>Device Data</em>. We collect device data such as information
                about your computer, phone, tablet or other device you use to
                access the Website. Depending on the device used, this device
                data may include information such as your IP address (or proxy
                server), device and application identification numbers,
                location, browser type, hardware model Internet service provider
                and/or mobile carrier, operating system and system configuration
                information.
              </Text>
            </ListItem>
            <ListItem color='#878CBD'>
              <Text fontSize='lg' lineHeight='28px' fontWeight='400' mb='45px'>
                <em>Location Data</em>. We collect location data such as
                information about your device's location, which can be either
                precise or imprecise. How much information we collect depends on
                the type and settings of the device you use to access the
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
            lineHeight='28px'
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
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            We use personal information collected via our Website for a variety
            of business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations. We indicate the specific processing grounds we rely on
            next to each purpose listed below.
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
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
                . We post testimonials on our Website that may contain personal
                information. Prior to posting a testimonial, we will obtain your
                consent to use your name and the content of the testimonial. If
                you wish to update, or delete your testimonial, please contact
                us at{" "}
                <Link
                  to='https://simmmple.com/contact'
                  textDecoration='none !important'
                  color='brand.300'
                  mx='3px'
                  fontWeight='500'>
                  https://simmmple.com/contact
                </Link>
                and be sure to include your name, testimonial location, and
                contact information.
              </Text>
            </ListItem>
            <ListItem color='#878CBD'>
              <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                <Text fontWeight='500' mx='3px' as='span'>
                  Request feedback
                </Text>
                . We may use your information to request feedback and to contact
                you about your use of our Website.
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
                . We may use your information as part of our efforts to keep our
                Website safe and secure (for example, for fraud monitoring and
                prevention).
              </Text>
            </ListItem>
            <ListItem color='#878CBD'>
              <Text fontWeight='500' mx='3px' as='span'>
                To enforce our terms, conditions and policies for business
                purposes, to comply with legal and regulatory requirements or in
                connection with our contract.
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
                . We may use your information to fulfill and manage your orders,
                payments, returns, and exchanges made through the Website.
              </Text>
            </ListItem>
            <ListItem color='#878CBD'>
              <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                <Text fontWeight='500' mx='3px' as='span'>
                  Administer prize draws and competitions
                </Text>
                . We may use your information to administer prize draws and
                competitions when you elect to participate in our competitions.
              </Text>
            </ListItem>
            <ListItem color='#878CBD'>
              <Text fontWeight='500' mx='3px' as='span'>
                To deliver and facilitate delivery of services to the user
              </Text>
              <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='0px'>
                . We may use your information to provide you with the requested
                service.
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
                personal information you send to us for our marketing purposes,
                if this is in accordance with your marketing preferences. For
                example, when expressing an interest in obtaining information
                about us or our Website, subscribing to marketing or otherwise
                contacting us, we will collect personal information from you.
                You can opt-out of our marketing emails at any time (see the
                "WHAT ARE YOUR PRIVACY RIGHTS" below).
              </Text>
            </ListItem>
            <ListItem color='#878CBD'>
              <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='50px'>
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
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            {" "}
            <Text fontWeight='500' mx='3px' as='span'>
              In Short:
            </Text>{" "}
            We only share information with your consent, to comply with laws, to
            provide you with services, to protect your rights, or to fulfill
            business obligations.
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            We may process or share your data that we hold based on the
            following legal basis:
          </Text>
          <UnorderedList>
            <ListItem lineHeight='38px' color='#878CBD'>
              <Text fontSize='lg' lineHeight='28px' fontWeight='400'>
                <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                  Consent:
                </Text>{" "}
                We may process your data if you have given us specific consent
                to use your personal information for a specific purpose.
              </Text>
            </ListItem>
            <ListItem lineHeight='38px' color='#878CBD'>
              <Text fontSize='lg' lineHeight='28px' fontWeight='400'>
                <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                  Legitimate Interests:
                </Text>{" "}
                We may process your data when it is reasonably necessary to
                achieve our legitimate business interests.
              </Text>
            </ListItem>
            <ListItem lineHeight='38px' color='#878CBD'>
              <Text fontSize='lg' lineHeight='28px' fontWeight='400'>
                <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                  Performance of a Contract:
                </Text>{" "}
                Where we have entered into a contract with you, we may process
                your personal information to fulfill the terms of our contract.
              </Text>
            </ListItem>
            <ListItem lineHeight='38px' color='#878CBD'>
              <Text fontSize='lg' lineHeight='28px' fontWeight='400'>
                <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                  Legal Obligations:
                </Text>{" "}
                We may disclose your information where we are legally required
                to do so in order to comply with applicable law, governmental
                requests, a judicial proceeding, court order, or legal process,
                such as in response to a court order or a subpoena (including in
                response to public authorities to meet national security or law
                enforcement requirements).
              </Text>
            </ListItem>
            <ListItem lineHeight='38px' color='#878CBD'>
              <Text fontSize='lg' lineHeight='28px' fontWeight='400' mb='45px'>
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
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            More specifically, we may need to process your data or share your
            personal information in the following situations:
          </Text>
          <UnorderedList>
            <ListItem lineHeight='38px' color='#878CBD'>
              <Text fontSize='lg' lineHeight='28px' fontWeight='400' mb='45px'>
                <Text fontWeight='500' mx='3px' ms='0px' as='span'>
                  Business Transfers
                </Text>{" "}
                . We may share or transfer your information in connection with,
                or during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to
                another company.
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
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            <Text fontWeight='500' mx='3px' ms='0px' as='span'>
              In Short
            </Text>{" "}
            : We may use cookies and other tracking technologies to collect and
            store your information.
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
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
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            <Text fontWeight='500' mx='3px' ms='0px' as='span'>
              In Short
            </Text>{" "}
            : We are not responsible for the safety of any information that you
            share with third-party providers who advertise, but are not
            affiliated with, our Website.
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            The Website may contain advertisements from third parties that are
            not affiliated with us and which may link to other websites, online
            services or mobile applications. We cannot guarantee the safety and
            privacy of data you provide to any third parties. Any data collected
            by third parties is not covered by this privacy notice. We are not
            responsible for the content or privacy and security practices and
            policies of any third parties, including other websites, services or
            applications that may be linked to or from the Website. You should
            review the policies of such third parties and contact them directly
            to respond to your questions.
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
            lineHeight='28px'
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
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting or other legal requirements). No purpose in this
            notice will require us keeping your personal information for longer
            than the period of time in which users have an account with us.
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
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
            lineHeight='28px'
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
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            In some regions (like the European Economic Area), you have certain
            rights under applicable data protection laws. These may include the
            right (i) to request access and obtain a copy of your personal
            information, (ii) to request rectification or erasure; (iii) to
            restrict the processing of your personal information; and (iv) if
            applicable, to data portability. In certain circumstances, you may
            also have the right to object to the processing of your personal
            information. To make such a request, please use the
            <Link
              to='#'
              textDecoration='underline'
              color='brand.300'
              mx='3px'
              fontWeight='500'>
              contact details
            </Link>
            provided below. We will consider and act upon any request in
            accordance with applicable data protection laws.
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
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
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            If you are a resident in the European Economic Area and you believe
            we are unlawfully processing your personal information, you also
            have the right to complain to your local data protection supervisory
            authority. You can find their contact details here:
            <Link
              to='http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html'
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
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            If you are a resident in Switzerland, the contact details for the
            data protection authorities are available here:
            <Link
              to='https://www.edoeb.admin.ch/edoeb/en/home.html'
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
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            If you have questions or comments about your privacy rights, you may
            <Link
              to='#'
              textDecoration='underline'
              color='brand.300'
              mx='3px'
              fontWeight='500'>
              contact us here.
            </Link>
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='700'
            mb='45px'
            color='brand.700'>
            Account Information
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </Text>
          <UnorderedList ps='8px'>
            <ListItem lineHeight='38px' color='#878CBD'>
              <Text fontSize='lg' lineHeight='38px' fontWeight='400'>
                Log in to your account settings and update your user account.
              </Text>
            </ListItem>
            <ListItem lineHeight='38px' color='#878CBD'>
              <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='45px'>
                Contact us using the contact information provided.
              </Text>
            </ListItem>
          </UnorderedList>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
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
            lineHeight='28px'
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
            prefer, you can usually choose to set your browser to remove cookies
            and to reject cookies. If you choose to remove cookies or reject
            cookies, this could affect certain features or services of our
            Website. To opt-out of interest-based advertising by advertisers on
            our Website visit{" "}
            <Link
              to='#'
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
            lineHeight='28px'
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
            communicate with you, for example to send you service-related emails
            that are necessary for the administration and use of your account,
            to respond to service requests, or for other non-marketing purposes.
            To otherwise opt-out, you may:
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
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track ("DNT") feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this privacy notice.
          </Text>
          {/* 11. */}
          <Text
            id='9'
            color='brand.700'
            fontSize='30px'
            lineHeight='40px'
            fontWeight='500'
            mb='16px'
            display='flex'>
            9. Do Califorina residents have specific privacy rights?
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            <Text fontWeight='500' mx='3px' ms='0px' as='span'>
              In Short
            </Text>{" "}
            : Yes, if you are a resident of California, you are granted specific
            rights regarding access to your personal information.
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            California Civil Code Section 1798.83, also known as the "Shine The
            Light" law, permits our users who are California residents to
            request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us using the contact
            information provided below.
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            If you are under 18 years of age, reside in California, and have a
            registered account with the Website, you have the right to request
            removal of unwanted data that you publicly post on the Website. To
            request removal of such data, please contact us using the contact
            information provided below, and include the email address associated
            with your account and a statement that you reside in California. We
            will make sure the data is not publicly displayed on the Website,
            but please be aware that the data may not be completely or
            comprehensively removed from all our systems (e.g. backups, etc.).
          </Text>
          <Text
            color='brand.700'
            fontSize='xl'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            CCPA Privacy Notice
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
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
              <Text fontSize='lg' lineHeight='38px' fontWeight='400' mb='40px'>
                every individual who is domiciled in the State of California who
                is outside the State of California for a temporary or transitory
                purpose
              </Text>
            </ListItem>
          </UnorderedList>

          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            All other individuals are defined as "non-residents."
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            If this definition of "resident" applies to you, we must adhere to
            certain rights and obligations regarding your personal information.
          </Text>
          <Text
            color='brand.700'
            fontSize='xl'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            What categories of personal information do we collect?
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='56px'>
            We have collected the following categories of personal information
            in the past twelve (12) months:
          </Text>
          <HSeparator w='100%' mx='auto' />
          <Flex flexDirection='column' width='674px'>
            <Flex mt='20px'>
              <Text
                color='#878CBD'
                fontSize='lg'
                lineHeight='28px'
                fontWeight='400'
                mb='56px'
                minW='165px'
                w='165px'>
                Category
              </Text>
              <Text
                color='#878CBD'
                fontSize='lg'
                lineHeight='28px'
                fontWeight='400'
                mb='56px'
                minW='335px'
                w='335px'>
                Examples
              </Text>
              <Text
                color='#878CBD'
                fontSize='lg'
                lineHeight='28px'
                fontWeight='400'
                mb='56px'
                w='100%'
                textAlign='center'>
                Collected
              </Text>
            </Flex>
          </Flex>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            In Short: Yes, if you are a resident of California, you are granted
            specific rights regarding access to your personal information.
          </Text>
          <Text
            color='#878CBD'
            fontSize='lg'
            lineHeight='28px'
            fontWeight='400'
            mb='45px'>
            In Short: Yes, if you are a resident of California, you are granted
            specific rights regarding access to your personal information.
          </Text>
          <OrderedList>
            <ListItem color='#878CBD'>
              <Text fontSize='lg' lineHeight='28px' fontWeight='400' mb='25px'>
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
              <Text fontSize='lg' lineHeight='28px' fontWeight='400' mb='25px'>
                You are licensed to use the Item to create multiple End Products
                for yourself or for clients, and the End Product may be Sold.
              </Text>
            </ListItem>
            <ListItem color='#878CBD'>
              <Text fontSize='lg' lineHeight='28px' fontWeight='400' mb='25px'>
                An End Product is one of the following things, both requiring an
                application of skill and effort.
              </Text>
            </ListItem>
            <Text
              ps='75px'
              color='#878CBD'
              fontSize='lg'
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
              fontSize='lg'
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

export default PrivacyPolicy;

/*



*/
