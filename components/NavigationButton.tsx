import React from "react";
import { Pressable, Text } from "react-native";

export const NavigationButton = ({ onPress, title, isPrimary }) => {
  return (
    <Pressable
      style={[
        { ...styles.button, backgroundColor: isPrimary ? "blue" : "gray" },
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = {
  button: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};
