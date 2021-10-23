import React, { useRef } from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  Grid,
  Button,
  Link,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

// Custom Components
import Card from "components/card/Card";
import CardBody from "components/card/CardBody";
import Countdown from "components/countdown/Countdown";
import { HSeparator } from "components/separator/Separator";

// Icons
import {
  LeftButtonEffect,
  RightButtonEffect,
  SimmmpleLogoBundle,
  Done,
  HelpOutline,
  Help,
  Lock,
  WarningM,
} from "components/icons/Icons";
import IconBox from "components/icons/IconBox";

// Images
import bundlesBg from "assets/img/bundles/bundles-background.png";
import medal from "assets/img/bundles/medal.png";
import trophy from "assets/img/bundles/trophy.png";
import stars from "assets/img/bundles/bundles-stars.png";
import simmmpleFolder from "assets/img/bundles/simmmple-folder.png";
import developers from "assets/img/bundles/developers.png";
import sensualBg from "assets/img/bundles/sensual-background.png";
import purity from "assets/img/bundles/purity.png";
import vdb from "assets/img/bundles/vdb.png";
import sensual from "assets/img/bundles/sensual.png";
import venus from "assets/img/bundles/venus.png";
import uranus from "assets/img/bundles/uranus.png";
import googleLogo from "assets/img/homepage/google.png";
import msnLogo from "assets/img/homepage/msn.png";
import microsoftLogo from "assets/img/homepage/microsoft.png";
import zohoLogo from "assets/img/homepage/zoho.png";
import georgiatechLogo from "assets/img/homepage/georgiatech.png";
import deloitteLogo from "assets/img/homepage/deloitte.png";

const Bundles = () => {
  const leftEffect = useRef();
  const rightEffect = useRef();

  return (
    <Flex direction='column' bg='#fff' overflowX='hidden'>
      <Flex
        justify='center'
        align='center'
        bgImage={bundlesBg}
        h='1042px'
        bgSize='cover'
        bgPosition='center center'>
        <Flex
          direction='column'
          justify='center'
          align='center'
          textAlign='center'>
          <SimmmpleLogoBundle w='182px' h='50px' mb='48px' />
          <Text fontSize='64px' color='#fff' fontWeight='bold' mb='25px'>
            Exclusive Digital Bundle
          </Text>
          <Text
            color='#fff'
            fontSize='20px'
            lineHeight='40px'
            maxW='70%'
            mb='50px'>
            <Text as='span' fontWeight='bold'>
              Save up to 80% OFF{" "}
            </Text>
            to all Premium Coded & Design Products & Tools with our Exclusive
            Digital Bundle!
          </Text>
          <Box>
            <Countdown date='17 December 2021' />
          </Box>
          <Flex align='center' mt='54px'>
            <LeftButtonEffect
              ref={leftEffect}
              color='#fff'
              w='35px'
              h='115px'
              transition='all .5s ease'
            />
            <Button
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
        mx='auto'
        maxW='1170px'
        templateColumns='repeat(6, 1fr)'
        gap='70px'
        align='center'
        justify='center'
        bg='#fff'
        borderRadius='30px'
        p='45px 100px'
        boxShadow='0px 18px 40px rgba(112, 144, 176, 0.12)'
        w='100%'
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
      <Flex py='100px' direction='column' w='1170px' mx='auto'>
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
            textAlign='center'>
            It's about building better products faster than ever before.
          </Text>
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
          <Card h='320px' me='20px'>
            <CardBody h='100%' py='12px' justify='space-between' px='20px'>
              <Flex flexDirection='column' align='center'>
                <Image src={simmmpleFolder} w='100px' h='100px' mb='auto' />
                <Text
                  textAlign='center'
                  fontWeight='700'
                  mb='10px'
                  fontSize='38px'>
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
              <Flex flexDirection='column' align='center'>
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
                  fontSize='38px'>
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
              <Flex flexDirection='column' align='center'>
                <Image src={developers} w='100px' h='100px' mb='auto' />
                <Text
                  textAlign='center'
                  fontWeight='700'
                  mb='10px'
                  fontSize='38px'>
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
              <Flex flexDirection='column' align='center'>
                <Image src={medal} w='100px' h='129px' />
                <Text
                  mt='auto'
                  textAlign='center'
                  fontWeight='700'
                  mb='10px'
                  fontSize='38px'>
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
        </Flex>
      </Flex>
      <Flex mb='118px' direction='column' w='1170px' mx='auto'>
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
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }} mb='100px'>
          <Flex
            w='100%'
            h='550px'
            position='relative'
            mb='90px'
            borderRadius='30px'>
            <Image
              src={venus}
              w='575px'
              h='586px'
              borderRadius='18px'
              position='absolute'
              left='0'
              top='50%'
              transform='translate(0px, -50%);'
              zIndex='2'
            />
            <Flex
              w='100%'
              h='100%'
              position='relative'
              justifyContent='flex-end'
              overflow='hidden'
              pe='70px'
              pt='45px'
              borderRadius='30px'>
              <Image
                position='absolute'
                transform='translate(-50%, -50%);'
                w='110%'
                h='110%'
                left='53%'
                top='50%'
                src={sensualBg}
                filter='blur(40px)'
                zIndex='1'
              />
              <Flex w='456px' maxW='100%' flexDirection='column' zIndex='2'>
                <Text fontWeight='bold' fontSize='50px' mb='20px' color='white'>
                  Venus Design System PRO
                </Text>
                <Text
                  fontSize='md'
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
                  justifyContent={{ base: "center", lg: "space-between" }}
                  align='center'
                  mb='54px'>
                  <Flex flexDirection='column'>
                    <Text
                      textAlign='center'
                      fontSize='26px'
                      lineHeight='33px'
                      color='white'
                      fontWeight='700'>
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
                  <Flex flexDirection='column'>
                    <Text
                      textAlign='center'
                      fontSize='26px'
                      lineHeight='33px'
                      color='white'
                      fontWeight='700'>
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
                      fontWeight='700'>
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
                <Flex w='100%' justifyContent='space-between' align='center'>
                  <Button
                    color='#020425'
                    fontWeight='400'
                    fontSize='sm'
                    lineHeight='14px'
                    h='56px'
                    w='190px'>
                    Live Preview
                  </Button>
                  <Button
                    color='white'
                    bg='none'
                    border='1px solid white'
                    _hover={{
                      bg: "none",
                      opacity: "0.8",
                    }}
                    fontWeight='400'
                    fontSize='sm'
                    lineHeight='14px'
                    h='56px'
                    w='190px'>
                    More Details
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
          <Flex
            w='100%'
            h='550px'
            position='relative'
            mb='90px'
            borderRadius='30px'>
            <Image
              src={vdb}
              w='575px'
              h='586px'
              borderRadius='18px'
              position='absolute'
              right='0'
              top='50%'
              transform='translate(5%, -50%);'
              zIndex='2'
            />
            <Flex
              w='100%'
              h='100%'
              position='relative'
              justifyContent='flex-start'
              overflow='hidden'
              ps='70px'
              pt='45px'
              borderRadius='30px'
              bg='linear-gradient(108.54deg, #FF416C 6.56%, #FF4B2B 95.2%)'>
              <Flex w='456px' maxW='100%' flexDirection='column' zIndex='2'>
                <Text fontWeight='bold' fontSize='50px' mb='20px' color='white'>
                  Venus Dashboard Builder PRO
                </Text>
                <Text
                  fontSize='md'
                  lineHeight='28px'
                  color='white'
                  w='450px'
                  maxW='100%'
                  mb='40px'>
                  Create awesome dashboards with less effort directly in Figma!
                  The first Dashboard Builder for Figma with more than 400+
                  widgets/cards that allows you to design dashboards quickly.
                </Text>
                <Flex
                  w='100%'
                  justifyContent={{ base: "center", lg: "space-between" }}
                  align='center'
                  mb='54px'>
                  <Flex flexDirection='column'>
                    <Text
                      textAlign='center'
                      fontSize='26px'
                      lineHeight='33px'
                      color='white'
                      fontWeight='700'>
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
                  <Flex flexDirection='column'>
                    <Text
                      textAlign='center'
                      fontSize='26px'
                      lineHeight='33px'
                      color='white'
                      fontWeight='700'>
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
                      fontWeight='700'>
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
                <Flex w='100%' justifyContent='space-between' align='center'>
                  <Button
                    color='#FF4555'
                    fontWeight='400'
                    fontSize='sm'
                    lineHeight='14px'
                    h='56px'
                    w='190px'>
                    Live Preview
                  </Button>
                  <Button
                    color='white'
                    bg='none'
                    border='1px solid white'
                    _hover={{
                      bg: "none",
                      opacity: "0.8",
                    }}
                    fontWeight='400'
                    fontSize='sm'
                    lineHeight='14px'
                    h='56px'
                    w='190px'>
                    More Details
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
          <Flex
            w='100%'
            h='550px'
            position='relative'
            mb='90px'
            borderRadius='30px'>
            <Image
              src={purity}
              w='575px'
              h='586px'
              borderRadius='18px'
              position='absolute'
              left='0'
              top='50%'
              transform='translate(0px, -50%);'
              zIndex='2'
            />
            <Flex
              w='100%'
              h='100%'
              position='relative'
              justifyContent='flex-end'
              overflow='hidden'
              pe='70px'
              pt='45px'
              borderRadius='30px'
              background='linear-gradient(180deg, #7BCBD4 0%, #29C6B7 100%)'>
              <Flex w='456px' maxW='100%' flexDirection='column' zIndex='2'>
                <Text
                  fontWeight='bold'
                  fontSize='50px'
                  mb='20px'
                  color='white'
                  letterSpacing='-2.5px'>
                  Purity UI - Chakra UI Admin Dashboard
                </Text>
                <Text
                  fontSize='md'
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
                  justifyContent={{ base: "center", lg: "space-between" }}
                  align='center'
                  mb='54px'>
                  <Flex flexDirection='column'>
                    <Text
                      textAlign='center'
                      fontSize='26px'
                      lineHeight='33px'
                      color='white'
                      fontWeight='700'>
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
                  <Flex flexDirection='column'>
                    <Text
                      textAlign='center'
                      fontSize='26px'
                      lineHeight='33px'
                      color='white'
                      fontWeight='700'>
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
                      fontWeight='700'>
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
                <Flex w='100%' justifyContent='space-between' align='center'>
                  <Button
                    color='#30C7BA'
                    fontWeight='400'
                    fontSize='sm'
                    lineHeight='14px'
                    h='56px'
                    w='190px'>
                    Live Preview
                  </Button>
                  <Button
                    color='white'
                    bg='none'
                    border='1px solid white'
                    _hover={{
                      bg: "none",
                      opacity: "0.8",
                    }}
                    fontWeight='400'
                    fontSize='sm'
                    lineHeight='14px'
                    h='56px'
                    w='190px'>
                    More Details
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
          <Flex
            w='100%'
            h='550px'
            position='relative'
            mb='90px'
            borderRadius='30px'>
            <Image
              src={uranus}
              w='575px'
              h='586px'
              borderRadius='18px'
              position='absolute'
              right='0'
              top='50%'
              transform='translate(5%, -50%);'
              zIndex='2'
            />
            <Flex
              w='100%'
              h='100%'
              position='relative'
              justifyContent='flex-start'
              overflow='hidden'
              ps='70px'
              pt='45px'
              borderRadius='30px'
              background='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'>
              <Flex w='456px' maxW='100%' flexDirection='column' zIndex='2'>
                <Text fontWeight='bold' fontSize='50px' mb='20px' color='white'>
                  Uranus Bootstrap Wireframe Kit
                </Text>
                <Text
                  fontSize='md'
                  lineHeight='28px'
                  color='white'
                  w='460px'
                  maxW='100%'
                  mb='40px'
                  letterSpacing='-0.8px'>
                  Uranus - Wireframe Kit is a wireframing pack with more than
                  180+ dark/light ready-to-use web elements/sections. The
                  basement idea of this kit was started from the wireframing
                  time problem.
                </Text>
                <Flex
                  w='100%'
                  justifyContent={{ base: "center", lg: "space-between" }}
                  align='center'
                  mb='54px'>
                  <Flex flexDirection='column'>
                    <Text
                      textAlign='center'
                      fontSize='26px'
                      lineHeight='33px'
                      color='white'
                      fontWeight='700'>
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
                  <Flex flexDirection='column'>
                    <Text
                      textAlign='center'
                      fontSize='26px'
                      lineHeight='33px'
                      color='white'
                      fontWeight='700'>
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
                      fontWeight='700'>
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
                <Flex w='100%' justifyContent='space-between' align='center'>
                  <Button
                    color='#634FFF'
                    fontWeight='400'
                    fontSize='sm'
                    lineHeight='14px'
                    h='56px'
                    w='190px'>
                    Live Preview
                  </Button>
                  <Button
                    color='white'
                    bg='none'
                    border='1px solid white'
                    _hover={{
                      bg: "none",
                      opacity: "0.8",
                    }}
                    fontWeight='400'
                    fontSize='sm'
                    lineHeight='14px'
                    h='56px'
                    w='190px'>
                    More Details
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
          <Flex w='100%' h='550px' position='relative' borderRadius='30px'>
            <Image
              src={sensual}
              w='575px'
              h='586px'
              borderRadius='18px'
              position='absolute'
              left='0'
              top='50%'
              transform='translate(0px, -50%);'
              zIndex='2'
            />
            <Flex
              w='100%'
              h='100%'
              position='relative'
              justifyContent='flex-end'
              overflow='hidden'
              pe='70px'
              pt='45px'
              borderRadius='30px'>
              <Image
                position='absolute'
                transform='translate(-50%, -50%);'
                w='110%'
                h='110%'
                left='53%'
                top='50%'
                src={sensualBg}
                filter='blur(40px)'
                zIndex='1'
              />
              <Flex w='456px' maxW='100%' flexDirection='column' zIndex='2'>
                <Text fontWeight='bold' fontSize='50px' mb='20px' color='white'>
                  Purity UI React Sensual Kit
                </Text>
                <Text
                  fontSize='md'
                  lineHeight='28px'
                  color='white'
                  w='430px'
                  maxW='100%'
                  mb='40px'>
                  Most trendiest, complex and innovative Dashboard made by
                  Simmmple. Check our latest Premium ReactJS Dashboard based on
                  Chakra UI.
                </Text>
                <Flex
                  w='100%'
                  justifyContent={{ base: "center", lg: "space-between" }}
                  align='center'
                  mb='54px'>
                  <Flex flexDirection='column'>
                    <Text
                      textAlign='center'
                      fontSize='26px'
                      lineHeight='33px'
                      color='white'
                      fontWeight='700'>
                      Trendy
                    </Text>
                    <Text
                      textAlign='center'
                      fontSize='sm'
                      lineHeight='14px'
                      color='white'>
                      Design Styles
                    </Text>
                  </Flex>
                  <Flex flexDirection='column'>
                    <Text
                      textAlign='center'
                      fontSize='26px'
                      lineHeight='33px'
                      color='white'
                      fontWeight='700'>
                      300+
                    </Text>
                    <Text
                      textAlign='center'
                      fontSize='sm'
                      lineHeight='14px'
                      color='white'>
                      Individual Components
                    </Text>
                  </Flex>
                  <Flex flexDirection='column'>
                    <Text
                      textAlign='center'
                      fontSize='26px'
                      lineHeight='33px'
                      color='white'
                      fontWeight='700'>
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
                <Flex w='100%' justifyContent='space-between' align='center'>
                  <Button
                    color='#020425'
                    fontWeight='400'
                    fontSize='sm'
                    lineHeight='14px'
                    h='56px'
                    w='190px'>
                    Live Preview
                  </Button>
                  <Button
                    color='white'
                    bg='none'
                    border='1px solid white'
                    _hover={{
                      bg: "none",
                      opacity: "0.8",
                    }}
                    fontWeight='400'
                    fontSize='sm'
                    lineHeight='14px'
                    h='56px'
                    w='190px'>
                    More Details
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>{" "}
      <HSeparator w='774px' mb='100px' mx='auto' />
      <Flex pb='100px' direction='column' w='1170px' mx='auto'>
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
            w='450px'>
            Start building today and save hours from the process.
          </Text>
          <Text
            fontSize='md'
            lineHeight='28px'
            color='#878CBD'
            fontWeight='400'
            mx='auto'
            textAlign='center'>
            Trusted by over 10,000+ developers, designers and software companies
          </Text>
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
          <Card h='735px' me='20px' boxShadow='50px 45px 76px 0px #7090B01A'>
            <CardBody h='100%' pb='34px' pt='50px' px='34px'>
              <Flex flexDirection='column'>
                <Flex align='center' mb='5px'>
                  <Text
                    me='5px'
                    color='brand.700'
                    fontSize='22px'
                    lineHeight='28px'
                    fontWeight='500'>
                    Freelancer
                  </Text>
                  <HelpOutline w='18px' color='brand.700' mt='5px' />
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
                    <Text color='green.600' fontSize='16px' lineHeight='21px'>
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
                  Perfect for personal use and for your side projects. A single
                  license for solo designers, developers and freelancers.
                </Text>
                <Flex flexDirection='column'>
                  <Flex align='center' mb='40px'>
                    <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                      <Done color='brand.300' w='21px' />
                    </IconBox>
                    <Text fontSize='18px' display='flex' letterSpacing='-0.5px'>
                      Full Documentation
                    </Text>
                  </Flex>
                  <Flex align='center' mb='40px'>
                    <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                      <Done color='brand.300' w='21px' />
                    </IconBox>
                    <Text fontSize='18px' display='flex' letterSpacing='-0.5px'>
                      Projects:
                      <Text fontWeight='bold' ms='5px'>
                        {" "}
                        1/Product
                      </Text>
                    </Text>
                  </Flex>
                  <Flex align='center' mb='40px'>
                    <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                      <Done color='brand.300' w='21px' />
                    </IconBox>
                    <Text fontSize='18px' display='flex' letterSpacing='-0.5px'>
                      Team size:
                      <Text fontWeight='bold' ms='5px'>
                        1 Developer
                      </Text>
                    </Text>
                    <Text fontSize='18px'> </Text>
                  </Flex>
                  <Flex align='center' mb='40px'>
                    <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                      <Done color='brand.300' w='21px' />
                    </IconBox>
                    <Text fontSize='18px' display='flex' letterSpacing='-0.5px'>
                      Premium support:
                      <Text fontWeight='bold' ms='5px'>
                        8 Months
                      </Text>
                    </Text>
                  </Flex>
                  <Flex align='center' mb='40px'>
                    <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                      <Done color='brand.300' w='21px' />
                    </IconBox>
                    <Text fontSize='18px' display='flex' letterSpacing='-0.5px'>
                      Free updates:
                      <Text fontWeight='bold' ms='5px'>
                        8 Months
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
                <Button
                  minH='56px'
                  bg='brand.300'
                  color='white'
                  _hover={{ background: "brand.300", opacity: "0.9" }}
                  _active={{ background: "brand.300", opacity: "0.7" }}>
                  Buy it now
                </Button>
              </Flex>
            </CardBody>
          </Card>
          <Card
            h='743px'
            me='20px'
            border='4px solid'
            borderColor='brand.300'
            boxShadow='50px 45px 76px 0px #7090B01A'>
            <CardBody h='100%' pb='34px' pt='46px' px='26px'>
              <Flex flexDirection='column'>
                <Flex align='center' mb='5px'>
                  <Text
                    me='5px'
                    color='brand.300'
                    fontSize='22px'
                    lineHeight='28px'
                    fontWeight='500'>
                    Company
                  </Text>
                  <HelpOutline w='18px' color='brand.700' mt='5px' />
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
                    <Text color='green.600' fontSize='16px' lineHeight='21px'>
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
                    <Text fontSize='18px' display='flex' letterSpacing='-0.5px'>
                      Full Documentation
                    </Text>
                  </Flex>
                  <Flex align='center' mb='40px'>
                    <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                      <Done color='brand.300' w='21px' />
                    </IconBox>
                    <Text fontSize='18px' display='flex' letterSpacing='-0.5px'>
                      Projects:
                      <Text fontWeight='bold' ms='5px'>
                        {" "}
                        Unlimited
                      </Text>
                    </Text>
                  </Flex>
                  <Flex align='center' mb='40px'>
                    <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                      <Done color='brand.300' w='21px' />
                    </IconBox>
                    <Text fontSize='18px' display='flex' letterSpacing='-0.5px'>
                      Team size:
                      <Text fontWeight='bold' ms='5px'>
                        1-15 Developers
                      </Text>
                    </Text>
                    <Text fontSize='18px'> </Text>
                  </Flex>
                  <Flex align='center' mb='40px'>
                    <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                      <Done color='brand.300' w='21px' />
                    </IconBox>
                    <Text fontSize='18px' display='flex' letterSpacing='-0.5px'>
                      Premium support:
                      <Text fontWeight='bold' ms='5px'>
                        12 Months
                      </Text>
                    </Text>
                  </Flex>
                  <Flex align='center' mb='40px'>
                    <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                      <Done color='brand.300' w='21px' />
                    </IconBox>
                    <Text fontSize='18px' display='flex' letterSpacing='-0.5px'>
                      Free updates:
                      <Text fontWeight='bold' ms='5px'>
                        12 Months
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
                <Button
                  minH='56px'
                  bg='brand.300'
                  color='white'
                  _hover={{ background: "brand.300", opacity: "0.9" }}
                  _active={{ background: "brand.300", opacity: "0.7" }}>
                  Buy it now
                </Button>
              </Flex>
            </CardBody>
          </Card>
          <Card h='735px' me='20px' boxShadow='50px 45px 76px 0px #7090B01A'>
            <CardBody h='100%' pb='34px' pt='50px' px='34px'>
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
                  <HelpOutline w='18px' color='brand.700' mt='5px' />
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
                    <Text color='green.600' fontSize='16px' lineHeight='21px'>
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
                  Perfect for personal use and for your side projects. A single
                  license for solo designers, developers and freelancers.
                </Text>
                <Flex flexDirection='column'>
                  <Flex align='center' mb='40px'>
                    <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                      <Done color='brand.300' w='21px' />
                    </IconBox>
                    <Text fontSize='18px' display='flex' letterSpacing='-0.5px'>
                      Full Documentation
                    </Text>
                  </Flex>
                  <Flex align='center' mb='40px'>
                    <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                      <Done color='brand.300' w='21px' />
                    </IconBox>
                    <Text fontSize='18px' display='flex' letterSpacing='-0.5px'>
                      Projects:
                      <Text fontWeight='bold' ms='5px'>
                        {" "}
                        Unlimited
                      </Text>
                    </Text>
                  </Flex>
                  <Flex align='center' mb='40px'>
                    <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                      <Done color='brand.300' w='21px' />
                    </IconBox>
                    <Text fontSize='18px' display='flex' letterSpacing='-0.5px'>
                      Team size:
                      <Text fontWeight='bold' ms='5px'>
                        Unlimited
                      </Text>
                    </Text>
                    <Text fontSize='18px'> </Text>
                  </Flex>
                  <Flex align='center' mb='40px'>
                    <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                      <Done color='brand.300' w='21px' />
                    </IconBox>
                    <Text fontSize='18px' display='flex' letterSpacing='-0.8px'>
                      Premium support:
                      <Text fontWeight='bold' ms='3px'>
                        24 Months
                      </Text>
                    </Text>
                  </Flex>
                  <Flex align='center' mb='40px'>
                    <IconBox w='28px' h='28px' bg='#F4F7FE' me='18px'>
                      <Done color='brand.300' w='21px' />
                    </IconBox>
                    <Text fontSize='18px' display='flex' letterSpacing='-0.5px'>
                      Free updates:
                      <Text fontWeight='bold' ms='5px'>
                        24 Months
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
                <Button
                  minH='56px'
                  bg='brand.300'
                  color='white'
                  _hover={{ background: "brand.300", opacity: "0.9" }}
                  _active={{ background: "brand.300", opacity: "0.7" }}>
                  Buy it now
                </Button>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
        <Flex justify='space-between' mt='72px'>
          <Flex flexDirection='column' align='center'>
            <Help color='brand.300' w='24px' h='24px' mb='16px' />
            <Text
              textAlign='center'
              maxW='260px'
              color='#8F9BBA'
              letterSpacing='-1px'>
              If have questions about the product or licensing please check
              <Link to='#' fontWeight='500' ms='3px' textDecoration='underline'>
                FAQ page
              </Link>
              .
            </Text>
          </Flex>
          <Flex flexDirection='column' align='center'>
            <Lock color='#01B574' w='24px' h='24px' mb='16px' />

            <Text
              textAlign='center'
              maxW='345px'
              color='#8F9BBA'
              letterSpacing='-1px'>
              Secure 128-bit SSL Encrypted payments powered by
              <Link to='#' fontWeight='500' ms='3px' textDecoration='underline'>
                Gumroad
              </Link>
              . If you're having issues with the checkout please contact
              <Link to='#' fontWeight='500' ms='3px' textDecoration='underline'>
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
              maxW='260px'
              color='#8F9BBA'
              letterSpacing='-1px'>
              The standard VAT rate may be charged, following the law of your
              country.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <HSeparator w='774px' mb='100px' mx='auto' />
      <Flex pb='100px' direction='column' w='1170px' mx='auto'>
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
            w='450px'>
            Frequently Asked Questions
          </Text>
        </Flex>
        <Flex w='100%' mb='72px' mx='auto'>
          <Flex direction='column' w='50%' me='50px'>
            {/* 1. */}
            <Text
              color='brand.700'
              fontSize='22px'
              lineHeight='28px'
              fontWeight='500'
              mb='16px'>
              How do I use the license that I got with my purchase?
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
              mb='72px'
              maxW='548px'>
              You will receive a license code in your order receipt. You do not
              need to insert it anywhere. Please keep it in your records for any
              future inquiry from us. If you create a client project, you can
              either keep this code or you can send us an email using our{" "}
              <Link
                to='#'
                textDecoration='underline'
                color='brand.300'
                mx='3px'>
                contact page
              </Link>
              , and we will transfer the license to your client, provided that
              they have an account on our website.
            </Text>
            {/* 2. */}
            <Text
              color='brand.700'
              fontSize='22px'
              lineHeight='28px'
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
              mb='16px'
              maxW='548px'>
              The Freelancer license is aimed at people who work on their own.
              It grants you the right to use the purchased product only for one
              project (either yours or for a client).
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
              mb='16px'
              maxW='548px'>
              The Company license is aimed at agencies or larger teams. It
              grants you the right to create other licensed products base on the
              template that you purchase form us.
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
              mb='16px'
              maxW='548px'>
              The Enterprise license is aimed at large companies with multiple
              projects. It grants you the right to create any kind of software,
              SaaS, digital products and sell them.
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
              mb='72px'
              maxW='548px'>
              All the differences between the types of licenses are{" "}
              <Link
                to='#'
                textDecoration='underline'
                color='brand.300'
                mx='3px'>
                available here
              </Link>
              .
            </Text>
            {/* 3. */}
            <Text
              color='brand.700'
              fontSize='22px'
              lineHeight='28px'
              fontWeight='500'
              mb='16px'>
              Are the images, fonts, and icons free to use?
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
              mb='72px'
              maxW='548px'>
              The images, fonts, icons and every other creative element for each
              theme can be freely used in your project under our licensing
              terms.
            </Text>
            {/* 4. */}
            <Text
              color='brand.700'
              fontSize='22px'
              lineHeight='28px'
              fontWeight='500'
              mb='16px'>
              Do these themes work with Wordpress?
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
              mb='72px'
              maxW='548px'>
              These products are not Wordpress themes, however, they can be
              integrated in Wordpress by an experienced web developer.
            </Text>
            {/* 5. */}
            <Text
              color='brand.700'
              fontSize='22px'
              lineHeight='28px'
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
              lineHeight='28px'
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
              mb='16px'
              maxW='548px'>
              Please let us know after you launched the project and, if it is
              helping the developers community, we will support you with
              feedback and promote it in our gallery, social media and
              newsletters.
            </Text>
          </Flex>
          <Flex direction='column' w='50%'>
            {/* 7. */}
            <Text
              color='brand.700'
              fontSize='22px'
              lineHeight='28px'
              fontWeight='500'
              mb='16px'>
              What does the number of "Projects" refer to?
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
              mb='16px'
              maxW='548px'>
              Depending on the License you purchase, you can use our products to
              either code a website/web application for you, for a client, or
              for multiple clients, which will be hosted on one or multiple
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
                  bigger License (like Company or Enterprise). Same, if you have
                  a complex application like a SaaS and have
                  "client1.yoursite.com" and "client2.yoursite.com", you will
                  need a multi-domain License like Company or Enterprise.
                </Text>
              </ListItem>
            </UnorderedList>
            {/* 8. */}
            <Text
              color='brand.700'
              fontSize='22px'
              lineHeight='28px'
              fontWeight='500'
              mb='16px'>
              What does the refer to?
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
              mb='16px'
              maxW='608px'>
              Depending on your license type, you have a fixed period when you
              can submit any ticket to us regarding product functionalities and
              bug fixes (learning and tutorials related requests are not
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
              lineHeight='28px'
              fontWeight='500'
              mb='16px'>
              Are the themes available with only classic CSS and without Sass as
              well?
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
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
              lineHeight='28px'
              fontWeight='500'
              mb='16px'>
              If I purchased a Freelancer/Company License, how can I upgrade to
              the Company/Enterprise License?
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
              mb='72px'
              maxW='548px'>
              In case you have already purchased a license, but you want to
              upgrade, you can just send us a message using the
              <Link
                to='#'
                textDecoration='underline'
                color='brand.300'
                mx='3px'>
                contact page
              </Link>{" "}
              and we will send you a discount code so you will only pay the
              difference for the upgrade.
            </Text>
            {/* 11. */}
            <Text
              color='brand.700'
              fontSize='22px'
              lineHeight='28px'
              fontWeight='500'
              mb='16px'>
              If I purchased a Freelancer/Company License, how can I upgrade to
              the Company/Enterprise License?
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
              mb='16px'
              maxW='548px'>
              The differences between the Free and Pro products consists of the
              number of components, plugins, sections, pages in each.
            </Text>
            <Text
              fontSize='md'
              lineHeight='28px'
              color='#878CBD'
              fontWeight='400'
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
              maxW='548px'>
              You can remove the copyright notice (if it's a premium item), but
              then you will need to create a separate
              <Text color='brand.300' mx='3px' as='span'>
                .txt
              </Text>{" "}
              file called
              <Text color='brand.300' mx='3px' as='span'>
                LICENSE.txt
              </Text>
              , and copy paste the copyright text in there. This file should be
              added to the root folder of your project.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection='column'
          bg='#F4F7FE'
          ps='24px'
          pe='23px'
          pt='25px'
          pb='35px'
          borderRadius='20px'
          maxW='575px'>
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
            <Link to='#' textDecoration='underline' color='brand.300' mx='3px'>
              contact page
            </Link>{" "}
            and one of our team members will get back to you in the shortest
            time possible
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Bundles;
