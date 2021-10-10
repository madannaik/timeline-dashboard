import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import "../styles/checkbox.css";
import { Checkbox } from "@chakra-ui/react";
export const Custombox = () => {
  return (
    <Box className="checkbox" w="32" mr="4">
      <Box>
        <label className="checkbox__lab" htmlFor="checkbox-">
          <Checkbox marginRight="2"></Checkbox>
          ALL
        </label>
        <input
          className="checkbox__inp"
          type="checkbox"
          name=""
          id="checkbox-"
        />
        <Box className="checkbox__select" bg="white">
          <Flex spacing={2} flexDirection="column" bg="white">
            <Checkbox size="md" colorScheme="red">
              Remainders
            </Checkbox>
            <Checkbox size="md" colorScheme="red">
              Activities
            </Checkbox>
            <Checkbox size="md" colorScheme="red">
              Classes
            </Checkbox>
            <Checkbox size="md" colorScheme="red">
              Exams
            </Checkbox>
            <Checkbox size="md" colorScheme="red">
              Assignments
            </Checkbox>
            <Checkbox size="md" colorScheme="red">
              Happenings
            </Checkbox>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
