import { Flex, Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const Countdown = ({ date }) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef("");

  const startTimer = () => {
    const countdownDate = new Date(`${date}`);

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (days < 10) {
        days = `0${days}`;
      }
      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <Grid
      templateColumns={{ base: "repeat(4, 76px)", md: "repeat(4, 120px)" }}
      gap='10px'
      w={{ base: "335px", md: "510px" }}
      maxW='100%'
      h={{ base: "100px", md: "130px" }}>
      <Flex
        direction='column'
        p={{ base: "6px 6px", md: "26px 24px" }}
        textAlign='center'
        bg='linear-gradient(115.49deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0.04) 105.19%)'
        boxShadow='inset 10px -12px 47px rgba(0, 9, 92, 0.68), inset -6px 11px 21px -1px rgba(255, 255, 255, 0.28)'
        backdropFilter='blur(42px)'
        borderRadius='20px'>
        <Text
          fontSize={{ base: "36px", md: "52px" }}
          color='#fff'
          fontWeight='bold'>
          {timerDays}
        </Text>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight='normal'
          color='#fff'>
          Days
        </Text>
      </Flex>
      <Flex
        direction='column'
        p={{ base: "6px 6px", md: "26px 24px" }}
        textAlign='center'
        bg='linear-gradient(115.49deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0.04) 105.19%)'
        boxShadow='inset 10px -12px 47px rgba(0, 9, 92, 0.68), inset -6px 11px 21px -1px rgba(255, 255, 255, 0.28)'
        backdropFilter='blur(42px)'
        borderRadius='20px'>
        <Text
          fontSize={{ base: "36px", md: "52px" }}
          color='#fff'
          fontWeight='bold'>
          {timerHours}
        </Text>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight='normal'
          color='#fff'>
          Hours
        </Text>
      </Flex>
      <Flex
        direction='column'
        p={{ base: "6px 6px", md: "26px 24px" }}
        textAlign='center'
        bg='linear-gradient(115.49deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0.04) 105.19%)'
        boxShadow='inset 10px -12px 47px rgba(0, 9, 92, 0.68), inset -6px 11px 21px -1px rgba(255, 255, 255, 0.28)'
        backdropFilter='blur(42px)'
        borderRadius='20px'>
        <Text
          fontSize={{ base: "36px", md: "52px" }}
          color='#fff'
          fontWeight='bold'>
          {timerMinutes}
        </Text>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight='normal'
          color='#fff'>
          Minutes
        </Text>
      </Flex>
      <Flex
        direction='column'
        p={{ base: "6px 6px", md: "26px 24px" }}
        textAlign='center'
        bg='linear-gradient(115.49deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0.04) 105.19%)'
        boxShadow='inset 10px -12px 47px rgba(0, 9, 92, 0.68), inset -6px 11px 21px -1px rgba(255, 255, 255, 0.28)'
        backdropFilter='blur(42px)'
        borderRadius='20px'>
        <Text
          fontSize={{ base: "36px", md: "52px" }}
          color='#fff'
          fontWeight='bold'>
          {timerSeconds}
        </Text>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight='normal'
          color='#fff'>
          Seconds
        </Text>
      </Flex>
    </Grid>
  );
};

export default Countdown;
