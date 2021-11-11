import {
  Button,
  Flex,
  FormControl,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import "assets/css/App.css";
import "assets/css/Templates.css";
import templatesBg from "assets/img/templates/templates-background.png";
import { SearchIcon } from "components/icons/Icons";
import Layout from "components/layout/Layout";
import ProductList from "components/products/ProductList";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { templatesProducts } from "variables/templates";

const Templates = (props) => {
  const [activeTab, setActiveTab] = useState({});
  const [activeSort, setActiveSort] = useState("Most Recent");
  const [activeTitle, setActiveTitle] = useState(() => {
    if (window.location.href.includes("/all-templates")) {
      return "All Templates & Themes";
    } else if (window.location.href.includes("/admin-dashboards")) {
      return "Admin & Dashboards";
    } else if (window.location.href.includes("/ui-kits")) {
      return "UI Kits";
    } else if (window.location.href.includes("/free-templates")) {
      return "Free Templates";
    } else if (window.location.href.includes("/premium-templates")) {
      return "Premium Templates";
    } else if (window.location.href.includes("/figma")) {
      return "Figma Products";
    } else if (window.location.href.includes("/react")) {
      return "React Products";
    } else if (window.location.href.includes("/bootstrap")) {
      return "Bootstrap Products";
    }
  });

  useEffect(() => {
    document.title =
      "Templates - Premium and Stunning UI Kits, Templates and Themes for developers, designers & startups @ Simmmple";
  }, []);

  useEffect(() => {
    if (window.location.href.includes("/all-templates")) {
      setActiveTab({
        all: true,
        admin: false,
        ui: false,
        free: false,
        premium: false,
        figma: false,
        react: false,
        bootstrap: false,
      });
      setActiveTitle("All Templates & Themes");
    } else if (window.location.href.includes("/admin-dashboards")) {
      setActiveTab({
        all: false,
        admin: true,
        ui: false,
        free: false,
        premium: false,
        figma: false,
        react: false,
        bootstrap: false,
      });
      setActiveTitle("Admin & Dashboards");
    } else if (window.location.href.includes("/ui-kits")) {
      setActiveTab({
        all: false,
        admin: false,
        ui: true,
        free: false,
        premium: false,
        figma: false,
        react: false,
        bootstrap: false,
      });
      setActiveTitle("UI Kits");
    } else if (window.location.href.includes("/free-templates")) {
      setActiveTab({
        all: false,
        admin: false,
        ui: false,
        free: true,
        premium: false,
        figma: false,
        react: false,
        bootstrap: false,
      });
      setActiveTitle("Free Templates");
    } else if (window.location.href.includes("/premium-templates")) {
      setActiveTab({
        all: false,
        admin: false,
        ui: false,
        free: false,
        premium: true,
        figma: false,
        react: false,
        bootstrap: false,
      });
      setActiveTitle("Premium Templates");
    } else if (window.location.href.includes("/figma")) {
      setActiveTab({
        all: false,
        admin: false,
        ui: false,
        free: false,
        premium: false,
        figma: true,
        react: false,
        bootstrap: false,
      });
      setActiveTitle("Figma Products");
    } else if (window.location.href.includes("/react")) {
      setActiveTab({
        all: false,
        admin: false,
        ui: false,
        free: false,
        premium: false,
        figma: false,
        react: true,
        bootstrap: false,
      });
      setActiveTitle("React Products");
    } else if (window.location.href.includes("/bootstrap")) {
      setActiveTab({
        all: false,
        admin: false,
        ui: false,
        free: false,
        premium: false,
        figma: false,
        react: false,
        bootstrap: true,
      });
      setActiveTitle("Bootstrap Products");
    }
  }, [window.location.href]);

  const sort = (type) => {
    const templateName = props.match.params.templateName;
    const templateProductsData = templateName.split("-").join("");

    let sortedProducts = [];

    if (type === "Price: low to high") {
      sortedProducts = templatesProducts[templateProductsData].sort(
        (product1, product2) => product1.price - product2.price
      );
    } else if (type === "Price: high to low") {
      sortedProducts = templatesProducts[templateProductsData].sort(
        (product1, product2) => product2.price - product1.price
      );
    } else if (type === "Most Recent") {
      sortedProducts = templatesProducts[templateProductsData].sort(
        (product1, product2) =>
          new Date(product2.date) - new Date(product1.date)
      );
    } else {
      sortedProducts = [];
    }
    // } else if (type === "Most Downloads") {
    //   sortedProducts = templatesProducts[templateProductsData].sort(
    //     (product1, product2) => product2.downloads - product1.downloads
    //   );
    // }

    return sortedProducts;
  };

  const history = useHistory();
  const inputValue = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.current.value === "") {
      history.push("/search/ ");
    } else {
      const urlParameter = inputValue.current.value.split(" ").join("-");
      history.push(`/search/${urlParameter}`);
    }
  };

  return (
    <Layout>
      <Flex direction='column' bg='#fff'>
        <Flex
          bgImage={templatesBg}
          bgSize='cover'
          minH={{ sm: "660px", lg: "760px" }}
          align='center'
          justify='center'>
          <Flex
            direction='column'
            w='1170px'
            mx='auto'
            align='center'
            justify='center'>
            <Text
              fontSize='xs'
              color='#fff'
              fontWeight='bold'
              mb='16px'
              letterSpacing='2px'>
              BUILD BETTER, BUILD FASTER
            </Text>
            <Text
              fontSize={{ sm: "34px", lg: "44px" }}
              color='#fff'
              fontWeight='bold'
              mb='20px'>
              UI Tools & Templates
            </Text>
            <Text
              fontWeight='normal'
              fontSize='16px'
              lineHeight='28px'
              textAlign='center'
              maxW={{ sm: "80%", lg: "55%" }}
              color='#fff'
              mb='64px'>
              Join over{" "}
              <Text as='span' fontWeight='bold'>
                10,000+ developers, designers & startups
              </Text>{" "}
              that use our digital solutions to quickly design and build
              responsive mobile-first websites and apps.
            </Text>
            <form onSubmit={handleSubmit}>
              <FormControl
                display='flex'
                justifyContent='center'
                alignItems='center'>
                <Flex
                  justify='space-between'
                  bg='#fff'
                  borderRadius='70px'
                  w={{ sm: "300px", lg: "470px" }}
                  h='70px'
                  p='22px 22px 22px 20px'
                  align='center'>
                  <Input
                    ref={inputValue}
                    placeholder='eg. Venus Design System'
                    boxShadow='none'
                    border='none'
                    _focus={{ border: "none" }}
                    _placeholder={{ color: "#878CBD" }}
                  />
                  <Button
                    type='submit'
                    boxShadow='none'
                    bg='transparent'
                    _hover='none'
                    _active='none'
                    p='0px'>
                    <SearchIcon w='18px' h='18px' color='#878CBD' />
                  </Button>
                </Flex>
              </FormControl>
            </form>
          </Flex>
        </Flex>
        <Flex
          direction='column'
          w={{ sm: "100%", lg: "980px", xl: "1170px" }}
          mx='auto'
          pb='200px'>
          <Flex
            align='center'
            bg='#fff'
            justify='center'
            w='100%'
            boxShadow='0px 18px 40px rgba(112, 144, 176, 0.12)'
            letterSpacing='-.5px'
            borderRadius={{ sm: "70px", lg: "30px" }}
            maxH={{ xl: "130px" }}
            maxW={{ sm: "350px", md: "97%", lg: "70%", xl: "100%" }}
            mx='auto'
            p={{ sm: "16px", xl: "36px" }}
            transform='translateY(-50%)'>
            <Stack
              direction='row'
              justify='center'
              align='center'
              spacing='10px'
              overflowX={{ sm: "scroll", lg: "hidden" }}
              mx="auto"
              flexWrap={{ lg: "wrap" }}>
              <NavLink to='/templates/all-templates'>
                <Flex
                  minW={{ sm: "135px", md: "150px", lg: "auto" }}
                  align='center'
                  mb={{ lg: "10px", xl: "0px" }}
                  ms={{ base: "835px", md: "560px", lg: "0px" }}
                  justify='center'
                  borderRadius='30px'
                  transition='all .25s ease'
                  bg={activeTab.all ? "#02044A" : "#fff"}
                  color={activeTab.all ? "#fff" : "#8F9BBA"}
                  border={activeTab.all ? "none" : "1px solid #E0E5F2"}
                  onClick={() => {
                    setActiveTab({
                      all: true,
                      admin: false,
                      ui: false,
                      free: false,
                      premium: false,
                      figma: false,
                      react: false,
                      bootstrap: false,
                    });
                    setActiveTitle("All Templates & Themes");
                  }}
                  p={{ sm: "20px 4px", lg: "20px 22px" }}>
                  <Text fontSize={{ sm: "xs", md: "sm" }} fontWeight='500'>
                    All Templates
                  </Text>
                </Flex>
              </NavLink>
              <NavLink to='/templates/admin-dashboards'>
                <Flex
                  minW={{ sm: "135px", md: "150px", lg: "auto" }}
                  mb={{ lg: "10px", xl: "0px" }}
                  align='center'
                  justify='center'
                  borderRadius='30px'
                  transition='all .25s ease'
                  bg={activeTab.admin ? "#02044A" : "#fff"}
                  color={activeTab.admin ? "#fff" : "#8F9BBA"}
                  border={activeTab.admin ? "none" : "1px solid #E0E5F2"}
                  onClick={() => {
                    setActiveTab({
                      all: false,
                      admin: true,
                      ui: false,
                      free: false,
                      premium: false,
                      figma: false,
                      react: false,
                      bootstrap: false,
                    });
                    setActiveTitle("Admin & Dashboards");
                  }}
                  p={{ sm: "20px 4px", lg: "20px 22px" }}>
                  <Text fontSize={{ sm: "xs", md: "sm" }} fontWeight='500'>
                    Admin & Dashboards
                  </Text>
                </Flex>
              </NavLink>
              <NavLink to='/templates/ui-kits'>
                <Flex
                  minW={{ sm: "135px", md: "150px", lg: "auto" }}
                  mb={{ lg: "10px", xl: "0px" }}
                  align='center'
                  justify='center'
                  borderRadius='30px'
                  transition='all .25s ease'
                  bg={activeTab.ui ? "#02044A" : "#fff"}
                  color={activeTab.ui ? "#fff" : "#8F9BBA"}
                  border={activeTab.ui ? "none" : "1px solid #E0E5F2"}
                  onClick={() => {
                    setActiveTab({
                      all: false,
                      admin: false,
                      ui: true,
                      free: false,
                      premium: false,
                      figma: false,
                      react: false,
                      bootstrap: false,
                    });
                    setActiveTitle("UI Kits");
                  }}
                  p={{ sm: "20px 4px", lg: "20px 30px" }}>
                  <Text fontSize={{ sm: "xs", md: "sm" }} fontWeight='500'>
                    UI Kits
                  </Text>
                </Flex>
              </NavLink>
              <NavLink to='/templates/free-templates'>
                <Flex
                  minW={{ sm: "135px", md: "150px", lg: "auto" }}
                  mb={{ lg: "10px", xl: "0px" }}
                  align='center'
                  justify='center'
                  borderRadius='30px'
                  transition='all .25s ease'
                  bg={activeTab.free ? "#02044A" : "#fff"}
                  color={activeTab.free ? "#fff" : "#8F9BBA"}
                  border={activeTab.free ? "none" : "1px solid #E0E5F2"}
                  onClick={() => {
                    setActiveTab({
                      all: false,
                      admin: false,
                      ui: false,
                      free: true,
                      premium: false,
                      figma: false,
                      react: false,
                      bootstrap: false,
                    });
                    setActiveTitle("Free templates");
                  }}
                  p={{ sm: "20px 4px", lg: "20px 22px" }}>
                  <Text fontSize={{ sm: "xs", md: "sm" }} fontWeight='500'>
                    Free Templates
                  </Text>
                </Flex>
              </NavLink>
              <NavLink to='/templates/premium-templates'>
                <Flex
                  minW={{ sm: "135px", md: "150px", lg: "auto" }}
                  align='center'
                  justify='center'
                  borderRadius='30px'
                  transition='all .25s ease'
                  bg={activeTab.premium ? "#02044A" : "#fff"}
                  color={activeTab.premium ? "#fff" : "#8F9BBA"}
                  border={activeTab.premium ? "none" : "1px solid #E0E5F2"}
                  onClick={() => {
                    setActiveTab({
                      all: false,
                      admin: false,
                      ui: false,
                      free: false,
                      premium: true,
                      figma: false,
                      react: false,
                      bootstrap: false,
                    });
                    setActiveTitle("Premium templates");
                  }}
                  p={{ sm: "20px 4px", lg: "20px 22px" }}>
                  <Text fontSize={{ sm: "xs", md: "sm" }} fontWeight='500'>
                    Premium Templates
                  </Text>
                </Flex>
              </NavLink>
              <NavLink to='/templates/figma'>
                <Flex
                  minW={{ sm: "135px", md: "150px", lg: "auto" }}
                  align='center'
                  justify='center'
                  borderRadius='30px'
                  transition='all .25s ease'
                  bg={activeTab.figma ? "#02044A" : "#fff"}
                  color={activeTab.figma ? "#fff" : "#8F9BBA"}
                  border={activeTab.figma ? "none" : "1px solid #E0E5F2"}
                  onClick={() => {
                    setActiveTab({
                      all: false,
                      admin: false,
                      ui: false,
                      free: false,
                      premium: false,
                      figma: true,
                      react: false,
                      bootstrap: false,
                    });
                    setActiveTitle("Figma Products");
                  }}
                  p={{ sm: "20px 4px", lg: "20px 26px" }}>
                  <Text fontSize={{ sm: "xs", md: "sm" }} fontWeight='500'>
                    Figma
                  </Text>
                </Flex>
              </NavLink>
              <NavLink to='/templates/react'>
                <Flex
                  minW={{ sm: "135px", md: "150px", lg: "auto" }}
                  align='center'
                  justify='center'
                  borderRadius='30px'
                  transition='all .25s ease'
                  bg={activeTab.react ? "#02044A" : "#fff"}
                  color={activeTab.react ? "#fff" : "#8F9BBA"}
                  border={activeTab.react ? "none" : "1px solid #E0E5F2"}
                  onClick={() => {
                    setActiveTab({
                      all: false,
                      admin: false,
                      ui: false,
                      free: false,
                      premium: false,
                      figma: false,
                      react: true,
                      bootstrap: false,
                    });
                    setActiveTitle("React Products");
                  }}
                  p={{ sm: "20px 4px", lg: "20px 24px" }}>
                  <Text fontSize={{ sm: "xs", md: "sm" }} fontWeight='500'>
                    ReactJS
                  </Text>
                </Flex>
              </NavLink>
              <NavLink to='/templates/bootstrap'>
                <Flex
                  minW={{ sm: "135px", md: "150px", lg: "auto" }}
                  align='center'
                  justify='center'
                  borderRadius='30px'
                  transition='all .25s ease'
                  bg={activeTab.bootstrap ? "#02044A" : "#fff"}
                  color={activeTab.bootstrap ? "#fff" : "#8F9BBA"}
                  border={activeTab.bootstrap ? "none" : "1px solid #E0E5F2"}
                  onClick={() => {
                    setActiveTab({
                      all: false,
                      admin: false,
                      ui: false,
                      free: false,
                      premium: false,
                      figma: false,
                      react: false,
                      bootstrap: true,
                    });
                    setActiveTitle("Bootstrap Products");
                  }}
                  p={{ sm: "20px 4px", lg: "20px 22px" }}>
                  <Text fontSize={{ sm: "xs", md: "sm" }} fontWeight='500'>
                    Bootstrap
                  </Text>
                </Flex>
              </NavLink>
            </Stack>
          </Flex>
          <Flex
            justify='space-between'
            direction={{ sm: "column", md: "row", lg: "row" }}
            mb={{ sm: "36px", md: "56px", lg: "88px" }}
            px={{ md: "18px" }}>
            <Flex direction='column' align={{ sm: "center", md: "start" }}>
              <Text
                color='brand.300'
                fontSize='xs'
                mb='16px'
                fontWeight='500'
                letterSpacing='2px'>
                OUR DIGITAL PRODUCTS
              </Text>
              <Text
                fontSize={{ sm: "24px", md: "34px" }}
                color='brand.700'
                fontWeight='500'>
                {activeTitle}
              </Text>
            </Flex>
            <Select
              maxW='160px'
              h='54px'
              alignSelf={{ sm: "center", lg: "flex-end" }}
              mt={{ sm: "32px", lg: "0px" }}
              color='brand.300'
              border='1px solid #E0E5F2'
              borderColor='#E0E5F2'
              _focus={{ boxShadow: "none" }}
              iconColor='gray.700'
              borderRadius='30px'
              display='flex'
              fontWeight='500'
              alignItems='center'
              justifyContent='center'
              cursor='pointer'
              onChange={(e) => setActiveSort(e.target.value)}>
              <option value='Most Recent'>Most Recent</option>
              <option value='Price: high to low'>Price: high to low</option>
              <option value='Price: low to high'>Price: low to high</option>
              {/* <option value='Most Downloads'>Most Downloads</option> */}
            </Select>
          </Flex>
          <ProductList products={sort(activeSort)} comingSoon={true} />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Templates;
