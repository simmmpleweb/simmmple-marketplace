import {
  Box,
  Flex,
  Grid,
  Image,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  LightMode,
} from "@chakra-ui/react";
import simmmple3D from "assets/img/apps/simmmple-3d.png";
import AppList from "components/apps/AppList";
import Layout from "components/layout/Layout";
import React, { useState, useEffect } from "react";
import { apps } from "variables/apps";

const Apps = () => {
  const [tab, setTab] = useState({
    apps: true,
    featured: false,
    memberships: false,
    extensions: false,
  });

  useEffect(() => {
    document.title =
      "Apps - Premium and Stunning UI Kits, Templates and Themes for developers, designers & startups @ Simmmple";
  }, []);

  return (
    <Layout>
      <Flex
        w={{ sm: "320px", md: "95%", xl: "1170px" }}
        mx='auto'
        minH='1000px'
        pt={{ sm: "60px", md: "90px" }}
        pb='200px'
        direction='column'>
        <Flex
          justify='space-between'
          direction={{ sm: "column", md: "row" }}
          mb='32px'>
          <Flex direction='column' maxW={{ sm: "100%", md: "55%", lg: "62%" }}>
            <Flex align='center' mb='24px'>
              <Text color='brand.300' fontWeight='500' fontSize='sm' me='12px'>
                APPS & PLUGINS
              </Text>
              <Tag
                color='brand.300'
                bg='#ECE9FF'
                borderRadius='30px'
                p='7px 14px'
                fontSize='xs'>
                NEW
              </Tag>
            </Flex>
            <Text
              color='brand.700'
              lineHeight={{ sm: "42px", lg: "62px" }}
              fontSize={{ sm: "34px", lg: "46px" }}
              letterSpacing='-1px'
              fontWeight='bold'
              mb='20px'>
              Boost your Web development & design process with custom apps.
            </Text>
            <Text color='#878CBD' fontSize='lg' lineHeight='38px'>
              Preview apps from Simmmple and our partners to help you improve
              the functionality of your web build. We collaborated with these
              listed products because we wanted to create solutions that can
              change your web development process into a much better one.
            </Text>
          </Flex>
          <Box display={{ sm: "none", md: "block" }}>
            <Image
              src={simmmple3D}
              w='320px'
              h='330px'
              transform='rotate(-9deg)'
            />
          </Box>
        </Flex>
        <Tabs>
          <Grid
            templateColumns={{ sm: "repeat(4, auto)", md: "repeat(4, auto)" }}
            minH='70px'
            overflowY='hidden'
            gap='14px'
            mb='40px'
            maxW={{ lg: "750px" }}
            overflowX={{ sm: "scroll", md: "hidden" }}>
            <Tab
              p='0px'
              border='none'
              boxShadow='none'
              _focus='none'
              _active='none'
              minW={{ sm: "170px" }}
              onClick={() =>
                setTab({
                  apps: true,
                  featured: false,
                  memberships: false,
                  extensions: false,
                })
              }>
              <Flex
                justify='center'
                align='center'
                borderRadius='70px'
                bg={tab.apps ? "brand.300" : "#F6F8FD"}
                p={{ sm: "22px 32px", md: "22px 40px" }}
                transition='all .25s ease'
                _hover={{ bg: tab.apps ? null : "gray.100" }}>
                <Text
                  color={tab.apps ? "#fff" : "brand.300"}
                  fontSize={{ sm: "xs", md: "sm" }}
                  fontWeight='500'>
                  All Apps & Plugins
                </Text>
              </Flex>
            </Tab>
            <Tab
              p='0px'
              border='none'
              boxShadow='none'
              _focus='none'
              _active='none'
              onClick={() =>
                setTab({
                  apps: false,
                  featured: true,
                  memberships: false,
                  extensions: false,
                })
              }>
              <Flex
                justify='center'
                align='center'
                borderRadius='70px'
                bg={tab.featured ? "brand.300" : "#F6F8FD"}
                p={{ sm: "22px 32px", md: "22px 40px" }}
                transition='all .25s ease'
                _hover={{ bg: tab.featured ? null : "gray.100" }}>
                <Text
                  color={tab.featured ? "#fff" : "brand.300"}
                  fontSize={{ sm: "xs", md: "sm" }}
                  fontWeight='500'>
                  Featured
                </Text>
              </Flex>
            </Tab>
            <Tab
              p='0px'
              border='none'
              boxShadow='none'
              _focus='none'
              _active='none'
              onClick={() =>
                setTab({
                  apps: false,
                  featured: false,
                  memberships: true,
                  extensions: false,
                })
              }>
              <Flex
                justify='center'
                align='center'
                borderRadius='70px'
                bg={tab.memberships ? "brand.300" : "#F6F8FD"}
                p={{ sm: "22px 32px", md: "22px 40px" }}
                transition='all .25s ease'
                _hover={{ bg: tab.memberships ? null : "gray.100" }}>
                <Text
                  color={tab.memberships ? "#fff" : "brand.300"}
                  fontSize={{ sm: "xs", md: "sm" }}
                  fontWeight='500'>
                  Memberships
                </Text>
              </Flex>
            </Tab>
            <Tab
              p='0px'
              border='none'
              boxShadow='none'
              _focus='none'
              _active='none'
              onClick={() =>
                setTab({
                  apps: false,
                  featured: false,
                  memberships: false,
                  extensions: true,
                })
              }>
              <Flex
                justify='center'
                align='center'
                borderRadius='70px'
                bg={tab.extensions ? "brand.300" : "#F6F8FD"}
                p={{ sm: "22px 32px", md: "22px 40px" }}
                transition='all .25s ease'
                _hover={{ bg: tab.extensions ? null : "gray.100" }}>
                <Text
                  color={tab.extensions ? "#fff" : "brand.300"}
                  fontSize={{ sm: "xs", md: "sm" }}
                  fontWeight='500'>
                  Extensions
                </Text>
              </Flex>
            </Tab>
          </Grid>
          <TabPanels>
            <TabPanel p='0px'>
              <AppList apps={apps} />
            </TabPanel>
            <TabPanel p='0px'>
              <AppList apps={apps} />
            </TabPanel>
            <TabPanel p='0px'>
              <AppList apps={apps} />
            </TabPanel>
            <TabPanel p='0px'>
              <AppList apps={apps} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Layout>
  );
};

export default Apps;
