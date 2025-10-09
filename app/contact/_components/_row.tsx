import React from "react";
import { View, Text } from "react-native";
import styles from "../_style";

const ContactRow = ({
  label,
  value,
  iconGroups,
}: {
  label: string;
  value: string;
  iconGroups?: React.ReactNode[];
}) => {
  return (
    <View style={styles.contactRow}>
      <View>
        <Text style={styles.contactRowLabel}>{label}</Text>
        <Text style={styles.contactRowValue}>{value}</Text>
      </View>
      <View style={styles.contactRowIconContainer}>{iconGroups}</View>
    </View>
  );
};

export default ContactRow;
