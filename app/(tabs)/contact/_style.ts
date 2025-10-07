import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#fafafa",
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  info: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  detailProfileContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  detailProfileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  detailProfileName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  contactDetailContainer: {
    marginVertical: 12,
    paddingVertical: 12,
  },
  contactRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  contactRowLabel: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  contactRowValue: {
    fontSize: 16,
    color: "#000",
  },
  contactRowIconContainer: {
    flexDirection: "row",
    gap: 16,
  },
});

export default styles;
