import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { ProfileDescription } from "./components/ProfileDescription";
import { Hobbies } from "./components/Hobbies";
import { NavigationButton } from "./components/NavigationButton";
import { QrCode } from "./components/QrCode";
import { ContactInfo } from "./components/ContactInfo"; // Importamos el nuevo componente
import { stylesLight, stylesDark } from "./styles";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false); // Nuevo estado para mostrar el contacto

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const styles = isDarkTheme ? stylesDark : stylesLight;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>My Portfolio App</Text>
        <View style={styles.buttonContainer}>
          <NavigationButton
            onPress={() => setDisplayMyQR(true)}
            title="Mi info"
            isPrimary={true}
          />
          <NavigationButton
            onPress={() => setDisplayMyQR(false)}
            title="Mi Repo"
            isPrimary={false}
          />
        </View>
      </View>

      {displayMyQR ? (
        <View style={styles.contentContainer}>
          <ProfileDescription styles={styles} />

          {/* Botón para alternar el tema */}
          <Button
            title={
              isDarkTheme ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"
            }
            onPress={toggleTheme}
          />

          <Text style={styles.sectionTitle}>Cosas que me gustan mucho:</Text>
          <Hobbies styles={styles} />
        </View>
      ) : (
        <QrCode styles={styles} />
      )}

      <Button
        title={showContactInfo ? "Ocultar Contacto" : "Mostrar Contacto"}
        onPress={() => setShowContactInfo(!showContactInfo)}
      />

      {showContactInfo && <ContactInfo styles={styles} />}
    </View>
  );
}
