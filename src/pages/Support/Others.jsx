import React from 'react';
import { Flex } from "@chakra-ui/react";
import homeBg from "assets/img/home-background.png";

export default function Others()  {
    return (
        <Flex minH="600px" bg="#333" bgImage={homeBg} bgSize="cover" bgPosition="center">
            test
        </Flex>
    )
}