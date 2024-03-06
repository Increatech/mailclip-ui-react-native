/** @format */

import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { ThemeProps } from "../utils/theme";
import Card from "../components/Card";
import LabelText from "../components/LabelText";
import RadioButton from "../components/RadioButtonInput";
import Input from "../components/Input";

const Component = () => {
   const theme: ThemeProps = useTheme();
   const styles = makeStyles(theme);

   return (
      <SafeAreaView style={styles.screen}>
         <ScrollView>
            <Text style={styles.title}>Add New MailClip</Text>
            <View style={styles.mainContainer}>
               <Card>
                  <View style={styles.cardContainer}>
                     <LabelText title="Show New & Unread Emails From" />
                     <RadioButton
                        title="All Email Addresses"
                        checked={true}
                        onPress={() => {}}
                     />
                     <RadioButton
                        title="Specific Email Addresses Only"
                        checked={false}
                        onPress={() => {}}
                     />
                     <View>
                        <Input placeholder="example@gmail.com" />
                        <Text style={styles.inputDescription}>add a comma after email address… and enter *@company.com to include all emails from a specific company</Text>
                     </View>
                     <View style={{ gap: 10 }}>
                        <Text style={styles.currentText}>Current Email Addresses Selected</Text>
                        <Text style={styles.selectedEmailText}>*@mosaic.ie</Text>
                        <Text style={styles.selectedEmailText}>*@mosaic.ie</Text>
                        <Text style={styles.selectedEmailText}>*@mosaic.ie</Text>
                     </View>
                     <Input
                        title="Where Subject Contains The Word"
                        placeholder="Leave Blank if Not Needed"
                     />
                     <Input
                        title="Where Body Contains The Word"
                        placeholder="Leave Blank if Not Needed"
                     />
                  </View>
               </Card>
               <Card>
                  <View style={styles.cardContainer}>
                     <LabelText title="How Many Emails To Display" />
                     <RadioButton
                        checked={true}
                        title="Show 1 Email"
                        onPress={() => {}}
                     />
                     <RadioButton
                        checked={false}
                        title="Show 2 Emails"
                        onPress={() => {}}
                     />
                     <RadioButton
                        checked={false}
                        title="Show 3 Emails"
                        onPress={() => {}}
                     />
                  </View>
               </Card>
               <Card>
                  <View style={styles.cardContainer}>
                     <LabelText title="Semd Instant Push Notification" />
                     <View style={styles.radioButtonsRowContainer}>
                        <RadioButton
                           checked={true}
                           title="Yes"
                           onPress={() => {}}
                        />
                        <RadioButton
                           checked={false}
                           title="No"
                           onPress={() => {}}
                        />
                     </View>
                  </View>
               </Card>
               <Card>
                  <View style={styles.cardContainer}>
                     <Input
                        title="Widget Title / Name"
                        placeholder="Give Your Widget A Title                        "
                     />
                  </View>
               </Card>
            </View>
         </ScrollView>
         <StatusBar backgroundColor={theme.colors.primary} />
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
         padding: 20,
         gap: 30,
      },

      title: {
         fontFamily: theme.fontFamily.semiBold,
         fontSize: 18,
         color: "#000",
         margin: 15,
      },
      cardContainer: {
         gap: 30,
      },
      inputDescription: {
         fontFamily: theme.fontFamily.semiBold,
         fontSize: 10,
         color: "#000",
         marginTop: 5,
      },
      currentText: {
         fontFamily: theme.fontFamily.semiBold,
         fontSize: 14,
         color: "#0bd37a",
      },
      selectedEmailText: {
         fontFamily: theme.fontFamily.semiBold,
         color: theme.colors.primary,
      },
      radioButtonsRowContainer: {
         flexDirection: "row",
         gap: 50,
      },
   });
