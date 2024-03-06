/** @format */

import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { ThemeProps } from "../utils/theme";
import WidgetCard from "../components/WidgetCard";
import AddButton from "../components/AddButton";
import { AllNotifications } from "../assets/data/allNotifications";

const Component = () => {
   const theme: ThemeProps = useTheme();
   const styles = makeStyles(theme);

   return (
      <SafeAreaView style={styles.screen}>
         <ScrollView>
            <View style={styles.mainContainer}>
               {AllNotifications.map((notification, index) => {
                  return <WidgetCard key={index} item={notification} />;
               })}
            </View>
            <StatusBar backgroundColor={theme.colors.primary} />
            <AddButton />
         </ScrollView>
      </SafeAreaView>
   );
};

export default Component;

const makeStyles = (theme: ThemeProps) =>
   StyleSheet.create({
      screen: {
         flex: 1,
         backgroundColor: theme.colors.secondary,
      },
      mainContainer: {
         backgroundColor: theme.colors.secondary,
         height: "100%",
         padding: 25,
         gap: 20,
      },
      headerContainer: {
         flexDirection: "row",
         alignItems: "center",
         height: "100%",
         paddingHorizontal: 20,
         justifyContent: "space-between",
      },
      headerTitle: {
         fontFamily: "Poppins-SemiBold",
         fontSize: 18,
         color: "#fff",
      },
      row: {
         flexDirection: "row",
         gap: 10,
      },
   });
