/** @format */

import { StyleSheet, Text, View, } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { ThemeProps } from "../utils/theme";
import LabelText from "./LabelText";

interface Props {
  title?: string;
}

const Input = ({ title, }: Props) => {
  const theme: ThemeProps = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>

  );
};

export default Input;

const makeStyles = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: "#b5ffdd",
      height: 50,
      borderRadius: 10,
      paddingHorizontal: 10,
      fontSize: 16,
      justifyContent: 'center'
    },
    text: {
      fontFamily: theme.fontFamily.semiBold,
      fontSize: 16,
      color: "#0bd377"
    },
  });
