import React from 'react';
import { Flex, Stack, Icon, Text, Box, Button, Menu, Image, Tooltip, MenuList, Grid, useDisclosure } from "@chakra-ui/react";
import { SimmmpleLogoWhite, } from "../Icons/Icons";
import IconBox from "../Icons/IconBox";
import { GoChevronDown } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import {MdKeyboardArrowRight} from "react-icons/md";
import exploreBackground from "../../assets/img/explore-background.png";
import { SimmmpleLogoBundle } from "../../components/Icons/Icons";
import figmaLogo from "../../assets/img/figma.png";
import vscodeLogo from "../../assets/img/vscode.png";
import mailLogo from "../../assets/img/mail.png";

function Navbar() {

    const { isOpen: isOpenExplore, onOpen: onOpenExplore, onClose: onCloseExplore } = useDisclosure();

    return (
        <Flex w="100vw" bg="#333">
            <Flex w="1170px" mx="auto" align="center"  py="40px">
                <Box>
                    <SimmmpleLogoWhite w="100%" h="40px" cursor="pointer"/>
                </Box>
                <Stack direction="row" spacing="44px" align="center" ms="160px" me="210px">
                    <Flex align="center" onMouseEnter={onOpenExplore} onMouseLeave={onCloseExplore} position="relative" cursor="pointer">
                        <Text  color="#fff" fontWeight="normal" fontSize="sm" me="4px" >Explore</Text>
                        <Icon as={GoChevronDown} w="12px" h="12px" color="#fff" mt="4px"/>
                        <Menu isOpen={isOpenExplore}>
                                <MenuList
                                    p="0px"
                                    minW="500px"
                                    cursor="default"
                                    borderRadius="18px"
                                    position="absolute"
                                    top="40px"
                                    left="-10px"
                                    border="none"
                                >
                                    <Grid templateColumns="repeat(2, 1fr)">
                                        <Stack direction="column" spacing="12px" p="12px">
                                            <Flex align="center">
                                                <Image src={figmaLogo} w="68px" h="68px" me="20px"/>
                                                    <Flex direction="column">
                                                        <Text fontSize="md" fontWeight="normal" color="#02044A" mb="2px">Figma Products</Text>
                                                        <Flex align="center" color="#422AFB">
                                                            <Text fontSize="sm" color="#422AFB">See all products</Text>
                                                            <Icon as={MdKeyboardArrowRight} w="14px" h="14px" mt="2px"/>
                                                        </Flex>
                                                    </Flex>
                                            </Flex>
                                            <Flex align="center">
                                            <Image src={vscodeLogo} w="68px" h="68px" me="20px"/>
                                                    <Flex direction="column">
                                                        <Text fontSize="md" fontWeight="normal" color="#02044A" mb="2px">Coded Products</Text>
                                                        <Flex align="center" color="#422AFB">
                                                            <Text fontSize="sm" color="#422AFB">See all products</Text>
                                                            <Icon as={MdKeyboardArrowRight} w="14px" h="14px" mt="2px"/>
                                                        </Flex>
                                                    </Flex>
                                            </Flex>
                                            <Flex align="center">
                                            <Image src={mailLogo} w="68px" h="68px" me="20px"/>
                                                    <Flex direction="column">
                                                        <Text fontSize="md" fontWeight="normal" color="#02044A" mb="2px">Apps & Plugins</Text>
                                                        <Flex align="center" color="#422AFB">
                                                            <Text fontSize="sm" color="#422AFB">Learn more</Text>
                                                            <Icon as={MdKeyboardArrowRight} w="14px" h="14px" mt="2px"/>
                                                        </Flex>
                                                    </Flex>
                                            </Flex>
                                        </Stack>
                                        <Flex direction="column" textAlign="center" bgImage={exploreBackground} w="100%" h="100%" borderRadius="0px 16px 16px 0px" align="center" justify="center" px="22px">
                                            <SimmmpleLogoBundle w="100%" h="31px"/>
                                            <Text color="#fff" fontSize="sm" mt="20px" mb="26px">Save money to all products with our digital categories bundles!</Text>
                                            <Button variant="solid" borderRadius="30px" w="150px" h="42px">
                                                <Text color="#4F61FF" fontSize="sm" >Explore all</Text>
                                            </Button>
                                        </Flex>
                                    </Grid>
                                </MenuList>
                        </Menu>
                    </Flex>
                    <Flex align="center" cursor="pointer">
                        <Text  color="#fff" fontWeight="normal" fontSize="sm" me="4px">Products</Text>
                        <Icon as={GoChevronDown} w="12px" h="12px" color="#fff" mt="4px"/>
                    </Flex>
                    <Flex align="center" cursor="pointer">
                        <Text  color="#fff" fontWeight="normal" fontSize="sm" me="4px">Technologies</Text>
                        <Icon as={GoChevronDown} w="12px" h="12px" color="#fff" mt="4px"/>
                    </Flex>
                    <Flex align="center" cursor="pointer">
                        <Text  color="#fff" fontWeight="normal" fontSize="sm" me="4px">Resources</Text>
                        <Icon as={GoChevronDown} w="12px" h="12px" color="#fff" mt="4px"/>
                    </Flex>
                </Stack>
                <Button variant="outline" w="160px" h="56px" borderRadius="30px">
                    <Text fontSize="sm" fontWeight="normal" color="#fff">Get Started</Text>
                </Button>
            </Flex>
        </Flex>
    )
}

export default Navbar
