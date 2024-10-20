import React from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export const QrCode = ({ styles }) => {
  return (
    <View style={styles.qrContainer}>
      <QRCode value="https://github.com/Isra-DVD/pgl-portfolio-app.git" />
    </View>
  );
};
