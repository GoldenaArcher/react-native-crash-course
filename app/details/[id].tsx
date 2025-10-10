import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import Profile from "../_components/_profile";

import styles from "../_style";

import { getContactById, getContactFullName } from "../../src/utils/contact";
import { User } from "../../src/data/data";

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

  return <Profile contact={contact} />;
};

export default Details;
