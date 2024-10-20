import React from "react";
import { ScrollView, Text } from "react-native";

export const Hobbies = ({ styles }) => {
  const favoriteItems = [
    "Quedar con mis colegas",
    "Salir a caminar al monte",
    "Ir a la playita",
    "Sabados de fiesta",
    "Domingos de resurrección",
    "Casita y videojuegos",
    "Viajar pero soy pobre asi que está tenso",
    "Música variadita pero más tecnusa que otra cosa",
    "Hacer deporte",
    "Ducharme muy de vez en cuando (estudio informática)",
    "Baitybait y AlexelCapso",
    "Ir de cena romántica con mi antiguo tutor ;);)codocodo",
  ];

  return (
    <ScrollView style={styles.scrollContainer}>
      {favoriteItems.map((item, index) => (
        <Text key={index} style={styles.favoritesItem}>
          {item}
        </Text>
      ))}
    </ScrollView>
  );
};
