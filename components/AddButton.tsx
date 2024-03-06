/** @format */

import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { ThemeProps } from "../utils/theme";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const AddButton = () => {
   const theme: ThemeProps = useTheme();
   const styles = makeStyles(theme);
   const navigation = useNavigation();

   //@ts-ignore
   const goToAddNewMailClip = () => navigation.navigate("AddNewMailClip");

   return (
      <Pressable
         onPress={goToAddNewMailClip}
         style={styles.mainContainer}>
         <Icon
            name="plus"
            size={36}
            color={"#333"}
         />
      </Pressable>
   );
};

export default AddButton;

const makeStyles = (theme: ThemeProps) =>
   StyleSheet.create({
      mainContainer: {
         alignItems: "center",
         backgroundColor: "#e1e2e4",
         alignSelf: "center",
         height: 60,
         width: 60,
         borderRadius: 30,
         justifyContent: "center",
      },
   });
