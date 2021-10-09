import React from "react";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Select,
  Spacer,
  Checkbox,
} from "@chakra-ui/react";
import { HStack, Box, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Custombox as InputCheck } from "./Checkbox";
import { DateComp } from "./DateComp";
import { TimeLine } from "./TimeLine";
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
          Hello Dhruv
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
        <InputCheck />
        <Select size="md" w="32">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Flex>
      <Flex p="4" justifyContent="space-evenly">
        <DateComp />
        <DateComp />
        <DateComp />
        <DateComp />
        <DateComp />
        <DateComp />
      </Flex>
      <Box width="100%" overflowX="scroll">
        <TimeLine />
      </Box>
    </Box>
  );
};
