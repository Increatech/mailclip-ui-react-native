/** @format */

import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { ThemeProps } from "../utils/theme";
import LabelText from "./LabelText";

interface Props {
   placeholder: string;
   title?: string;
}

const Input = ({ placeholder, title }: Props) => {
   const theme: ThemeProps = useTheme();
   const styles = makeStyles(theme);

   return (
      <View style={{ gap: 15 }}>
         {title && <LabelText title={title} />}
         <TextInput
            placeholderTextColor={"#cccccc"}
            placeholder={placeholder}
            style={styles.input}
            selectionColor={"#000"}
         />
      </View>
   );
};

export default Input;

const makeStyles = (theme: ThemeProps) =>
   StyleSheet.create({
      input: {
         backgroundColor: "#f5f5f6",
         height: 50,
         borderRadius: 10,
         paddingHorizontal: 10,
         fontFamily: theme.fontFamily.regular,
         fontSize: 16,
      },
   });
