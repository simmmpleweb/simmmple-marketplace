import { Button, Flex, ListItem, OrderedList, Text } from "@chakra-ui/react";
import Layout from "components/layout/Layout";
// Custom Components
import { HSeparator } from "components/separator/Separator";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const TermsConditions = () => {
  useEffect(() => {
    document.title =
      "Terms & Conditions - Premium and Stunning UI Kits, Templates and Themes for developers, designers & startups @ Simmmple";
  }, []);

  return (
    <Layout>
      <Flex
        direction='column'
        bg='white'
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
                bg='white'
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
            bg='white'
            boxShadow='75px 85px 113px 0px #7090B014'
            border='1px solid'
            borderColor='#E9EDF7'
            borderRadius='30px'
            flexDirection='column'
            w='774px'
            px='50px'
            maxW='95%'
            mx={{ base: "auto", lg: "auto" }}
            pt='80px'
            pb='50px'>
            <Text
              fontSize='40px'
              fontWeight='700'
              textAlign='center'
              mx='auto'
              mb='50px'
              color='brand.700'>
              Terms and Conditions
            </Text>
            <HSeparator w='100%' mb='40px' mx='auto' />
            {/* 1. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              Terms of Use
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              These Terms of Use constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity (“you”)
              and Simmmple Web LLC ("Company", “we”, “us”, or “our”), concerning
              your access to and use of the
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
              website as well as any other media form, media channel, mobile
              website or mobile application related, linked, or otherwise
              connected thereto (collectively, the “Site”). The Site provides an
              online marketplace for the following goods, products, and/or
              services: website themes and templates (the “Marketplace
              Offerings”). In order to help make the Site a secure environment
              for the purchase and sale of Marketplace Offerings, all users are
              required to accept and comply with these Terms of Use. You agree
              that by accessing the Site and/or the Marketplace Offerings, you
              have read, understood, and agree to be bound by all of these Terms
              of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN
              YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND/OR THE
              MARKETPLACE OFFERINGS AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              Supplemental terms and conditions or documents that may be posted
              on the Site from time to time are hereby expressly incorporated
              herein by reference. We reserve the right, in our sole discretion,
              to make changes or modifications to these Terms of Use at any time
              and for any reason. We will alert you about any changes by
              updating the “Last updated” date of these Terms of Use, and you
              waive any right to receive specific notice of each such change. It
              is your responsibility to periodically review these Terms of Use
              to stay informed of updates. You will be subject to, and will be
              deemed to have been made aware of and to have accepted, the
              changes in any revised Terms of Use by your continued use of the
              Site after the date such revised Terms of Use are posted.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              The information provided on the Site is not intended for
              distribution to or use by any person or entity in any jurisdiction
              or country where such distribution or use would be contrary to law
              or regulation or which would subject us to any registration
              requirement within such jurisdiction or country. Accordingly,
              those persons who choose to access the Site from other locations
              do so on their own initiative and are solely responsible for
              compliance with local laws, if and to the extent local laws are
              applicable.
            </Text>
            {/* 2. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              Intellectual Property Rights
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              Unless otherwise indicated, the Site and the Marketplace Offerings
              are our proprietary property and all source code, databases,
              functionality, software, website designs, audio, video, text,
              photographs, and graphics on the Site (collectively, the
              “Content”) and the trademarks, service marks, and logos contained
              therein (the “Marks”) are owned or controlled by us or licensed to
              us, and are protected by copyright and trademark laws and various
              other intellectual property rights and unfair competition laws of
              the United States, international copyright laws, and international
              conventions. The Content and the Marks are provided on the Site
              “AS IS” for your information and personal use only. Except as
              expressly provided in these Terms of Use, no part of the Site or
              the Marketplace Offerings and no Content or Marks may be copied,
              reproduced, aggregated, republished, uploaded, posted, publicly
              displayed, encoded, translated, transmitted, distributed, sold,
              licensed, or otherwise exploited for any commercial purpose
              whatsoever, without our express prior written permission.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              Provided that you are eligible to use the Site, you are granted a
              limited license to access and use the Site and to download or
              print a copy of any portion of the Content to which you have
              properly gained access solely for your personal, non-commercial
              use. We reserve all rights not expressly granted to you in and to
              the Site, the Content and the Marks.
            </Text>
            {/* 3. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              User Representations
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              <Text fontWeight='500' mx='3px' as='span'>
                By using the Site or the Marketplace Offerings, you represent
                and warrant that: <br />
              </Text>{" "}
              (1) you have the legal capacity and you agree to comply with these
              Terms of Use; (2) you are not a minor in the jurisdiction in which
              you reside; (3) you will not access the Site or the Marketplace
              Offerings through automated or non-human means, whether through a
              bot, script or otherwise; (4) you will not use the Site for any
              illegal or unauthorized purpose; and (5) your use of the Site or
              the Marketplace Offerings will not violate any applicable law or
              regulation.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              your account and refuse any and all current or future use of the
              Site (or any portion thereof).
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              You may not use the Site or the Marketplace Offerings for any
              illegal or unauthorized purpose nor may you, in the use of
              Marketplace Offerings, violate any laws. Among unauthorized
              Marketplace Offerings are the following: intoxicants of any sort;
              illegal drugs or other illegal products; alcoholic beverages;
              games of chance; and pornography or graphic adult content, images,
              or other adult products. Postings of any unauthorized products or
              content may result in immediate termination of your account and a
              lifetime ban from use of the Site.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We are a service provider and make no representations as to the
              safety, effectiveness, adequacy, accuracy, availability, prices,
              ratings, reviews, or legality of any of the information contained
              on the Site or the Marketplace Offerings displayed or offered
              through the Site. You understand and agree that the content of the
              Site does not contain or constitute representations to be
              reasonably relied upon, and you agree to hold us harmless from any
              errors, omissions, or misrepresentations contained within the
              Site’s content. We do not endorse or recommend any Marketplace
              Offerings and the Site is provided for informational and
              advertising purposes only.
            </Text>
            {/* 4. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              Marketplace Offerings
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              <Text fontWeight='500' mx='3px' as='span'>
                We make every effort to display as accurately as possible the
                colors, features, specifications, and details of the Marketplace
                Offerings available on the Site. However, we do not guarantee
                that the colors, features, specifications, and details of the
                Marketplace Offerings will be accurate, complete, reliable,
                current, or free of other errors, and your electronic display
                may not accurately reflect the actual colors and details of the
                products. All Marketplace Offerings are subject to availability,
              </Text>{" "}
              and we cannot guarantee that Marketplace Offerings will be in
              stock. Certain Marketplace Offerings may be available exclusively
              online through the Site. Such Marketplace Offerings may have
              limited quantities and are subject to return or exchange only
              according to our Return Policy.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              mb='45px'
              fontWeight='500'>
              We reserve the right to limit the quantities of the Marketplace
              Offerings offered or available on the Site. All descriptions or
              pricing of the Marketplace Offerings are subject to change at any
              time without notice, at our sole discretion. We reserve the right
              to discontinue any Marketplace Offerings at any time for any
              reason. We do not warrant that the quality of any of the
              Marketplace Offerings purchased by you will meet your expectations
              or that any errors in the Site will be corrected.
            </Text>

            {/* 5. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              Purchases and Payment
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We accept the following forms of payment:
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              You agree to provide current, complete, and accurate purchase and
              account information for all purchases of the Marketplace Offerings
              made via the Site. You further agree to promptly update account
              and payment information, including email address, payment method,
              and payment card expiration date, so that we can complete your
              transactions and contact you as needed. Sales tax will be added to
              the price of purchases as deemed required by us. We may change
              prices at any time. All payments shall be in the currencies
              available in the country of the buyer.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              You agree to pay all charges at the prices then in effect for your
              purchases and any applicable shipping fees, and you authorize us
              to charge your chosen payment provider for any such amounts upon
              placing your order. We reserve the right to correct any errors or
              mistakes in pricing, even if we have already requested or received
              payment.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We reserve the right to refuse any order placed through the Site.
              We may, in our sole discretion, limit or cancel quantities
              purchased per person, per household, or per order. These
              restrictions may include orders placed by or under the same
              customer account, the same payment method, and/or orders that use
              the same billing or shipping address. We reserve the right to
              limit or prohibit orders that, in our sole judgment, appear to be
              placed by dealers, resellers, or distributors.
            </Text>
            {/* 6. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              Prohibited Activities
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='500'
              mb='45px'>
              You may not access or use the Site for any purpose other than that
              for which we make the Site available. The Site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              As a user of the Site, you agree not to:
            </Text>
            {/* 7. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              User Generated Contributions
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='500'
              mb='45px'>
              The Site does offer users to submit or post content. We may
              provide you with the opportunity to create, submit, post, display,
              transmit, perform, publish, distribute, or broadcast content and
              materials to us or on the Site, including but not limited to text,
              writings, video, audio, photographs, graphics, comments,
              suggestions, or personal information or other material
              (collectively, "Contributions"). Contributions may be viewable by
              other users of the Site and through third-party websites. As such,
              any Contributions you transmit may be treated in accordance with
              the Site Privacy Policy. When you create or make available any
              Contributions, you thereby represent and warrant that:
            </Text>
            <OrderedList>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  The creation, distribution, transmission, public display, or
                  performance, and the accessing, downloading, or copying of
                  your Contributions do not and will not infringe the
                  proprietary rights, including but not limited to the
                  copyright, patent, trademark, trade secret, or moral rights of
                  any third party.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You are the creator and owner of or have the necessary
                  licenses, rights, consents, releases, and permissions to use
                  and to authorize us, the Site, and other users of the Site to
                  use your Contributions in any manner contemplated by the Site
                  and these Terms of Use.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You have the written consent, release, and/or permission of
                  each and every identifiable individual person in your
                  Contributions to use the name or likeness of each and every
                  such identifiable individual person to enable inclusion and
                  use of your Contributions in any manner contemplated by the
                  Site and these Terms of Use.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  Your Contributions are not false, inaccurate, or misleading.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  Your Contributions are not unsolicited or unauthorized
                  advertising, promotional materials, pyramid schemes, chain
                  letters, spam, mass mailings, or other forms of solicitation.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  Your Contributions are not obscene, lewd, lascivious, filthy,
                  violent, harassing, libelous, slanderous, or otherwise
                  objectionable (as determined by us).
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  Your Contributions do not ridicule, mock, disparage,
                  intimidate, or abuse anyone.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  Your Contributions are not used to harass or threaten (in the
                  legal sense of those terms) any other person and to promote
                  violence against a specific person or class of people.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  Your Contributions do not violate any applicable law,
                  regulation, or rule.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  Your Contributions do not violate the privacy or publicity
                  rights of any third party.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  Your Contributions do not contain any material that solicits
                  personal information from anyone under the age of 18 or
                  exploits people under the age of 18 in a sexual or violent
                  manner.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  Your Contributions do not violate any applicable law
                  concerning child pornography, or otherwise intended to protect
                  the health or well-being of minors.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  Your Contributions do not include any offensive comments that
                  are connected to race, national origin, gender, sexual
                  preference, or physical handicap.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  Your Contributions do not otherwise violate, or link to
                  material that violates, any provision of these Terms of Use,
                  or any applicable law or regulation.
                </Text>
              </ListItem>
            </OrderedList>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              Any use of the Site or the Marketplace Offerings in violation of
              the foregoing violates these Terms of Use and may result in, among
              other things, termination or suspension of your rights to use the
              Site and the Marketplace Offerings.
            </Text>
            {/* 8. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              Contribution License
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              You and the Site agree that we may access, store, process, and use
              any information and personal data that you provide following the
              terms of the Privacy Policy and your choices (including settings).
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              By submitting suggestions or other feedback regarding the Site,
              you agree that we can use and share such feedback for any purpose
              without compensation to you.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We do not assert any ownership over your Contributions. You retain
              full ownership of all of your Contributions and any intellectual
              property rights or other proprietary rights associated with your
              Contributions. We are not liable for any statements or
              representations in your Contributions provided by you in any area
              on the Site. You are solely responsible for your Contributions to
              the Site and you expressly agree to exonerate us from any and all
              responsibility and to refrain from any legal action against us
              regarding your Contributions.
            </Text>
            {/* 9. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              Submissions
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              You acknowledge and agree that any questions, comments,
              suggestions, ideas, feedback, or other information regarding the
              Site or the Marketplace Offerings ("Submissions") provided by you
              to us are non-confidential and shall become our sole property. We
              shall own exclusive rights, including all intellectual property
              rights, and shall be entitled to the unrestricted use and
              dissemination of these Submissions for any lawful purpose,
              commercial or otherwise, without acknowledgment or compensation to
              you. You hereby waive all moral rights to any such Submissions,
              and you hereby warrant that any such Submissions are original with
              you or that you have the right to submit such Submissions. You
              agree there shall be no recourse against us for any alleged or
              actual infringement or misappropriation of any proprietary right
              in your Submissions.
            </Text>
            {/* 10. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              Site Management
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We reserve the right, but not the obligation, to: (1) monitor the
              Site for violations of these Terms of Use; (2) take appropriate
              legal action against anyone who, in our sole discretion, violates
              the law or these Terms of Use, including without limitation,
              reporting such user to law enforcement authorities; (3) in our
              sole discretion and without limitation, refuse, restrict access
              to, limit the availability of, or disable (to the extent
              technologically feasible) any of your Contributions or any portion
              thereof; (4) in our sole discretion and without limitation,
              notice, or liability, to remove from the Site or otherwise disable
              all files and content that are excessive in size or are in any way
              burdensome to our systems; and (5) otherwise manage the Site in a
              manner designed to protect our rights and property and to
              facilitate the proper functioning of the Site and the Marketplace
              Offerings.
            </Text>
            {/* 11. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              Term and Termination
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              These Terms of Use shall remain in full force and effect while you
              use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS
              OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
              WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE
              AND THE MARKETPLACE OFFERINGS (INCLUDING BLOCKING CERTAIN IP
              ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON,
              INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
              WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY
              APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
              PARTICIPATION IN THE SITE AND THE MARKETPLACE OFFERINGS OR DELETE
              ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
              WARNING, IN OUR SOLE DISCRETION.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              If we terminate or suspend your account for any reason, you are
              prohibited from registering and creating a new account under your
              name, a fake or borrowed name, or the name of any third party,
              even if you may be acting on behalf of the third party. In
              addition to terminating or suspending your account, we reserve the
              right to take appropriate legal action, including without
              limitation pursuing civil, criminal, and injunctive redress.
            </Text>
            {/* 12. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              Modifications and Interruptions
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We reserve the right to change, modify, or remove the contents of
              the Site at any time or for any reason at our sole discretion
              without notice. However, we have no obligation to update any
              information on our Site. We also reserve the right to modify or
              discontinue all or part of the Marketplace Offerings without
              notice at any time. We will not be liable to you or any third
              party for any modification, price change, suspension, or
              discontinuance of the Site or the Marketplace Offerings.
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We cannot guarantee the Site and the Marketplace Offerings will be
              available at all times. We may experience hardware, software, or
              other problems or need to perform maintenance related to the Site,
              resulting in interruptions, delays, or errors. We reserve the
              right to change, revise, update, suspend, discontinue, or
              otherwise modify the Site or the Marketplace Offerings at any time
              or for any reason without notice to you. You agree that we have no
              liability whatsoever for any loss, damage, or inconvenience caused
              by your inability to access or use the Site or the Marketplace
              Offerings during any downtime or discontinuance of the Site or the
              Marketplace Offerings. Nothing in these Terms of Use will be
              construed to obligate us to maintain and support the Site or the
              Marketplace Offerings or to supply any corrections, updates, or
              releases in connection therewith.
            </Text>
            {/* 13. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              DISCLAIMER
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              THE SITE AND THE MARKETPLACE OFFERINGS ARE PROVIDED ON AN AS-IS
              AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND
              OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT
              PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
              IN CONNECTION WITH THE SITE AND THE MARKETPLACE OFFERINGS AND YOUR
              USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES
              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT
              THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT
              OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY
              OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF
              CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF
              ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF
              THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
              SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
              INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF
              TRANSMISSION TO OR FROM THE SITE OR THE MARKETPLACE OFFERINGS, (5)
              ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
              TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6)
              ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY
              LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
              CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
              SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
              RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY
              A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY
              WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER
              ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
              RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY
              THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
              PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
              ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
              CAUTION WHERE APPROPRIATE.
            </Text>
            {/* 14. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              LIMITATIONS OF LIABILITY
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE OR THE MARKETPLACE
              OFFERINGS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED
              HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND
              REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED
              TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US OR SIMMMPLE
              WEB LLC. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW
              LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION
              OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE
              ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY
              HAVE ADDITIONAL RIGHTS.
            </Text>
            {/* 15. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              INDEMNIFICATION
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys’ fees and expenses, made by any third party due to or
              arising out of: (1) use of the Marketplace Offerings; (2) breach
              of these Terms of Use; (3) any breach of your representations and
              warranties set forth in these Terms of Use; (4) your violation of
              the rights of a third party, including but not limited to
              intellectual property rights; or (5) any overt harmful act toward
              any other user of the Site or the Marketplace Offerings with whom
              you connected via the Site. Notwithstanding the foregoing, we
              reserve the right, at your expense, to assume the exclusive
              defense and control of any matter for which you are required to
              indemnify us, and you agree to cooperate, at your expense, with
              our defense of such claims. We will use reasonable efforts to
              notify you of any such claim, action, or proceeding which is
              subject to this indemnification upon becoming aware of it.
            </Text>
            {/* 16. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              USER DATA
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              We will maintain certain data that you transmit to the Site for
              the purpose of managing the performance of the Marketplace
              Offerings, as well as data relating to your use of the Marketplace
              Offerings. Although we perform regular routine backups of data,
              you are solely responsible for all data that you transmit or that
              relates to any activity you have undertaken using the Marketplace
              Offerings. You agree that we shall have no liability to you for
              any loss or corruption of any such data, and you hereby waive any
              right of action against us arising from any such loss or
              corruption of such data.
            </Text>
            {/* 17. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              ELECTRONIC COMMUNICATIONS, <br /> TRANSACTIONS, AND SIGNATURES
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              Visiting the Site, sending us emails, and completing online forms
              constitute electronic communications. You consent to receive
              electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you
              electronically, via email and on the Site, satisfy any legal
              requirement that such communication be in writing. YOU HEREBY
              AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND
              OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES,
              AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA
              THE SITE. You hereby waive any rights or requirements under any
              statutes, regulations, rules, ordinances, or other laws in any
              jurisdiction which require an original signature or delivery or
              retention of non-electronic records, or to payments or the
              granting of credits by any means other than electronic means.
            </Text>
            {/* 18. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              MISCELLANEOUS
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              These Terms of Use and any policies or operating rules posted by
              us on the Site or in respect to the Marketplace Offerings
              constitute the entire agreement and understanding between you and
              us. Our failure to exercise or enforce any right or provision of
              these Terms of Use shall not operate as a waiver of such right or
              provision. These Terms of Use operate to the fullest extent
              permissible by law. We may assign any or all of our rights and
              obligations to others at any time. We shall not be responsible or
              liable for any loss, damage, delay, or failure to act caused by
              any cause beyond our reasonable control. If any provision or part
              of a provision of these Terms of Use is determined to be unlawful,
              void, or unenforceable, that provision or part of the provision is
              deemed severable from these Terms of Use and does not affect the
              validity and enforceability of any remaining provisions. There is
              no joint venture, partnership, employment or agency relationship
              created between you and us as a result of these Terms of Use or
              use of the Marketplace Offerings. You agree that these Terms of
              Use will not be construed against us by virtue of having drafted
              them. You hereby waive any and all defenses you may have based on
              the electronic form of these Terms of Use and the lack of signing
              by the parties hereto to execute these Terms of Use.
            </Text>
            {/* 19. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              CONTACT US
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              mb='45px'>
              In order to resolve a complaint regarding the Site or the
              Marketplace Offerings or to receive further information regarding
              use of the Site or the Marketplace Offerings, please contact us at{" "}
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
              .
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

export default TermsConditions;
