import { Button, Flex, ListItem, OrderedList, Text } from "@chakra-ui/react";
import Layout from "components/layout/Layout";
// Custom Components
import { HSeparator } from "components/separator/Separator";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Licenses = () => {
  useEffect(() => {
    document.title =
      "Licenses - Premium and Stunning UI Kits, Templates and Themes for developers, designers & startups @ Simmmple";
  }, []);

  return (
    <Layout>
      <Flex direction='column' overflowX='hidden' mb='100px'>
        <Flex
          pb='100px'
          direction='column'
          w='775px'
          maxW='100%'
          mx='auto'
          mt='150px'>
          {/* Mini Navbar */}
          <Flex
            bg='#F6F8FD'
            borderRadius='70px'
            w='582px'
            minH={{ base: "140px", md: "80px" }}
            mx='auto'
            mb='70px'
            justify='space-between'
            p='10px'
            px={{ base: "30px", md: "10px" }}
            maxW='95%'
            flexWrap={{ base: "wrap", md: "nowrap" }}>
            <NavLink to='/licenses'>
              <Button
                h='100%'
                justify='center'
                align='center'
                w='130px'
                borderRadius='30px'
                bg='white'
                _hover={{
                  bg: "white",
                }}
                _active={{
                  bg: "white",
                }}>
                <Text fontWeight='500' color='brand.300'>
                  License
                </Text>
              </Button>
            </NavLink>
            <NavLink to='/terms-of-service' color='brand.300'>
              <Button
                h='100%'
                justify='center'
                align='center'
                w='138px'
                borderRadius='30px'
                bg='transparent'
                _hover={{
                  bg: "white",
                }}
                _active={{
                  bg: "white",
                }}>
                <Text fontWeight='500' color='brand.300'>
                  Terms of Usage
                </Text>
              </Button>
            </NavLink>
            <NavLink to='/privacy-policy' color='brand.300'>
              <Button
                h='100%'
                justify='center'
                align='center'
                w='130px'
                borderRadius='30px'
                bg='transparent'
                _hover={{
                  bg: "white",
                }}
                _active={{
                  bg: "white",
                }}>
                <Text fontWeight='500' color='brand.300'>
                  Privacy Policy
                </Text>
              </Button>
            </NavLink>
            <NavLink to='/affiliates' color='brand.300'>
              <Button
                h='100%'
                justify='center'
                align='center'
                w='130px'
                borderRadius='30px'
                bg='transparent'
                _hover={{
                  bg: "white",
                }}
                _active={{
                  bg: "white",
                }}>
                <Text fontWeight='500' color='brand.300'>
                  Affiliates
                </Text>
              </Button>
            </NavLink>
          </Flex>
          {/* Main Section */}
          <Flex
            maxW='95%'
            boxShadow='75px 85px 113px 0px #7090B014'
            border='1px solid'
            borderColor='#E9EDF7'
            borderRadius='30px'
            flexDirection='column'
            w='774px'
            px='50px'
            mx='auto'
            pt='80px'
            pb='50px'>
            <Text
              fontSize='40px'
              fontWeight='700'
              textAlign='center'
              mx='auto'
              mb='50px'
              color='brand.700'>
              End User License Agreement
            </Text>
            <HSeparator w='100%' mb='40px' mx='auto' />
            {/* 1. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'>
              General
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='40px'>
              By using any Digital Work (
              <Text fontWeight='500' mx='3px' as='span'>
                Item
              </Text>
              ) from Simmmple (
              <Text fontWeight='500' mx='3px' as='span'>
                Simmmple Web LLC
              </Text>
              ), you agree that this End User License Agreement (EULA) is a
              legally binding and valid contract and agree to be bound by it.
              You agree to abide by the intellectual property laws and all of
              the terms and conditions of this Agreement.
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='40px'>
              If you do not agree to be bound by this agreement, remove any
              <Text fontWeight='500' mx='3px' as='span'>
                Item
              </Text>
              from your computer now and, if applicable, promptly return to
              Simmmple Web LLC by mail any copies of the Item and related
              documentation and packaging in your possession.
            </Text>

            {/* 2. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'>
              License Period
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='40px'>
              An
              <Text fontWeight='500' mx='3px' as='span'>
                Item’s
              </Text>
              License is for the life time. That means, once you buy it, you can
              use the license forever within the restrictions described in this
              document. Each License includes between 8-months and 1-year of
              Premium Support, upgrades and access to private repositories to
              follow source code changes when needed. Please check this term for
              each License and also read the FAQ for more details.
            </Text>
            {/* 3. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'>
              About the Source Code
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='40px'>
              Simmmple Web LLC sells the source code. So, you can completely
              change it based on your requirements. Our items use many
              libraries, which are free and open source. If you need the source
              code of any library, you can just get it from its repository. So,
              there is no hidden code in that manner.
            </Text>
            {/* 4. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'>
              Use of the License
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='40px'>
              Your license to use any of our Items is limited to the number of
              licenses purchased by you. You shall not allow others to use, copy
              or evaluate copies of our Items.
            </Text>
            <HSeparator w='100%' mb='40px' mx='auto' />
            {/* 5. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'>
              Freebies License
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='8px'>
              All our free items are Open Source and licensed under MIT.
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='8px'>
              MIT License
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='40px'>
              Copyright (c) 2021 Simmmple Web LLC
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='40px'>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='40px'>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='40px'>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </Text>
            {/* 6. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              Freebies License
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='8px'>
              All our free items are Open Source and licensed under MIT.
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='8px'>
              MIT License
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='40px'>
              Copyright (c) 2021 Simmmple Web LLC
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='40px'>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='40px'>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </Text>
            <Text
              fontSize='lg'
              lineHeight='34px'
              color='#878CBD'
              fontWeight='400'
              mb='40px'>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </Text>
            {/* 7. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              Freelancer License
              <Text fontWeight='500' ms='5px' fontSize='18px'>
                (Formerly known as Personal license)
              </Text>
            </Text>
            <OrderedList>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  The Freelancer License grants you, the purchaser, an ongoing,
                  non-exclusive, worldwide license to make use of the digital
                  work (
                  <Text fontWeight='500' mx='3px' as='span'>
                    Item
                  </Text>{" "}
                  ) you have selected. Read the rest of this license for the
                  details that apply to your use of the Item.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You are licensed to use the Item to create one single End
                  Product for yourself or for one client (a “single
                  application”), and the End Product can be distributed for
                  Free.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  An End Product is one of the following things, both requiring
                  an application of skill and effort.
                </Text>
              </ListItem>

              <Text
                ps='45px'
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                a. For an Item that is a template, the End Product is a
                customised implementation of the Item. For example: the item is
                a website template and the end product is the final website
                customised with your content.
              </Text>
              <Text
                ps='45px'
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                b. For other types of Item, an End Product is a work that
                incorporates the Item as well as other things, so that it is
                larger in scope and different in nature than the Item. For
                example: the item is an UI Kit and the end product is a website.
              </Text>

              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can create one End Product for a client, and you can
                  transfer that single End Product to your client for any fee.
                  This license is then transferred to your client.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can make any number of copies of the single End Product,
                  as long as the End Product is distributed for Free.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can modify or manipulate the Item. You can combine the
                  Item with other works and make a derivative work from it. The
                  resulting works are subject to the terms of this license. You
                  can do these things as long as the End Product you then create
                  is one that’s permitted under clause 3.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can’t Sell the End Product, except to one client. (If you
                  or your client want to Sell the End Product, you will need the
                  Extended License.)
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can’t re-distribute the Item as stock, in a tool or
                  template, or with source files. You can’t do this with an Item
                  either on its own or bundled with other items, and even if you
                  modify the Item. You can’t re-distribute or make available the
                  Item as-is or with superficial modifications.
                </Text>
              </ListItem>
              <Text
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                For example: You can’t purchase an HTML template, convert it to
                a WordPress theme and sell or give it to more than one client.
                You can’t license an item and then make it available as-is on
                your website for your users to download.
              </Text>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can’t use the Item in any application allowing an end user
                  to customise a digital or physical product to their specific
                  needs, such as an “on demand”, “made to order” or “build it
                  yourself” application. You can use the Item in this way only
                  if you purchase a separate license for each final product
                  incorporating the Item that is created using the application.
                </Text>
              </ListItem>
              <Text
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                For example: You can’t purchase an HTML template, convert it to
                a WordPress theme and sell or give it to more than one client.
                You can’t license an item and then make it available as-is on
                your website for your users to download.
              </Text>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You must not permit an end user of the End Product to extract
                  the Item and use it separately from the End Product.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can’t use an Item in a logo, trademark, or service mark.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  For some Items, a component of the Item will be sourced from
                  elsewhere and different license terms may apply to the
                  component, such as someone else’s license or an open source or
                  creative commons license. If so, you will find the component
                  identified in the Item’s description page or in the Item’s
                  downloaded files. The other license will apply to that
                  component instead of this license. This license will apply to
                  the rest of the Item.
                </Text>
              </ListItem>
              <Text
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                For example: A theme might contain images licensed under a
                Creative Commons CCBY license. The CCBY license applies to those
                specific images. This license applies to the rest of the theme.
              </Text>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can only use the Item for lawful purposes. Also, if an
                  Item contains an image of a person, even if the Item is
                  model-released you can’t use it in a way that creates a fake
                  identity, implies personal endorsement of a product by the
                  person, or in a way that is defamatory, obscene or demeaning,
                  or in connection with sensitive subjects.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  This license applies in conjunction with the
                  <NavLink to='/terms-of-service'>
                    <Text
                      textDecoration='underline'
                      color='brand.300'
                      fontWeight='500'
                      as='span'
                      mx='3px'>
                      Simmmple Terms and Conditions
                    </Text>
                  </NavLink>
                  {""}. If there is an inconsistency between this license and
                  the Terms and Conditions, this license will apply to the
                  extent necessary to resolve the inconsistency.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  This license can be terminated if you breach it. If that
                  happens, you must stop making copies of or distributing the
                  End Product until you remove the Item from it.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  Simmmple retains ownership of the Item but grants you the
                  license on these terms. This license is between Simmmple and
                  you.
                </Text>
              </ListItem>
            </OrderedList>
            {/* 7. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              Company License
              <Text fontWeight='500' ms='5px' fontSize='18px'>
                (Formerly known as Team license)
              </Text>
            </Text>
            <OrderedList>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  The Company License grants you, the purchaser, an ongoing,
                  non-exclusive, worldwide license to make use of the digital
                  work (
                  <Text fontWeight='500' mx='3px' as='span'>
                    Item
                  </Text>
                  ) you have selected. Read the rest of this license for the
                  details that apply to your use of the Item.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You are licensed to use the Item to create multiple End
                  Products for yourself or for clients, and the End Product may
                  be Sold.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  An End Product is one of the following things, both requiring
                  an application of skill and effort.
                </Text>
              </ListItem>

              <Text
                ps='45px'
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                a. For an Item that is a template, the End Product is a
                customised implementation of the Item. For example: the item is
                a website template and the end product is the final website
                customised with your content.
              </Text>
              <Text
                ps='45px'
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                b. For other types of Item, an End Product is something that
                incorporates the Item as well as other things, so that it is
                larger in scope and different in nature than the Item. For
                example: the item is an UI Kit and the end product is a website.
              </Text>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can create the End Product for a client, and this license
                  is then transferred from you to your client.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can Sell and make any number of copies of the End Product.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can modify or manipulate the Item. You can combine the
                  Item with other works and make a derivative work from it. The
                  resulting works are subject to the terms of this license. You
                  can do these things as long as the End Product you then create
                  is one that’s permitted under clause 3.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  This license is a “multi-use” license and not a “single
                  application” license, which means that you can use the Item to
                  create more than one unique End Product.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can’t re-distribute the Item as stock, in a tool or
                  template, or with source files. You can’t do this with an Item
                  either on its own or bundled with other items. You can’t
                  re-distribute or make available the Item as-is or with
                  superficial modifications.
                </Text>
              </ListItem>
              <Text
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                For example: You can’t license an item and then make it
                available as-is on your website for your users to download.
              </Text>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can’t use the Item in any application allowing an end user
                  to customise a digital or physical product to their specific
                  needs, such as an “on demand”, “made to order” or “build it
                  yourself” application. You can use the Item in this way only
                  if you purchase a separate license for each final product
                  incorporating the Item that is created using the application.
                </Text>
              </ListItem>
              <Text
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                For example: you can't create a website builder.
              </Text>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You must not permit an end user of the End Product to extract
                  the Item and use it separately from the End Product.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can’t use an Item in a logo, trademark, or service mark.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  For some Items, a component of the Item will be sourced from
                  elsewhere and different license terms may apply to the
                  component, such as someone else’s license or an open source or
                  creative commons license. If so, you will find the component
                  identified in the Item’s description page or in the Item’s
                  downloaded files. The other license will apply to that
                  component instead of this license. This license will apply to
                  the rest of the Item.
                </Text>
              </ListItem>
              <Text
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                For example: A theme might contain images licensed under a
                Creative Commons CCBY license. The CCBY license applies to those
                specific images. This license applies to the rest of the theme.
              </Text>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can only use the Item for lawful purposes. Also, if an
                  Item contains an image of a person, even if the Item is
                  model-released you can’t use it in a way that creates a fake
                  identity, implies personal endorsement of a product by the
                  person, or in a way that is defamatory, obscene or demeaning,
                  or in connection with sensitive subjects.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  This license applies in conjunction with the
                  <NavLink to='/terms-of-service'>
                    <Text
                      textDecoration='underline'
                      color='brand.300'
                      fontWeight='500'
                      as='span'
                      mx='3px'>
                      Simmmple Terms and Conditions
                    </Text>
                  </NavLink>
                  . If there is an inconsistency between this license and the
                  Terms and Conditions, this license will apply to the extent
                  necessary to resolve the inconsistency.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  This license can be terminated if you breach it. If that
                  happens, you must stop making copies of or distributing the
                  End Product until you remove the Item from it.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  Simmmple retains ownership of the Item but grants you the
                  license on these terms. This license is between Simmmple and
                  you.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  The Company License allows you to create unlimited End
                  Products you want and deploy them on how many domains like
                  endproduct1.com, endproduct2.com, endproductx.com.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  This license allows you access to the product's designer
                  files.
                </Text>
              </ListItem>
            </OrderedList>
            {/* 8. */}
            <Text
              color='brand.700'
              fontSize='30px'
              lineHeight='40px'
              fontWeight='700'
              mb='16px'
              display='flex'>
              Enterprise License
              <Text fontWeight='500' ms='5px' fontSize='18px'>
                (Formerly known as Extended license)
              </Text>
            </Text>
            <OrderedList>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  The Enterprise License grants you, the purchaser, an ongoing,
                  non-exclusive, worldwide license to make use of the digital
                  work (
                  <Text fontWeight='500' mx='3px' as='span'>
                    Item
                  </Text>
                  ) you have selected. Read the rest of this license for the
                  details that apply to your use of the Item.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You are licensed to use the Item to create multiple End
                  Products for yourself or for clients, and the End Product may
                  be Sold.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  An End Product is one of the following things, both requiring
                  an application of skill and effort.
                </Text>
              </ListItem>
              <Text
                ps='45px'
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                a. For an Item that is a template, the End Product is a
                customised implementation of the Item. For example: the item is
                a website template and the end product is the final website
                customised with your content.
              </Text>
              <Text
                ps='45px'
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                b. For other types of Item, an End Product is something that
                incorporates the Item as well as other things, so that it is
                larger in scope and different in nature than the Item. For
                example: the item is an UI Kit and the end product is a website.
              </Text>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can create the End Product for a client, and this license
                  is then transferred from you to your client.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can Sell and make any number of copies of the End Product.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can modify or manipulate the Item. You can combine the
                  Item with other works and make a derivative work from it. The
                  resulting works are subject to the terms of this license. You
                  can do these things as long as the End Product you then create
                  is one that’s permitted under clause 3.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  This license is a “multi-use” license and not a “single
                  application” license, which means that you can use the Item to
                  create more than one unique End Product.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can’t re-distribute the Item as stock, in a tool or
                  template, or with source files. You can’t do this with an Item
                  either on its own or bundled with other items. You can’t
                  re-distribute or make available the Item as-is or with
                  superficial modifications.
                </Text>
              </ListItem>
              <Text
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                For example: You can’t license an item and then make it
                available as-is on your website for your users to download.
              </Text>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can’t use the Item in any application allowing an end user
                  to customise a digital or physical product to their specific
                  needs, such as an “on demand”, “made to order” or “build it
                  yourself” application. You can use the Item in this way only
                  if you purchase a separate license for each final product
                  incorporating the Item that is created using the application.
                </Text>
              </ListItem>
              <Text
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                For example: you can't create a website builder.
              </Text>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You must not permit an end user of the End Product to extract
                  the Item and use it separately from the End Product.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can’t use an Item in a logo, trademark, or service mark.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  For some Items, a component of the Item will be sourced from
                  elsewhere and different license terms may apply to the
                  component, such as someone else’s license or an open source or
                  creative commons license. If so, you will find the component
                  identified in the Item’s description page or in the Item’s
                  downloaded files. The other license will apply to that
                  component instead of this license. This license will apply to
                  the rest of the Item.
                </Text>
              </ListItem>
              <Text
                color='#878CBD'
                fontSize='lg'
                lineHeight='34px'
                fontWeight='400'
                mb='25px'>
                For example: A theme might contain images licensed under a
                Creative Commons CCBY license. The CCBY license applies to those
                specific images. This license applies to the rest of the theme.
              </Text>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  You can only use the Item for lawful purposes. Also, if an
                  Item contains an image of a person, even if the Item is
                  model-released you can’t use it in a way that creates a fake
                  identity, implies personal endorsement of a product by the
                  person, or in a way that is defamatory, obscene or demeaning,
                  or in connection with sensitive subjects.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  This license applies in conjunction with the{" "}
                  <NavLink to='/terms-of-service'>
                    <Text
                      textDecoration='underline'
                      color='brand.300'
                      fontWeight='500'
                      as='span'
                      mx='3px'>
                      Simmmple Terms and Conditions
                    </Text>
                  </NavLink>
                  . If there is an inconsistency between this license and the
                  Terms and Conditions, this license will apply to the extent
                  necessary to resolve the inconsistency.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  This license can be terminated if you breach it. If that
                  happens, you must stop making copies of or distributing the
                  End Product until you remove the Item from it.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  Simmmple retains ownership of the Item but grants you the
                  license on these terms. This license is between Simmmple and
                  you.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='25px'>
                  The Company License allows you to create unlimited End
                  Products you want and deploy them on how many domains like
                  endproduct1.com, endproduct2.com, endproductx.com.
                </Text>
              </ListItem>
              <ListItem color='#878CBD'>
                <Text
                  fontSize='lg'
                  lineHeight='34px'
                  fontWeight='400'
                  mb='40px'>
                  This license allows you access to the product's designer
                  files.
                </Text>
              </ListItem>
            </OrderedList>
            <HSeparator w='100%' mb='40px' mx='auto' />
            <Text
              fontSize='lg'
              lineHeight='34px'
              fontWeight='400'
              textAlign='center'
              mx='auto'>
              Got a question?{" "}
              <NavLink to='/contact'>
                <Text
                  textDecoration='underline'
                  color='brand.300'
                  fontWeight='500'
                  as='span'
                  mx='3px'>
                  Contact us
                </Text>
              </NavLink>
              {""}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Licenses;
