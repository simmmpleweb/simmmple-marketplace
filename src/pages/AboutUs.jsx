import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import about1 from "assets/img/about/about1.png";
import about2 from "assets/img/about/about2.png";
import about3 from "assets/img/about/about3.png";
import about4 from "assets/img/about/about4.png";
import about5 from "assets/img/about/about5.png";
import about6 from "assets/img/about/about6.png";
import about7 from "assets/img/about/about7.png";
import about8 from "assets/img/about/about8.png";
import about9 from "assets/img/about/about9.png";
import heart from "assets/img/about/heart.png";
import deloitteLogo from "assets/img/homepage/deloitte.png";
import georgiatechLogo from "assets/img/homepage/georgiatech.png";
import googleLogo from "assets/img/homepage/google.png";
import microsoftLogo from "assets/img/homepage/microsoft.png";
import msnLogo from "assets/img/homepage/msn.png";
import zohoLogo from "assets/img/homepage/zoho.png";
// Custom Components
import Card from "components/card/Card";
import CardBody from "components/card/CardBody";
import React from "react";
import Layout from "components/layout/Layout";

const Bundles = () => {
  return (
    <Layout>
      <Flex direction='column' bg='#fff' overflowX='hidden' pt='120px'>
        <Flex
          justify='center'
          align='center'
          bgSize='cover'
          pb='100px'
          bgPosition='center center'
          position='relative'>
          <Flex
            bg='#F6F8FD'
            h='1320px'
            w='1320px'
            borderRadius='50%'
            bottom='0px'
            position='absolute'
            left='50%'
            transform='translate(-50%, 0px)'></Flex>
          <Flex
            position='relative'
            direction='column'
            justify='center'
            align='center'
            textAlign='center'>
            <Image src={heart} mb='40px' />
            <Text
              fontSize='56px'
              color='brand.700'
              fontWeight='bold'
              mb='70px'
              w='1069px'
              letterSpacing='-1px'>
              Our mission is to empower
              <Text color='brand.300' as='span' mx='10px'>
                all developers <br /> & designers
              </Text>
              with the best UI tools and resources to
              <Text color='brand.300' as='span' ms='10px'>
                build better & faster.
              </Text>
            </Text>
            <Text
              color='#878CBD'
              fontSize='20px'
              lineHeight='40px'
              maxW='70%'
              mb='78px'
              w='773px'
              letterSpacing='-0.2px'>
              Simmmple is a marketplace that provides premium UI & Web
              resources. It's not only the perfect place to find the latest and
              greatest Web Desing freebies, but also a place to learn advanced
              techniques and build better & faster with our premium products.
            </Text>
            <Flex justify='space-between' mb='170px' w='733px'>
              <Flex flexDirection='column' align='center'>
                <Text fontSize='md' color='#878CBD'>
                  LAUNCHED IN
                </Text>
                <Text fontSize='48px' color='brand.700' fontWeight='700'>
                  2019
                </Text>
              </Flex>
              <Flex flexDirection='column' align='center'>
                <Text fontSize='md' color='#878CBD'>
                  COMMUNITY OF
                </Text>
                <Text fontSize='48px' color='brand.700' fontWeight='700'>
                  10,000+
                </Text>
              </Flex>
              <Flex flexDirection='column' align='center'>
                <Text fontSize='md' color='#878CBD'>
                  MISSION PROGRESS
                </Text>
                <Text fontSize='48px' color='brand.700' fontWeight='700'>
                  2.6%
                </Text>
              </Flex>
            </Flex>
            <Text color='brand.300' fontWeight='700' fontSize='sm'>
              USERS & COMPANIES THAT USE OUR PRODUCTS
            </Text>
            <Text color='brand.700' fontWeight='700' pb='70px' fontSize='42px'>
              Used & Trusted by the world’s top companies
            </Text>
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
          mb='100px'>
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
        <Flex direction='column' w='1170px' mx='auto'>
          <Flex direction='column' align='center' w='100%' mb='80px' mx='auto'>
            <Text
              fontSize='xs'
              color='brand.300'
              fontWeight='bold'
              mb='16px'
              letterSpacing='2px'
              textAlign='center'>
              SIMMMPLE TEAM
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
              Who is behind these great looking tools?
            </Text>
          </Flex>
          <Flex flexWrap={{ base: "wrap", md: "nowrap" }} mb='150px'>
            <Card boxShadow='45px 76px 113px 7px #7090B014' p='0px' me='20px'>
              <CardBody h='100%' p='12px' justify='space-between' pb='28px'>
                <Flex flexDirection='column'>
                  <Image
                    src={about1}
                    w='254px'
                    h='222px'
                    mb='22px'
                    borderRadius='20px'
                  />
                  <Text mx='12px' fontWeight='700' fontSize='lg'>
                    Craciun Andrei-Fredy
                  </Text>
                  <Text
                    mx='12px'
                    fontSize='sm'
                    lineHeight='28px'
                    color='#878CBD'
                    fontWeight='400'>
                    Founder & UI/UX Designer
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card boxShadow='45px 76px 113px 7px #7090B014' p='0px' me='20px'>
              <CardBody h='100%' p='12px' justify='space-between' pb='28px'>
                <Flex flexDirection='column'>
                  <Image
                    src={about1}
                    w='254px'
                    h='222px'
                    mb='22px'
                    borderRadius='20px'
                  />
                  <Text mx='12px' fontWeight='700' fontSize='lg'>
                    Mihalache Vlad Gabriel
                  </Text>
                  <Text
                    mx='12px'
                    me='0px'
                    fontSize='sm'
                    lineHeight='28px'
                    color='#878CBD'
                    fontWeight='400'>
                    Co-Founder & Front-End Developer
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card boxShadow='45px 76px 113px 7px #7090B014' p='0px' me='20px'>
              <CardBody h='100%' p='12px' justify='space-between' pb='28px'>
                <Flex flexDirection='column'>
                  <Image
                    src={about1}
                    w='254px'
                    h='222px'
                    mb='22px'
                    borderRadius='20px'
                  />
                  <Text mx='12px' fontWeight='700' fontSize='lg'>
                    Dumitrache Theodor
                  </Text>
                  <Text
                    mx='12px'
                    fontSize='sm'
                    lineHeight='28px'
                    color='#878CBD'
                    fontWeight='400'>
                    Front-End Developer
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card boxShadow='45px 76px 113px 7px #7090B014' p='0px' me='20px'>
              <CardBody h='100%' p='12px' justify='space-between' pb='28px'>
                <Flex flexDirection='column'>
                  <Image
                    src={about1}
                    w='254px'
                    h='222px'
                    mb='22px'
                    borderRadius='20px'
                  />
                  <Text mx='12px' fontWeight='700' fontSize='lg'>
                    Martin Stoleru
                  </Text>
                  <Text
                    mx='12px'
                    fontSize='sm'
                    lineHeight='28px'
                    color='#878CBD'
                    fontWeight='400'>
                    UI/UX & Motion Designer
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          </Flex>
        </Flex>
        <Flex direction='column' w='1170px' mx='auto'>
          <Flex direction='column' align='center' w='100%' mb='80px' mx='auto'>
            <Text
              fontSize='xs'
              color='brand.300'
              fontWeight='bold'
              mb='16px'
              letterSpacing='2px'
              textAlign='center'>
              SIMMMPLE LIFE
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
              Images behind the process
            </Text>
          </Flex>
          <Flex flexWrap={{ base: "wrap" }} mb='150px' justify='space-between'>
            <Image
              maxW='377px'
              mb='20px'
              borderRadius='20px'
              h='377px'
              src={about1}
            />
            <Image
              maxW='377px'
              mb='20px'
              borderRadius='20px'
              h='377px'
              src={about2}
            />
            <Image
              maxW='377px'
              mb='20px'
              borderRadius='20px'
              h='377px'
              src={about3}
            />
            <Image
              maxW='377px'
              mb='20px'
              borderRadius='20px'
              h='377px'
              src={about4}
            />
            <Image
              maxW='377px'
              mb='20px'
              borderRadius='20px'
              h='377px'
              src={about5}
            />
            <Image
              maxW='377px'
              mb='20px'
              borderRadius='20px'
              h='377px'
              src={about6}
            />
            <Image
              maxW='377px'
              mb='20px'
              borderRadius='20px'
              h='377px'
              src={about7}
            />
            <Image
              maxW='377px'
              mb='20px'
              borderRadius='20px'
              h='377px'
              src={about8}
            />
            <Image
              maxW='377px'
              mb='20px'
              borderRadius='20px'
              h='377px'
              src={about9}
            />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Bundles;
