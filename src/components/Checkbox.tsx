import React from "react";
import { Box } from "@chakra-ui/react";
import "../styles/checkbox.css";
import { Checkbox, VStack } from "@chakra-ui/react";
export const Custombox = () => {
  return (
    <Box className="checkbox" w="36">
      <Box>
        <label className="checkbox__lab" htmlFor="checkbox-">
          Filters
        </label>
        <input
          className="checkbox__inp"
          type="checkbox"
          name=""
          id="checkbox-"
        />
        <Box className="checkbox__select">
          <VStack spacing={10} direction="row">
            <Checkbox size="sm" colorScheme="red">
              Checkbox
            </Checkbox>
            <Checkbox size="sm" colorScheme="red">
              Checkbox
            </Checkbox>
            <Checkbox size="sm" colorScheme="red">
              Checkbox
            </Checkbox>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};
