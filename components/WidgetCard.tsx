/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { ThemeProps } from "../utils/theme";
import Card from "./Card";
import { Avatar } from "react-native-paper";

interface Props {
   item: any;
}

const Component = ({ item }: Props) => {
   const theme: ThemeProps = useTheme();
   const styles = makeStyles(theme);

   return (
      <Card>
         <View style={styles.row}>
            <View style={styles.numberContainer}>
               <Text style={styles.number}>{item.emails.length}</Text>
            </View>
            <Text style={styles.name}>{item.name}</Text>
         </View>
         {item.emails.map((item, index) => {
            return (
               <View>
                  <View style={styles.messageContainer}>
                     <View style={{ gap: 3 }}>
                        <Text style={styles.subject}>Keith Mthunzi</Text>
                        <Text style={styles.message}>Launching App Today</Text>
                     </View>
                     <Text style={styles.time}>15:07</Text>
                  </View>
               </View>
            );
         })}
      </Card>
   );
};

export default Component;

const makeStyles = (theme: ThemeProps) =>
   StyleSheet.create({
      numberContainer: {
         backgroundColor: theme.colors.primary,
         alignSelf: "flex-start",
         borderRadius: 30,
         height: 40,
         width: 40,
         alignItems: "center",
         justifyContent: "center",
      },
      number: {
         fontFamily: theme.fontFamily.semiBold,
         fontSize: 20,
      },
      name: {
         fontFamily: theme.fontFamily.bold,
         fontSize: 20,
      },
      row: {
         flexDirection: "row",
         alignItems: "center",
         gap: 20,
      },
      subject: {
         fontFamily: theme.fontFamily.bold,
         fontSize: 15,
      },
      time: {
         fontFamily: theme.fontFamily.bold,
         fontSize: 16,
      },
      message: {
         fontFamily: theme.fontFamily.regular,
         fontSize: 14,
      },
      messageContainer: {
         flexDirection: "row",
         justifyContent: "space-between",
         alignItems: "center",
         marginTop: 10,
         backgroundColor: theme.colors.secondary,
         padding: 15,
         borderRadius: 10,
      },
   });
