import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import styles from "../_style";
import { isAndroid } from "../../../src/utils/platform";
import { User } from "../../../src/data/data";
import { getContactFullName } from "../../../src/utils/contact";

interface ContactListItemProps {
  user: User;
}

const iconName = isAndroid ? "arrow-forward" : "chevron-forward";

function ContactListItem({ user }: ContactListItemProps) {
  const {
    picture: { thumbnail: url },
    email,
  } = user;
  const { navigate } = useRouter();

  const fullName = getContactFullName(user);

  const onPress = () => {
    navigate(`/contact/details/${user.id}`);
  };

  return (
    <View
      style={{ borderRadius: 8, overflow: "hidden", backgroundColor: "#fff" }}
    >
      <Pressable
        android_ripple={{
          color: "rgba(0, 0, 0, 0.1)",
          borderless: false,
        }}
        style={({ pressed }) => [
          styles.listItem,
          pressed && {
            backgroundColor: "rgba(0,0,0,0.05)",
            transform: [{ scale: 0.98 }],
          },
        ]}
        onPress={onPress}
      >
        <Image source={{ uri: url }} style={styles.thumbnail} />
        <View style={styles.info}>
          <Text>{fullName}</Text>
          <Text>{email}</Text>
        </View>
        <Ionicons
          name={iconName}
          size={20}
          color="#888"
          style={{ marginLeft: "auto" }}
        />
      </Pressable>
    </View>
  );
}

export default ContactListItem;
