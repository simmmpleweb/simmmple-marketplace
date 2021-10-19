import React from "react";
import {
  Flex,
  Stack,
  Icon,
  Text,
  Box,
  Button,
  Menu,
  Image,
  Tooltip,
  MenuList,
  Grid,
  useDisclosure,
} from "@chakra-ui/react";
import { SimmmpleLogoWhite } from "../Icons/Icons";
import IconBox from "../Icons/IconBox";
import { GoChevronDown } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { MdKeyboardArrowRight } from "react-icons/md";
import exploreBackground from "../../assets/img/explore-background.png";
import { SimmmpleLogoBundle } from "../../components/Icons/Icons";
import figmaLogo from "../../assets/img/figma.png";
import vscodeLogo from "../../assets/img/vscode.png";
import mailLogo from "../../assets/img/mail.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const {
    isOpen: isOpenExplore,
    onOpen: onOpenExplore,
    onClose: onCloseExplore,
  } = useDisclosure();

  return (
    <Flex w="100vw" bg="transparent" position="absolute">
      <Flex w="1170px" mx="auto" align="center" py="40px">
        <NavLink to="/">
          <Box>
            <SimmmpleLogoWhite w="100%" h="40px" cursor="pointer" />
          </Box>
        </NavLink>
        <Stack
          direction="row"
          spacing="44px"
          align="center"
          ms="160px"
          me="210px"
        >
          <Flex
            align="center"
            onMouseEnter={onOpenExplore}
            onMouseLeave={onCloseExplore}
            position="relative"
            cursor="pointer"
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
                top="40px"
                left="-10px"
                border="none"
              >
                <Grid templateColumns="repeat(2, 1fr)">
                  <Stack direction="column" spacing="12px" p="12px">
                    <Flex align="center">
                      <IconBox w="68px" h="68px" bg="#F4F7FE" me="20px">
                        <Image src={figmaLogo} w="26px" h="38px"/>
                      </IconBox>
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          fontWeight="normal"
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
                        <Image src={vscodeLogo} w="38px" h="38px"/>
                      </IconBox>
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          fontWeight="normal"
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
                        <Image src={mailLogo} w="46px" h="43px"/>
                      </IconBox>
                      <Flex direction="column">
                        <Text
                          fontSize="md"
                          fontWeight="normal"
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
                    <Button
                      variant="solid"
                      
                      w="150px"
                      h="42px"
                    >
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
        <Button w="160px" h="56px" bg="transparent" zIndex="1" border="1px solid #fff" _hover={{bg: "#4B63CD", color: "#fff"}}>
          <Text fontSize="sm" fontWeight="500" color="#fff">
            Get Started
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
