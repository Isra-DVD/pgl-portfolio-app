import React from "react";
import { Pressable, Text, Button } from "react-native";
import { styles } from "../styles";

interface NavigationButtonProps {
  onPress: () => void;
  title: string;
  isPrimary: boolean;
}

export const NavigationButton = ({
  onPress,
  title,
  isPrimary,
}: NavigationButtonProps) => {
  return isPrimary ? (
    <Pressable style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  ) : (
    <Button onPress={onPress} title={title} color="light-gray" />
  );
};
