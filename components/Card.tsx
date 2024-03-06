/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { ThemeProps } from "../utils/theme";

interface Props {
   children: React.ReactNode;
}

const Component = ({ children }: Props) => {
   const theme: ThemeProps = useTheme();
   const styles = makeStyles(theme);
   return <View style={styles.mainContainer}>{children}</View>;
};

export default Component;

const makeStyles = (theme: ThemeProps) =>
   StyleSheet.create({
      mainContainer: {
         backgroundColor: theme.colors.tertiary,
         padding: 20,
         borderRadius: 10,
      },
   });
