import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "..//styles"; // Importamos los estilos

export const ProfileDescription = () => {
  return (
    <View style={styles.profileContainer}>
      <Image
        style={styles.avatar}
        source={require("../assets/SofyanAmrabat.jpg")} // Ajusta la ruta de la imagen
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Descripción sobre mí!</Text>
        <Text style={styles.descriptionText}>
          Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
          prácticas para mis queridos alumnos
        </Text>
      </View>
    </View>
  );
};
