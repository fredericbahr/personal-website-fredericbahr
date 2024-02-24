/*
 * COPYRIGHT (C) 2024 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import "./i18n/i18n";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Header } from "./components/Header/Header";
import AnimatedLogo from "./components/Logo/AnimatedLogo";
import { useColorScheme } from "./context/ColorSchemeContext";

function App() {
  const { colorScheme } = useColorScheme();

  const [isInitialAnimation, setIsInitialAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsInitialAnimation(false);
    }, 2800);
  }, []);

  return (
    <ChakraProvider theme={colorScheme}>
      {isInitialAnimation ? (
        <Flex justifyContent="center" alignItems="center" height="100vh">
          <AnimatedLogo height="30vh" />
        </Flex>
      ) : (
        <Header />
      )}
    </ChakraProvider>
  );
}

export default App;
