import { Divider, Flex, Grid, Icon, Link, Stack, Text } from "@chakra-ui/react";
// Images
import footerBg from "assets/img/footer/footer-background-bf.png";
// Custom Components
import IconBox from "components/icons/IconBox";
// Icons
import { SimmmpleLogoWhite } from "components/icons/Icons";
import MailchimpNewsletter from "components/mailchimp/MCFormBF";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <Flex
      w='100%'
      bg='linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)'
      pb='125px'>
      <Flex
        direction='column'
        w={{ sm: "350px", md: "740px", lg: "970px", xl: "1170px" }}
        mx='auto'>
        <Flex
          direction={{ sm: "column", lg: "row" }}
          w='100%'
          h={{ md: "250px", lg: "200px" }}
          borderRadius='30px'
          bgImage={footerBg}
          bgPosition='center center'
          px={{ sm: "20px", lg: "58px" }}
          py={{ sm: "10px", lg: "0px" }}
          align='center'
          transform={{ base: "translateY(-52%)", md: "translateY(-50%)" }}>
          <Flex
            direction='column'
            me={{ xl: "60px" }}
            textAlign={{ sm: "center", lg: "start" }}
            w='100%'
            mb={{ sm: "26px", lg: "0px" }}>
            <Text
              color='#fff'
              fontSize={{ sm: "26px", lg: "24px" }}
              fontWeight='500'
              mb={{ sm: "8px", lg: "6px" }}
              maxW={{ sm: "90%", lg: "100%" }}
              mx={{ sm: "auto", lg: "0px" }}>
              Join over 10,000 digital creators today!
            </Text>
            <Text color='#fff' fontSize={{ sm: "16px", lg: "14px" }}>
              No Spam. Only sweet content and updates of our products.
            </Text>
          </Flex>
          <MailchimpNewsletter />
        </Flex>
        <Flex align='center' direction={{ sm: "column", lg: "row" }}>
          <SimmmpleLogoWhite w='170px' h='40px' me={{ lg: "40px" }} />
          <Text color='#C5C9EB' mt={{ sm: "24px", lg: "0px" }}>
            Premium UI Kits, Templates & Themes
          </Text>
        </Flex>
        <Divider mt='60px' mb='42px' h='1px' bg='rgba(135, 140, 189, 0.2)' />
        <Grid
          templateColumns={{ sm: "45% 55%", lg: "repeat(4, 1fr) 1.2fr" }}
          columnGap={{ sm: "0px", lg: "72px" }}
          rowGap='50px'>
          <Flex direction='column' justifySelf='center'>
            <Text fontSize='lg' color='white' fontWeight='500' mb='26px'>
              Explore
            </Text>
            <Stack direction='column' spacing='22px'>
              <NavLink to='/templates/figma'>
                <Text color='#C5C9EB' fontSize='md'>
                  Figma Products
                </Text>
              </NavLink>
              <NavLink to='/templates/all-templates'>
                <Text color='#C5C9EB' fontSize='md'>
                  Coded Products
                </Text>
              </NavLink>
              <NavLink to='/apps'>
                <Text color='#C5C9EB' fontSize='md'>
                  Apps & Plugins
                </Text>
              </NavLink>
            </Stack>
          </Flex>
          <Flex direction='column' justifySelf='center'>
            <Text fontSize='lg' color='white' fontWeight='500' mb='26px'>
              Company
            </Text>
            <Stack direction='column' spacing='22px'>
              <NavLink to='/contact'>
                <Text color='#C5C9EB' fontSize='md'>
                  Support & Contact
                </Text>
              </NavLink>
              <NavLink to='/terms-of-service'>
                <Text color='#C5C9EB' fontSize='md'>
                  Terms of Use
                </Text>
              </NavLink>
              <NavLink to='/privacy-policy'>
                <Text color='#C5C9EB' fontSize='md'>
                  Privacy Policy
                </Text>
              </NavLink>
              <NavLink to='/licenses'>
                <Text color='#C5C9EB' fontSize='md'>
                  License
                </Text>
              </NavLink>
              <NavLink to='/about'>
                <Text color='#C5C9EB' fontSize='md'>
                  About us
                </Text>
              </NavLink>
            </Stack>
          </Flex>
          <Flex direction='column' justifySelf='center'>
            <Text fontSize='lg' color='white' fontWeight='500' mb='26px'>
              Technologies
            </Text>
            <Stack direction='column' spacing='22px'>
              <NavLink to='/templates/premium-templates'>
                <Text color='#C5C9EB' fontSize='md'>
                  Premium Products
                </Text>
              </NavLink>
              <NavLink to='/templates/free-templates'>
                <Text color='#C5C9EB' fontSize='md'>
                  Free Products
                </Text>
              </NavLink>
              <NavLink to='/templates/figma'>
                <Text color='#C5C9EB' fontSize='md'>
                  Figma
                </Text>
              </NavLink>
              <NavLink to='/templates/react'>
                <Text color='#C5C9EB' fontSize='md'>
                  ReactJS
                </Text>
              </NavLink>
              <NavLink to='/templates/bootstrap'>
                <Text color='#C5C9EB' fontSize='md'>
                  Bootstrap
                </Text>
              </NavLink>
            </Stack>
          </Flex>
          <Flex direction='column' justifySelf='center'>
            <Text fontSize='lg' color='white' fontWeight='500' mb='26px'>
              Resources
            </Text>
            <Stack direction='column' spacing='22px' w='100%'>
              <Link href='https://dribbble.com/simmmple'>
                <Text color='#C5C9EB' fontSize='md'>
                  Inspiration
                </Text>
              </Link>
              <Link href='https://blog.simmmple.com'>
                <Text color='#C5C9EB' fontSize='md'>
                  Tutorials & Guides
                </Text>
              </Link>
              <Link href='https://venusdesignsystem.com/dashboard-builder?ref=simmmple'>
                <Text color='#C5C9EB' fontSize='md'>
                  Dashboard Builder
                </Text>
              </Link>
              <NavLink to='/apps'>
                <Text color='#C5C9EB' fontSize='md'>
                  Third-Party Tools
                </Text>
              </NavLink>
            </Stack>
          </Flex>
          <Flex
            direction='column'
            align='center'
            justifySelf='center'
            gridColumn={{ sm: "1 / 3", lg: "auto" }}>
            <Text
              fontSize='lg'
              color='white'
              fontWeight='500'
              mb='26px'
              alignSelf={{ sm: "center", md: "center", lg: "flex-end" }}>
              Follow our Socials
            </Text>
            <Stack
              direction='row'
              spacing='20px'
              mb='20px'
              justifyContent={{ sm: "center", md: "center", lg: "flex-end" }}>
              <Link href='https://github.com/simmmpleweb' target='_blank'>
                <IconBox
                  w='48px'
                  h='48px'
                  borderRadius='30px'
                  bg='linear-gradient(180deg, #1A203B 0%, #101327 100%)'>
                  <Icon as={AiFillGithub} w='26px' h='26px' color='white' />
                </IconBox>
              </Link>
              <Link
                href='https://www.instagram.com/simmmple.web/?hl=ro'
                target='_blank'>
                <IconBox
                  w='48px'
                  h='48px'
                  borderRadius='30px'
                  bg='linear-gradient(180deg, #1A203B 0%, #101327 100%)'>
                  <Icon
                    as={AiOutlineInstagram}
                    w='26px'
                    h='26px'
                    color='white'
                  />
                </IconBox>
              </Link>
              <Link href='https://twitter.com/simmmple_web' target='_blank'>
                <IconBox
                  w='48px'
                  h='48px'
                  borderRadius='30px'
                  bg='linear-gradient(180deg, #1A203B 0%, #101327 100%)'>
                  <Icon as={AiOutlineTwitter} w='26px' h='26px' color='white' />
                </IconBox>
              </Link>
              <Link
                href='https://web.facebook.com/simmmple.web'
                target='_blank'>
                <IconBox
                  w='48px'
                  h='48px'
                  borderRadius='30px'
                  bg='linear-gradient(180deg, #1A203B 0%, #101327 100%)'>
                  <Icon as={FaFacebook} w='26px' h='26px' color='white' />
                </IconBox>
              </Link>
            </Stack>
            <Stack
              direction='row'
              spacing='20px'
              alignSelf={{ sm: "center", md: "center", lg: "flex-end" }}
              justifyContent={{
                sm: "center",
                md: "flex-start",
                lg: "flex-end",
              }}
              mb='50px'>
              <Link
                href='https://www.linkedin.com/company/simmmple/'
                target='_blank'>
                <IconBox
                  w='48px'
                  h='48px'
                  borderRadius='30px'
                  bg='linear-gradient(180deg, #1A203B 0%, #101327 100%)'>
                  <Icon as={AiFillLinkedin} w='26px' h='26px' color='white' />
                </IconBox>
              </Link>
              <Link href='https://pinterest.com/simmmple_web/' target='_blank'>
                <IconBox
                  w='48px'
                  h='48px'
                  borderRadius='30px'
                  bg='linear-gradient(180deg, #1A203B 0%, #101327 100%)'>
                  <Icon as={BsPinterest} w='26px' h='26px' color='white' />
                </IconBox>
              </Link>
              <Link href='https://www.tiktok.com/@simmmple.web' target='_blank'>
                <IconBox
                  w='48px'
                  h='48px'
                  borderRadius='30px'
                  bg='linear-gradient(180deg, #1A203B 0%, #101327 100%)'>
                  <Icon as={FaTiktok} w='26px' h='26px' color='white' />
                </IconBox>
              </Link>
            </Stack>
            <Flex
              direction={{ sm: "column", md: "row", lg: "column" }}
              alignSelf={{ sm: "center", lg: "flex-end" }}>
              <Text fontSize='sm' color='#C5C9EB'>
                <Text as='span' color='white' fontWeight='normal'>
                  &copy; {1900 + new Date().getYear()} Simmmple
                </Text>
                , all rights reserved.
              </Text>
              <Text
                fontSize='sm'
                color='#C5C9EB'
                alignSelf='flex-end'
                ms={{ md: "2px", lg: "0px" }}>
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
