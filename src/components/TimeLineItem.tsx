import React from "react";
import { Box, Flex, GridItem, Spacer, Image, Text } from "@chakra-ui/react";
import Icon from "../assets/settings-human.png";
import "../styles/timeline.css";
import { darken } from "@chakra-ui/theme-tools";
type TimeLinePropsType = {
  gridRow: string;
  gridColumn: string;
  image?: Object;
  color: string;
  children?: string;
};

export const TimeLineItem = (props: TimeLinePropsType) => {
  return (
    <GridItem gridColumn={props.gridColumn} gridRow={props.gridRow}>
      <Flex
        width="100%"
        height="100%"
        background={props.color}
        color="white"
        position="relative"
        borderRadius="10px"
        paddingLeft="5%"
        paddingRight="5%"
        _after={{
          content: `""`,
          position: "absolute",
          top: "20%",
          left: "0",
          width: "2px",
          height: "60%",
          backgroundColor: darken(props.color, 40),
        }}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Flex w="100%" flexDirection="row" justifyContent="space-evenly">
          <Box>
            <Text alignSelf="flex-start">{props.children}</Text>
            <Flex width="100%" justifyContent="space-around">
              <Text>9-12 PM</Text>
              <Spacer />
              <Text>9-12 PM</Text>
              <Spacer />
            </Flex>
          </Box>
          <Image src={Icon} objectFit="contain" />
        </Flex>
      </Flex>
    </GridItem>
  );
};
