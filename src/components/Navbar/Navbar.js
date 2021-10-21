import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Menu,
  MenuList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Collapse,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

// Custom Components
import IconBox from "components/icons/IconBox";

// Icons
import { SimmmpleLogoBundle, SimmmpleLogoWhiteMobile } from "components/icons/Icons";
import { SimmmpleLogoWhite } from "components/icons/Icons";
import { GoChevronDown } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";

// Images
import exploreBackground from "assets/img/explore-background.png";
import figmaLogo from "assets/img/figma.png";
import mailLogo from "assets/img/mail.png";
import vscodeLogo from "assets/img/vscode.png";

function Navbar() {
  const {
    isOpen: isOpenExplore,
    onOpen: onOpenExplore,
    onClose: onCloseExplore,
  } = useDisclosure();

  const { isOpen: isOpenFade, onToggle } = useDisclosure();

  return (
    <Flex w="100%" bg="brand.300" position="absolute" zIndex="1">
      <Flex
        w={{ sm: "350px", md: "740px", lg: "970px", xl: "1170px" }}
        mx={{ sm: "20px", md: "24px", lg: "auto" }}
        align="center"
        py="40px"
        position="relative"
      >
        <Flex alignSelf="flex-start" justify="center" align="center" h="100%" me={{sm: "auto", md: "auto", lg: "0px"}}>
          <NavLink to="/">
            {window.innerWidth < 768 ? (
              <SimmmpleLogoWhiteMobile w="100%" h="48px" cursor="pointer" />
            ) : (
              <SimmmpleLogoWhite
                w="100%"
                h="42px"
                cursor="pointer"
                alignSelf="center"
              />
            )}
          </NavLink>
        </Flex>
        <Stack
          display={{ sm: "none", lg: "flex" }}
          direction="row"
          spacing="44px"
          align="center"
          ms={{lg: "auto", xl: "160px"}}
          me={{lg: "auto", xl: "210px"}}
          h="50px"
        >
          <Flex
            align="center"
            onMouseEnter={onOpenExplore}
            onMouseLeave={onCloseExplore}
            position="relative"
            cursor="pointer"
            h="100%"
          >
            <Text color="#fff" fontWeight="normal" fontSize="sm" me="4px">
              Explore
            </Text>
            <Icon as={GoChevronDown} w="12px" h="12px" color="#fff" mt="4px" />
            <Menu isOpen={isOpenExplore}>
              <MenuList
                p="0px"
                minW="500px"
                cursor="default"
                borderRadius="30px"
                position="absolute"
                top="50px"
                left="-10px"
                border="none"
              >
                <Grid templateColumns="repeat(2, 1fr)">
                  <Stack direction="column" spacing="12px" p="12px">
                    <Flex align="center">
                      <IconBox w="68px" h="68px" bg="#F4F7FE" me="20px">
                        <Image src={figmaLogo} w="26px" h="38px" />
                      </IconBox>
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color="brand.700"
                          fontWeight="bold"
                          mb="2px"
                        >
                          Figma Products
                        </Text>
                        <NavLink to="/">
                          <Flex align="center" color="brand.300">
                            <Text fontSize="sm" color="brand.300">
                              See all products
                            </Text>
                            <Icon
                              as={MdKeyboardArrowRight}
                              w="14px"
                              h="14px"
                              mt="2px"
                            />
                          </Flex>
                        </NavLink>
                      </Flex>
                    </Flex>
                    <Flex align="center">
                      <IconBox w="68px" h="68px" bg="#F4F7FE" me="20px">
                        <Image src={vscodeLogo} w="38px" h="38px" />
                      </IconBox>
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color="brand.700"
                          fontWeight="bold"
                          mb="2px"
                        >
                          Coded Products
                        </Text>
                        <NavLink to="/">
                          <Flex align="center" color="brand.300">
                            <Text fontSize="sm" color="brand.300">
                              See all products
                            </Text>
                            <Icon
                              as={MdKeyboardArrowRight}
                              w="14px"
                              h="14px"
                              mt="2px"
                            />
                          </Flex>
                        </NavLink>
                      </Flex>
                    </Flex>
                    <Flex align="center">
                      <IconBox w="68px" h="68px" bg="#F4F7FE" me="20px">
                        <Image src={mailLogo} w="46px" h="43px" />
                      </IconBox>
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          color="brand.700"
                          fontWeight="bold"
                          mb="2px"
                        >
                          Apps & Plugins
                        </Text>
                        <NavLink to="/">
                          <Flex align="center" color="brand.300">
                            <Text fontSize="sm" color="brand.300">
                              Learn more
                            </Text>
                            <Icon
                              as={MdKeyboardArrowRight}
                              w="14px"
                              h="14px"
                              mt="2px"
                            />
                          </Flex>
                        </NavLink>
                      </Flex>
                    </Flex>
                  </Stack>
                  <Flex
                    direction="column"
                    textAlign="center"
                    bgImage={exploreBackground}
                    bgSize="cover"
                    bgPosition="1px"
                    w="100%"
                    h="100%"
                    borderRadius="0px 26px 26px 0px"
                    align="center"
                    justify="center"
                    px="22px"
                  >
                    <SimmmpleLogoBundle w="100%" h="31px" />
                    <Text color="#fff" fontSize="sm" mt="20px" mb="26px">
                      Save money to all products with our digital categories
                      bundles!
                    </Text>
                    <Button variant="solid" w="150px" h="42px">
                      <Text color="#4F61FF" fontSize="sm">
                        Explore all
                      </Text>
                    </Button>
                  </Flex>
                </Grid>
              </MenuList>
            </Menu>
          </Flex>
          <Flex align="center" cursor="pointer">
            <Text color="#fff" fontWeight="normal" fontSize="sm" me="4px">
              Products
            </Text>
            <Icon as={GoChevronDown} w="12px" h="12px" color="#fff" mt="4px" />
          </Flex>
          <Flex align="center" cursor="pointer">
            <Text color="#fff" fontWeight="normal" fontSize="sm" me="4px">
              Technologies
            </Text>
            <Icon as={GoChevronDown} w="12px" h="12px" color="#fff" mt="4px" />
          </Flex>
          <Flex align="center" cursor="pointer">
            <Text color="#fff" fontWeight="normal" fontSize="sm" me="4px">
              Resources
            </Text>
            <Icon as={GoChevronDown} w="12px" h="12px" color="#fff" mt="4px" />
          </Flex>
        </Stack>
        <Flex align="center" justify="flex-end">
          <Button
            w={{ sm: "114px", lg: "160px" }}
            h={{ sm: "48px", lg: "56px" }}
            bg="transparent"
            zIndex="1"
            border="1px solid #fff"
            _hover={{ bg: "#4B63CD", color: "#fff" }}
            me={{sm: "14px", lg: "0px"}}
          >
            <Text fontSize="sm" fontWeight="500" color="#fff" lineHeight="13px">
              Get Started
            </Text>
          </Button>
          <IconBox
            bg="#f7f5ff"
            w="52px"
            h="52px"
            alignSelf="flex-end"
            onClick={onToggle}
            display={{ sm: "flex", lg: "none" }}
          >
            <Icon as={FiMenu} w="24px" h="24px" color="brand.300" />
          </IconBox>
          <Collapse in={isOpenFade} animateOpacity >
            <Flex direction="column"
              p="12px"
              bg="#fff"
              rounded="md"
              w="336px"
              alignSelf="flex-end"
              justifySelf="flex-end"
              position="absolute"
              right="0px"
              top="100px"
              borderRadius="16px"
            >
              <Accordion allowToggle boxShadow="none" color="#4e547e">
                <AccordionItem border="none">
                  <h2>
                    <AccordionButton
                      boxShadow="none"
                      _focus={{ boxShadow: "none", bg: "#fff" }}
                      py="14px"
                    >
                      <Box flex="1" textAlign="left" color="brand.700" fontWeight="500">
                        Explore
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack direction="column" spacing="16px" w="100%">
                      <Flex align="center" w="100%">
                        <IconBox w="48px" h="48px" bg="#F4F7FE" me="16px">
                          <Image src={figmaLogo} w="18px" h="26px" />
                        </IconBox>
                        <Text fontSize="sm" fontWeight="normal" color="brand.700" me="auto">
                          Figma Products
                        </Text>
                        <NavLink to="/">
                          <Flex align="center" color="brand.300">
                            <Text fontSize="sm" color="brand.300">
                              See all
                            </Text>
                            <Icon
                              as={MdKeyboardArrowRight}
                              w="14px"
                              h="14px"
                              mt="2px"
                            />
                          </Flex>
                        </NavLink>
                      </Flex>
                      <Flex align="center" w="100%">
                        <IconBox w="48px" h="48px" bg="#F4F7FE" me="16px">
                          <Image src={vscodeLogo} w="26px" h="26px" />
                        </IconBox>
                        <Text fontSize="sm" fontWeight="normal" color="brand.700" me="auto">
                          Coded Products
                        </Text>
                        <NavLink to="/">
                          <Flex align="center" color="brand.300">
                            <Text fontSize="sm" color="brand.300">
                              See all
                            </Text>
                            <Icon
                              as={MdKeyboardArrowRight}
                              w="14px"
                              h="14px"
                              mt="2px"
                            />
                          </Flex>
                        </NavLink>
                      </Flex>
                      <Flex align="center" w="100%">
                        <IconBox w="48px" h="48px" bg="#F4F7FE" me="16px">
                          <Image src={mailLogo} w="32px" h="30px" />
                        </IconBox>
                        <Text fontSize="sm" fontWeight="normal" color="brand.700" me="auto">
                          Apps & Plugins
                        </Text>
                        <NavLink to="/">
                          <Flex align="center" color="brand.300">
                            <Text fontSize="sm" color="brand.300">
                              Learn more
                            </Text>
                            <Icon
                              as={MdKeyboardArrowRight}
                              w="14px"
                              h="14px"
                              mt="2px"
                            />
                          </Flex>
                        </NavLink>
                      </Flex>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem border="none">
                  <h2>
                    <AccordionButton
                      boxShadow="none"
                      _focus={{ boxShadow: "none", bg: "#fff" }}
                      py="14px"
                    >
                      <Box flex="1" textAlign="left" color="brand.700" fontWeight="500">
                        Products
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
                <AccordionItem border="none">
                  <h2>
                    <AccordionButton
                      boxShadow="none"
                      _focus={{ boxShadow: "none", bg: "#fff" }}
                      py="14px"
                    >
                      <Box flex="1" textAlign="left" color="brand.700" fontWeight="500">
                        Technologies
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} pe="0px">
                    <Grid templateColumns="repeat(2, 1fr)" columnGap="35px" rowGap="20px">
                      <Flex align="center" w="100%">
                        <IconBox w="48px" h="48px" bg="#F4F7FE" me="16px">
                          <Image src={figmaLogo} w="18px" h="26px" />
                        </IconBox>
                        <Text fontSize="sm" fontWeight="normal" color="brand.700" me="auto">
                          Figma
                        </Text>
                      </Flex>
                      <Flex align="center" w="100%">
                        <IconBox w="48px" h="48px" bg="#F4F7FE" me="16px">
                          <Image src={figmaLogo} w="18px" h="26px" />
                        </IconBox>
                        <Text fontSize="sm" fontWeight="normal" color="brand.700" me="auto">
                          React JS
                        </Text>
                      </Flex>
                      <Flex align="center" w="100%">
                        <IconBox w="48px" h="48px" bg="#F4F7FE" me="16px">
                          <Image src={figmaLogo} w="18px" h="26px" />
                        </IconBox>
                        <Text fontSize="sm" fontWeight="normal" color="brand.700" me="auto">
                          Bootstrap
                        </Text>
                      </Flex>
                      <Flex align="center" w="100%">
                        <IconBox w="48px" h="48px" bg="#F4F7FE" me="16px">
                          <Image src={figmaLogo} w="18px" h="26px" />
                        </IconBox>
                        <Text fontSize="sm" fontWeight="normal" color="brand.700" me="auto">
                          Chakra UI
                        </Text>
                      </Flex>
                    </Grid>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem border="none">
                  <h2>
                    <AccordionButton
                      boxShadow="none"
                      _focus={{ boxShadow: "none", bg: "#fff" }}
                      py="14px"
                    >
                      <Box flex="1" textAlign="left" color="brand.700" fontWeight="500">
                        Resources
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  <Stack direction="column" spacing="16px" w="100%">
                      <Flex align="center" w="100%">
                        <IconBox w="48px" h="48px" bg="#F4F7FE" me="16px">
                          <Image src={figmaLogo} w="18px" h="26px" />
                        </IconBox>
                        <Text fontSize="sm" fontWeight="normal" color="brand.700" me="auto">
                          Figma Products
                        </Text>
                        <NavLink to="/">
                          <Flex align="center" color="brand.300">
                            <Text fontSize="sm" color="brand.300">
                              See all
                            </Text>
                            <Icon
                              as={MdKeyboardArrowRight}
                              w="14px"
                              h="14px"
                              mt="2px"
                            />
                          </Flex>
                        </NavLink>
                      </Flex>
                      <Flex align="center" w="100%">
                        <IconBox w="48px" h="48px" bg="#F4F7FE" me="16px">
                          <Image src={vscodeLogo} w="26px" h="26px" />
                        </IconBox>
                        <Text fontSize="sm" fontWeight="normal" color="brand.700" me="auto">
                          Coded Products
                        </Text>
                        <NavLink to="/">
                          <Flex align="center" color="brand.300">
                            <Text fontSize="sm" color="brand.300">
                              See all
                            </Text>
                            <Icon
                              as={MdKeyboardArrowRight}
                              w="14px"
                              h="14px"
                              mt="2px"
                            />
                          </Flex>
                        </NavLink>
                      </Flex>
                      <Flex align="center" w="100%">
                        <IconBox w="48px" h="48px" bg="#F4F7FE" me="16px">
                          <Image src={mailLogo} w="32px" h="30px" />
                        </IconBox>
                        <Text fontSize="sm" fontWeight="normal" color="brand.700" me="auto">
                          Apps & Plugins
                        </Text>
                        <NavLink to="/">
                          <Flex align="center" color="brand.300">
                            <Text fontSize="sm" color="brand.300">
                              Learn more
                            </Text>
                            <Icon
                              as={MdKeyboardArrowRight}
                              w="14px"
                              h="14px"
                              mt="2px"
                            />
                          </Flex>
                        </NavLink>
                      </Flex>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Flex
                    direction="column"
                    textAlign="center"
                    bgImage={exploreBackground}
                    bgSize="cover"
                    bgPosition="1px"
                    w="275px"
                    h="275px"
                    borderRadius="16px"
                    align="center"
                    justify="center"
                    mx="auto"
                    mt="30px"
                  >
                    <SimmmpleLogoBundle w="100%" h="31px" />
                    <Text color="#fff" fontSize="sm" mt="20px" mb="26px" maxW="80%">
                      Save money to all products with our digital categories
                      bundles!
                    </Text>
                    <Button variant="solid" w="150px" h="42px">
                      <Text color="#4F61FF" fontSize="sm">
                        Explore all
                      </Text>
                    </Button>
                  </Flex>
            </Flex>
          </Collapse>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
