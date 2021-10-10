import React from "react";
import "./App.css";
import { theme } from "./themes/Theme";
import { ChakraProvider } from "@chakra-ui/react";
import { MainPage } from "./pages/MainPage";
import "./assets/fonts/style.css";
function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <div className="App"></div> */}
      <MainPage />
    </ChakraProvider>
  );
}

export default App;
