import React, { useState } from "react";
import { View, Text } from "react-native";
import { ProfileDescription } from "./components/ProfileDescription";
import { FavoritesList } from "./components/Hobbies";
import { NavigationButton } from "./components/NavigationButton";
import { QRCodeDisplay } from "./components/QrCode";
import { styles } from "./styles";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);

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
          <ProfileDescription />
          <Text style={styles.sectionTitle}>Cosas que me gustan mucho:</Text>
          <FavoritesList />
        </View>
      ) : (
        <QRCodeDisplay />
      )}
    </View>
  );
}
