import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: { 200: "#F2D8D2", 100: "#F2D8D570", 300: "#733D47" },
    blue: { 100: "#D7D8F2", 200: "#D8D8F9" },
  },
  styles: {
    global: {
      body: {
        fontFamily: "SF Pro Display Regular",
      },
    },
  },
});
