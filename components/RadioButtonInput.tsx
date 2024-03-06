/** @format */

import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { ThemeProps } from "../utils/theme";
import RadioButton from "./RadioButton";

interface Props {
   title: string;
   checked: boolean;
   onPress: () => void;
}

const RadioButtonInput = ({ title, checked, onPress }: Props) => {
   const theme: ThemeProps = useTheme();
   const styles = makeStyles(theme);

   return (
      <Pressable
         onPress={onPress}
         style={styles.mainContainer}>
         <RadioButton
            checked={checked}
            onPress={onPress}
         />
         <Text style={styles.title}>{title}</Text>
      </Pressable>
   );
};

export default RadioButtonInput;

const makeStyles = (theme: ThemeProps) =>
   StyleSheet.create({
      mainContainer: {
         flexDirection: "row",
         alignItems: "center",
         gap: 10,
      },
      title: {
         fontFamily: theme.fontFamily.medium,
         fontSize: 16,
      },
   });
