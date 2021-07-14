import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";

import { Theme } from "./src/infrastructure/theme";

import { PokedexScreen } from "./src/features/Pokedex/screens/pokedex.screen";

export default function App() {
  let [fontsLoaded] = useFonts({
    "SF-Pro-Display-Regular": require("./assets/Fonts/SF-Pro-Display-Regular.otf"),
    "SF-Pro-Display-Medium": require("./assets/Fonts/SF-Pro-Display-Medium.otf"),
    "SF-Pro-Display-Bold": require("./assets/Fonts/SF-Pro-Display-Bold.otf"),
    "SF-Pro-Display-Black": require("./assets/Fonts/SF-Pro-Display-Black.otf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <ThemeProvider theme={Theme}>
        <PokedexScreen></PokedexScreen>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
