import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  descriptionContainer: {
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
    width: "70%",
  },
  descriptionTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  descriptionText: {
    textAlign: "center",
  },
});
