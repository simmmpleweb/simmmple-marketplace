import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Image,
  Input,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import "assets/css/Contact.css";
import simmmple3D from "assets/img/contact/simmmple-3d.png";
import Card from "components/card/Card";
import IconBox from "components/icons/IconBox";
import {
  contactGeneral,
  contactOthers,
  contactPartnerships,
  contactSupport,
} from "components/icons/Icons";
import Layout from "components/layout/Layout";
import emailjs from "emailjs-com";
import React, { useRef, useState, useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Contact = () => {
  useEffect(() => {
    document.title =
      "Contact - Premium and Stunning UI Kits, Templates and Themes for developers, designers & startups @ Simmmple";
  }, []);

  const [tab, setTab] = useState({
    general: false,
    support: true,
    partnerships: false,
    others: false,
  });

  const [generalSubmission, setGeneralSubmission] = useState({
    form: true,
    submission: false,
  });

  const [supportSubmission, setSupportSubmission] = useState({
    form: true,
    submission: false,
    info: true,
  });

  const [partnershipsSubmission, setPartnershipsSubmission] = useState({
    form: true,
    submission: false,
  });

  const [othersSubmission, setOthersSubmission] = useState({
    form: true,
    submission: false,
  });

  const [general, setGeneral] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [support, setSupport] = useState({
    name: "",
    email: "",
    product: "",
    message: "",
  });

  const [partnerships, setPartnerships] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [others, setOthers] = useState({
    name: "",
    email: "",
    message: "",
  });

  const errorGeneral = useRef();
  const errorSupport = useRef();
  const errorPartnerships = useRef();
  const errorOthers = useRef();

  const handleGeneral = (e) => {
    e.preventDefault();
    if (general.name === "") {
      e.target[0].style.border = "1px solid red";
      errorGeneral.current.style.display = "flex";
      e.target.children[0].children[1].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[0].style.border = "1px solid rgb(226, 232, 240)";
        errorGeneral.current.style.display = "none";
        e.target.children[0].children[1].lastChild.style.display = "none";
      }, 3000);
    }
    if (general.email === "") {
      e.target[1].style.border = "1px solid red";
      errorGeneral.current.style.display = "flex";
      e.target.children[0].children[2].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[1].style.border = "1px solid rgb(226, 232, 240)";
        errorGeneral.current.style.display = "none";
        e.target.children[0].children[2].lastChild.style.display = "none";
      }, 3000);
    }
    if (general.message === "") {
      e.target[2].style.border = "1px solid red";
      errorGeneral.current.style.display = "flex";
      e.target.children[0].children[3].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[2].style.border = "1px solid rgb(226, 232, 240)";
        errorGeneral.current.style.display = "none";
        e.target.children[0].children[3].lastChild.style.display = "none";
      }, 3000);
    } else {
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      setGeneral({
        name: "",
        email: "",
        message: "",
      });
      setGeneralSubmission({
        form: false,
        submission: true,
      });
    }
  };

  const sendEmailGeneral = (e) => {
    e.preventDefault();

    if (general.name === "") {
      e.target[0].style.border = "1px solid red";
      errorGeneral.current.style.display = "flex";
      e.target.children[0].children[1].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[0].style.border = "1px solid rgb(226, 232, 240)";
        errorGeneral.current.style.display = "none";
        e.target.children[0].children[1].lastChild.style.display = "none";
      }, 3000);
    }
    if (general.email === "") {
      e.target[1].style.border = "1px solid red";
      errorGeneral.current.style.display = "flex";
      e.target.children[0].children[2].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[1].style.border = "1px solid rgb(226, 232, 240)";
        errorGeneral.current.style.display = "none";
        e.target.children[0].children[2].lastChild.style.display = "none";
      }, 3000);
    }
    if (general.message === "") {
      e.target[2].style.border = "1px solid red";
      errorGeneral.current.style.display = "flex";
      e.target.children[0].children[3].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[2].style.border = "1px solid rgb(226, 232, 240)";
        errorGeneral.current.style.display = "none";
        e.target.children[0].children[3].lastChild.style.display = "none";
      }, 3000);
    } else {
      emailjs
        .sendForm(
          "service_fgtpoes",
          "template_zd2vm7y",
          e.target,
          "user_k7KuO8YRz6mDjeGJgmZOP"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      setGeneral({
        name: "",
        email: "",
        message: "",
      });
      setGeneralSubmission({
        form: false,
        submission: true,
      });
    }
  };

  const sendEmailSupport = (e) => {
    e.preventDefault();

    if (support.name === "") {
      e.target[0].style.border = "1px solid red";
      errorGeneral.current.style.display = "flex";
      e.target.children[0].children[1].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[0].style.border = "1px solid rgb(226, 232, 240)";
        errorGeneral.current.style.display = "none";
        e.target.children[0].children[1].lastChild.style.display = "none";
      }, 3000);
    }
    if (support.email === "") {
      e.target[1].style.border = "1px solid red";
      errorSupport.current.style.display = "flex";
      e.target.children[0].children[2].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[1].style.border = "1px solid rgb(226, 232, 240)";
        errorSupport.current.style.display = "none";
        e.target.children[0].children[2].lastChild.style.display = "none";
      }, 3000);
    }
    if (support.product === "") {
      e.target[2].parentNode.parentNode.style.border = "1px solid red";
      errorSupport.current.style.display = "flex";
      e.target.children[0].children[3].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[2].parentNode.parentNode.style.border =
          "1px solid rgb(226, 232, 240)";
        errorSupport.current.style.display = "none";
        e.target.children[0].children[3].lastChild.style.display = "none";
      }, 3000);
    }
    if (support.message === "") {
      e.target[3].style.border = "1px solid red";
      errorSupport.current.style.display = "flex";
      e.target.children[0].children[4].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[3].style.border = "1px solid rgb(226, 232, 240)";
        errorSupport.current.style.display = "none";
        e.target.children[0].children[4].lastChild.style.display = "none";
      }, 3000);
    } else {
      emailjs
        .sendForm(
          "service_fgtpoes",
          "template_5apgvsk",
          e.target,
          "user_k7KuO8YRz6mDjeGJgmZOP"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      e.target[3].value = "";
      setSupport({
        name: "",
        email: "",
        product: "",
        message: "",
      });
      setSupportSubmission({
        form: false,
        submission: true,
        info: false,
      });
    }
  };

  const sendEmailPartnerships = (e) => {
    e.preventDefault();

    if (partnerships.name === "") {
      e.target[0].style.border = "1px solid red";
      errorPartnerships.current.style.display = "flex";
      e.target.children[0].children[1].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[0].style.border = "1px solid rgb(226, 232, 240)";
        errorPartnerships.current.style.display = "none";
        e.target.children[0].children[1].lastChild.style.display = "none";
      }, 3000);
    }
    if (partnerships.email === "") {
      e.target[1].style.border = "1px solid red";
      errorPartnerships.current.style.display = "flex";
      e.target.children[0].children[2].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[1].style.border = "1px solid rgb(226, 232, 240)";
        errorPartnerships.current.style.display = "none";
        e.target.children[0].children[2].lastChild.style.display = "none";
      }, 3000);
    }
    if (partnerships.message === "") {
      e.target[3].style.border = "1px solid red";
      errorPartnerships.current.style.display = "flex";
      e.target.children[0].children[4].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[3].style.border = "1px solid rgb(226, 232, 240)";
        errorPartnerships.current.style.display = "none";
        e.target.children[0].children[4].lastChild.style.display = "none";
      }, 3000);
    } else {
      emailjs
        .sendForm(
          "service_fgtpoes",
          "template_zd2vm7y",
          e.target,
          "user_k7KuO8YRz6mDjeGJgmZOP"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      e.target[3].value = "";
      setPartnerships({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      setPartnershipsSubmission({
        form: false,
        submission: true,
      });
    }
  };

  const sendEmailOthers = (e) => {
    e.preventDefault();
    if (others.name === "") {
      e.target[0].style.border = "1px solid red";
      errorOthers.current.style.display = "flex";
      e.target.children[0].children[1].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[0].style.border = "1px solid rgb(226, 232, 240)";
        errorOthers.current.style.display = "none";
        e.target.children[0].children[1].lastChild.style.display = "none";
      }, 3000);
    }
    if (others.email === "") {
      e.target[1].style.border = "1px solid red";
      errorOthers.current.style.display = "flex";
      e.target.children[0].children[2].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[1].style.border = "1px solid rgb(226, 232, 240)";
        errorOthers.current.style.display = "none";
        e.target.children[0].children[2].lastChild.style.display = "none";
      }, 3000);
    }
    if (others.message === "") {
      e.target[2].style.border = "1px solid red";
      errorOthers.current.style.display = "flex";
      e.target.children[0].children[3].lastChild.style.display = "block";
      setTimeout(() => {
        e.target[2].style.border = "1px solid rgb(226, 232, 240)";
        errorOthers.current.style.display = "none";
        e.target.children[0].children[3].lastChild.style.display = "none";
      }, 3000);
    } else {
      emailjs
        .sendForm(
          "service_fgtpoes",
          "template_zd2vm7y",
          e.target,
          "user_k7KuO8YRz6mDjeGJgmZOP"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      setOthers({
        name: "",
        email: "",
        message: "",
      });
      setOthersSubmission({
        form: false,
        submission: true,
      });
    }
  };

  return (
    <Layout>
      <Flex minH='1500px' pt='100px' pb='200px' w='100%' bg='#FAFCFE'>
        <Box
          position='absolute'
          w='586px'
          h='604px'
          right='0'
          top='280px'
          display={{ sm: "none", xl: "block" }}>
          <Image src={simmmple3D} />
        </Box>
        <Flex
          direction='column'
          w={{ sm: "325px", md: "90%", lg: "100%", xl: "1170px" }}
          mx='auto'
          align='center'>
          <Flex direction='column' textAlign='center' align='center' mb='100px'>
            <Text
              color='brand.300'
              fontSize='sm'
              fontWeight='bold'
              mb='20px'
              letterSpacing='2px'>
              GET IN TOUCH
            </Text>
            <Text
              color='brand.700'
              fontSize={{ sm: "42px", md: "56px" }}
              fontWeight='bold'
              mb='20px'>
              How can we help you?
            </Text>
            <Text
              color='#878CBD'
              fontSize='lg'
              fontWeight='normal'
              lineHeight='38px'>
              We’re here to help and answer any question you might have.
              <br /> We look forward to hearing from you.
            </Text>
          </Flex>
          <Card
            p={{ sm: "22px", lg: "50px 96px" }}
            w={{ sm: "325px", md: "90%", lg: "780px" }}>
            <Tabs defaultIndex={1}>
              <TabList border='none' mb='50px'>
                <Stack
                  direction='row'
                  flexWrap={{ sm: "wrap", lg: "nowrap" }}
                  spacing={{ sm: "10px", lg: "22px" }}
                  justify='center'
                  py={{ sm: "10px" }}
                  align='center'
                  bg='#F6F8FD'
                  borderRadius='30px'
                  w='100%'>
                  <Tab
                    boxShadow='none'
                    _focus='none'
                    _active='none'
                    border='none'
                    px='8px'
                    onClick={() =>
                      setTab({
                        general: true,
                        support: false,
                        partnerships: false,
                        others: false,
                      })
                    }>
                    <Button
                      bg={tab.general ? "#fff" : "none"}
                      boxShadow={
                        tab.general
                          ? "0px 43px 113px -9px rgba(112, 144, 176, 0.52)"
                          : null
                      }
                      _hover={{
                        bg: "white",
                      }}
                      _active={{
                        bg: "white",
                      }}
                      borderRadius='30px'
                      transition='all .3s ease'
                      p='24px'>
                      <Text color='brand.300' fontSize='sm' fontWeight='500'>
                        General
                      </Text>
                    </Button>
                  </Tab>
                  <Tab
                    _focus='none'
                    _active='none'
                    border='none'
                    px='8px'
                    onClick={() =>
                      setTab({
                        general: false,
                        support: true,
                        partnerships: false,
                        others: false,
                      })
                    }>
                    <Button
                      bg={tab.support ? "#fff" : "none"}
                      boxShadow={
                        tab.support
                          ? "0px 43px 113px -9px rgba(112, 144, 176, 0.52)"
                          : null
                      }
                      _hover={{
                        bg: "white",
                      }}
                      _active={{
                        bg: "white",
                      }}
                      borderRadius='30px'
                      transition='all .3s ease'
                      p='24px'>
                      <Text color='brand.300' fontSize='sm' fontWeight='500'>
                        Support
                      </Text>
                    </Button>
                  </Tab>
                  <Tab
                    _focus='none'
                    _active='none'
                    border='none'
                    px='8px'
                    onClick={() =>
                      setTab({
                        general: false,
                        support: false,
                        partnerships: true,
                        others: false,
                      })
                    }>
                    <Button
                      bg={tab.partnerships ? "#fff" : "none"}
                      boxShadow={
                        tab.partnerships
                          ? "0px 43px 113px -9px rgba(112, 144, 176, 0.52)"
                          : null
                      }
                      _hover={{
                        bg: "white",
                      }}
                      _active={{
                        bg: "white",
                      }}
                      borderRadius='30px'
                      p='24px 32px'>
                      <Text color='brand.300' fontSize='sm' fontWeight='500'>
                        Partnerships
                      </Text>
                    </Button>
                  </Tab>
                  <Tab
                    _focus='none'
                    _active='none'
                    border='none'
                    px='8px'
                    onClick={() =>
                      setTab({
                        general: false,
                        support: false,
                        partnerships: false,
                        others: true,
                      })
                    }>
                    <Button
                      bg={tab.others ? "#fff" : "none"}
                      boxShadow={
                        tab.others
                          ? "0px 43px 113px -9px rgba(112, 144, 176, 0.52)"
                          : null
                      }
                      _hover={{
                        bg: "white",
                      }}
                      _active={{
                        bg: "white",
                      }}
                      borderRadius='30px'
                      p='24px 32px'>
                      <Text color='brand.300' fontSize='sm' fontWeight='500'>
                        Others
                      </Text>
                    </Button>
                  </Tab>
                </Stack>
              </TabList>

              <TabPanels>
                <TabPanel p='0px'>
                  <Flex direction='column' align='center' textAlign='center'>
                    <IconBox
                      w='110px'
                      h='110px'
                      bg='#F6F8FD'
                      borderRadius='50%'
                      mb='20px'>
                      <Icon as={contactGeneral} w='35px' h='35px' />
                    </IconBox>
                    <Text
                      color='brand.700'
                      fontSize={{ sm: "26px", lg: "40px" }}
                      fontWeight='bold'
                      mb='20px'>
                      General Contact
                    </Text>
                    <Text
                      color='#878CBD'
                      fontSize='lg'
                      fontWeight='normal'
                      maxW={{ md: "65%" }}
                      lineHeight='40px'
                      mb='36px'>
                      Have some feedback or a general question? Get in touch
                      with us below 👋!
                    </Text>
                    <form onSubmit={sendEmailGeneral}>
                      <Flex
                        direction='column'
                        display={generalSubmission.form ? "block" : "none"}>
                        <Flex
                          display='none'
                          ref={errorGeneral}
                          align='center'
                          justify='center'
                          bg='#FFE4E4'
                          borderRadius='16px'
                          minH='56px'
                          p={{ sm: "12px", md: "0px" }}
                          mb='40px'
                          fontSize={{ sm: "sm", md: "md" }}>
                          <Text color='red.500' fontWeight='500'>
                            One or more fields have an error. Please check and
                            try again!
                          </Text>
                        </Flex>
                        <FormControl mb='18px'>
                          <FormLabel
                            htmlFor='name'
                            color='brand.700'
                            fontWeight='500'
                            mb='12px'>
                            Name*
                          </FormLabel>
                          <Input
                            border='1px solid #E0E5F2'
                            borderColor='#E0E5F2 !important'
                            fontSize={{ sm: "sm", md: "md" }}
                            id='name'
                            placeholder='Enter your name'
                            borderRadius='30px'
                            _placeholder={{ color: "#878CBD" }}
                            p='26px 32px'
                            mb='12px'
                            name='name'
                            onChange={(e) =>
                              setGeneral({ ...general, name: e.target.value })
                            }
                          />
                          <Text
                            display='none'
                            color='red.500'
                            fontSize='sm'
                            fontWeight='500'
                            textAlign='start'>
                            The name field is required.
                          </Text>
                        </FormControl>
                        <FormControl mb='18px'>
                          <FormLabel
                            htmlFor='email'
                            color='brand.700'
                            fontWeight='500'
                            mb='12px'>
                            Email*
                          </FormLabel>
                          <Input
                            border='1px solid #E0E5F2'
                            borderColor='#E0E5F2 !important'
                            fontSize={{ sm: "sm", md: "md" }}
                            id='email'
                            type='email'
                            placeholder='Enter your email address'
                            borderRadius='30px'
                            _placeholder={{ color: "#878CBD" }}
                            p='26px 32px'
                            mb='12px'
                            name='email'
                            onChange={(e) =>
                              setGeneral({ ...general, email: e.target.value })
                            }
                          />
                          <Text
                            display='none'
                            color='red.500'
                            fontSize='sm'
                            fontWeight='500'
                            textAlign='start'
                            mb='26px'>
                            The email field is required.
                          </Text>
                        </FormControl>
                        <FormControl mb='18px'>
                          <FormLabel
                            htmlFor='textarea'
                            color='brand.700'
                            fontWeight='500'
                            mb='12px'>
                            Message*
                          </FormLabel>
                          <Textarea
                            border='1px solid #E0E5F2'
                            borderColor='#E0E5F2 !important'
                            fontSize={{ sm: "sm", md: "md" }}
                            id='textarea'
                            placeholder='Your message'
                            mb='18px'
                            borderRadius='30px'
                            _placeholder={{ color: "#878CBD" }}
                            p='26px 32px'
                            minH='210px'
                            name='message'
                            onChange={(e) =>
                              setGeneral({
                                ...general,
                                message: e.target.value,
                              })
                            }
                          />
                          <Text
                            display='none'
                            color='red.500'
                            fontSize='sm'
                            fontWeight='500'
                            textAlign='start'
                            mb='26px'>
                            The message field is required.
                          </Text>
                        </FormControl>
                        <Button
                          bg='brand.300'
                          type='submit'
                          w='100%'
                          _hover={{ bg: "#1A05B7" }}
                          _active={{ bg: "#1A05B7" }}
                          minH='56px'
                          mt='50px'>
                          <Text color='#fff' fontSize='sm' fontWeight='500'>
                            Send Message
                          </Text>
                        </Button>
                      </Flex>
                    </form>

                    <Flex
                      align='center'
                      mt='14px'
                      justify='center'
                      w='100%'
                      borderRadius='16px'
                      p={{ sm: "12px" }}
                      bg='#ECE9FF'
                      minH='56px'
                      display={generalSubmission.submission ? "flex" : "none"}>
                      <Text color='brand.300' fontWeight='500'>
                        Thank you! Your submission has been received!
                      </Text>
                    </Flex>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex direction='column' align='center' textAlign='center'>
                    <IconBox
                      w='110px'
                      h='110px'
                      bg='#FFF6E5'
                      borderRadius='50%'
                      mb='20px'>
                      <Icon as={contactSupport} w='35px' h='35px' />
                    </IconBox>
                    <Text
                      color='brand.700'
                      fontSize={{ sm: "26px", lg: "40px" }}
                      fontWeight='bold'
                      mb='20px'>
                      Premium Support
                    </Text>
                    <Text
                      color='#878CBD'
                      fontSize='lg'
                      fontWeight='normal'
                      maxW={{ lg: "80%" }}
                      lineHeight='40px'
                      mb='36px'>
                      Have a question related to our{" "}
                      <Text as='span' color='#2D396B' fontWeight='500'>
                        UI Kits, Themes
                      </Text>{" "}
                      and other{" "}
                      <Text as='span' color='#2D396B' fontWeight='500'>
                        Premium Products?
                      </Text>{" "}
                      Please let us know below!
                    </Text>
                    <form onSubmit={sendEmailSupport}>
                      <Flex
                        direction='column'
                        w='100%'
                        display={supportSubmission.form ? "block" : "none"}>
                        <Flex
                          display='none'
                          ref={errorSupport}
                          align='center'
                          justify='center'
                          bg='#FFE4E4'
                          borderRadius='16px'
                          minH='56px'
                          fontSize={{ sm: "sm", md: "md" }}
                          p={{ sm: "12px", md: "0px" }}
                          mb='40px'>
                          <Text color='red.500' fontWeight='500'>
                            One or more fields have an error. Please check and
                            try again!
                          </Text>
                        </Flex>
                        <FormControl mb='18px'>
                          <FormLabel
                            htmlFor='name-support'
                            color='brand.700'
                            fontWeight='500'
                            mb='12px'>
                            Name*
                          </FormLabel>
                          <Input
                            border='1px solid #E0E5F2'
                            borderColor='#E0E5F2 !important'
                            fontSize={{ sm: "sm", md: "md" }}
                            id='name-support'
                            placeholder='Enter your name'
                            borderRadius='30px'
                            _placeholder={{ color: "#878CBD" }}
                            p='26px 32px'
                            mb='12px'
                            name='name'
                            onChange={(e) =>
                              setSupport({ ...support, name: e.target.value })
                            }
                          />
                          <Text
                            display='none'
                            color='red.500'
                            fontSize='sm'
                            fontWeight='500'
                            textAlign='start'
                            mb='26px'>
                            The name field is required.
                          </Text>
                        </FormControl>
                        <FormControl mb='18px'>
                          <FormLabel
                            htmlFor='email-support'
                            color='brand.700'
                            fontWeight='500'
                            mb='12px'>
                            Email*
                          </FormLabel>
                          <Input
                            border='1px solid #E0E5F2'
                            borderColor='#E0E5F2 !important'
                            fontSize={{ sm: "sm", md: "md" }}
                            id='email-support'
                            type='email'
                            placeholder='Enter your email address'
                            borderRadius='30px'
                            _placeholder={{ color: "#878CBD" }}
                            p='26px 32px'
                            mb='12px'
                            name='email'
                            onChange={(e) =>
                              setSupport({ ...support, email: e.target.value })
                            }
                          />
                          <Text
                            display='none'
                            color='red.500'
                            fontSize='sm'
                            fontWeight='500'
                            textAlign='start'
                            mb='26px'>
                            The email field is required.
                          </Text>
                        </FormControl>
                        <FormControl mb='18px'>
                          <FormLabel
                            htmlFor='product-support'
                            color='brand.700'
                            fontWeight='500'
                            mb='12px'>
                            Product*
                          </FormLabel>
                          <Flex
                            align='center'
                            px='16px'
                            borderRadius='30px'
                            border='1px solid rgb(226, 232, 240)'
                            h='70px'
                            mb='12px'>
                            <Select
                              fontSize={{ sm: "sm", md: "md" }}
                              id='product-support'
                              _focus='none'
                              placeholder='Select Product'
                              border='none'
                              h='100%'
                              color='#878CBD'
                              _placeholder={{ color: "#878CBD" }}
                              size='lg'
                              name='product'
                              onChange={(e) =>
                                setSupport({
                                  ...support,
                                  product: e.target.value,
                                })
                              }>
                              <option value='Purity UI Dashboard PRO'>
                                Purity UI Dashboard PRO
                              </option>
                              <option value='Purity UI Dashboard Free'>
                                Purity UI Dashboard Free
                              </option>
                              <option value='Venus Design System PRO'>
                                Venus Design System PRO
                              </option>
                              <option value='Venus Design System Free'>
                                Venus Design System Free
                              </option>
                              <option value='Venus Dashboard Builder PRO'>
                                Venus Dashboard Builder PRO
                              </option>
                              <option value='Venus Dashboard Builder Free'>
                                Venus Dashboard Builder Free
                              </option>
                              <option value='Uranus Wireframe Kit PRO'>
                                Uranus Wireframe Kit PRO
                              </option>
                              <option value='Uranus Wireframe Kit Demo'>
                                Uranus Wireframe Kit Demo
                              </option>
                              <option value='Glassy - Trendy Glassmorphism Cards'>
                                Glassy - Trendy Glassmorphism Cards
                              </option>
                              <option value='Task List UI - React App'>
                                Task List UI - React App
                              </option>
                              <option value='Saturn - UI Kit Headers'>
                                Saturn - UI Kit Headers
                              </option>
                            </Select>
                          </Flex>
                          <Text
                            display='none'
                            color='red.500'
                            fontSize='sm'
                            fontWeight='500'
                            textAlign='start'
                            mb='26px'>
                            You must choose a product.
                          </Text>
                        </FormControl>
                        <FormControl mb='18px'>
                          <FormLabel
                            htmlFor='textarea-support'
                            color='brand.700'
                            fontWeight='500'
                            mb='12px'>
                            Problem Description*
                          </FormLabel>
                          <Textarea
                            border='1px solid #E0E5F2'
                            borderColor='#E0E5F2 !important'
                            fontSize={{ sm: "sm", md: "md" }}
                            id='textarea-support'
                            placeholder='Your message'
                            borderRadius='30px'
                            _placeholder={{ color: "#878CBD" }}
                            p='26px 32px'
                            minH='210px'
                            mb='12px'
                            name='message'
                            onChange={(e) =>
                              setSupport({
                                ...support,
                                message: e.target.value,
                              })
                            }
                          />
                          <Text
                            display='none'
                            color='red.500'
                            fontSize='sm'
                            fontWeight='500'
                            textAlign='start'>
                            The message field is required.
                          </Text>
                        </FormControl>
                        <Button
                          bg='brand.300'
                          w='100%'
                          _hover={{ bg: "#1A05B7" }}
                          _active={{ bg: "#1A05B7" }}
                          minH='56px'
                          mt='50px'
                          type='submit'>
                          <Text color='#fff' fontSize='sm' fontWeight='500'>
                            Send Message
                          </Text>
                        </Button>
                      </Flex>
                    </form>
                    <Flex
                      align='center'
                      mt='14px'
                      justify='center'
                      w='100%'
                      borderRa
                      p={{ sm: "12px" }}
                      dius='16px'
                      bg='#ECE9FF'
                      borderRadius='30px'
                      minH='56px'
                      display={supportSubmission.submission ? "flex" : "none"}>
                      <Text color='brand.300' fontWeight='500'>
                        Thank you! Your submission has been received!
                      </Text>
                    </Flex>
                    <Flex
                      direction='column'
                      textAlign='center'
                      align='center'
                      mt='42px'
                      display={supportSubmission.info ? "flex" : "none"}>
                      <Flex align='center' mb='16px'>
                        <IconBox
                          w='34px'
                          h='34px'
                          bg='#fff'
                          boxShadow='0px 16px 18px rgba(112, 144, 176, 0.09)'
                          borderRadius='50%'
                          me='10px'>
                          <Icon
                            as={AiOutlineInfoCircle}
                            w='21px'
                            h='21px'
                            color='orange.500'
                          />
                        </IconBox>
                        <Text color='#878CBD' fontSize={{ sm: "sm", lg: "lg" }}>
                          Please{" "}
                          <Text as='span' color='gray.800' fontWeight='500'>
                            include as much detail as possible
                          </Text>{" "}
                          regarding your issue.
                        </Text>
                      </Flex>
                      <Flex align='center'>
                        <IconBox
                          w='34px'
                          h='34px'
                          bg='#fff'
                          boxShadow='0px 16px 18px rgba(112, 144, 176, 0.09)'
                          borderRadius='50%'
                          me='10px'>
                          <Icon
                            as={AiOutlineInfoCircle}
                            w='21px'
                            h='21px'
                            color='orange.500'
                          />
                        </IconBox>
                        <Text color='#878CBD' fontSize={{ sm: "sm", lg: "lg" }}>
                          Support has priority for{" "}
                          <Text as='span' color='gray.800' fontWeight='500'>
                            template & premium customers.
                          </Text>
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex direction='column' align='center' textAlign='center'>
                    <IconBox
                      w='110px'
                      h='110px'
                      bg='#FFEFEF'
                      borderRadius='50%'
                      mb='20px'>
                      <Icon as={contactPartnerships} w='35px' h='35px' />
                    </IconBox>
                    <Text
                      color='brand.700'
                      fontSize={{ sm: "26px", md: "40px" }}
                      fontWeight='bold'
                      mb='20px'>
                      Partnerships
                    </Text>
                    <Text
                      color='#878CBD'
                      fontSize='lg'
                      fontWeight='normal'
                      maxW={{ lg: "80%" }}
                      lineHeight='40px'
                      mb='36px'>
                      Have something interesting we should know about? Get in
                      touch with us below! 👋
                    </Text>
                    <form onSubmit={sendEmailPartnerships}>
                      <Flex
                        direction='column'
                        w='100%'
                        display={
                          partnershipsSubmission.form ? "block" : "none"
                        }>
                        <Flex
                          display='none'
                          ref={errorPartnerships}
                          align='center'
                          justify='center'
                          bg='#FFE4E4'
                          borderRadius='16px'
                          minH='56px'
                          fontSize={{ sm: "sm", md: "md" }}
                          mb='40px'>
                          <Text color='red.500' fontWeight='500'>
                            One or more fields have an error. Please check and
                            try again!
                          </Text>
                        </Flex>
                        <FormControl mb='18px'>
                          <FormLabel
                            htmlFor='name-partnerships'
                            color='brand.700'
                            fontWeight='500'
                            mb='12px'>
                            Name*
                          </FormLabel>
                          <Input
                            border='1px solid #E0E5F2'
                            borderColor='#E0E5F2 !important'
                            fontSize={{ sm: "sm", md: "md" }}
                            id='name-partnerships'
                            placeholder='Enter your name'
                            borderRadius='30px'
                            _placeholder={{ color: "#878CBD" }}
                            p='26px 32px'
                            mb='18px'
                            name='name'
                            onChange={(e) =>
                              setPartnerships({
                                ...partnerships,
                                name: e.target.value,
                              })
                            }
                          />
                          <Text
                            display='none'
                            color='red.500'
                            fontSize='sm'
                            fontWeight='500'
                            textAlign='start'
                            mb='26px'>
                            The name field is required.
                          </Text>
                        </FormControl>
                        <FormControl mb='18px'>
                          <FormLabel
                            htmlFor='email-partnerships'
                            color='brand.700'
                            fontWeight='500'
                            mb='12px'>
                            Email*
                          </FormLabel>
                          <Input
                            border='1px solid #E0E5F2'
                            borderColor='#E0E5F2 !important'
                            fontSize={{ sm: "sm", md: "md" }}
                            id='email-partnerships'
                            type='email'
                            placeholder='Enter your email address'
                            borderRadius='30px'
                            _placeholder={{ color: "#878CBD" }}
                            p='26px 32px'
                            mb='18px'
                            name='email'
                            onChange={(e) =>
                              setPartnerships({
                                ...partnerships,
                                email: e.target.value,
                              })
                            }
                          />
                          <Text
                            display='none'
                            color='red.500'
                            fontSize='sm'
                            fontWeight='500'
                            textAlign='start'
                            mb='26px'>
                            The email field is required.
                          </Text>
                        </FormControl>
                        <FormControl mb='18px'>
                          <FormLabel
                            htmlFor='company-partnerships'
                            color='brand.700'
                            fontWeight='500'
                            mb='12px'>
                            Company / Website
                          </FormLabel>
                          <Input
                            border='1px solid #E0E5F2'
                            borderColor='#E0E5F2 !important'
                            fontSize={{ sm: "sm", md: "md" }}
                            id='company-partnerships'
                            placeholder='Enter your email address'
                            borderRadius='30px'
                            _placeholder={{ color: "#878CBD" }}
                            p='26px 32px'
                            mb='18px'
                            onChange={(e) =>
                              setPartnerships({
                                ...partnerships,
                                company: e.target.value,
                              })
                            }
                          />
                        </FormControl>
                        <FormControl mb='18px'>
                          <FormLabel
                            htmlFor='textarea-partnerships'
                            color='brand.700'
                            fontWeight='500'
                            mb='12px'>
                            Message*
                          </FormLabel>
                          <Textarea
                            border='1px solid #E0E5F2'
                            borderColor='#E0E5F2 !important'
                            fontSize={{ sm: "sm", md: "md" }}
                            id='textarea-partnerships'
                            placeholder='Your message'
                            mb='50px'
                            borderRadius='30px'
                            name='message'
                            _placeholder={{ color: "#878CBD" }}
                            p='26px 32px'
                            minH='210px'
                            onChange={(e) =>
                              setPartnerships({
                                ...partnerships,
                                message: e.target.value,
                              })
                            }
                          />
                          <Text
                            display='none'
                            color='red.500'
                            fontSize='sm'
                            fontWeight='500'
                            textAlign='start'
                            mb='26px'>
                            The message field is required.
                          </Text>
                        </FormControl>
                        <Button
                          bg='brand.300'
                          w='100%'
                          type='submit'
                          _hover={{ bg: "#1A05B7" }}
                          _active={{ bg: "#1A05B7" }}
                          minH='56px'>
                          <Text color='#fff' fontSize='sm' fontWeight='500'>
                            Send Message
                          </Text>
                        </Button>
                      </Flex>
                    </form>
                    <Flex
                      align='center'
                      mt='14px'
                      justify='center'
                      w='100%'
                      borderRadius='16px'
                      bg='#ECE9FF'
                      minH='56px'
                      p={{ sm: "12px" }}
                      display={
                        partnershipsSubmission.submission ? "flex" : "none"
                      }>
                      <Text color='brand.300' fontWeight='500'>
                        Thank you! Your submission has been received!
                      </Text>
                    </Flex>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex direction='column' align='center' textAlign='center'>
                    <IconBox
                      w='110px'
                      h='110px'
                      bg='#F6F8FD'
                      borderRadius='50%'
                      mb='20px'>
                      <Icon as={contactOthers} w='35px' h='35px' />
                    </IconBox>
                    <Text
                      color='brand.700'
                      fontSize={{ sm: "26px", lg: "40px" }}
                      fontWeight='bold'
                      mb='20px'>
                      Others
                    </Text>
                    <Text
                      color='#878CBD'
                      fontSize='lg'
                      fontWeight='normal'
                      maxW={{ md: "55%" }}
                      lineHeight='40px'
                      mb='36px'>
                      Have some other things to say to us? Get in touch with us
                      below 👋!
                    </Text>
                    <form onSubmit={sendEmailOthers}>
                      <Flex
                        direction='column'
                        display={othersSubmission.form ? "block" : "none"}
                        w='100%'>
                        <Flex
                          display='none'
                          ref={errorOthers}
                          align='center'
                          justify='center'
                          bg='#FFE4E4'
                          borderRadius='16px'
                          minH='56px'
                          p={{ sm: "12px", md: "0px" }}
                          mb='40px'>
                          <Text
                            color='red.500'
                            fontWeight='500'
                            fontSize={{ sm: "sm", md: "md" }}>
                            One or more fields have an error. Please check and
                            try again!
                          </Text>
                        </Flex>
                        <FormControl mb='18px'>
                          <FormLabel
                            htmlFor='name'
                            color='brand.700'
                            fontWeight='500'
                            mb='12px'>
                            Name*
                          </FormLabel>
                          <Input
                            border='1px solid #E0E5F2'
                            borderColor='#E0E5F2 !important'
                            fontSize={{ sm: "sm", md: "md" }}
                            id='name'
                            placeholder='Enter your name'
                            borderRadius='30px'
                            _placeholder={{ color: "#878CBD" }}
                            p='26px 32px'
                            mb='12px'
                            name='name'
                            onChange={(e) =>
                              setOthers({ ...others, name: e.target.value })
                            }
                          />
                          <Text
                            display='none'
                            color='red.500'
                            fontSize='sm'
                            fontWeight='500'
                            textAlign='start'
                            mb='26px'>
                            The name field is required.
                          </Text>
                        </FormControl>
                        <FormControl mb='18px'>
                          <FormLabel
                            htmlFor='email'
                            color='brand.700'
                            fontWeight='500'
                            mb='12px'>
                            Email*
                          </FormLabel>
                          <Input
                            border='1px solid #E0E5F2'
                            borderColor='#E0E5F2 !important'
                            fontSize={{ sm: "sm", md: "md" }}
                            id='email'
                            type='email'
                            placeholder='Enter your email address'
                            borderRadius='30px'
                            _placeholder={{ color: "#878CBD" }}
                            p='26px 32px'
                            name='email'
                            mb='12px'
                            onChange={(e) =>
                              setOthers({ ...others, email: e.target.value })
                            }
                          />
                          <Text
                            display='none'
                            color='red.500'
                            fontSize='sm'
                            fontWeight='500'
                            textAlign='start'
                            mb='26px'>
                            The email field is required.
                          </Text>
                        </FormControl>
                        <FormControl mb='18px'>
                          <FormLabel
                            htmlFor='textarea'
                            color='brand.700'
                            fontWeight='500'
                            mb='12px'>
                            Message*
                          </FormLabel>
                          <Textarea
                            border='1px solid #E0E5F2'
                            borderColor='#E0E5F2 !important'
                            fontSize={{ sm: "sm", md: "md" }}
                            id='textarea'
                            placeholder='Your message'
                            mb='18px'
                            borderRadius='30px'
                            name='message'
                            _placeholder={{ color: "#878CBD" }}
                            p='26px 32px'
                            minH='210px'
                            onChange={(e) =>
                              setOthers({
                                ...others,
                                message: e.target.value,
                              })
                            }
                          />
                          <Text
                            display='none'
                            color='red.500'
                            fontSize='sm'
                            fontWeight='500'
                            textAlign='start'
                            mb='26px'>
                            The message field is required.
                          </Text>
                        </FormControl>
                        <Button
                          bg='brand.300'
                          type='submit'
                          w='100%'
                          _hover={{ bg: "#1A05B7" }}
                          _active={{ bg: "#1A05B7" }}
                          minH='56px'
                          mt='50px'>
                          <Text color='#fff' fontSize='sm' fontWeight='500'>
                            Send Message
                          </Text>
                        </Button>
                      </Flex>
                    </form>
                    <Flex
                      align='center'
                      mt='14px'
                      justify='center'
                      w='100%'
                      borderRadius='16px'
                      p={{ sm: "12px" }}
                      bg='#ECE9FF'
                      minH='56px'
                      display={othersSubmission.submission ? "flex" : "none"}>
                      <Text color='brand.300' fontWeight='500'>
                        Thank you! Your submission has been received!
                      </Text>
                    </Flex>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Card>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Contact;
