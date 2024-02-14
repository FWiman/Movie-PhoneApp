import React from "react";
import { View, Image } from "react-native";
import styles from "./ProviderLogoStyles";

interface ProviderLogoProps {
  movieId: number;
  mediaType: "movie" | "tv";
  logos: string[];
  isInModal?: boolean;
}

const ProviderLogo: React.FC<ProviderLogoProps> = ({
  logos = [],
  isInModal = false,
}) => {
  return (
    <View style={isInModal ? styles.modalContainer : styles.container}>
      {logos &&
        logos.map((logo, index) => (
          <Image
            key={index}
            source={{ uri: logo }}
            style={isInModal ? styles.modalLogo : styles.logo}
          />
        ))}
    </View>
  );
};

export default ProviderLogo;
