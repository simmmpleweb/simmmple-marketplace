import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Flex, Box, Image, Text, Grid, Button, Tag } from "@chakra-ui/react";

// Custom Components
import Card from "components/card/Card";
import CardBody from "components/card/CardBody";
import ProductList from "components/products/ProductList";
import Countdown from "components/countdown/Countdown";
import { featuredProducts } from "variables/products";

// Icons
import {
  LeftButtonEffect,
  RightButtonEffect,
  SimmmpleLogoBundle,
  ArticleIcon1,
  ArticleIcon2,
  ArticleIcon3,
} from "components/icons/Icons";

// Images
import bundlesBg from "assets/img/bundles/bundles-background.png";
import medal from "assets/img/bundles/medal.png";
import trophy from "assets/img/bundles/trophy.png";
import simmmpleFolder from "assets/img/bundles/simmmple-folder.png";
import developers from "assets/img/bundles/developers.png";
import sensualBg from "assets/img/bundles/sensual-background.png";
import purity from "assets/img/bundles/purity.png";
import vdb from "assets/img/bundles/vdb.png";
import sensual from "assets/img/bundles/trophy.png";
import venus from "assets/img/bundles/venus.png";
import uranus from "assets/img/bundles/uranus.png";

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
      <Flex mb='100px' direction='column' w='1170px' mx='auto'>
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
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
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
      </Flex>
    </Flex>
  );
};

export default Bundles;
