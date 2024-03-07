/** @format */

import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { ThemeProps } from "../utils/theme";
import LabelText from "./LabelText";

interface Props {
  title?: string;
  selected: boolean;
  onPress: () => void;
}

const Input = ({ title, selected, onPress }: Props) => {
  const theme: ThemeProps = useTheme();
  const styles = makeStyles(theme);

  const backgroundColor = selected ? "#b5ffdd" : "#f5f5f6";
  const color = selected ? "#0bd377" : "#000";

  return (
    // @ts-ignore
    <Pressable style={{ ...styles.container, backgroundColor, color }} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
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
      justifyContent: "center",
    },
    text: {
      fontFamily: theme.fontFamily.semiBold,
      fontSize: 16,
    },
  });
