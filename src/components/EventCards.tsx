import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import { LockIcon, TimeIcon } from "@chakra-ui/icons";
import Location from "../assets/Vector.svg";
type EventCardProps = {
  color: string;
  bg?: string;
};
export const EventCards = (props: EventCardProps) => {
  return (
    <Box
      alignSelf="center"
      backgroundColor={props.bg}
      borderRadius="10px"
      p="3"
      mb="2"
    >
      <Text fontWeight="semibold">Brainstorm session with UI team</Text>
      <Text color="#565656;">
        small description about the event within two lines
      </Text>
      <Button
        leftIcon={<img src={Location} alt="Location-icon" />}
        bg="transparent"
        _hover={{
          bg: "transparent",
        }}
        _focus={{
          outline: "none",
        }}
        textColor="blue"
      >
        Location
      </Button>
      <Divider bg={props.color} />
      <Flex justifyContent="space-between">
        <Button
          leftIcon={<TimeIcon fontSize=".9rem" />}
          children={"10:20"}
          bg="transparent"
          _hover={{
            bg: "transparent",
          }}
          _focus={{
            outline: "none",
          }}
        />
        <AvatarGroup size="xs">
          <Avatar name="&nbsp;" bg="blackAlpha.400" border="none" />
          <Avatar name="&nbsp;" bg="blackAlpha.500" border="none" />
          <Avatar name="&nbsp;" bg="blackAlpha.600" border="none" />
          <Avatar name="&nbsp;" bg="blackAlpha.700" border="none" />
          <Avatar name="&nbsp;" bg="blackAlpha.800" border="none" />
        </AvatarGroup>
      </Flex>
    </Box>
  );
};
