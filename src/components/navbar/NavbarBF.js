import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Collapse,
  Flex,
  Grid,
  Icon,
  Image,
  Menu,
  MenuList,
  Stack,
  Text,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import chakraLogo from "assets/img/apps/chakra.png";
import bootstrapLogo from "assets/img/navbar/BootstrapLogo.png";
// Images
import exploreBackground from "assets/img/navbar/explore-background.png";
import figmaLogo from "assets/img/navbar/figma.png";
import mailLogo from "assets/img/navbar/mail.png";
import reactLogo from "assets/img/navbar/ReactLogo.png";
import vdbLogo from "assets/img/apps/vdb.png";
import vscodeLogo from "assets/img/navbar/vscode.png";
import bulb from "assets/img/navbar/bulb.png";
// Custom Components
import IconBox from "components/icons/IconBox";
// Icons
import {
  contactSupport,
  SimmmpleLogoBundle,
  SimmmpleLogoColored,
  SimmmpleLogoColoredMobile,
  SimmmpleLogoWhite,
  SimmmpleLogoWhiteMobile,
} from "components/icons/Icons";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GoChevronDown } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import routes from "routes";

function Navbar() {
  const {
    isOpen: isOpenExplore,
    onOpen: onOpenExplore,
    onClose: onCloseExplore,
  } = useDisclosure();
  const {
    isOpen: isOpenTech,
    onOpen: onOpenTech,
    onClose: onCloseTech,
  } = useDisclosure();
  const {
    isOpen: isOpenResources,
    onOpen: onOpenResources,
    onClose: onCloseResources,
  } = useDisclosure();

  const { isOpen: isOpenFade, onToggle } = useDisclosure();

  const [secondary, setSecondary] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let secondaryX = false;
    routes.forEach((route) => {
      if (route.path.lastIndexOf("/") !== 0) {
        if (
          window.location.href.includes(
            route.path.slice(0, route.path.lastIndexOf("/"))
          )
        ) {
          secondaryX = route.secondary;
          return;
        }
      } else {
        if (window.location.href.includes(route.path)) {
          secondaryX = route.secondary;
          return;
        }
      }
    });

    setSecondary(secondaryX);
  });

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);
  const changeNavbar = () => {
    if (window.scrollY > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return (
    <Flex>
      <Flex
        mb='100px'
        w='100%'
        position={scrolled ? "fixed" : "absolute"}
        top={scrolled ? "0px" : { base: "100px", md: "80px" }}
        zIndex='100'
        bg={
          secondary || scrolled
            ? "linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)"
            : "transparent"
        }
        boxShadow={"null"}
        transition='background-color 0.3s linear'>
        <Flex
          w={{ sm: "100%", lg: "970px", xl: "1170px" }}
          mx={{ sm: "20px", md: "24px", lg: "auto" }}
          align='center'
          py='40px'
          position='relative'>
          <Flex
            mt={{ md: "0px" }}
            alignSelf='flex-start'
            justify='flex-start'
            align='start'
            maxW={{ base: "42px", md: "unset" }}
            h='100%'
            me={{ sm: "auto", md: "auto", lg: "0px" }}>
            <NavLink to='/'>
              {window.innerWidth < 768 ? (
                secondary || scrolled ? (
                  <SimmmpleLogoWhiteMobile w='100%' h='48px' cursor='pointer' />
                ) : (
                  <SimmmpleLogoWhiteMobile w='100%' h='48px' cursor='pointer' />
                )
              ) : secondary || scrolled ? (
                <SimmmpleLogoWhite
                  w='100%'
                  h='42px'
                  cursor='pointer'
                  alignSelf='center'
                />
              ) : (
                <SimmmpleLogoWhite
                  w='100%'
                  h='42px'
                  cursor='pointer'
                  alignSelf='center'
                />
              )}
            </NavLink>
          </Flex>
          <Stack
            display={{ sm: "none", lg: "flex" }}
            direction='row'
            spacing='44px'
            align='center'
            ms={{ lg: "auto", xl: "160px" }}
            me={{ lg: "auto", xl: "210px" }}
            h='50px'>
            <Flex
              align='center'
              onMouseEnter={onOpenExplore}
              onMouseLeave={onCloseExplore}
              position='relative'
              cursor='pointer'
              h='100%'>
              <Text
                transition='color 0.3s linear'
                color='#fff'
                fontWeight='normal'
                fontSize='sm'
                me='4px'>
                Explore
              </Text>
              <Icon
                transition='color 0.3s linear'
                as={GoChevronDown}
                w='12px'
                h='12px'
                color='#fff'
                mt='4px'
              />
              <Menu zIndex='2' isOpen={isOpenExplore}>
                <MenuList
                  p='0px'
                  minW='500px'
                  cursor='default'
                  borderRadius='30px'
                  position='absolute'
                  top='50px'
                  left='-10px'
                  border='none'>
                  <Grid templateColumns='repeat(2, 1fr)'>
                    <Stack direction='column' spacing='12px' p='12px'>
                      <NavLink to='/templates/figma'>
                        <Flex align='center'>
                          <IconBox w='68px' h='68px' bg='#F4F7FE' me='20px'>
                            <Image src={figmaLogo} w='26px' h='38px' />
                          </IconBox>
                          <Flex direction='column'>
                            <Text
                              fontSize='md'
                              color='brand.700'
                              fontWeight='500'
                              mb='2px'>
                              Figma Products
                            </Text>
                            <Flex align='center' color='brand.300'>
                              <Text fontSize='sm' color='brand.300'>
                                See all products
                              </Text>
                              <Icon
                                as={MdKeyboardArrowRight}
                                w='14px'
                                h='14px'
                                mt='2px'
                              />
                            </Flex>
                          </Flex>
                        </Flex>
                      </NavLink>
                      <NavLink to='/templates/all-templates'>
                        <Flex align='center'>
                          <IconBox w='68px' h='68px' bg='#F4F7FE' me='20px'>
                            <Image src={vscodeLogo} w='38px' h='38px' />
                          </IconBox>
                          <Flex direction='column'>
                            <Text
                              fontSize='md'
                              color='brand.700'
                              fontWeight='500'
                              mb='2px'>
                              Coded Products
                            </Text>
                            <Flex align='center' color='brand.300'>
                              <Text fontSize='sm' color='brand.300'>
                                See all products
                              </Text>
                              <Icon
                                as={MdKeyboardArrowRight}
                                w='14px'
                                h='14px'
                                mt='2px'
                              />
                            </Flex>
                          </Flex>
                        </Flex>
                      </NavLink>
                      <NavLink to='/apps'>
                        <Flex align='center'>
                          <IconBox w='68px' h='68px' bg='#F4F7FE' me='20px'>
                            <Image src={bulb} ms='-4px' w='46px' h='49px' />
                          </IconBox>
                          <Flex direction='column'>
                            <Text
                              fontSize='md'
                              color='brand.700'
                              fontWeight='500'
                              mb='2px'>
                              Apps & Plugins
                            </Text>
                            <Flex align='center' color='brand.300'>
                              <Text fontSize='sm' color='brand.300'>
                                Learn more
                              </Text>
                              <Icon
                                as={MdKeyboardArrowRight}
                                w='14px'
                                h='14px'
                                mt='2px'
                              />
                            </Flex>
                          </Flex>
                        </Flex>
                      </NavLink>
                    </Stack>
                    <Flex
                      direction='column'
                      textAlign='center'
                      bgImage={exploreBackground}
                      bgSize='cover'
                      bgPosition='1px'
                      w='100%'
                      h='100%'
                      borderRadius='0px 26px 26px 0px'
                      align='center'
                      justify='center'
                      px='22px'>
                      <SimmmpleLogoBundle w='100%' h='31px' />
                      <Text
                        transition='color 0.3s linear'
                        color='#fff'
                        fontSize='sm'
                        mt='20px'
                        mb='26px'>
                        Save money to all products with our digital categories
                        bundles!
                      </Text>
                      {/* <NavLink to='/bundles'> */}
                      <NavLink to='/bundle'>
                        <Button variant='solid' w='150px' h='42px' bg='white'>
                          <Text color='#4F61FF' fontSize='sm'>
                            Explore all
                          </Text>
                        </Button>
                      </NavLink>
                    </Flex>
                  </Grid>
                </MenuList>
              </Menu>
            </Flex>
            <NavLink to='/templates/all-templates'>
              <Flex align='center' cursor='pointer'>
                <Text
                  transition='color 0.3s linear'
                  color='#fff'
                  fontWeight='normal'
                  fontSize='sm'
                  me='4px'>
                  Products
                </Text>
              </Flex>
            </NavLink>
            <Flex
              align='center'
              cursor='pointer'
              h='100%'
              onMouseEnter={onOpenTech}
              onMouseLeave={onCloseTech}
              position='relative'>
              <Text
                transition='color 0.3s linear'
                color='#fff'
                fontWeight='normal'
                fontSize='sm'
                me='4px'>
                Technologies
              </Text>
              <Icon
                transition='color 0.3s linear'
                as={GoChevronDown}
                w='12px'
                h='12px'
                color='#fff'
                mt='4px'
              />
              <Menu zIndex='2' isOpen={isOpenTech}>
                <MenuList
                  p='0px'
                  minW='500px'
                  cursor='default'
                  borderRadius='30px'
                  position='absolute'
                  top='50px'
                  left='-10px'
                  border='none'>
                  <Grid templateColumns='repeat(2, 1fr)' gap='10px' p='10px'>
                    <NavLink to='/templates/figma'>
                      <Flex align='center'>
                        <IconBox w='68px' h='68px' bg='#F4F7FE' me='20px'>
                          <Image src={figmaLogo} w='26px' h='38px' />
                        </IconBox>
                        <Flex direction='column'>
                          <Text
                            fontSize='md'
                            color='brand.700'
                            fontWeight='500'
                            mb='2px'>
                            Figma
                          </Text>
                          <Flex align='center' color='brand.300'>
                            <Text fontSize='sm' color='brand.300'>
                              See all products
                            </Text>
                            <Icon
                              as={MdKeyboardArrowRight}
                              w='14px'
                              h='14px'
                              mt='2px'
                            />
                          </Flex>
                        </Flex>
                      </Flex>
                    </NavLink>
                    <NavLink to='/templates/react'>
                      <Flex align='center'>
                        <IconBox w='68px' h='68px' bg='#F4F7FE' me='20px'>
                          <Image src={reactLogo} w='40px' h='36px' />
                        </IconBox>
                        <Flex direction='column'>
                          <Text
                            fontSize='md'
                            color='brand.700'
                            fontWeight='500'
                            mb='2px'>
                            React JS
                          </Text>
                          <Flex align='center' color='brand.300'>
                            <Text fontSize='sm' color='brand.300'>
                              See all products
                            </Text>
                            <Icon
                              as={MdKeyboardArrowRight}
                              w='14px'
                              h='14px'
                              mt='2px'
                            />
                          </Flex>
                        </Flex>
                      </Flex>
                    </NavLink>
                    <NavLink to='/templates/bootstrap'>
                      <Flex align='center'>
                        <IconBox w='68px' h='68px' bg='#F4F7FE' me='20px'>
                          <Image src={bootstrapLogo} w='44px' h='36px' />
                        </IconBox>
                        <Flex direction='column'>
                          <Text
                            fontSize='md'
                            color='brand.700'
                            fontWeight='500'
                            mb='2px'>
                            Bootstrap
                          </Text>
                          <Flex align='center' color='brand.300'>
                            <Text fontSize='sm' color='brand.300'>
                              See all products
                            </Text>
                            <Icon
                              as={MdKeyboardArrowRight}
                              w='14px'
                              h='14px'
                              mt='2px'
                            />
                          </Flex>
                        </Flex>
                      </Flex>
                    </NavLink>
                    <NavLink to='/templates/react'>
                      <Flex align='center'>
                        <IconBox w='68px' h='68px' bg='#F4F7FE' me='20px'>
                          <Image src={chakraLogo} w='40px' h='40px' />
                        </IconBox>
                        <Flex direction='column'>
                          <Text
                            fontSize='md'
                            color='brand.700'
                            fontWeight='500'
                            mb='2px'>
                            Chakra UI
                          </Text>
                          <Flex align='center' color='brand.300'>
                            <Text fontSize='sm' color='brand.300'>
                              See all products
                            </Text>
                            <Icon
                              as={MdKeyboardArrowRight}
                              w='14px'
                              h='14px'
                              mt='2px'
                            />
                          </Flex>
                        </Flex>
                      </Flex>
                    </NavLink>
                  </Grid>
                </MenuList>
              </Menu>
            </Flex>
            <Flex
              align='center'
              cursor='pointer'
              position='relative'
              h='100%'
              onMouseEnter={onOpenResources}
              onMouseLeave={onCloseResources}>
              <Text
                transition='color 0.3s linear'
                color='#fff'
                fontWeight='normal'
                fontSize='sm'
                me='4px'>
                Resources
              </Text>
              <Icon
                transition='color 0.3s linear'
                as={GoChevronDown}
                w='12px'
                h='12px'
                color='#fff'
                mt='4px'
              />
              <Menu zIndex='2' isOpen={isOpenResources}>
                <MenuList
                  p='0px'
                  minW='500px'
                  cursor='default'
                  borderRadius='30px'
                  position='absolute'
                  top='50px'
                  left='-10px'
                  border='none'>
                  <Grid templateColumns='repeat(2, 1fr)'>
                    <Stack direction='column' spacing='12px' p='12px'>
                      <Link href='https://venusdesignsystem.com/dashboard-builder?ref=simmmple'>
                        <Flex align='center'>
                          <IconBox w='68px' h='68px' bg='#F4F7FE' me='20px'>
                            <Image src={vdbLogo} w='38px' h='38px' />
                          </IconBox>
                          <Flex direction='column'>
                            <Text
                              fontSize='md'
                              color='brand.700'
                              fontWeight='500'
                              mb='2px'>
                              Dashboard Builder
                            </Text>
                            <Flex align='center' color='brand.300'>
                              <Text fontSize='sm' color='brand.300'>
                                Learn more
                              </Text>
                              <Icon
                                as={MdKeyboardArrowRight}
                                w='14px'
                                h='14px'
                                mt='2px'
                              />
                            </Flex>
                          </Flex>
                        </Flex>
                      </Link>
                      <Link href='https://blog.simmmple.com'>
                        <Flex align='center'>
                          <IconBox w='68px' h='68px' bg='#F4F7FE' me='20px'>
                            <Image src={mailLogo} w='38px' h='38px' />
                          </IconBox>
                          <Flex direction='column'>
                            <Text
                              fontSize='md'
                              color='brand.700'
                              fontWeight='500'
                              mb='2px'>
                              Blogs
                            </Text>
                            <Flex align='center' color='brand.300'>
                              <Text fontSize='sm' color='brand.300'>
                                Articles & Tutorials
                              </Text>
                              <Icon
                                as={MdKeyboardArrowRight}
                                w='14px'
                                h='14px'
                                mt='2px'
                              />
                            </Flex>
                          </Flex>
                        </Flex>
                      </Link>
                      <NavLink to='/contact'>
                        <Flex align='center'>
                          <IconBox w='68px' h='68px' bg='#fff6e5' me='20px'>
                            <Icon as={contactSupport} w='28px' h='28px' />
                          </IconBox>
                          <Flex direction='column'>
                            <Text
                              fontSize='md'
                              color='brand.700'
                              fontWeight='500'
                              mb='2px'>
                              Support
                            </Text>
                            <Flex align='center' color='brand.300'>
                              <Text fontSize='sm' color='brand.300'>
                                Get in touch
                              </Text>
                              <Icon
                                as={MdKeyboardArrowRight}
                                w='14px'
                                h='14px'
                                mt='2px'
                              />
                            </Flex>
                          </Flex>
                        </Flex>
                      </NavLink>
                    </Stack>
                    <Flex
                      direction='column'
                      textAlign='center'
                      bgImage={exploreBackground}
                      bgSize='cover'
                      bgPosition='1px'
                      w='100%'
                      h='100%'
                      borderRadius='0px 26px 26px 0px'
                      align='center'
                      justify='center'
                      px='22px'>
                      <SimmmpleLogoBundle w='100%' h='31px' />
                      <Text
                        transition='color 0.3s linear'
                        color='#fff'
                        fontSize='sm'
                        mt='20px'
                        mb='26px'>
                        Save money to all products with our digital categories
                        bundles!
                      </Text>
                      {/* <NavLink to='/bundles'> */}
                      <NavLink to='/bundle'>
                        <Button variant='solid' w='150px' h='42px' bg='white'>
                          <Text color='#4F61FF' fontSize='sm'>
                            Explore all
                          </Text>
                        </Button>
                      </NavLink>
                    </Flex>
                  </Grid>
                </MenuList>
              </Menu>
            </Flex>
          </Stack>
          <Flex align='center' justify='flex-end'>
            <NavLink to='/templates/all-templates'>
              <Button
                w={{ sm: "114px", lg: "160px" }}
                h={{ sm: "48px", lg: "56px" }}
                bg={secondary || scrolled ? "#ECE9FF" : "transparent"}
                border={secondary || scrolled ? "none" : "1px solid #fff"}
                _hover={{
                  bg: secondary || scrolled ? null : "#4B63CD",
                  color: "#fff",
                }}
                _active={{
                  bg: secondary || scrolled ? null : "#4B63CD",
                  color: "#fff",
                }}
                me={{ sm: "14px", lg: "0px" }}>
                <Text
                  transition='color 0.3s linear'
                  fontSize='sm'
                  fontWeight='500'
                  color={secondary || scrolled ? "brand.300" : "#fff"}
                  lineHeight='13px'>
                  Get Started
                </Text>
              </Button>
            </NavLink>
            <IconBox
              bg='#f7f5ff'
              w='52px'
              h='52px'
              alignSelf='flex-end'
              onClick={onToggle}
              display={{ sm: "flex", lg: "none" }}>
              <Icon as={FiMenu} w='24px' h='24px' color='brand.300' />
            </IconBox>
            <Collapse in={isOpenFade} animateOpacity>
              <Flex
                direction='column'
                p='12px'
                bg='#fff'
                rounded='md'
                w='336px'
                alignSelf='flex-end'
                justifySelf='flex-end'
                position='absolute'
                right='0px'
                top='100px'
                borderRadius='16px'>
                <Accordion allowToggle boxShadow='none' color='#4e547e'>
                  {/* RESPONSIVE NAVBAR */}
                  <AccordionItem border='none'>
                    <h2>
                      <AccordionButton
                        borderRadius='20px'
                        boxShadow='none'
                        _focus={{ boxShadow: "none", bg: "#fff" }}
                        py='14px'>
                        <Box
                          flex='1'
                          textAlign='left'
                          color='brand.700'
                          fontWeight='500'>
                          Explore
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Stack direction='column' spacing='16px' w='100%'>
                        <Link href='https://simmmple.com/templates/figma'>
                          <Flex align='center' w='100%'>
                            <IconBox w='48px' h='48px' bg='#F4F7FE' me='16px'>
                              <Image src={figmaLogo} w='18px' h='26px' />
                            </IconBox>
                            <Text
                              fontSize='sm'
                              fontWeight='500'
                              color='brand.700'
                              me='auto'>
                              Figma Products
                            </Text>
                            <Flex align='center' color='brand.300'>
                              <Text fontSize='sm' color='brand.300'>
                                See all
                              </Text>
                              <Icon
                                as={MdKeyboardArrowRight}
                                w='14px'
                                h='14px'
                                mt='2px'
                              />
                            </Flex>
                          </Flex>
                        </Link>
                        <Link href='https://simmmple.com/templates/all-templates'>
                          <Flex align='center' w='100%'>
                            <IconBox w='48px' h='48px' bg='#F4F7FE' me='16px'>
                              <Image src={vscodeLogo} w='26px' h='26px' />
                            </IconBox>
                            <Text
                              fontSize='sm'
                              fontWeight='500'
                              color='brand.700'
                              me='auto'>
                              Coded Products
                            </Text>
                            <Flex align='center' color='brand.300'>
                              <Text fontSize='sm' color='brand.300'>
                                See all
                              </Text>
                              <Icon
                                as={MdKeyboardArrowRight}
                                w='14px'
                                h='14px'
                                mt='2px'
                              />
                            </Flex>
                          </Flex>
                        </Link>
                        <Link href='https://simmmple.com/apps'>
                          <Flex align='center' w='100%'>
                            <IconBox w='48px' h='48px' bg='#F4F7FE' me='16px'>
                              <Image src={bulb} w='28px' h='30px' />
                            </IconBox>
                            <Text
                              fontSize='sm'
                              fontWeight='500'
                              color='brand.700'
                              me='auto'>
                              Apps & Plugins
                            </Text>
                            <Flex align='center' color='brand.300'>
                              <Text fontSize='sm' color='brand.300'>
                                Learn more
                              </Text>
                              <Icon
                                as={MdKeyboardArrowRight}
                                w='14px'
                                h='14px'
                                mt='2px'
                              />
                            </Flex>
                          </Flex>
                        </Link>
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem border='none'>
                    <h2>
                      <Link href='https://simmmple.com/templates/all-templates'>
                        <AccordionButton
                          borderRadius='20px'
                          boxShadow='none'
                          _focus={{ boxShadow: "none", bg: "#fff" }}
                          py='14px'>
                          <Box
                            flex='1'
                            textAlign='left'
                            color='brand.700'
                            fontWeight='500'>
                            Products
                          </Box>
                        </AccordionButton>
                      </Link>
                    </h2>
                  </AccordionItem>
                  <AccordionItem border='none'>
                    <h2>
                      <AccordionButton
                        borderRadius='20px'
                        boxShadow='none'
                        _focus={{ boxShadow: "none", bg: "#fff" }}
                        py='14px'>
                        <Box
                          flex='1'
                          textAlign='left'
                          color='brand.700'
                          fontWeight='500'>
                          Technologies
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} px='10px'>
                      <Grid
                        templateColumns='repeat(2, 1fr)'
                        columnGap='30px'
                        rowGap='20px'>
                        <Link href='https://simmmple.com/templates/figma'>
                          <Flex align='center' w='100%'>
                            <IconBox w='48px' h='48px' bg='#F4F7FE' me='16px'>
                              <Image src={figmaLogo} w='18px' h='26px' />
                            </IconBox>
                            <Text
                              fontSize='sm'
                              fontWeight='500'
                              color='brand.700'
                              me='auto'>
                              Figma
                            </Text>
                          </Flex>
                        </Link>
                        <Link href='https://simmmple.com/templates/react'>
                          <Flex align='center' w='100%'>
                            <IconBox w='48px' h='48px' bg='#F4F7FE' me='16px'>
                              <Image src={reactLogo} w='24px' h='22px' />
                            </IconBox>
                            <Text
                              fontSize='sm'
                              fontWeight='500'
                              color='brand.700'
                              me='auto'>
                              React JS
                            </Text>
                          </Flex>
                        </Link>
                        <Link href='https://simmmple.com/templates/bootstrap'>
                          <Flex align='center' w='100%'>
                            <IconBox w='48px' h='48px' bg='#F4F7FE' me='16px'>
                              <Image src={bootstrapLogo} w='24px' h='22px' />
                            </IconBox>
                            <Text
                              fontSize='sm'
                              fontWeight='500'
                              color='brand.700'
                              me='auto'>
                              Bootstrap
                            </Text>
                          </Flex>
                        </Link>
                        <Link href='https://simmmple.com/templates/react'>
                          <Flex align='center' w='100%'>
                            <IconBox w='48px' h='48px' bg='#F4F7FE' me='16px'>
                              <Image src={chakraLogo} w='24px' h='24px' />
                            </IconBox>
                            <Text
                              fontSize='sm'
                              fontWeight='500'
                              color='brand.700'
                              me='auto'>
                              Chakra UI
                            </Text>
                          </Flex>
                        </Link>
                      </Grid>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem border='none'>
                    <h2>
                      <AccordionButton
                        borderRadius='20px'
                        boxShadow='none'
                        _focus={{ boxShadow: "none", bg: "#fff" }}
                        py='14px'>
                        <Box
                          flex='1'
                          textAlign='left'
                          color='brand.700'
                          fontWeight='500'>
                          Resources
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Stack
                        direction='column'
                        spacing='16px'
                        w='100%'
                        zIndex='1000'>
                        <Link href='https://venusdesignsystem.com/dashboard-builder?ref=simmmple'>
                          <Flex align='center' w='100%'>
                            <IconBox w='48px' h='48px' bg='#F4F7FE' me='16px'>
                              <Image src={vdbLogo} w='26px' h='26px' />
                            </IconBox>
                            <Text
                              fontSize='sm'
                              fontWeight='500'
                              color='brand.700'
                              me='auto'>
                              Dashboard Builder
                            </Text>
                            <Flex align='center' color='brand.300'>
                              <Text fontSize='sm' color='brand.300'>
                                Learn more
                              </Text>
                              <Icon
                                as={MdKeyboardArrowRight}
                                w='14px'
                                h='14px'
                                mt='2px'
                              />
                            </Flex>
                          </Flex>
                        </Link>
                        <Link href='https://blog.simmmple.com'>
                          <Flex align='center' w='100%'>
                            <IconBox w='48px' h='48px' bg='#F4F7FE' me='16px'>
                              <Image src={mailLogo} w='32px' h='30px' />
                            </IconBox>
                            <Text
                              fontSize='sm'
                              fontWeight='500'
                              color='brand.700'
                              me='auto'>
                              Blogs
                            </Text>
                            <Flex align='center' color='brand.300'>
                              <Text fontSize='sm' color='brand.300'>
                                Articles & Tutorials
                              </Text>
                              <Icon
                                as={MdKeyboardArrowRight}
                                w='14px'
                                h='14px'
                                mt='2px'
                              />
                            </Flex>
                          </Flex>
                        </Link>
                        <Link href='https://simmmple.com/contact'>
                          <Flex align='center' w='100%'>
                            <IconBox w='48px' h='48px' bg='#fff6e5' me='16px'>
                              <Icon as={contactSupport} w='22px' h='22px' />
                            </IconBox>
                            <Text
                              fontSize='sm'
                              fontWeight='500'
                              color='brand.700'
                              me='auto'>
                              Support
                            </Text>
                            <Flex align='center' color='brand.300'>
                              <Text fontSize='sm' color='brand.300'>
                                Get in touch
                              </Text>
                              <Icon
                                as={MdKeyboardArrowRight}
                                w='14px'
                                h='14px'
                                mt='2px'
                              />
                            </Flex>
                          </Flex>
                        </Link>
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Flex
                  direction='column'
                  textAlign='center'
                  bgImage={exploreBackground}
                  bgSize='275px 275px'
                  bgPosition='0px'
                  w='275px'
                  h='275px'
                  borderRadius='16px'
                  align='center'
                  justify='center'
                  mx='auto'
                  mt='30px'>
                  <SimmmpleLogoBundle w='100%' h='31px' />
                  <Text
                    color='#fff'
                    fontSize='sm'
                    mt='20px'
                    mb='26px'
                    maxW='80%'>
                    Save money to all products with our digital categories
                    bundles!
                  </Text>
                  <Link href='https://simmmple.com/bundles'>
                    <Button variant='solid' w='150px' h='42px' bg='white'>
                      <Text color='#4F61FF' fontSize='sm'>
                        Explore all
                      </Text>
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Collapse>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
