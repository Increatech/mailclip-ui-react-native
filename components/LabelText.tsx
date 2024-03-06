/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { ThemeProps } from "../utils/theme";

interface Props {
   title: string;
}

const LabelText = ({ title }: Props) => {
   const theme: ThemeProps = useTheme();
   const styles = makeStyles(theme);

   return <Text style={styles.title}>{title}</Text>;
};

export default LabelText;

const makeStyles = (theme: ThemeProps) =>
   StyleSheet.create({
      title: {
         fontFamily: theme.fontFamily.bold,
         fontSize: 16,
      },
   });
