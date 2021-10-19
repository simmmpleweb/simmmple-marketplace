import React, { useState, useRef } from 'react'
import {Grid, Text, Flex} from "@chakra-ui/react";

const Countdown = () => {
    return (
        <Grid templateColumns="repeat(4, 1fr)" gap="10px">
            <Flex direction="column" p="26px 32px" textAlign="center" bg="linear-gradient(115.49deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0.04) 105.19%)" boxShadow="inset 10px -12px 47px rgba(0, 9, 92, 0.68), inset -6px 11px 21px -1px rgba(255, 255, 255, 0.28)" backdropFilter="blur(42px)" borderRadius="20px">
                <Text fontSize="52px" color="#fff" fontWeight="bold">00</Text>
                <Text fontWeight="normal" color="#fff">Days</Text>
            </Flex>
            <Flex direction="column" p="26px 32px" textAlign="center" bg="linear-gradient(115.49deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0.04) 105.19%)" boxShadow="inset 10px -12px 47px rgba(0, 9, 92, 0.68), inset -6px 11px 21px -1px rgba(255, 255, 255, 0.28)" backdropFilter="blur(42px)" borderRadius="20px">
                <Text fontSize="52px" color="#fff" fontWeight="bold">00</Text>
                <Text fontWeight="normal" color="#fff">Hours</Text>
            </Flex>
            <Flex direction="column" p="26px 32px" textAlign="center" bg="linear-gradient(115.49deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0.04) 105.19%)" boxShadow="inset 10px -12px 47px rgba(0, 9, 92, 0.68), inset -6px 11px 21px -1px rgba(255, 255, 255, 0.28)" backdropFilter="blur(42px)" borderRadius="20px">
                <Text fontSize="52px" color="#fff" fontWeight="bold">00</Text>
                <Text fontWeight="normal" color="#fff">Minutes</Text>
            </Flex>
            <Flex direction="column" p="26px 32px" textAlign="center" bg="linear-gradient(115.49deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0.04) 105.19%)" boxShadow="inset 10px -12px 47px rgba(0, 9, 92, 0.68), inset -6px 11px 21px -1px rgba(255, 255, 255, 0.28)" backdropFilter="blur(42px)" borderRadius="20px">
                <Text fontSize="52px" color="#fff" fontWeight="bold">00</Text>
                <Text fontWeight="normal" color="#fff">Seconds</Text>
            </Flex>
        </Grid>
    )
}

export default Countdown
