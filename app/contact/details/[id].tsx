import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { getContactById, getContactFullName } from "../../../src/utils/contact";

import styles from "../_style";
import { User } from "../../../src/data/data";
import { toPhoneNumber } from "../../../src/utils/string";
import { isIOS } from "../../../src/utils/platform";

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
      <View>
        <View style={styles.detailAction}>
          <View>
            <Text style={styles.detailActionLabel}>Email</Text>
            <Text style={styles.detailActionValue}>{contact.email}</Text>
          </View>
          <View style={styles.detailActionIcons}>
            <Ionicons name="mail" size={32} color="#888" />
          </View>
        </View>
        <View style={styles.detailAction}>
          <View>
            <Text style={styles.detailActionLabel}>Cell</Text>
            <Text style={styles.detailActionValue}>
              {toPhoneNumber(contact.cell)}
            </Text>
          </View>
          <View style={styles.detailActionIcons}>
            <Ionicons name="call" size={32} color="#888" />
            <Ionicons
              name={
                isIOS ? "chatbubble-ellipses" : "chatbox-ellipses"
              }
              size={32}
              color="#888"
            />
          </View>
        </View>
        <View style={styles.detailAction}>
          <View>
            <Text style={styles.detailActionLabel}>Home</Text>
            <Text style={styles.detailActionValue}>
              {toPhoneNumber(contact.phone)}
            </Text>
          </View>
          <View style={styles.detailActionIcons}>
            <Ionicons name="call" size={32} color="#888" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Details;
