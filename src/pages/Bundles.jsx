import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Link,
  ListItem,
  Menu,
  MenuList,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
// Images
import bundlesBg from "assets/img/bundles/bundles-background.png";
import stars from "assets/img/bundles/bundles-stars.png";
import developers from "assets/img/bundles/developers.png";
import medal from "assets/img/bundles/medal.png";
import purity from "assets/img/bundles/purity.png";
import purityresponsive from "assets/img/bundles/purityresponsive.png";
import sensualBg from "assets/img/bundles/sensual-background.png";
// import sensual from "assets/img/bundles/sensual.png";
// import sensualresponsive from "assets/img/bundles/sensualresponsive.png";
import simmmpleFolder from "assets/img/bundles/simmmple-folder.png";
import trophy from "assets/img/bundles/trophy.png";
import uranus from "assets/img/bundles/uranus.png";
import uranusresponsive from "assets/img/bundles/uranusresponsive.png";
import vdb from "assets/img/bundles/vdb.png";
import vdbresponsive from "assets/img/bundles/vdbresponsive.png";
import venus from "assets/img/bundles/venus.png";
import venusresponsive from "assets/img/bundles/venusresponsive.png";
import deloitteLogo from "assets/img/homepage/deloitte.png";
import georgiatechLogo from "assets/img/homepage/georgiatech.png";
import googleLogo from "assets/img/homepage/google.png";
import microsoftLogo from "assets/img/homepage/microsoft.png";
import msnLogo from "assets/img/homepage/msn.png";
import zohoLogo from "assets/img/homepage/zoho.png";
// Custom Components
import Card from "components/card/Card";
import CardBody from "components/card/CardBody";
import Countdown from "components/countdown/Countdown";
import IconBox from "components/icons/IconBox";
// Icons
import {
  Done,
  Help,
  HelpOutline,
  LeftButtonEffect,
  Lock,
  RightButtonEffect,
  SimmmpleLogoBundle,
  WarningM,
} from "components/icons/Icons";
import Layout from "components/layout/Layout";
import { HSeparator } from "components/separator/Separator";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Bundles = () => {
  const leftEffect = useRef();
  const rightEffect = useRef();

  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const md = {
    image: width < 1100,
  };
  const base = {
    image: width < 450,
  };

  useEffect(() => {
    document.title =
      "Bundles - Premium and Stunning UI Kits, Templates and Themes for developers, designers & startups @ Simmmple";
  }, []);

  const {
    isOpen: isOpenFreelancer,
    onOpen: onOpenFreelancer,
    onClose: onCloseFreelancer,
  } = useDisclosure();

  const {
    isOpen: isOpenCompany,
    onOpen: onOpenCompany,
    onClose: onCloseCompany,
  } = useDisclosure();

  const {
    isOpen: isOpenEnterprise,
    onOpen: onOpenEnterprise,
    onClose: onCloseEnterprise,
  } = useDisclosure();

  return (
    <Layout>
      <Flex direction='column' bg='#fff' overflowX='hidden'>
        <Flex
          px={{ base: "20px", xl: "0px" }}
          py={{ base: "140px", md: "0px" }}
          justify='center'
          align='center'
          bgImage={bundlesBg}
          h={{ md: "860px", xl: "1042px" }}
          bgSize='cover'
          bgPosition='center center'>
          <Flex
            direction='column'
            justify='center'
            align='center'
            textAlign='center'>
            <SimmmpleLogoBundle
              w='182px'
              h='50px'
              mb='48px'
              display={{ base: "none", xl: "flex" }}
            />
            <Text
              fontSize={{ base: "41px", md: "64px" }}
              px={{ base: "10px", "2sm": "30px", md: "0px" }}
              color='#fff'
              fontWeight='bold'
              mb='25px'>
              Exclusive Digital Bundle
            </Text>
            <Text
              color='#fff'
              fontSize={{ base: "18px", md: "20px" }}
              lineHeight='40px'
              maxW={{ base: "90%", md: "60%" }}
              mb='50px'>
              The most special and exclusive digital bundle which contains all
              of our premium products & tools that will help you design faster &
              easier.{" "}
              <Text as='span' fontWeight='bold'>
                Save up to 80%!
              </Text>
            </Text>
            <Box>
              <Countdown date='17 December 2021' />
            </Box>
            <Flex align='center' mt={{ base: "34px", md: "54px" }}>
              <LeftButtonEffect
                ref={leftEffect}
                color='#fff'
                w='35px'
                h='115px'
                transition='all .5s ease'
              />
              <Link href='#pricing'>
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
              </Link>
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
        <Grid
          mx={{ base: "20px", xl: "auto" }}
          templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(6, 1fr)" }}
          gap={{ base: "40px", lg: "70px" }}
          align='center'
          justify='center'
          bg='#fff'
          borderRadius='30px'
          p={{ base: "45px 50px", lg: "45px 100px" }}
          boxShadow='0px 18px 40px rgba(112, 144, 176, 0.12)'
          w={{ base: "unset", xl: "100%" }}
          maxW={{ base: "100%", xl: "1170px" }}
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
        <Flex
          py='100px'
          pt={{ base: "0px", lg: "30px" }}
          direction='column'
          w='1170px'
          maxW='100%'
          mx='auto'>
          <Flex direction='column' align='center' w='100%' mb='72px' mx='auto'>
            <Text
              fontSize='xs'
              color='brand.300'
              fontWeight='bold'
              mb='16px'
              letterSpacing='2px'
              textAlign='center'>
              EXCLUSIVE DIGITAL BUNDLE BENEFITS
            </Text>
            <Text
              fontSize='34px'
              lineHeight='44px'
              letterSpacing='-1px'
              color='brand.700'
              fontWeight='500'
              mb='20px'
              mx='auto'
              textAlign='center'>
              So... what’s it all about?
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
              mx='auto'
              textAlign='center'
              px={{ base: "30px", md: "0px" }}>
              It's about building better products faster than ever before.
            </Text>
          </Flex>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap='20px'
            w='100%'
            px={{ base: "20px", xl: "0px" }}>
            <Card h='320px' me='20px'>
              <CardBody h='100%' py='12px' justify='space-between' px='20px'>
                <Flex
                  flexDirection='column'
                  align='center'
                  justify='center'
                  mx='auto'>
                  <Image src={simmmpleFolder} w='100px' h='100px' mb='auto' />
                  <Text
                    textAlign='center'
                    fontWeight='700'
                    mb='10px'
                    fontSize='38px'
                    color='brand.700'>
                    4,000+
                  </Text>
                  <Text
                    textAlign='center'
                    fontSize='md'
                    lineHeight='28px'
                    color='#878CBD'
                    fontWeight='400'>
                    Coded & Designed Components and Elements
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card h='320px' me='20px'>
              <CardBody h='100%' py='12px' justify='space-between' px='20px'>
                <Flex
                  flexDirection='column'
                  align='center'
                  justify='center'
                  mx='auto'>
                  <Flex mb='auto' flexDirection='column'>
                    <Image src={trophy} w='100px' h='100px' />
                    <Image
                      src={stars}
                      w='96px'
                      h='21.6px'
                      boxShadow='0px 15px 41px -4px #7090B099'
                      borderRadius='30px'
                      transform='translate(0px, -10px)'
                    />
                  </Flex>
                  <Text
                    textAlign='center'
                    fontWeight='700'
                    mb='10px'
                    fontSize='38px'
                    color='brand.700'>
                    4.9/5
                  </Text>
                  <Text
                    textAlign='center'
                    fontSize='md'
                    lineHeight='28px'
                    color='#878CBD'
                    fontWeight='400'>
                    Reviews from developers & designers all over the world
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card h='320px' me='20px'>
              <CardBody h='100%' py='12px' justify='space-between' px='20px'>
                <Flex
                  flexDirection='column'
                  align='center'
                  justify='center'
                  mx='auto'>
                  <Image src={developers} w='100px' h='100px' mb='auto' />
                  <Text
                    textAlign='center'
                    fontWeight='700'
                    mb='10px'
                    fontSize='38px'
                    color='brand.700'>
                    10,000+
                  </Text>
                  <Text
                    textAlign='center'
                    fontSize='md'
                    lineHeight='28px'
                    color='#878CBD'
                    fontWeight='400'>
                    Developers & Designers that use our digital products
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card h='320px'>
              <CardBody h='100%' py='12px' px='18px'>
                <Flex
                  flexDirection='column'
                  align='center'
                  justify='center'
                  mx='auto'>
                  <Image src={medal} w='100px' h='129px' />
                  <Text
                    mt='auto'
                    textAlign='center'
                    fontWeight='700'
                    mb='10px'
                    fontSize='38px'
                    color='brand.700'>
                    Lifetime
                  </Text>
                  <Text
                    textAlign='center'
                    fontSize='md'
                    lineHeight='28px'
                    color='#878CBD'
                    fontWeight='400'>
                    We offer Lifetime License for all products of this bundle
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          </Grid>
        </Flex>
        <Flex
          mb='118px'
          direction='column'
          mx='auto'
          w='1170px'
          maxW='100%'
          px={{ base: "20px", xl: "auto" }}>
          <Flex
            direction='column'
            align='center'
            w='100%'
            mb={{ base: "380px", lg: "460px", xl: "100px" }}
            mx='auto'>
            <Text
              fontSize='xs'
              color='brand.300'
              fontWeight='bold'
              mb='16px'
              letterSpacing='2px'
              textAlign='center'>
              WHAT EXCLUSIVE DIGITAL BUNDLE CONTAINS
            </Text>
            <Text
              fontSize='34px'
              lineHeight='44px'
              letterSpacing='-1px'
              color='brand.700'
              fontWeight='500'
              mb='20px'
              mx='auto'
              textAlign='center'>
              What Exclusive Digital Bundle contains?
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
              mx='auto'
              textAlign='center'>
              Well... a lot of cool things, like most of our premium digital
              products.
            </Text>
          </Flex>
          <Flex mb={{ base: "380px", lg: "460px", xl: "100px" }}>
            <Flex
              w={{ base: "90%", "2sm": "92%", md: "730px", xl: "100%" }}
              mx={{ base: "auto", xl: "0px" }}
              h={{ md: "534px", xl: "550px" }}
              position='relative'
              borderRadius='30px'>
              <Image
                src={base.image ? venus : md.image ? venusresponsive : venus}
                w={{
                  base: "335px",
                  "2sm": "385px",
                  md: "600px",
                  lg: "800px",
                  xl: "575px",
                }}
                h={{
                  base: "340px",
                  "2sm": "390px",
                  md: "300px",
                  lg: "400px",
                  xl: "586px",
                }}
                maxW='unset !important'
                borderRadius='18px'
                position='absolute'
                left={{ base: "50%", md: "50%", lg: "-35px", xl: "0" }}
                top={{ base: "-315px", md: "-280px", lg: "-360px", xl: "50%" }}
                transform={{
                  base: "translate(-50%, 0px)",
                  md: "translate(-50%,0px)",
                  lg: "translate(0px, 0%);",
                  xl: "translate(0px, -50%);",
                }}
                zIndex='2'
              />
              <Flex
                w='100%'
                h='100%'
                position='relative'
                justifyContent={{ md: "center", xl: "flex-end" }}
                pe={{ md: "0px", xl: "40px" }}
                overflow='hidden'
                p={{ base: "15px", md: "0px" }}
                pt={{ md: "80px", lg: "45px" }}
                borderRadius='30px'>
                <Image
                  position='absolute'
                  transform='translate(-50%, -50%);'
                  w={{ base: "220%", xl: "110%" }}
                  h={{ base: "220%", xl: "110%" }}
                  left='50%'
                  top='50%'
                  src={sensualBg}
                  filter='blur(40px)'
                  zIndex='1'
                />
                <Flex
                  w={{ md: "70%", lg: "88%", xl: "456px" }}
                  maxW='100%'
                  flexDirection='column'
                  zIndex='2'
                  pt={{
                    base: "40px",
                    "2sm": "80px",
                    md: "0px",
                    lg: "40px",
                    xl: "0px",
                  }}>
                  <Text
                    fontWeight='bold'
                    textAlign={{ base: "center", lg: "start" }}
                    fontSize={{ base: "30px", md: "36px", xl: "50px" }}
                    letterSpacing='-0.5px'
                    lineHeight={{ base: "36px", md: "54px", lg: "64px" }}
                    mb='20px'
                    color='white'>
                    Venus Design System PRO
                  </Text>
                  <Text
                    textAlign={{ base: "center", lg: "start" }}
                    mx={{ base: "auto", lg: "0px" }}
                    fontSize={{ base: "md", md: "md" }}
                    lineHeight='28px'
                    color='white'
                    w='430px'
                    maxW='100%'
                    mb='40px'>
                    An easy-to-use Design Tool with the most common 2000+ UI/UX
                    components states that allows you to design quickly with
                    world-class standards out-of-the-box.
                  </Text>
                  <Flex
                    w='100%'
                    justifyContent={{ base: "center", md: "space-between" }}
                    flexDirection={{ base: "column", md: "row" }}
                    align='center'
                    px={{ base: "", md: "40px", lg: "0px" }}
                    pe={{ base: "", md: "40px", lg: "160px", xl: "0px" }}
                    mb='54px'>
                    <Flex
                      flexDirection='column'
                      mb={{ base: "20px", md: "0px" }}>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        250+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Global Styles
                      </Text>
                    </Flex>
                    <Flex
                      flexDirection='column'
                      mb={{ base: "20px", md: "0px" }}>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        2000+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Components States
                      </Text>
                    </Flex>
                    <Flex flexDirection='column'>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        1400+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Material Design Icons
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    w='100%'
                    align='center'
                    justify={{ base: "center", lg: "flex-start" }}
                    flexDirection={{ base: "column", md: "row" }}>
                    <Link href='https://www.figma.com/file/WGfCeWMB5HMT65TVIfPOFw/Venus---Design-System-PRO-2021-(Live-Preview)?node-id=414%3A146'>
                      <Button
                        bg='white'
                        color='#020425'
                        fontWeight='500'
                        fontSize='sm'
                        me={{ base: "0px", md: "20px" }}
                        mb={{ base: "10px", md: "0px" }}
                        lineHeight='14px'
                        h='56px'
                        w='190px'>
                        Live Preview
                      </Button>
                    </Link>
                    <NavLink to='/product/venus-design-system-pro'>
                      <Button
                        color='white'
                        bg='none'
                        border='1px solid white'
                        _hover={{
                          bg: "none",
                          opacity: "0.8",
                        }}
                        _active={{
                          bg: "none",
                          opacity: "0.8",
                        }}
                        fontWeight='500'
                        fontSize='sm'
                        lineHeight='14px'
                        h='56px'
                        w='190px'>
                        More Details
                      </Button>
                    </NavLink>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex mb={{ base: "380px", lg: "460px", xl: "100px" }}>
            <Flex
              w={{ base: "90%", "2sm": "92%", md: "730px", xl: "100%" }}
              mx={{ base: "auto", xl: "0px" }}
              h={{ md: "534px", xl: "550px" }}
              position='relative'
              borderRadius='30px'>
              <Image
                src={base.image ? vdb : md.image ? vdbresponsive : vdb}
                w={{
                  base: "335px",
                  "2sm": "385px",
                  md: "600px",
                  lg: "800px",
                  xl: "575px",
                }}
                h={{
                  base: "340px",
                  "2sm": "390px",
                  md: "300px",
                  lg: "400px",
                  xl: "586px",
                }}
                maxW='unset !important'
                borderRadius='18px'
                position='absolute'
                right={{ base: "50%", md: "50%", lg: "-35px", xl: "-10px" }}
                top={{ base: "-315px", md: "-280px", lg: "-360px", xl: "50%" }}
                transform={{
                  base: "translate(50%, 0px)",
                  md: "translate(50%,0px)",
                  lg: "translate(0px, 0%);",
                  xl: "translate(0px, -50%);",
                }}
                zIndex='2'
              />
              <Flex
                w='100%'
                h='100%'
                position='relative'
                justifyContent={{ base: "center", xl: "flex-start" }}
                overflow='hidden'
                p={{ base: "15px", md: "0px" }}
                ps={{ md: "0px", xl: "70px" }}
                pt={{ md: "80px", lg: "45px" }}
                borderRadius='30px'
                bg='linear-gradient(108.54deg, #FF416C 6.56%, #FF4B2B 95.2%)'>
                <Flex
                  w={{ md: "70%", lg: "88%", xl: "456px" }}
                  maxW='100%'
                  flexDirection='column'
                  zIndex='2'
                  pt={{
                    base: "40px",
                    "2sm": "80px",
                    md: "0px",
                    lg: "40px",
                    xl: "0px",
                  }}>
                  <Text
                    fontWeight='bold'
                    textAlign={{ base: "center", lg: "start" }}
                    fontSize={{ base: "30px", md: "36px", xl: "50px" }}
                    letterSpacing='-0.5px'
                    lineHeight={{ base: "36px", md: "54px", lg: "64px" }}
                    mb='20px'
                    color='white'>
                    Venus Dashboard Builder PRO
                  </Text>
                  <Text
                    textAlign={{ base: "center", lg: "start" }}
                    mx={{ base: "auto", lg: "0px" }}
                    fontSize={{ base: "md", md: "md" }}
                    lineHeight='28px'
                    color='white'
                    w='450px'
                    maxW='100%'
                    mb='40px'>
                    Create awesome dashboards with less effort directly in
                    Figma! The first Dashboard Builder for Figma with more than
                    400+ widgets/cards that allows you to design dashboards
                    quickly.
                  </Text>
                  <Flex
                    w='100%'
                    justifyContent={{ base: "center", md: "space-between" }}
                    flexDirection={{ base: "column", md: "row" }}
                    align='center'
                    px={{ base: "", md: "40px", lg: "0px" }}
                    pe={{ base: "", md: "40px", lg: "160px", xl: "0px" }}
                    mb='54px'>
                    <Flex
                      flexDirection='column'
                      mb={{ base: "20px", md: "0px" }}>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        90+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Global Styles
                      </Text>
                    </Flex>
                    <Flex
                      flexDirection='column'
                      mb={{ base: "20px", md: "0px" }}>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        400+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Widgets/Cards
                      </Text>
                    </Flex>
                    <Flex flexDirection='column'>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        30+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Screen Examples
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    w='100%'
                    align='center'
                    justify={{ base: "center", lg: "flex-start" }}
                    flexDirection={{ base: "column", md: "row" }}>
                    <Link href='https://www.figma.com/file/lFbkFkxt7CWerPOoGr1JlG/(Preview)-PRO-Version---Venus-Dashboard-Builder?node-id=102%3A1556'>
                      <Button
                        bg='white'
                        color='#FF4555'
                        fontWeight='500'
                        fontSize='sm'
                        me={{ base: "0px", md: "20px" }}
                        mb={{ base: "10px", md: "0px" }}
                        lineHeight='14px'
                        h='56px'
                        w='190px'>
                        Live Preview
                      </Button>
                    </Link>
                    <NavLink to='/product/venus-db-pro'>
                      <Button
                        color='white'
                        bg='none'
                        border='1px solid white'
                        _hover={{
                          bg: "none",
                          opacity: "0.8",
                        }}
                        _active={{
                          bg: "none",
                          opacity: "0.8",
                        }}
                        fontWeight='500'
                        fontSize='sm'
                        lineHeight='14px'
                        h='56px'
                        w='190px'>
                        More Details
                      </Button>
                    </NavLink>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex mb={{ base: "380px", lg: "460px", xl: "100px" }}>
            <Flex
              w={{ base: "90%", "2sm": "92%", md: "730px", xl: "100%" }}
              mx={{ base: "auto", xl: "0px" }}
              h={{ md: "534px", xl: "550px" }}
              position='relative'
              borderRadius='30px'>
              <Image
                src={base.image ? purity : md.image ? purityresponsive : purity}
                w={{
                  base: "335px",
                  "2sm": "385px",
                  md: "600px",
                  lg: "800px",
                  xl: "575px",
                }}
                h={{
                  base: "340px",
                  "2sm": "390px",
                  md: "300px",
                  lg: "400px",
                  xl: "586px",
                }}
                maxW='unset !important'
                borderRadius='18px'
                position='absolute'
                left={{ base: "50%", md: "50%", lg: "-35px", xl: "0" }}
                top={{ base: "-315px", md: "-280px", lg: "-360px", xl: "50%" }}
                transform={{
                  base: "translate(-50%, 0px)",
                  md: "translate(-50%,0px)",
                  lg: "translate(0px, 0%);",
                  xl: "translate(0px, -50%);",
                }}
                zIndex='2'
              />
              <Flex
                w='100%'
                h='100%'
                position='relative'
                justifyContent={{ base: "center", xl: "flex-end" }}
                overflow='hidden'
                p={{ base: "15px", md: "0px" }}
                pe={{ md: "0px", xl: "40px" }}
                pt={{ md: "60px", lg: "45px" }}
                borderRadius='30px'
                background='linear-gradient(180deg, #7BCBD4 0%, #29C6B7 100%)'>
                <Flex
                  w={{ md: "70%", lg: "88%", xl: "456px" }}
                  maxW='100%'
                  flexDirection='column'
                  zIndex='2'
                  pt={{
                    base: "40px",
                    "2sm": "80px",
                    md: "0px",
                    lg: "40px",
                    xl: "0px",
                  }}>
                  <Text
                    fontWeight='bold'
                    textAlign={{ base: "center", lg: "start" }}
                    fontSize={{ base: "30px", md: "36px", xl: "46px" }}
                    letterSpacing='-0.5px'
                    lineHeight={{ base: "36px", md: "54px", lg: "64px" }}
                    mb='20px'
                    color='white'>
                    Purity UI - Chakra UI Admin Dashboard
                  </Text>
                  <Text
                    textAlign={{ base: "center", lg: "start" }}
                    mx={{ base: "auto", lg: "0px" }}
                    fontSize={{ base: "md", md: "md" }}
                    lineHeight='28px'
                    color='white'
                    w='430px'
                    maxW='100%'
                    mb='40px'>
                    Most trendiest, complex and innovative Dashboard made by
                    Creative Tim & Simmmple. Check our latest Premium ReactJS
                    Dashboard based on Chakra UI.
                  </Text>
                  <Flex
                    w='100%'
                    justifyContent={{ base: "center", md: "space-between" }}
                    flexDirection={{ base: "column", md: "row" }}
                    align='center'
                    px={{ base: "", md: "40px", lg: "0px" }}
                    pe={{ base: "", md: "40px", lg: "160px", xl: "0px" }}
                    mb='54px'>
                    <Flex
                      flexDirection='column'
                      mb={{ base: "20px", md: "0px" }}>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        React
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Technology
                      </Text>
                    </Flex>
                    <Flex
                      flexDirection='column'
                      mb={{ base: "20px", md: "0px" }}>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        300+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Individual Elements
                      </Text>
                    </Flex>
                    <Flex flexDirection='column'>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        Full
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Documentation
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    w='100%'
                    align='center'
                    justify={{ base: "center", lg: "flex-start" }}
                    flexDirection={{ base: "column", md: "row" }}>
                    <Link href='https://demos.creative-tim.com/purity-ui-dashboard-pro/?ref=simmmple'>
                      <Button
                        bg='white'
                        color='#30C7BA'
                        fontWeight='500'
                        fontSize='sm'
                        me={{ base: "0px", md: "20px" }}
                        mb={{ base: "10px", md: "0px" }}
                        lineHeight='14px'
                        h='56px'
                        w='190px'>
                        Live Preview
                      </Button>
                    </Link>
                    <NavLink to='/product/purity-dashboard-pro'>
                      <Button
                        color='white'
                        bg='none'
                        border='1px solid white'
                        _hover={{
                          bg: "none",
                          opacity: "0.8",
                        }}
                        _active={{
                          bg: "none",
                          opacity: "0.8",
                        }}
                        fontWeight='500'
                        fontSize='sm'
                        lineHeight='14px'
                        h='56px'
                        w='190px'>
                        More Details
                      </Button>
                    </NavLink>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex>
            <Flex
              w={{ base: "90%", "2sm": "92%", md: "730px", xl: "100%" }}
              mx={{ base: "auto", xl: "0px" }}
              h={{ md: "534px", xl: "550px" }}
              position='relative'
              borderRadius='30px'>
              <Image
                src={base.image ? uranus : md.image ? uranusresponsive : uranus}
                w={{
                  base: "335px",
                  "2sm": "385px",
                  md: "600px",
                  lg: "800px",
                  xl: "575px",
                }}
                h={{
                  base: "340px",
                  "2sm": "390px",
                  md: "300px",
                  lg: "400px",
                  xl: "586px",
                }}
                maxW='unset !important'
                borderRadius='18px'
                position='absolute'
                right={{ base: "50%", md: "50%", lg: "-35px", xl: "0" }}
                top={{ base: "-315px", md: "-280px", lg: "-360px", xl: "50%" }}
                transform={{
                  base: "translate(50%, 0px)",
                  md: "translate(50%,0px)",
                  lg: "translate(0px, 0%);",
                  xl: "translate(0px, -50%);",
                }}
                zIndex='2'
              />
              <Flex
                w='100%'
                h='100%'
                position='relative'
                justifyContent={{ base: "center", xl: "flex-start" }}
                overflow='hidden'
                p={{ base: "15px", md: "0px" }}
                ps={{ md: "0px", xl: "70px" }}
                pt={{ md: "60px", lg: "45px" }}
                borderRadius='30px'
                background='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'>
                <Flex
                  w={{ md: "70%", lg: "88%", xl: "456px" }}
                  maxW='100%'
                  flexDirection='column'
                  zIndex='2'
                  pt={{
                    base: "40px",
                    "2sm": "80px",
                    md: "0px",
                    lg: "40px",
                    xl: "0px",
                  }}>
                  <Text
                    fontWeight='bold'
                    textAlign={{ base: "center", lg: "start" }}
                    fontSize={{ base: "30px", md: "36px", xl: "50px" }}
                    letterSpacing='-0.8px'
                    lineHeight={{ base: "36px", md: "54px", lg: "64px" }}
                    mb='20px'
                    color='white'
                    px={{ md: "20px", lg: "0px" }}>
                    Uranus Bootstrap Wireframe Kit
                  </Text>
                  <Text
                    textAlign={{ base: "center", lg: "start" }}
                    mx={{ base: "auto", lg: "0px" }}
                    fontSize={{ base: "md", md: "md" }}
                    lineHeight='28px'
                    color='white'
                    w='460px'
                    maxW='100%'
                    mb='40px'
                    letterSpacing={{ base: "0px" }}>
                    Uranus - Wireframe Kit is a wireframing pack with more than
                    180+ dark/light ready-to-use web elements/sections. The
                    basement idea of this kit was started from the wireframing
                    time problem.
                  </Text>
                  <Flex
                    w='100%'
                    justifyContent={{ base: "center", md: "space-between" }}
                    flexDirection={{ base: "column", md: "row" }}
                    align='center'
                    px={{ base: "", md: "40px", lg: "0px" }}
                    pe={{ base: "", md: "40px", lg: "160px", xl: "0px" }}
                    mb='54px'>
                    <Flex
                      flexDirection='column'
                      mb={{ base: "20px", md: "0px" }}>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        Bootstrap
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Wireframe Kit
                      </Text>
                    </Flex>
                    <Flex
                      flexDirection='column'
                      mb={{ base: "20px", md: "0px" }}>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        180+
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Widgets/Cards
                      </Text>
                    </Flex>
                    <Flex flexDirection='column'>
                      <Text
                        textAlign='center'
                        fontSize='26px'
                        lineHeight='33px'
                        color='white'
                        fontWeight='700'
                        mb='6px'>
                        Dark/Light
                      </Text>
                      <Text
                        textAlign='center'
                        fontSize='sm'
                        lineHeight='14px'
                        color='white'>
                        Themes
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    w='100%'
                    align='center'
                    justify={{ base: "center", lg: "flex-start" }}
                    flexDirection={{ base: "column", md: "row" }}>
                    <Link href='https://www.figma.com/file/bDcEEGqDi8K4taSulPCdrH/Uranus-v1.3---Wireframe-Kit---Preview?node-id=376%3A127'>
                      <Button
                        bg='white'
                        color='#634FFF'
                        fontWeight='500'
                        fontSize='sm'
                        me={{ base: "0px", md: "20px" }}
                        mb={{ base: "10px", md: "0px" }}
                        lineHeight='14px'
                        h='56px'
                        w='190px'>
                        Live Preview
                      </Button>
                    </Link>
                    <NavLink to='/product/uranus-wireframe-pro'>
                      <Button
                        color='white'
                        bg='none'
                        border='1px solid white'
                        _hover={{
                          bg: "none",
                          opacity: "0.8",
                        }}
                        _active={{
                          bg: "none",
                          opacity: "0.8",
                        }}
                        fontWeight='500'
                        fontSize='sm'
                        lineHeight='14px'
                        h='56px'
                        w='190px'>
                        More Details
                      </Button>
                    </NavLink>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          {/* <Flex>
            <Flex
              w={{ base: "90%", "2sm": "92%", md: "730px", xl: "100%" }}
              mx={{ base: "auto", xl: "0px" }}
              h={{ md: "534px", xl: "550px" }}
              position="relative"
              borderRadius="30px"
            >
              <Image
                src={
                  base.image ? sensual : md.image ? sensualresponsive : sensual
                }
                w={{
                  base: "335px",
                  "2sm": "385px",
                  md: "600px",
                  lg: "800px",
                  xl: "575px",
                }}
                h={{
                  base: "340px",
                  "2sm": "390px",
                  md: "300px",
                  lg: "400px",
                  xl: "586px",
                }}
                maxW="unset !important"
                borderRadius="18px"
                position="absolute"
                left={{ base: "50%", md: "50%", lg: "-35px", xl: "0" }}
                top={{ base: "-315px", md: "-280px", lg: "-360px", xl: "50%" }}
                transform={{
                  base: "translate(-50%, 0px)",
                  md: "translate(-50%,0px)",
                  lg: "translate(0px, 0%);",
                  xl: "translate(0px, -50%);",
                }}
                zIndex="2"
              />
              <Flex
                w="100%"
                h="100%"
                position="relative"
                justifyContent={{ md: "center", xl: "flex-end" }}
                pe={{ md: "0px", xl: "40px" }}
                overflow="hidden"
                p={{ base: "15px", md: "0px" }}
                pt={{ md: "80px", lg: "45px" }}
                borderRadius="30px"
              >
                <Image
                  position="absolute"
                  transform="translate(-50%, -50%);"
                  w={{ base: "220%", xl: "110%" }}
                  h={{ base: "220%", xl: "110%" }}
                  left="50%"
                  top="50%"
                  src={sensualBg}
                  filter="blur(40px)"
                  zIndex="1"
                />
                <Flex
                  w={{ md: "70%", lg: "88%", xl: "456px" }}
                  maxW="100%"
                  flexDirection="column"
                  zIndex="2"
                  pt={{
                    base: "40px",
                    "2sm": "80px",
                    md: "0px",
                    lg: "40px",
                    xl: "0px",
                  }}
                >
                  <Text
                    fontWeight="bold"
                    textAlign={{ base: "center", lg: "start" }}
                    fontSize={{ base: "30px", md: "36px", xl: "50px" }}
                    letterSpacing="-0.5px"
                    lineHeight={{ base: "36px", md: "54px", lg: "64px" }}
                    mb="20px"
                    color="white"
                  >
                    Purity UI React Sensual Kit
                  </Text>
                  <Text
                    textAlign={{ base: "center", lg: "start" }}
                    mx={{ base: "auto", lg: "0px" }}
                    fontSize={{ base: "md", md: "md" }}
                    lineHeight="28px"
                    color="white"
                    w="430px"
                    maxW="100%"
                    mb="40px"
                  >
                    Most trendiest, complex and innovative Dashboard made by
                    Simmmple. Check our latest Premium ReactJS Dashboard based
                    on Chakra UI.
                  </Text>
                  <Flex
                    w="100%"
                    justifyContent={{ base: "center", md: "space-between" }}
                    flexDirection={{ base: "column", md: "row" }}
                    align="center"
                    px={{ base: "", md: "40px", lg: "0px" }}
                    pe={{ base: "", md: "40px", lg: "160px", xl: "0px" }}
                    mb="54px"
                  >
                    <Flex
                      flexDirection="column"
                      mb={{ base: "20px", md: "0px" }}
                    >
                      <Text
                        textAlign="center"
                        fontSize="26px"
                        lineHeight="33px"
                        color="white"
                        fontWeight="700"
                        mb="6px"
                      >
                        Trendy
                      </Text>
                      <Text
                        textAlign="center"
                        fontSize="sm"
                        lineHeight="14px"
                        color="white"
                      >
                        Design Styles
                      </Text>
                    </Flex>
                    <Flex
                      flexDirection="column"
                      mb={{ base: "20px", md: "0px" }}
                    >
                      <Text
                        textAlign="center"
                        fontSize="26px"
                        lineHeight="33px"
                        color="white"
                        fontWeight="700"
                        mb="6px"
                      >
                        300+
                      </Text>
                      <Text
                        textAlign="center"
                        fontSize="sm"
                        lineHeight="14px"
                        color="white"
                      >
                        Individual Components
                      </Text>
                    </Flex>
                    <Flex flexDirection="column">
                      <Text
                        textAlign="center"
                        fontSize="26px"
                        lineHeight="33px"
                        color="white"
                        fontWeight="700"
                        mb="6px"
                      >
                        Full
                      </Text>
                      <Text
                        textAlign="center"
                        fontSize="sm"
                        lineHeight="14px"
                        color="white"
                      >
                        Documentation
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    w="100%"
                    align="center"
                    justify={{ base: "center", lg: "flex-start" }}
                  >
                    <Button
                      bg="white"
                      color="#020425"
                      fontWeight="500"
                      fontSize="sm"
                      me={{ base: "0px", md: "20px" }}
                      mb={{base:"10px",md:"0px"}}
                      lineHeight="14px"
                      h="56px"
                      w="190px"
                    >
                      Live Preview
                    </Button>
                    <Button
                      color="white"
                      bg="none"
                      border="1px solid white"
                      _hover={{
                        bg: "none",
                        opacity: "0.8",
                      }}
                      _active={{
                        bg: "none",
                        opacity: "0.8",
                      }}
                      fontWeight="500"
                      fontSize="sm"
                      lineHeight="14px"
                      h="56px"
                      w="190px"
                    >
                      More Details
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex> */}
        </Flex>
        <HSeparator
          id='pricing'
          w='774px'
          maxW={{ base: "350px", md: "unset" }}
          mb='100px'
          mx={{ base: "auto" }}
        />
        <Flex
          pb='100px'
          direction='column'
          w='1170px'
          maxW='100%'
          px={{ base: "20px", xl: "0px" }}
          mx='auto'>
          <Flex direction='column' align='center' w='100%' mb='72px' mx='auto'>
            <Text
              fontSize='xs'
              color='brand.300'
              fontWeight='bold'
              mb='16px'
              letterSpacing='2px'
              textAlign='center'>
              PRICING DETAILS
            </Text>
            <Text
              fontSize='34px'
              lineHeight='44px'
              letterSpacing='-1px'
              color='brand.700'
              fontWeight='500'
              mb='20px'
              mx='auto'
              textAlign='center'
              w='450px'
              maxW='100%'>
              Start building today and save hours from the process.
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
              mx='auto'
              textAlign='center'>
              Trusted by over 10,000+ developers, designers and software
              companies
            </Text>
          </Flex>
          <Flex
            maxW='100%'
            flexDirection={{ base: "column", xl: "row" }}
            alignItems='center'
            px={{ base: "0px", md: "20px" }}>
            <Card
              maxW={{ base: "100%", md: "395px", xl: "unset" }}
              h={{ base: "unset", xl: "735px" }}
              me={{ base: "0px", xl: "20px" }}
              mb={{ base: "20px", xl: "0px" }}
              boxShadow='50px 45px 76px 0px #7090B01A'>
              <CardBody
                h='100%'
                pb={{ base: "0px", md: "34px" }}
                pt={{ base: "0px", md: "50px" }}
                px={{ md: "34px", lg: "26px" }}>
                <Flex flexDirection='column'>
                  <Flex align='center' mb='5px'>
                    <Text
                      me='5px'
                      color='brand.700'
                      fontSize='22px'
                      lineHeight='28px'
                      fontWeight='500'
                      cursor='default'>
                      Freelancer
                    </Text>
                    <NavLink to='/licenses'>
                      <HelpOutline
                        w='18px'
                        color='brand.700'
                        mt='5px'
                        cursor='pointer'
                        onMouseEnter={onOpenFreelancer}
                        onMouseLeave={onCloseFreelancer}
                      />
                    </NavLink>

                    <Menu isOpen={isOpenFreelancer} position='relative'>
                      <MenuList
                        position='absolute'
                        top='-50px'
                        left='120px'
                        bg='#fff'
                        border='none'
                        borderRadius='30px'
                        boxShadow='0px 18px 40px rgba(112, 144, 176, 0.12)'
                        w='230px'
                        h='115px'>
                        <Flex direction='column' p='18px 12px'>
                          <Text
                            fontSize='sm'
                            color='brand.700'
                            fontWeight='500'>
                            Something unclear?
                          </Text>
                          <Text
                            fontSize='sm'
                            color='#878CBD'
                            fontWeight='normal'>
                            Click on the icon to learn more about the Freelancer
                            License!
                          </Text>
                        </Flex>
                      </MenuList>
                    </Menu>
                  </Flex>
                  <Flex align='center' mb='22px'>
                    <Text
                      color='brand.700'
                      fontSize='52px'
                      lineHeight='67px'
                      fontWeight='700'
                      me='15px'>
                      $72
                    </Text>
                    <Flex flexDirection='column'>
                      <Text
                        color='brand.700'
                        fontSize='16px'
                        lineHeight='21px'
                        textDecoration='line-through'>
                        reg. $354
                      </Text>
                      <Text
                        fontWeight='500'
                        color='#009B73'
                        fontSize='16px'
                        lineHeight='20px'>
                        Save up to 80%
                      </Text>
                    </Flex>
                  </Flex>

                  <Text
                    mb='46px'
                    color='#878CBD'
                    fontSize='md'
                    lineHeight='28px'
                    letterSpacing='-0.5px'>
                    Perfect for personal use and for your side projects. A
                    single license for solo designers, developers and
                    freelancers.
                  </Text>
                  <Flex flexDirection='column'>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        color='#02044A'
                        letterSpacing='-0.5px'>
                        Full Documentation
                      </Text>
                    </Flex>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        letterSpacing='-0.5px'
                        color='#02044A'>
                        Projects:
                        <Text fontWeight='500' ms='5px' color='#02044A'>
                          {" "}
                          1/Product
                        </Text>
                      </Text>
                    </Flex>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        letterSpacing='-0.5px'
                        color='#02044A'>
                        Team size:
                        <Text fontWeight='500' ms='5px' color='#02044A'>
                          1 Developer
                        </Text>
                      </Text>
                      <Text fontSize='18px'> </Text>
                    </Flex>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        letterSpacing='-0.5px'
                        color='brand.700 !important'>
                        Premium support:
                        <Text
                          fontWeight='500'
                          ms='5px'
                          color='brand.700 !important'>
                          8 Months
                        </Text>
                      </Text>
                    </Flex>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        letterSpacing='-0.5px'
                        color='#02044A'>
                        Free updates:
                        <Text fontWeight='500' ms='5px' color='#02044A'>
                          8 Months
                        </Text>
                      </Text>
                    </Flex>
                  </Flex>
                  <Link
                    min='100%'
                    href='https://simmmple.gumroad.com/l/simmmple-bundle?variant=Freelancer'>
                    <Button
                      minH='56px'
                      bg='brand.300'
                      fontWeight='500'
                      w='100%'
                      color='white'
                      fontSize='sm'
                      _hover={{ bg: "#1A05B7" }}
                      _active={{ bg: "#1A05B7" }}>
                      Buy it now
                    </Button>
                  </Link>
                </Flex>
              </CardBody>
            </Card>
            <Card
              maxW={{ base: "100%", md: "395px", xl: "unset" }}
              h={{ base: "unset", xl: "743px" }}
              mb={{ base: "20px", xl: "0px" }}
              me={{ base: "0px", xl: "20px" }}
              border='4px solid'
              borderColor='brand.300'
              boxShadow='50px 45px 76px 0px #7090B01A'>
              <CardBody
                h='100%'
                pb={{ base: "0px", md: "34px" }}
                pt={{ base: "12px", md: "46px" }}
                px={{ base: "0px", md: "26px" }}>
                <Flex flexDirection='column'>
                  <Flex align='center' mb='5px'>
                    <Text
                      me='5px'
                      color='brand.300'
                      fontSize='22px'
                      lineHeight='28px'
                      fontWeight='500'
                      cursor='default'>
                      Company
                    </Text>
                    <NavLink to='/licenses'>
                      <HelpOutline
                        w='18px'
                        color='brand.700'
                        mt='5px'
                        onMouseEnter={onOpenCompany}
                        onMouseLeave={onCloseCompany}
                      />
                    </NavLink>
                    <Menu isOpen={isOpenCompany} position='relative'>
                      <MenuList
                        position='absolute'
                        top='-50px'
                        left='120px'
                        bg='#fff'
                        border='none'
                        borderRadius='30px'
                        boxShadow='0px 18px 40px rgba(112, 144, 176, 0.12)'
                        w='230px'
                        h='115px'>
                        <Flex direction='column' p='18px 12px'>
                          <Text
                            fontSize='sm'
                            color='brand.700'
                            fontWeight='500'>
                            Something unclear?
                          </Text>
                          <Text
                            fontSize='sm'
                            color='#878CBD'
                            fontWeight='normal'>
                            Click on the icon to learn more about the Company
                            License!
                          </Text>
                        </Flex>
                      </MenuList>
                    </Menu>
                  </Flex>
                  <Flex align='center' mb='22px'>
                    <Text
                      color='brand.300'
                      fontSize='52px'
                      lineHeight='67px'
                      fontWeight='700'
                      me='15px'>
                      $409
                    </Text>
                    <Flex flexDirection='column'>
                      <Text
                        color='brand.700'
                        fontSize='16px'
                        lineHeight='21px'
                        textDecoration='line-through'>
                        reg. $1085
                      </Text>
                      <Text
                        fontWeight='500'
                        color='#009B73'
                        fontSize='16px'
                        lineHeight='20px'>
                        Save up to 63%
                      </Text>
                    </Flex>
                  </Flex>

                  <Text
                    mb='46px'
                    color='#878CBD'
                    fontSize='md'
                    lineHeight='28px'
                    letterSpacing='-0.5px'>
                    Great for multiple users and extended support. A license for
                    designers and developers teams working on projects.
                  </Text>
                  <Flex flexDirection='column'>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        color='#02044A'
                        letterSpacing='-0.5px'>
                        Full Documentation
                      </Text>
                    </Flex>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        letterSpacing='-0.5px'
                        color='#02044A'>
                        Projects:
                        <Text fontWeight='500' ms='5px' color='#02044A'>
                          {" "}
                          Unlimited
                        </Text>
                      </Text>
                    </Flex>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        letterSpacing='-0.5px'
                        color='#02044A'>
                        Team size:
                        <Text fontWeight='500' ms='5px' color='#02044A'>
                          1-15 Developers
                        </Text>
                      </Text>
                      <Text fontSize='18px'> </Text>
                    </Flex>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        letterSpacing='-0.5px'
                        color='#02044A'>
                        Premium support:
                        <Text fontWeight='500' ms='5px' color='#02044A'>
                          12 Months
                        </Text>
                      </Text>
                    </Flex>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        letterSpacing='-0.5px'
                        color='#02044A'>
                        Free updates:
                        <Text fontWeight='500' ms='5px' color='#02044A'>
                          12 Months
                        </Text>
                      </Text>
                    </Flex>
                  </Flex>
                  <Link
                    w='100%'
                    href='https://simmmple.gumroad.com/l/simmmple-bundle?variant=Team+License'>
                    <Button
                      minH='56px'
                      bg='brand.300'
                      fontWeight='500'
                      w='100%'
                      color='white'
                      fontSize='sm'
                      _hover={{ bg: "#1A05B7" }}
                      _active={{ bg: "#1A05B7" }}>
                      Buy it now
                    </Button>
                  </Link>
                </Flex>
              </CardBody>
            </Card>
            <Card
              maxW={{ base: "100%", md: "395px", xl: "unset" }}
              h={{ base: "unset", xl: "735px" }}
              boxShadow='50px 45px 76px 0px #7090B01A'>
              <CardBody
                h='100%'
                pb={{ base: "0px", md: "34px" }}
                pt={{ base: "0px", md: "50px" }}
                px={{ md: "34px", lg: "26px" }}>
                <Flex flexDirection='column'>
                  <Flex align='center' mb='5px'>
                    <Text
                      me='5px'
                      color='brand.700'
                      fontSize='22px'
                      lineHeight='28px'
                      fontWeight='500'>
                      Enterprise
                    </Text>
                    <NavLink to='/licenses'>
                      <HelpOutline
                        w='18px'
                        color='brand.700'
                        mt='5px'
                        onMouseEnter={onOpenEnterprise}
                        onMouseLeave={onCloseEnterprise}
                      />
                    </NavLink>
                    <Menu isOpen={isOpenEnterprise} position='relative'>
                      <MenuList
                        position='absolute'
                        top='-50px'
                        left='120px'
                        bg='#fff'
                        border='none'
                        borderRadius='30px'
                        boxShadow='0px 18px 40px rgba(112, 144, 176, 0.12)'
                        w='230px'
                        h='115px'>
                        <Flex direction='column' p='18px 12px'>
                          <Text
                            fontSize='sm'
                            color='brand.700'
                            fontWeight='500'>
                            Something unclear?
                          </Text>
                          <Text
                            fontSize='sm'
                            color='#878CBD'
                            fontWeight='normal'>
                            Click on the icon to learn more about the Enterprise
                            License!
                          </Text>
                        </Flex>
                      </MenuList>
                    </Menu>
                  </Flex>
                  <Flex align='center' mb='22px'>
                    <Text
                      color='brand.700'
                      fontSize='52px'
                      lineHeight='67px'
                      fontWeight='700'
                      me='15px'>
                      $879
                    </Text>
                    <Flex flexDirection='column'>
                      <Text
                        color='brand.700'
                        fontSize='16px'
                        lineHeight='21px'
                        textDecoration='line-through'>
                        reg. $1945
                      </Text>
                      <Text
                        fontWeight='500'
                        color='#009B73'
                        fontSize='16px'
                        lineHeight='20px'>
                        Save up to 55%
                      </Text>
                    </Flex>
                  </Flex>

                  <Text
                    mb='46px'
                    color='#878CBD'
                    fontSize='md'
                    lineHeight='28px'
                    letterSpacing='-0.5px'>
                    Perfect for personal use and for your side projects. A
                    single license for solo designers, developers and
                    freelancers.
                  </Text>
                  <Flex flexDirection='column'>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        color='#02044A'
                        letterSpacing='-0.5px'>
                        Full Documentation
                      </Text>
                    </Flex>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        letterSpacing='-0.5px'
                        color='#02044A'>
                        Projects:
                        <Text fontWeight='500' ms='5px' color='#02044A'>
                          {" "}
                          Unlimited
                        </Text>
                      </Text>
                    </Flex>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        letterSpacing='-0.5px'
                        color='#02044A'>
                        Team size:
                        <Text fontWeight='500' ms='5px' color='#02044A'>
                          Unlimited
                        </Text>
                      </Text>
                      <Text fontSize='18px'> </Text>
                    </Flex>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        letterSpacing='-0.8px'
                        color='#02044A !important'>
                        Premium support:
                        <Text
                          fontWeight='500'
                          ms='3px'
                          color='#02044A !important'>
                          24 Months
                        </Text>
                      </Text>
                    </Flex>
                    <Flex align='center' mb='40px'>
                      <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                        <Done color='brand.300' w='21px' />
                      </IconBox>
                      <Text
                        fontSize='18px'
                        display='flex'
                        letterSpacing='-0.5px'
                        color='#02044A'>
                        Free updates:
                        <Text fontWeight='500' ms='5px' color='#02044A'>
                          24 Months
                        </Text>
                      </Text>
                    </Flex>
                  </Flex>
                  <Link
                    w='100%'
                    href='https://simmmple.gumroad.com/l/simmmple-bundle?variant=Enterprise'>
                    <Button
                      minH='56px'
                      bg='brand.300'
                      fontWeight='500'
                      w='100%'
                      color='white'
                      fontSize='sm'
                      _hover={{ bg: "#1A05B7" }}
                      _active={{ bg: "#1A05B7" }}>
                      Buy it now
                    </Button>
                  </Link>
                </Flex>
              </CardBody>
            </Card>
          </Flex>
          <Flex
            justify='space-between'
            flexDirection={{ base: "column", xl: "row" }}
            mt='72px'>
            <Flex flexDirection='column' align='center'>
              <Help color='brand.300' w='24px' h='24px' mb='16px' />
              <Text
                textAlign='center'
                maxW='320px'
                color='#8F9BBA'
                mb='30px'
                fontSize='14px'>
                If you have any questions about the product or licensing please
                check FAQs bellow.
              </Text>
            </Flex>
            <Flex flexDirection='column' align='center'>
              <Lock color='#01B574' w='24px' h='24px' mb='16px' />

              <Text
                textAlign='center'
                maxW='345px'
                color='#8F9BBA'
                letterSpacing='0px'
                fontSize='14px'
                mb='30px'>
                Secure 128-bit SSL Encrypted payments powered by
                <Link
                  href='https://customers.gumroad.com/article/191-a-guide-to-buying-on-gumroad'
                  fontWeight='500'
                  ms='3px'
                  textDecoration='underline'>
                  Gumroad
                </Link>
                . If you're having issues with the checkout please contact
                <Link
                  href='https://help.gumroad.com/article/20-how-do-i-contact-gumroad'
                  fontWeight='500'
                  ms='3px'
                  textDecoration='underline'>
                  Gumroad's support
                </Link>
                .
              </Text>
              <Text textAlign='center' maxW='345px'></Text>
            </Flex>
            <Flex flexDirection='column' align='center'>
              <WarningM color='#FFB547' w='24px' h='24px' mb='16px' />

              <Text
                textAlign='center'
                maxW='300px'
                color='#8F9BBA'
                letterSpacing='0px'
                fontSize='14px'>
                The standard VAT rate may be charged, following the law of your
                country.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <HSeparator
          w='774px'
          maxW={{ base: "325px", md: "unset" }}
          mb='100px'
          mx={{ base: "auto" }}
        />
        <Flex
          pb='100px'
          direction='column'
          w='1170px'
          maxW='100%'
          px={{ base: "0px", xl: "0px" }}
          mx='auto'>
          <Flex direction='column' align='center' w='100%' mb='72px' mx='auto'>
            <Text
              fontSize='xs'
              color='brand.300'
              fontWeight='bold'
              mb='16px'
              letterSpacing='2px'
              textAlign='center'>
              EXCLUSIVE DIGITAL BUNDLE FAQS
            </Text>
            <Text
              fontSize='34px'
              lineHeight='44px'
              letterSpacing='-1px'
              color='brand.700'
              fontWeight='500'
              mb='20px'
              mx='auto'
              textAlign='center'
              w='450px'
              maxW='100%'
              px={{ base: "20px", md: "0px" }}>
              Frequently Asked Questions
            </Text>
          </Flex>
          <Flex
            w='100%'
            mb='72px'
            mx='auto'
            flexDirection={{ base: "column", xl: "row" }}>
            <Flex
              direction='column'
              w={{ base: "90%", md: "50%" }}
              mx={{ base: "auto", xl: "0px" }}
              me={{ base: "auto", xl: "50px" }}>
              {/* 1. */}
              <Text
                color='brand.700'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                How do I use the license that I got with my purchase?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                You will receive a license code in your order receipt. You do
                not need to insert it anywhere. Please keep it in your records
                for any future inquiry from us. If you create a client project,
                you can either keep this code or you can send us an email using
                our
                <NavLink to='/contact'>
                  <Text
                    textDecoration='underline'
                    color='brand.300'
                    fontWeight='500'
                    as='span'
                    mx='3px'>
                    contact page
                  </Text>
                </NavLink>
                {""}, and we will transfer the license to your client, provided
                that they have an account on our website.
              </Text>
              {/* 2. */}
              <Text
                color='brand.700'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                What is the difference between the Freelancer/Company/Enterprise
                licenses?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='16px'
                maxW='548px'>
                The Freelancer license is aimed at people who work on their own.
                It grants you the right to use the purchased product only for
                one project (either yours or for a client).
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='16px'
                maxW='548px'>
                The Company license is aimed at agencies or larger teams. It
                grants you the right to create other licensed products base on
                the template that you purchase form us.
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='16px'
                maxW='548px'>
                The Enterprise license is aimed at large companies with multiple
                projects. It grants you the right to create any kind of
                software, SaaS, digital products and sell them.
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                All the differences between the types of licenses are{" "}
                <NavLink to='/licenses'>
                  <Text
                    textDecoration='underline'
                    color='brand.300'
                    fontWeight='500'
                    as='span'
                    mx='3px'>
                    available here
                  </Text>
                </NavLink>
                .
              </Text>
              {/* 3. */}
              <Text
                color='brand.700'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                Are the images, fonts, and icons free to use?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                The images, fonts, icons and every other creative element for
                each theme can be freely used in your project under our
                licensing terms.
              </Text>
              {/* 4. */}
              <Text
                color='brand.700'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                Do these themes work with Wordpress?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                These products are not Wordpress themes, however, they can be
                integrated in Wordpress by an experienced web developer.
              </Text>
              {/* 5. */}
              <Text
                color='brand.700'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'
                pe='90px'>
                What does the Included Documentation feature refer to?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                It means that each theme within the Exclusive Digital Bundle
                promotion has a thorough and up to date documentation on how to
                get started with the product and each components and plugin is
                properly explained.
              </Text>
              {/* 6. */}
              <Text
                color='brand.700'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'
                pe='90px'>
                Can I use a premium product in an open source project?{" "}
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                mb='16px'
                maxW='548px'>
                Yes, of course! You can use the PRO product for an open source
                project if you add in the Readme file (on github) or in the
                description of your product that you built the project using “
                <Text fontWeight='500' mx='3px' as='span'>
                  X product from Simmmple
                </Text>{" "}
                ” and a link to the product page.
              </Text>

              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='60px'
                maxW='548px'>
                Please let us know after you launched the project and, if it is
                helping the developers community, we will support you with
                feedback and promote it in our gallery, social media and
                newsletters.
              </Text>
              <Flex
                flexDirection='column'
                bg='#F4F7FE'
                ps='24px'
                pe='23px'
                pt='25px'
                pb='35px'
                borderRadius='20px'
                maxW='575px'
                display={{ base: "none", xl: "flex" }}>
                <Text
                  color='brand.700'
                  fontSize='22px'
                  lineHeight='34px'
                  fontWeight='500'
                  mb='16px'>
                  Something unclear? We are here to help you!
                </Text>
                <Text
                  fontSize='md'
                  lineHeight='28px'
                  color='#878CBD'
                  fontWeight='400'
                  maxW='548px'>
                  Feel free to send us a message using the
                  <NavLink to='/contact'>
                    <Text
                      textDecoration='underline'
                      color='brand.300'
                      fontWeight='500'
                      as='span'
                      mx='3px'>
                      contact page
                    </Text>
                  </NavLink>
                  {""}
                  and one of our team members will get back to you in the
                  shortest time possible
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction='column'
              w={{ base: "90%", md: "50%" }}
              mx={{ base: "auto", xl: "0px" }}>
              {/* 7. */}
              <Text
                color='brand.700'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                What does the number of "Projects" refer to?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='16px'
                maxW='548px'>
                Depending on the License you purchase, you can use our products
                to either code a website/web application for you, for a client,
                or for multiple clients, which will be hosted on one or multiple
                domains:
              </Text>
              <UnorderedList ps='10px'>
                <ListItem color='#878CBD'>
                  <Text
                    fontSize='md'
                    lineHeight='28px'
                    fontWeight='400'
                    mb='16px'
                    maxW='608px'
                    letterSpacing='-0.5px'>
                    For example, if you purchased the Freelancer License you can
                    create only one website (for you or a client). Same, if you
                    have multiple subdomains, like "test.yoursite.com" or
                    "dev.yoursite.com", you can use the Freelancer License.
                  </Text>
                </ListItem>
                <ListItem color='#878CBD'>
                  <Text
                    fontSize='md'
                    lineHeight='28px'
                    fontWeight='400'
                    mb='72px'
                    maxW='548px'>
                    If you want to create multiple websites, you will need a
                    bigger License (like Company or Enterprise). Same, if you
                    have a complex application like a SaaS and have
                    "client1.yoursite.com" and "client2.yoursite.com", you will
                    need a multi-domain License like Company or Enterprise.
                  </Text>
                </ListItem>
              </UnorderedList>
              {/* 8. */}
              <Text
                color='brand.700'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                What does the refer to?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='16px'
                maxW='608px'>
                Depending on your license type, you have a fixed period when you
                can submit any ticket to us regarding product functionalities
                and bug fixes (learning and tutorials related requests are not
                included). You will get responses directly from the product's
                creators in 24 hours (during business days):
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                mb='16px'
                maxW='608px'
                letterSpacing='-0.2px'>
                If you purchase the Freelancer license, you will receive Support
                from us for 8 months. If you need 12 months of Support, you will
                need the Company license.
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='608px'>
                If you purchase the Enterprise license, you will benefit from 24
                months of Support. At the end of this period, you will need to
                renew your license (purchase the product again) to get Support.
              </Text>
              {/* 9. */}
              <Text
                color='brand.700'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                Are the themes available with only classic CSS and without Sass
                as well?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                Yes, they are. Each theme has a
                <Text color='brand.300' mx='3px' as='span'>
                  html&css
                </Text>{" "}
                folder which contains the theme with classic HTML, CSS, and
                Javascript files.
              </Text>
              {/* 10. */}
              <Text
                color='brand.700'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                If I purchased a Freelancer/Company License, how can I upgrade
                to the Company/Enterprise License?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                In case you have already purchased a license, but you want to
                upgrade, you can just send us a message using the
                <NavLink to='/contact'>
                  <Text
                    textDecoration='underline'
                    color='brand.300'
                    fontWeight='500'
                    as='span'
                    mx='3px'>
                    contact page
                  </Text>
                </NavLink>
                {""}
                and we will send you a discount code so you will only pay the
                difference for the upgrade.
              </Text>
              {/* 11. */}
              <Text
                color='brand.700'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                What is the difference between a Free and a PRO product?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='16px'
                maxW='548px'>
                The differences between the Free and Pro products consists of
                the number of components, plugins, sections, pages in each.
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                The Free versions contain only a few elements which allow you to
                build a website but the PRO version is gives you much more
                flexibility.
              </Text>
              {/* 12. */}
              <Text
                color='brand.700'
                fontSize='22px'
                lineHeight='28px'
                fontWeight='500'
                mb='16px'>
                Can I remove the copyright notice from the files?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#878CBD'
                fontWeight='400'
                letterSpacing='-0.5px'
                maxW='548px'
                mb={{ base: "72px", xl: "0px" }}>
                You can remove the copyright notice (if it's a premium item),
                but then you will need to create a separate
                <Text color='brand.300' mx='3px' as='span'>
                  .txt
                </Text>{" "}
                file called
                <Text color='brand.300' mx='3px' as='span'>
                  LICENSE.txt
                </Text>
                , and copy paste the copyright text in there. This file should
                be added to the root folder of your project.
              </Text>

              <Flex
                flexDirection='column'
                bg='#F4F7FE'
                ps='24px'
                pe='23px'
                pt='25px'
                pb='35px'
                borderRadius='20px'
                maxW='575px'
                display={{ base: "flex", xl: "none" }}>
                <Text
                  color='brand.700'
                  fontSize='22px'
                  lineHeight='28px'
                  fontWeight='500'
                  mb='16px'>
                  Something unclear? We are here to help you!
                </Text>
                <Text
                  fontSize='md'
                  lineHeight='28px'
                  color='#878CBD'
                  fontWeight='400'
                  maxW='548px'>
                  Feel free to send us a message using the
                  <NavLink to='/contact'>
                    <Text
                      textDecoration='underline'
                      color='brand.300'
                      fontWeight='500'
                      as='span'
                      mx='3px'>
                      contact page
                    </Text>
                  </NavLink>
                  {""}
                  and one of our team members will get back to you in the
                  shortest time possible
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Bundles;
