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
      <Flex bg='#F4F7FE' py='100px'>
        <Flex direction='column' w='1170px' mx='auto'>
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
          <Flex>
            <Card me='20px'>
              <CardBody px='36px'>
                <Image />
              </CardBody>
            </Card>
            <Card me='20px'>
              <CardBody px='36px'>
                <Image />
              </CardBody>
            </Card>
            <Card me='20px'>
              <CardBody px='36px'>
                <Image />
              </CardBody>
            </Card>
            <Card>
              <CardBody px='36px'>
                <Image />
              </CardBody>
            </Card>
          </Flex>
          <ProductList products={featuredProducts} />
        </Flex>
      </Flex>
      <Flex direction='column' bg='#fff'>
        <Flex direction='column' w='1170px' mx='auto' pt='100px' pb='225px'>
          <Flex
            direction='column'
            align='center'
            justify='center'
            textAlign='center'
            mb='72px'>
            <Text fontSize='xs' color='brand.300' fontWeight='bold' mb='16px'>
              TUTORIALS, ARTICLES & RESOURCES
            </Text>
            <Text fontSize='34px' color='brand.700' fontWeight='bold' mb='20px'>
              Discover resources & guides
            </Text>
            <Text
              fontSize='md'
              color='#878CBD'
              fontWeight='normal'
              maxW='500px'>
              Discover resources, guides and articles that can help you build
              unique solutions. Visit our learning centre for heaps of content.
            </Text>
          </Flex>
          <Grid templateColumns='repeat(3, 1fr)' gap='22px'>
            <NavLink to='/'>
              <Card
                boxShadow='45px 76px 113px 7px rgba(112, 144, 176, 0.08)'
                pb='35px'>
                <CardBody>
                  <Flex direction='column'>
                    <Flex
                      align='center'
                      mb='30px'
                      justify='center'
                      bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
                      borderRadius='24px'
                      w='100%'
                      h='230px'>
                      <ArticleIcon1 w='87' h='105' color='#fff' />
                    </Flex>
                    <Tag
                      color='brand.300'
                      bg='#ECE9FF'
                      borderRadius='30px'
                      p='7px 14px'
                      maxW='80px'
                      mb='10px'>
                      Articles
                    </Tag>
                    <Text
                      color='brand.700'
                      fontSize='lg'
                      fontWeight='500'
                      mb='14px'>
                      How to build a design system if you're the only designer
                      in a startup
                    </Text>
                    <Text fontSize='sm' color='#878CBD' fontWeight='normal'>
                      It's always hard to be the only person in a company who is
                      responsible for product design. Your day...
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
            </NavLink>
            <NavLink to='/'>
              <Card
                boxShadow='45px 76px 113px 7px rgba(112, 144, 176, 0.08)'
                pb='35px'>
                <CardBody>
                  <Flex direction='column'>
                    <Flex
                      align='center'
                      direction='column'
                      mb='30px'
                      justify='center'
                      bg='linear-gradient(109.6deg, #FF9966 17.44%, #FF5E62 78.63%)'
                      borderRadius='24px'
                      w='100%'
                      h='230px'>
                      <ArticleIcon2 w='72px' h='72px' color='#fff' mb='20px' />
                      <Text color='#fff' fontSize='xl' fontWeight='bold'>
                        SEO Strategy
                      </Text>
                    </Flex>
                    <Tag
                      color='brand.300'
                      bg='#ECE9FF'
                      borderRadius='30px'
                      p='7px 14px'
                      maxW='80px'
                      mb='10px'>
                      Articles
                    </Tag>
                    <Text
                      color='brand.700'
                      fontSize='lg'
                      fontWeight='500'
                      mb='14px'>
                      How to build a design system if you're the only designer
                      in a startup
                    </Text>
                    <Text fontSize='sm' color='#878CBD' fontWeight='normal'>
                      It's always hard to be the only person in a company who is
                      responsible for product design. Your day...
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
            </NavLink>
            <NavLink to='/'>
              <Card
                boxShadow='45px 76px 113px 7px rgba(112, 144, 176, 0.08)'
                pb='35px'>
                <CardBody>
                  <Flex direction='column'>
                    <Flex
                      align='center'
                      mb='30px'
                      justify='center'
                      bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
                      borderRadius='24px'
                      w='100%'
                      h='230px'>
                      <ArticleIcon3 w='87' h='105' color='#fff' />
                    </Flex>
                    <Tag
                      color='brand.300'
                      bg='#ECE9FF'
                      borderRadius='30px'
                      p='7px 14px'
                      maxW='80px'
                      mb='10px'>
                      Articles
                    </Tag>
                    <Text
                      color='brand.700'
                      fontSize='lg'
                      fontWeight='500'
                      mb='14px'>
                      How to build a design system if you're the only designer
                      in a startup
                    </Text>
                    <Text fontSize='sm' color='#878CBD' fontWeight='normal'>
                      It's always hard to be the only person in a company who is
                      responsible for product design. Your day...
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
            </NavLink>
          </Grid>
          <Button bg='#ECE9FF' w='152px' h='56px' alignSelf='center' mt='52px'>
            <Text color='brand.300' fontSize='sm'>
              Learn more
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Bundles;
