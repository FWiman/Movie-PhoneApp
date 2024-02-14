import React from "react";
import {
  View,
  Text,
  Image,
  Modal,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { WebView } from "react-native-webview";
import ProviderLogo from "../ProviderLogo/ProviderLogo";
import { Movie } from "../../types/MovieType";
import styles from "./MovieInfoModalStyles";
import { LinearGradient } from "expo-linear-gradient";

interface MovieInfoModalProps {
  movie: Movie;
  trailer: string | null;
  onClose: () => void;
  logos: string[] | string;
}

const MovieInfoModal: React.FC<MovieInfoModalProps> = ({
  movie,
  trailer,
  onClose,
  logos,
}) => {
  const title = movie.title || movie.name;
  const releaseDate = movie.release_date || movie.first_air_date;

  function getParameterByName(name: string, url: string) {
    if (!url) return null;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  const trailerUrl = `https://www.youtube.com/embed/${getParameterByName(
    "v",
    trailer
  )}`;

  const logosArray = Array.isArray(logos) ? logos : [logos];

  return (
    <Modal animationType="slide" visible={true} presentationStyle="fullScreen">
      <ScrollView style={styles.modalBackdrop}>
        <LinearGradient
          colors={["#acaa98", "#feefd0"]}
          style={styles.modalContent}
        >
          <TouchableOpacity
            style={styles.closeButtonContainer}
            onPress={onClose}
          >
            <Text style={styles.closeButton}>x</Text>
          </TouchableOpacity>
          <View style={styles.moviePosterContainer}>
            {movie.poster_path && (
              <Image
                style={styles.moviePoster}
                source={{
                  uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
                }}
              />
            )}
          </View>
          <View style={styles.movieInfoHeader}>
            <Text style={styles.movieTitle}>{title}</Text>
            <Text style={styles.releaseDate}>({releaseDate})</Text>
          </View>
          <ProviderLogo
            movieId={movie.id}
            mediaType={movie.media_type}
            logos={logosArray}
            isInModal={true}
          />
          <View style={styles.movieDetails}>
            <Text style={styles.overview}>{movie.overview}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>
                IMDB: {movie.vote_average.toFixed(1)}
              </Text>
            </View>
          </View>
          {trailer && (
            <WebView
              style={{
                alignSelf: "stretch",
                height: 300,
                width: "100%",
              }}
              javaScriptEnabled={true}
              source={{
                uri: trailerUrl,
              }}
            />
          )}
        </LinearGradient>
        <View style={styles.footer}></View>
      </ScrollView>
    </Modal>
  );
};

export default MovieInfoModal;
