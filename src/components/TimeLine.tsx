import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";
import "../styles/timeline.css";

import { TimeLineItem } from "./TimeLineItem";
export const TimeLine = () => {
  return (
    <Flex
      width="95%"
      m="4"
      boxShadow="0px 2px 9px 4px rgba(0, 0, 0, 0.1)"
      p="2"
      borderRadius="6"
    >
      <Flex width="15%" flexDirection="column" alignItems="center">
        <Box height="6rem" mb=".5rem">
          9:00 AM
        </Box>
        <Box height="6rem" mb=".5rem">
          10:00 AM
        </Box>
        <Box height="6rem" mb=".5rem">
          11:00 AM
        </Box>
        <Box height="6rem" mb=".5rem">
          12:00 PM
        </Box>
        <Box height="6rem" mb=".5rem">
          2:00 PM
        </Box>
      </Flex>

      <Box overflowX="auto">
        <Grid
          gridTemplateColumns="repeat(8,120px)"
          gridTemplateRows="repeat(6,6rem)"
          gap="10px"
          overflowX="scroll"
        >
          <TimeLineItem
            color="blue.100"
            gridRow={"1/span 3"}
            gridColumn={"1/span 2"}
          >
            Developer’s meeting
          </TimeLineItem>
          <TimeLineItem
            color="#B7B4D9"
            gridRow={"2/span 3"}
            gridColumn={"3/span 2"}
          >
            Project review meet
          </TimeLineItem>
          <TimeLineItem
            color="linear-gradient(123.32deg, rgba(144, 2, 180, 0.58) 0%, rgba(0, 0, 0, 0.58) 146.04%)"
            gridRow={"1/span 2"}
            gridColumn={"5/span 2"}
          >
            Data Structures & Algorithm
          </TimeLineItem>
          <TimeLineItem
            color="linear-gradient(136.37deg, rgba(255, 197, 0, 0.58) 5.88%, rgba(194, 21, 0, 0.58) 70.55%)"
            gridRow={"3/span 1"}
            gridColumn={"5/span 2"}
          >
            Artificial Intelligence Assignment
          </TimeLineItem>
          <TimeLineItem
            color="linear-gradient(123.32deg, rgba(27, 180, 2, 0.58) 0%, rgba(0, 0, 0, 0.58) 146.04%);"
            gridRow={"4/span 1"}
            gridColumn={"5/span 2"}
          >
            Computer Networking
          </TimeLineItem>
          <TimeLineItem
            color=" #B4D7D9"
            gridRow={"4/span 1"}
            gridColumn={"7/span 2"}
          >
            Brainstorming session
          </TimeLineItem>
          <TimeLineItem
            color="#B4D7D9"
            gridRow={"5/span 1"}
            gridColumn={"1/span 2"}
          >
            Cloud Computing Exam
          </TimeLineItem>
          <TimeLineItem
            color="linear-gradient(135deg, #B24592 0%, #F15F79 100%)"
            gridRow={"5/span 1"}
            gridColumn={"3/span 2"}
          >
            Macbeth Auditions
          </TimeLineItem>
          <TimeLineItem
            color="linear-gradient(90.03deg, #25090E -8.15%, rgba(119, 77, 85, 0) 117.01%), #733D47"
            gridRow={"5/span 1"}
            gridColumn={"5/span 2"}
          >
            Macbeth Auditions
          </TimeLineItem>
        </Grid>
      </Box>
    </Flex>
  );
};
