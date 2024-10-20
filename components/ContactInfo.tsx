import React from "react";
import { View, Text, Image } from "react-native";

export const ContactInfo = ({ styles }) => {
  return (
    <View style={styles.contactContainer}>
      <Image
        style={styles.contactImage}
        source={require("../assets/israeli-flag-israel.gif")}
      />
      <Text style={styles.contactText}>
        Puedes contactarme en:{"\n"}
        adrianelmasbello@lecuelgaeltello.com
      </Text>
    </View>
  );
};
