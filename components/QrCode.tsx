import React from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { styles } from "../styles";

export const QRCodeDisplay = () => {
  return (
    <View style={styles.qrContainer}>
      <QRCode value="https://github.com/Isra-DVD/pgl-portfolio-app.git" />
    </View>
  );
};
