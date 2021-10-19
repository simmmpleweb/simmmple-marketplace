import React from 'react';
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import { Tag, Flex, Box, Image, Text } from '@chakra-ui/react';

const ProductItem = ({image, tag, price, title, category}) => {
    return (
        <Card>
            <CardBody>
                <Flex direction="column" w="100%">
                    <Box w="340px" h="230px" borderRadius="24px" mb="30px">
                        <Image src={image} w="100%" h="100%"/>
                    </Box>
                    <Flex justify="space-between" align="center" w="100%" mb="10px">
                        <Tag color="brand.300" bg="#ECE9FF" borderRadius="30px" p="7px 14px">{tag}</Tag>
                        <Tag bg={price === "FREE" ? "#5AC39B" : "brand.300"} color="#fff" borderRadius="30px" p="7px 14px">{price}</Tag>
                    </Flex>
                    <Flex direction="column">
                        <Text color="brand.700" fontSize="2xl" mb="5px">{title}</Text>
                        <Text color="#878CBD" fontWeight="normal" fontSize="sm">Category: {category}</Text>
                    </Flex>
                </Flex>

            </CardBody>
            
        </Card>
    )
}

export default ProductItem
