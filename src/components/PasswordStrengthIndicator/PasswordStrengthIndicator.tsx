import React from "react";
import { View, Text } from "react-native";
import styles from "./PasswordStrengthIndicatorStyles";

const PasswordStrengthIndicator = ({ passwordStrength }) => {
  const strengthColors = ["red", "orange", "yellow", "lightgreen", "green"];
  const strengthText = ["", "Weak", "Fair", "Good", "Strong"];

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.strengthMeter,
          {
            backgroundColor: strengthColors[passwordStrength],
            width: `${(passwordStrength + 1) * 20}%`,
          },
        ]}
      >
        <Text style={styles.strengthText}>
          {strengthText[passwordStrength]}
        </Text>
      </View>
    </View>
  );
};

export default PasswordStrengthIndicator;
