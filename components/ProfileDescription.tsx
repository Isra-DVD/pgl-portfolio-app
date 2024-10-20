import React from "react";
import { View, Text, Image } from "react-native";

export const ProfileDescription = ({ styles }) => {
  return (
    <View style={styles.profileContainer}>
      <Image
        style={styles.avatar}
        source={require("../assets/capitanIsra.jpg")}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Descripción sobre mí!</Text>
        <Text style={styles.descriptionText}>
          Me llamo Israel como el estado ilegítimo pero soy mucho más buena
          onda. Este trabajo es una practica de programación multimedia
        </Text>
      </View>
    </View>
  );
};
