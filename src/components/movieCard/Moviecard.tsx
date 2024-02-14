import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { Movie } from "../../types/MovieType";
import ProviderLogo from "../ProviderLogo/ProviderLogo";
import styles from "./MovieCardStyles";

interface MovieCardProps {
  movie: Movie;
  onPress: (movie: Movie) => void;
  isCarouselItem: boolean;
  logos: string[] | undefined;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onPress, logos }) => {
  return (
    <View style={styles.movieCard}>
      <TouchableOpacity onPress={() => onPress(movie)} activeOpacity={1}>
        {movie.poster_path ? (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
            }}
            style={styles.movieImage}
          />
        ) : (
          <View style={styles.noImageContainer}>
            <Text style={styles.noImageText}>No Image</Text>
          </View>
        )}
        <View style={styles.providerLogoContainer}>
          <ProviderLogo
            movieId={movie.id}
            mediaType={movie.media_type}
            logos={logos}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
