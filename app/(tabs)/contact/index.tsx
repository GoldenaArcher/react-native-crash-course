import React from "react";
import { View, FlatList } from "react-native";

import styles from "./_style";

import { contacts } from "../../../src/data/data";
import ContactListItem from "./_components/_contact-list-item";

const index = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(contact) => contact.email}
      />
    </View>
  );
};

export default index;
