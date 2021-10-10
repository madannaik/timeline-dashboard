import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Events } from "../components/Events";
import { Dashboard } from "../components/Dashboard";
import "../styles/mainPage.css";
export const MainPage = () => {
  return (
    <Flex
      bg="white"
      width="100vw"
      height="auto"
      minHeight="100vh"
      className="main"
    >
      <Box className="main__dashboard">
        <Dashboard />
      </Box>
      <Box className="main__events">
        <Events />
      </Box>
    </Flex>
  );
};
