import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "../styles";

export const FavoritesList = () => {
  const favoriteItems = [
    "Salir a pasear",
    "Senderismo",
    "Ir a la playita",
    "Domingos de misa",
    "La guitarrita",
    "El monte con lluvia",
    "Viajar",
    "Música variadita",
    "Anime",
    "Ducharme",
    "Videojuegos",
    "Ir de cenar romántica",
  ];

  return (
    <ScrollView style={styles.scrollContainer}>
      {favoriteItems.map((item, index) => (
        <Text key={index} style={styles.hobbies}>
          {item}
        </Text>
      ))}
    </ScrollView>
  );
};
