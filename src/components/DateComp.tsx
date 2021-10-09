import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

export const DateComp = () => {
  return (
    <VStack
      backgroundColor="primary.100"
      paddingX=".5rem"
      paddingTop=".5rem"
      borderRadius="5px"
    >
      <Text fontSize=".8rem">Mon</Text>
      <Text fontSize=".8rem">11</Text>
      <Box
        width="5px"
        height="5px"
        backgroundColor="red"
        borderRadius="100%"
      ></Box>
    </VStack>
  );
};
