/** @format */

import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { ThemeProps } from "../utils/theme";

interface Props {
   checked: boolean;
   onPress: () => void;
}

const RadioButton = ({ checked, onPress }: Props) => {
   const theme: ThemeProps = useTheme();
   const styles = makeStyles(theme);

   return (
      <Pressable
         onPress={onPress}
         style={styles.mainContainer}>
         {checked && <View style={styles.selected} />}
      </Pressable>
   );
};

export default RadioButton;

const makeStyles = (theme: ThemeProps) =>
   StyleSheet.create({
      mainContainer: {
         height: 20,
         width: 20,
         backgroundColor: "#e1e2e4",
         borderRadius: 15,
         alignItems: "center",
         justifyContent: "center",
      },
      selected: {
         height: "60%",
         width: "60%",
         backgroundColor: "#333",
         borderRadius: 15,
      },
   });
