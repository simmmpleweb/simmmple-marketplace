import React from "react";
import {
  Flex,
  Text,
  FormControl,
  Input,
  Button,
  Divider,
  Grid,
  Stack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

// Custom Components
import IconBox from "components/icons/IconBox";

// Icons
import { SimmmpleLogoColored } from "components/icons/Icons";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";

// Images
import footerBg from "assets/img/footer/footer-background.png";

const Footer = () => {
  return (
    <Flex w='100vw' bg='#F4F7FE' pb='125px'>
      <Flex direction='column' w='1170px' mx='auto'>
        <Flex
          w='100%'
          h='250px'
          borderRadius='30px'
          bgImage={footerBg}
          bgPosition='center center'
          px='58px'
          align='center'
          overflowX='hidden'
          transform='translateY(-50%)'>
          <Flex direction='column' me='100px'>
            <Text color='#fff' mb='8px' fontSize='30px' fontWeight='500'>
              Join over 10,000 digital creators today!
            </Text>
            <Text color='#fff' fontSize='20px'>
              No Spam. Only sweet content and updates of our products.
            </Text>
          </Flex>
          <Flex borderRadius='70px' bg='#fff' w='400px' h='70px' p='8px'>
            <FormControl>
              <Flex align='center'>
                <Input
                  type='email'
                  placeholder='Enter your email address'
                  boxShadow='none'
                  border='none'
                  _focus={{ border: "none" }}
                  _placeholder={{ color: "#878CBD" }}
                />
                <Button
                  bg='brand.300'
                  minW='150px'
                  h='56px'
                  _hover={{ bg: "#1A05B7" }}>
                  <Text fontSize='sm' color='#fff' fontWeight='normal'>
                    Submit
                  </Text>
                </Button>
              </Flex>
            </FormControl>
          </Flex>
        </Flex>
        <Flex align='center'>
          <SimmmpleLogoColored w='170px' h='40px' me='40px' />
          <Text color='#878CBD'>Premium UI Kits, Templates & Themes</Text>
        </Flex>
        <Divider mt='60px' mb='42px' h='1px' bg='rgba(135, 140, 189, 0.2)' />
        <Grid templateColumns='repeat(4, 1fr) 1.2fr' gap='72px'>
          <Flex direction='column'>
            <Text fontSize='lg' color='brand.700' fontWeight='500' mb='26px'>
              Explore
            </Text>
            <Stack direction='column' spacing='22px'>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  Figma Products
                </Text>
              </NavLink>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  Coded Products
                </Text>
              </NavLink>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  Apps & Plugins
                </Text>
              </NavLink>
            </Stack>
          </Flex>
          <Flex direction='column'>
            <Text fontSize='lg' color='brand.700' fontWeight='500' mb='26px'>
              Company
            </Text>
            <Stack direction='column' spacing='22px'>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  Support & Contact
                </Text>
              </NavLink>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  Terms of Use
                </Text>
              </NavLink>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  Privacy Policy
                </Text>
              </NavLink>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  License
                </Text>
              </NavLink>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  About us
                </Text>
              </NavLink>
            </Stack>
          </Flex>
          <Flex direction='column'>
            <Text fontSize='lg' color='brand.700' fontWeight='500' mb='26px'>
              Technologies
            </Text>
            <Stack direction='column' spacing='22px'>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  Figma
                </Text>
              </NavLink>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  ReactJS
                </Text>
              </NavLink>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  Bootstrap
                </Text>
              </NavLink>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  Adobe XD
                </Text>
              </NavLink>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  HTML & CSS
                </Text>
              </NavLink>
            </Stack>
          </Flex>
          <Flex direction='column'>
            <Text fontSize='lg' color='brand.700' fontWeight='500' mb='26px'>
              Resources
            </Text>
            <Stack direction='column' spacing='22px' w='100%'>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  Inspiration
                </Text>
              </NavLink>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  Tutorials & Guides
                </Text>
              </NavLink>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  Dashboard Builder
                </Text>
              </NavLink>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  Third-Party Tools
                </Text>
              </NavLink>
              <NavLink to='/'>
                <Text color='#878CBD' fontSize='md'>
                  Made with Simmmple
                </Text>
              </NavLink>
            </Stack>
          </Flex>
          <Flex direction='column'>
            <Text
              fontSize='lg'
              color='brand.700'
              fontWeight='500'
              mb='26px'
              alignSelf='flex-end'>
              Follow our Socials
            </Text>
            <Stack direction='row' spacing='20px' mb='20px'>
              <Link href='https://github.com/simmmpleweb' target='_blank'>
                <IconBox w='48px' h='48px' borderRadius='30px' bg='#fff'>
                  <Icon as={AiFillGithub} w='26px' h='26px' color='brand.300' />
                </IconBox>
              </Link>
              <Link
                href='https://www.instagram.com/simmmple.web/?hl=ro'
                target='_blank'>
                <IconBox w='48px' h='48px' borderRadius='30px' bg='#fff'>
                  <Icon
                    as={AiOutlineInstagram}
                    w='26px'
                    h='26px'
                    color='brand.300'
                  />
                </IconBox>
              </Link>
              <Link href='https://twitter.com/simmmple_web' target='_blank'>
                <IconBox w='48px' h='48px' borderRadius='30px' bg='#fff'>
                  <Icon
                    as={AiOutlineTwitter}
                    w='26px'
                    h='26px'
                    color='brand.300'
                  />
                </IconBox>
              </Link>
              <Link
                href='https://web.facebook.com/simmmple.web'
                target='_blank'>
                <IconBox w='48px' h='48px' borderRadius='30px' bg='#fff'>
                  <Icon as={FaFacebook} w='26px' h='26px' color='brand.300' />
                </IconBox>
              </Link>
            </Stack>
            <Stack
              direction='row'
              spacing='20px'
              alignSelf='flex-end'
              mb='50px'>
              <Link
                href='https://www.linkedin.com/company/simmmple/'
                target='_blank'>
                <IconBox w='48px' h='48px' borderRadius='30px' bg='#fff'>
                  <Icon
                    as={AiFillLinkedin}
                    w='26px'
                    h='26px'
                    color='brand.300'
                  />
                </IconBox>
              </Link>
              <Link href='https://pinterest.com/simmmple_web/' target='_blank'>
                <IconBox w='48px' h='48px' borderRadius='30px' bg='#fff'>
                  <Icon as={BsPinterest} w='26px' h='26px' color='brand.300' />
                </IconBox>
              </Link>
              <Link href='https://www.tiktok.com/@simmmple.web' target='_blank'>
                <IconBox w='48px' h='48px' borderRadius='30px' bg='#fff'>
                  <Icon as={FaTiktok} w='26px' h='26px' color='brand.300' />
                </IconBox>
              </Link>
            </Stack>
            <Flex direction='column' alignSelf='flex-end'>
              <Text fontSize='sm' color='#878CBD'>
                <Text as='span' color='brand.700' fontWeight='normal'>
                  &copy; {1900 + new Date().getYear()} Simmmple
                </Text>
                , all rights reserved
              </Text>
              <Text fontSize='sm' color='#878CBD' alignSelf='flex-end'>
                Made with ❤️ for a better UI process.
              </Text>
            </Flex>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Footer;
