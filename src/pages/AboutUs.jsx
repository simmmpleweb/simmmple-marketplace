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
import React, { useEffect } from "react";
import Layout from "components/layout/Layout";

const Bundles = () => {
  useEffect(() => {
    document.title =
      "About - Premium and Stunning UI Kits, Templates and Themes for developers, designers & startups @ Simmmple";
  }, []);

  return (
    <Layout>
      <Flex
        direction='column'
        bg='#fff'
        overflowX='hidden'
        pt={{ base: "50px", xl: "120px" }}
        maxW='100%'
        px='20px'>
        <Flex
          justify='center'
          align='center'
          bgSize='cover'
          pb='100px'
          bgPosition='center center'
          position='relative'
          maxW='100%'>
          <Flex
            bg='#F6F8FD'
            h={{ base: "1350px", md: "1000px", lg: "1200px", xl: "1320px" }}
            w={{ base: "1350px", md: "1000px", lg: "1200px", xl: "1320px" }}
            max
            borderRadius='50%'
            bottom='0px'
            position='absolute'
            left='50%'
            transform='translate(-50%, 0px)'
          />
          <Flex
            position='relative'
            direction='column'
            justify='center'
            align='center'
            textAlign='center'
            maxW='100%'>
            <Image
              src={heart}
              mb='40px'
              w={{ base: "250px", md: "300px", lg: "400px", xl: "unset" }}
            />
            <Text
              fontSize={{ base: "28px", md: "32px", lg: "46px", xl: "54px" }}
              color='brand.700'
              fontWeight='bold'
              mb={{ base: "40px", lg: "70px" }}
              w={{ xl: "1069px" }}
              maxW='100%'
              letterSpacing='0px'
              lineHeight={{ base: "38px", md: "64px" }}>
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
              fontSize={{ base: "18px", lg: "18px", xl: "20px" }}
              lineHeight={{ base: "30px", lg: "32px", xl: "40px" }}
              maxW={{ base: "95%", md: "90%", lg: "90%" }}
              mb='78px'
              w='773px'
              letterSpacing='-0.2px'>
              Simmmple is a marketplace that provides premium UI & Web
              resources. It's not only the perfect place to find the latest and
              greatest Web Desing freebies, but also a place to learn advanced
              techniques and build better & faster with our premium products.
            </Text>
            <Flex
              justify='space-between'
              mb={{ base: "80px", lg: "120px", xl: "170px" }}
              w='733px'
              maxW='100%'
              px={{ base: "0px", md: "70px", lg: "0px" }}
              flexDirection={{ base: "column", md: "row" }}>
              <Flex
                flexDirection='column'
                align='center'
                mb={{ base: "30px", md: "0px" }}>
                <Text fontSize={{ base: "14px", md: "md" }} color='#878CBD'>
                  LAUNCHED IN
                </Text>
                <Text
                  fontSize={{ base: "32px", md: "36px", lg: "48px" }}
                  color='brand.700'
                  fontWeight='700'>
                  2019
                </Text>
              </Flex>
              <Flex
                flexDirection='column'
                align='center'
                mb={{ base: "30px", md: "0px" }}>
                <Text fontSize={{ base: "14px", md: "md" }} color='#878CBD'>
                  COMMUNITY OF
                </Text>
                <Text
                  fontSize={{ base: "32px", md: "36px", lg: "48px" }}
                  color='brand.700'
                  fontWeight='700'>
                  10,000+
                </Text>
              </Flex>
              <Flex
                flexDirection='column'
                align='center'
                mb={{ base: "30px", md: "0px" }}>
                <Text fontSize={{ base: "14px", md: "md" }} color='#878CBD'>
                  MISSION PROGRESS
                </Text>
                <Text
                  fontSize={{ base: "32px", md: "36px", lg: "48px" }}
                  color='brand.700'
                  fontWeight='700'>
                  2.6%
                </Text>
              </Flex>
            </Flex>
            <Text
              color='brand.300'
              fontWeight='700'
              fontSize='sm'
              letterSpacing='2px'
              mb={{ base: "16px", md: "0px" }}>
              COMPANIES THAT USE OUR PRODUCTS
            </Text>
            <Text
              color='brand.700'
              fontWeight='700'
              pb={{ base: "0px", lg: "70px" }}
              fontSize={{ base: "30px", md: "42px" }}
              mb={{ base: "50px", md: "0px" }}>
              Used & Trusted by the world’s top companies
            </Text>
          </Flex>
        </Flex>
        <Grid
          templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(6, 1fr)" }}
          gap={{ base: "40px", lg: "0px" }}
          align='center'
          justify='center'
          bg='#fff'
          borderRadius='30px'
          p={{ base: "45px 50px", lg: "45px 100px" }}
          boxShadow='0px 18px 40px rgba(112, 144, 176, 0.12)'
          w='100%'
          transform='translateY(-50%)'
          mb={{ base: "40px", md: "50px" }}>
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
        <Flex direction='column' w='1170px' maxW='100%' mx='auto'>
          <Flex
            direction='column'
            align='center'
            w='100%'
            mb={{ base: "20px", md: "80px" }}
            mx='auto'>
            <Text
              fontSize='sm'
              color='brand.300'
              fontWeight='bold'
              mb='16px'
              letterSpacing='2px'
              textAlign='center'>
              SIMMMPLE TEAM
            </Text>
            <Text
              fontSize={{ base: "30px", md: "42px" }}
              lineHeight='44px'
              color='brand.700'
              mb='20px'
              mx='auto'
              textAlign='center'
              fontWeight='bold'>
              Who is behind these great looking tools?
            </Text>
          </Flex>
          <Grid
            mb={{ base: "100px", md: "150px" }}
            maxW='100%'
            gap='20px'
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(4, 1fr)",
            }}>
            <Card
              ms='auto'
              maxW='277.5px'
              boxShadow='45px 76px 113px 7px #7090B014'
              p='0px'
              me={{ base: "auto", md: "0px", xl: "20px" }}>
              <CardBody h='100%' p='12px' justify='space-between' pb='28px'>
                <Flex flexDirection='column'>
                  <Image
                    src={about1}
                    w='254px'
                    h='222px'
                    mb='22px'
                    borderRadius='20px'
                  />
                  <Text
                    mx='12px'
                    fontWeight='500'
                    color='brand.700'
                    fontSize='lg'>
                    Andrei-Fredy Craciun
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
            <Card
              ms={{ base: "auto", md: "unset" }}
              maxW='277.5px'
              boxShadow='45px 76px 113px 7px #7090B014'
              p='0px'
              me={{ base: "auto", md: "0px", xl: "20px" }}>
              <CardBody h='100%' p='12px' justify='space-between' pb='28px'>
                <Flex flexDirection='column'>
                  <Image
                    src={about1}
                    w='254px'
                    h='222px'
                    mb='22px'
                    borderRadius='20px'
                  />
                  <Text
                    mx='12px'
                    fontWeight='500'
                    color='brand.700'
                    fontSize='lg'>
                    Vlad Mihalache
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
            <Card
              ms='auto'
              maxW='277.5px'
              boxShadow='45px 76px 113px 7px #7090B014'
              p='0px'
              me={{ base: "auto", md: "0px", xl: "20px" }}>
              <CardBody h='100%' p='12px' justify='space-between' pb='28px'>
                <Flex flexDirection='column'>
                  <Image
                    src={about1}
                    w='254px'
                    h='222px'
                    mb='22px'
                    borderRadius='20px'
                  />
                  <Text
                    mx='12px'
                    fontWeight='500'
                    color='brand.700'
                    fontSize='lg'>
                    Theodor Dumitrache
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
            <Card
              ms={{ base: "auto", md: "unset" }}
              maxW='277.5px'
              boxShadow='45px 76px 113px 7px #7090B014'
              p='0px'
              me={{ base: "auto", md: "0px", xl: "20px" }}>
              <CardBody h='100%' p='12px' justify='space-between' pb='28px'>
                <Flex flexDirection='column'>
                  <Image
                    src={about1}
                    w='254px'
                    h='222px'
                    mb='22px'
                    borderRadius='20px'
                  />
                  <Text
                    mx='12px'
                    fontWeight='500'
                    color='brand.700'
                    fontSize='lg'>
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
          </Grid>
        </Flex>
        <Flex direction='column' w='1170px' maxW='100%' mx='auto'>
          <Flex
            direction='column'
            align='center'
            w='100%'
            mb={{ base: "20px", md: "80px" }}
            mx='auto'>
            <Text
              fontSize='sm'
              color='brand.300'
              fontWeight='bold'
              mb='16px'
              letterSpacing='2px'
              textAlign='center'>
              SIMMMPLE LIFE
            </Text>
            <Text
              fontSize={{ base: "30px", md: "42px" }}
              lineHeight='44px'
              color='brand.700'
              mb='20px'
              mx='auto'
              textAlign='center'
              fontWeight='bold'>
              Images behind the process
            </Text>
          </Flex>
          <Flex
            flexWrap='wrap'
            justify='space-between'
            maxW='100%'
            mb={{ base: "200px", md: "150px" }}>
            <Image
              maxW={{ md: "232px", lg: "320px", xl: "377px" }}
              mb='20px'
              borderRadius='20px'
              h={{ md: "232px", lg: "320px", xl: "377px" }}
              src={about1}
            />
            <Image
              maxW={{ md: "232px", lg: "320px", xl: "377px" }}
              mb='20px'
              borderRadius='20px'
              h={{ md: "232px", lg: "320px", xl: "377px" }}
              src={about2}
            />
            <Image
              maxW={{ md: "232px", lg: "320px", xl: "377px" }}
              mb='20px'
              borderRadius='20px'
              h={{ md: "232px", lg: "320px", xl: "377px" }}
              src={about3}
            />
            <Image
              maxW={{ md: "232px", lg: "320px", xl: "377px" }}
              mb='20px'
              borderRadius='20px'
              h={{ md: "232px", lg: "320px", xl: "377px" }}
              src={about4}
            />
            <Image
              maxW={{ md: "232px", lg: "320px", xl: "377px" }}
              mb='20px'
              borderRadius='20px'
              h={{ md: "232px", lg: "320px", xl: "377px" }}
              src={about5}
            />
            <Image
              maxW={{ md: "232px", lg: "320px", xl: "377px" }}
              mb='20px'
              borderRadius='20px'
              h={{ md: "232px", lg: "320px", xl: "377px" }}
              src={about6}
            />
            <Image
              maxW={{ md: "232px", lg: "320px", xl: "377px" }}
              mb='20px'
              borderRadius='20px'
              h={{ md: "232px", lg: "320px", xl: "377px" }}
              src={about7}
            />
            <Image
              maxW={{ md: "232px", lg: "320px", xl: "377px" }}
              mb='20px'
              borderRadius='20px'
              h={{ md: "232px", lg: "320px", xl: "377px" }}
              src={about8}
            />
            <Image
              maxW={{ md: "232px", lg: "320px", xl: "377px" }}
              mb='20px'
              borderRadius='20px'
              h={{ md: "232px", lg: "320px", xl: "377px" }}
              src={about9}
            />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Bundles;
