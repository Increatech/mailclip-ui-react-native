/** @format */

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "react-native-paper";
import { ThemeProps } from "../utils/theme";
import Card from "../components/Card";
import LabelText from "../components/LabelText";
import RadioButton from "../components/RadioButtonInput";
import Input from "../components/Input";
import { NewMailClip } from "../interfaces/NewMailClip";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AddedInbox from "../components/AddedInbox";
import { INBOXES } from "../assets/data/allNotifications";

const Component = () => {
  const theme: ThemeProps = useTheme();
  const styles = makeStyles(theme);

  const [data, setData] = useState<NewMailClip>({
    selected_email_addresses: "All",
    word_in_subject: "",
    word_in_body: "",
    email_count_to_display: 1,
    push_notification_enabled: true,
    widget_title: "",
    inboxes: [],
  });

  const handleEmailInput = (
    key: "selected_email_addresses" | "inboxes",
    input: string
  ) => {
    const emails = input.split(",").filter((email) => email.trim() !== "");
    setData({ ...data, [key]: [...data[key], ...emails] });
  };

  const handleInboxInput = (email: string) => {
    console.log(email);
    let updatedInboxes = [...data.inboxes];
    if (updatedInboxes.includes(email)) {
      const index = updatedInboxes.indexOf(email);
      updatedInboxes.splice(index, 1);
    } else {
      updatedInboxes.push(email);
    }
    setData({ ...data, inboxes: updatedInboxes });
  };
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAwareScrollView>
        <ScrollView>
          <Text style={styles.title}>Add New MailClip</Text>
          <View style={styles.mainContainer}>
            <Card>
              <View style={styles.cardContainer}>
                <LabelText title="Show New & Unread Emails From" />
                <RadioButton
                  title="All Email Addresses"
                  checked={data.selected_email_addresses === "All"}
                  onPress={() =>
                    setData({ ...data, selected_email_addresses: "All" })
                  }
                />
                <RadioButton
                  title="Specific Email Addresses Only"
                  checked={data.selected_email_addresses !== "All"}
                  onPress={() =>
                    setData({ ...data, selected_email_addresses: [] })
                  }
                />
                {data.selected_email_addresses !== "All" && (
                  <>
                    <View>
                      <Input
                        placeholder="example@gmail.com"
                        onSubmit={(val) =>
                          handleEmailInput("selected_email_addresses", val)
                        }
                      />
                      <Text style={styles.inputDescription}>
                        add a comma after email address… and *@company.com to
                        include all emails from a specific company
                      </Text>
                    </View>
                    {data.selected_email_addresses.length > 0 && (
                      <View style={{ gap: 10 }}>
                        <Text style={styles.currentText}>
                          Current Email Addresses Selected
                        </Text>
                        {Array.isArray(data.selected_email_addresses) &&
                          data.selected_email_addresses.map((email, index) => (
                            <Text key={index} style={styles.selectedEmailText}>
                              {email}
                            </Text>
                          ))}
                      </View>
                    )}
                  </>
                )}
                <Input
                  title="Where Subject Contains The Word"
                  placeholder="Leave Blank if Not Needed"
                  onChange={(text) =>
                    setData({ ...data, word_in_subject: text })
                  }
                />
                <Input
                  title="Where Body Contains The Word"
                  placeholder="Leave Blank if Not Needed"
                  onChange={(text) => setData({ ...data, word_in_body: text })}
                />
              </View>
            </Card>
            <Card>
              <View style={styles.cardContainer}>
                <LabelText title="How Many Emails To Display" />
                <RadioButton
                  checked={data.email_count_to_display === 1}
                  title="Show 1 Email"
                  onPress={() =>
                    setData({ ...data, email_count_to_display: 1 })
                  }
                />
                <RadioButton
                  checked={data.email_count_to_display === 3}
                  title="Show 3 Emails"
                  onPress={() =>
                    setData({ ...data, email_count_to_display: 3 })
                  }
                />
                <RadioButton
                  checked={data.email_count_to_display === 5}
                  title="Show 5 Emails"
                  onPress={() =>
                    setData({ ...data, email_count_to_display: 5 })
                  }
                />
              </View>
            </Card>
            <Card>
              <View style={styles.cardContainer}>
                <LabelText title="Send Instant Push Notification" />
                <View style={styles.radioButtonsRowContainer}>
                  <RadioButton
                    checked={data.push_notification_enabled}
                    title="Yes"
                    onPress={() =>
                      setData({ ...data, push_notification_enabled: true })
                    }
                  />
                  <RadioButton
                    checked={!data.push_notification_enabled}
                    title="No"
                    onPress={() =>
                      setData({ ...data, push_notification_enabled: false })
                    }
                  />
                </View>
              </View>
            </Card>
            <Card>
              <View style={styles.cardContainer}>
                <LabelText title="Which Inboxes" />
                <View style={{ gap: 5 }}>
                  {INBOXES.map((email, index) => (
                    <AddedInbox
                      onPress={() => handleInboxInput(email)}
                      selected={data.inboxes.includes(email)}
                      key={index}
                      title={email}
                    />
                  ))}
                </View>
              </View>
            </Card>
            <Card>
              <View style={styles.cardContainer}>
                <Input
                  title="Widget Title / Name"
                  placeholder="Give Your Widget A Title"
                  onChange={(text) => setData({ ...data, widget_title: text })}
                />
              </View>
            </Card>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
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
    button: {
      paddingVertical: 20,
      fontFamily: theme.fontFamily.semiBold,
      fontSize: 20,
      backgroundColor: theme.colors.primary,
      color: theme.colors.secondary,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      fontFamily: theme.fontFamily.semiBold,
      fontSize: 17,
    },
  });
