import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { getContactById, getContactFullName } from "../../../../src/utils/contact";

import styles from "../_style";
import { User } from "../../../../src/data/data";
import {
  capitializeFirstLetter,
  toPhoneNumber,
} from "../../../../src/utils/string";
import { isIOS } from "../../../../src/utils/platform";
import ContactRow from "../_components/_row";
import { getMonthDayYear } from "../../../../src/utils/date";

const Details = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const [contact, setContact] = useState<User | null>(null);

  useEffect(() => {
    const contact = getContactById(id as string);

    if (!contact) {
      return;
    }

    setContact(contact);
  }, [id]);

  useEffect(() => {
    if (contact?.name) {
      navigation.setOptions({ title: getContactFullName(contact) });
    }
  }, [contact, navigation]);

  if (!contact) {
    return (
      <View style={styles.container}>
        <Text>Contact not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* profile header */}
      <View style={styles.detailProfileContainer}>
        <Image
          source={{ uri: contact.picture.large }}
          style={styles.detailProfileImage}
        />
        <Text style={styles.detailProfileName}>
          {getContactFullName(contact)}
        </Text>
      </View>
      {/* action details */}
      <View
        style={[styles.contactDetailContainer, { backgroundColor: "#fff" }]}
      >
        <ContactRow
          label="Email"
          value={contact.email}
          iconGroups={[
            <Ionicons key="email" name="mail" size={32} color="#888" />,
          ]}
        />
        <ContactRow
          label="Cell"
          value={toPhoneNumber(contact.cell)}
          iconGroups={[
            <Ionicons key="call" name="call" size={32} color="#888" />,
            <Ionicons
              key="message"
              name={isIOS ? "chatbubble-ellipses" : "chatbox-ellipses"}
              size={32}
              color="#888"
            />,
          ]}
        />
        <ContactRow
          label="Home"
          value={toPhoneNumber(contact.phone)}
          iconGroups={[
            <Ionicons key="call" name="call" size={32} color="#888" />,
          ]}
        />
      </View>
      {/* bio & info */}
      <View>
        <ContactRow
          label="City"
          value={capitializeFirstLetter(contact.location.city)}
        />
        <ContactRow label="Birthday" value={getMonthDayYear(contact.dob)} />
        <ContactRow
          label="Registered"
          value={getMonthDayYear(contact.registered)}
        />
        <ContactRow label="Username" value={contact.login.username} />
      </View>
    </View>
  );
};

export default Details;
