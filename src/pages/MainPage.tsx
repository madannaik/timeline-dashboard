import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Events } from "../components/Events";
import { Dashboard } from "../components/Dashboard";
export const MainPage = () => {
  return (
    <Flex bg="white" width="100vw">
      <Box width="75%">
        <Dashboard />
      </Box>
      <Box width="25%">
        <Events />
      </Box>
    </Flex>
  );
};
