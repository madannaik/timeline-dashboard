import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { Button, Text } from "@chakra-ui/react";
// import { PlusSquareIcon } from "@chakra-ui/icons";
import { EventCards } from "./EventCards";
import PlusSquareIcon from "../assets/icon.svg";
export const Events = () => {
  return (
    <Flex
      // minHeight="100vh"
      height="100%"
      bg="primary.100"
      flexDirection="column"
      width="100%"
      paddingTop="6"
      paddingLeft="6"
      paddingRight="6"
    >
      <Flex justifyContent="space-between">
        <Heading size="md">Events</Heading>
        <Button
          variant="link"
          rightIcon={<img alt="plus-icon" src={PlusSquareIcon} />}
          _focus={{
            outline: "none",
          }}
        >
          View all
        </Button>
      </Flex>
      <Flex justifyContent="space-between" paddingTop="4">
        <Button
          color="primary.300"
          m="0"
          fontSize={"1rem"}
          bg="transparent"
          _hover={{
            backgroundColor: "primary.200",
          }}
          _focus={{
            outline: "none",
          }}
        >
          Activate
        </Button>

        <Button
          color="primary.300"
          _hover={{
            backgroundColor: "primary.200",
          }}
          _focus={{
            outline: "none",
          }}
          bg="transparent"
        >
          Remainders
        </Button>
      </Flex>
      <Text paddingTop="3" color="primary.300" fontSize="0.9rem" mb="2">
        Monday 10 December, 2020
      </Text>
      <EventCards bg="primary.200" color="primary.300" />
      <EventCards bg="blue.100" color="blue.100" />
      <EventCards bg="lightgreen" color="red" />
    </Flex>
  );
};
