/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { PaperProvider } from "react-native-paper";
import { theme } from "./utils/theme";
import { MainStack } from "./navigator/MainStack";

export default function App() {
   const [fontsLoaded, fontError] = useFonts({
      "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
      "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
      "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
      "Rubik-SemiBold": require("./assets/fonts/Rubik-SemiBold.ttf"),
   });

   if (!fontsLoaded && !fontError) {
      return null;
   }

   return (
      <PaperProvider theme={theme}>
         <MainStack />
      </PaperProvider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
});
