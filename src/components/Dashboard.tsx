import React from "react";
import {
  Flex,
  Heading,
  IconButton,
  Select,
  Spacer,
  Divider,
  Image,
} from "@chakra-ui/react";
import { HStack, Box, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Custombox as InputCheck } from "./Checkbox";
import { DateComp } from "./DateComp";
import { TimeLine } from "./TimeLine";
import Hamburger from "../assets/hamburger.svg";
export const Dashboard = () => {
  return (
    <Box>
      <Box
        backgroundImage="linear-gradient(272.8deg, #F2D8D5 0%, rgba(242, 216, 213, 0) 123.78%)"
        m="4"
        borderRadius="20px"
        p="4"
      >
        <Heading size="md" mb="2" color="primary.300">
          Hello Dhruv!
        </Heading>
        <Text color="primary.300" wordBreak={"break-word"} w="md">
          Welcome to your daily event calender. Here you can see all the
          upcoming events, meetings and create new events.
        </Text>
      </Box>
      <Flex flexDirection="row" justifyContent="space-evenly" px="4">
        <Text textAlign="start" pl="4" fontWeight="bold">
          TimeLine
        </Text>
        <Spacer />
        <HStack>
          <IconButton
            variant="outline"
            aria-label="arrow-left"
            icon={<ChevronLeftIcon />}
          />
          <Text>Mon,11 December 2021</Text>
          <IconButton
            variant="outline"
            aria-label="arrow-left"
            icon={<ChevronRightIcon />}
          />
        </HStack>
        {/* <Spacer /> */}
        <InputCheck />
        <Box>
          <Select size="md" w="36">
            <Image src={Hamburger} />
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      </Flex>
      <Flex p="4" justifyContent="space-evenly">
        <DateComp />
        <DateComp />
        <DateComp />
        <DateComp />
        <DateComp />
        <DateComp />
      </Flex>
      <Box width="100%" position="relative" z-index="-1">
        <Box
          zIndex="0"
          display="flex"
          justifyContent="flex-start"
          flexDirection="column"
          position="absolute"
          top="10px"
          left="0"
          paddingLeft="10%"
          paddingRight="5%"
          width="100%"
          height="100%"
        >
          <Divider bg="primary.300" />
          <Divider bg="primary.300" mb="6.2rem" />
          <Divider bg="primary.300" />
          <Divider bg="primary.300" mb="6.4rem" />
          <Divider bg="primary.300" />
          <Divider bg="primary.300" mb="7rem" />
          <Divider bg="primary.300" />
          <Divider bg="primary.300" mb="6rem" />
          <Divider bg="primary.300" />
          <Divider bg="primary.300" mb="6.6rem" />
          <Divider bg="primary.300" />
          <Divider bg="primary.300" />
        </Box>
        <TimeLine />
      </Box>
    </Box>
  );
};
