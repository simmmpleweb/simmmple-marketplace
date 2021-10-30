import React from 'react';
import Card from 'components/card/Card';
import { Flex, Text, Image, Button } from "@chakra-ui/react";
import IconBox from "components/icons/IconBox";
import { HSeparator } from 'components/separator/Separator';

const AppItem = ({image, name, category, description}) => {
    return (
        <Card>
            <Flex direction="column">
                <Flex align="center">
    
                <Image src={image} w="90px" h="90px" me="26px" boxShadow="25px 33px 71px -5px rgba(112, 144, 176, 0.15)" borderRadius="100px"/>
                    <Flex direction="column">

                    <Text color="brand.700" fontWeight="500" fontSize="26px" mb="4px">{name}</Text>
                    <Text color="#878CBD" fontWeight="normal" fontSize="16px">{category}</Text>
                    </Flex>
                </Flex>
                <HSeparator my="28px"/>
                {description}
                <Button bg="#F6F8FD" h="56px"border="1px solid #E9EDF7">
                    <Text fontSize="sm" color="#68769F">Learn More</Text>
                </Button>
            </Flex>
        </Card>
    )
}

export default AppItem