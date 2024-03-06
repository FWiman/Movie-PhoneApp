import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  searchMoviesAndTvShows,
  getTrailer,
  getProviderLogoURLs,
} from "../../services/TMDB Services/api";
import MovieInfoModal from "../movieInfoModal/MovieInfoModal";
import MovieCard from "../movieCard/Moviecard";
import { Movie } from "../../types/MovieType";
import styles from "../SearchMovies/SearchMoviesStyles";
import Layout from "../Layout/Layout";

const SearchMovies = ({ route, navigation }) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);
  const [trailer, setTrailers] = useState<string | null>(null);
  const [logos, setLogos] = useState<Record<number, string[]>>({});

  const fetchProviderLogos = async (
    movieId: number,
    mediaType: "movie" | "tv"
  ) => {
    try {
      const logos = await getProviderLogoURLs(movieId, mediaType);
      setLogos((prevLogos) => ({ ...prevLogos, [movieId]: logos }));
    } catch (error) {
      console.error("Error fetching provider logos", error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const response = await searchMoviesAndTvShows(query);
      setMovies(response.results);

      response.results.forEach((movie: Movie) => {
        fetchProviderLogos(movie.id, movie.media_type);
      });
    } catch (error) {
      console.error("Error searching for movies", error);
    }
  };

  const openModal = async (movie: Movie) => {
    setSelectedMovie(movie);

    try {
      const trailerURL = await getTrailer(movie.id, movie.media_type);
      setTrailers(trailerURL);
    } catch (error) {
      console.error("Error fetching trailer", error);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const queryParam = route.params?.query;
    if (queryParam) {
      handleSearch(queryParam);
    }
  }, [route.params?.query]);

  return (
    <Layout navigation={navigation}>
      <View style={styles.searchContainer}>
        <FlatList
          style={styles.searchResults}
          numColumns={3}
          data={movies}
          scrollEnabled
          keyExtractor={(movie) => movie.id.toString()}
          renderItem={({ item: movie }) => (
            <TouchableOpacity
              style={styles.searchResultItem}
              onPress={() => openModal(movie)}
            >
              <MovieCard
                movie={movie}
                isCarouselItem={false}
                onPress={openModal}
                logos={logos[movie.id] || []}
              />
            </TouchableOpacity>
          )}
        />
        {isModalOpen && selectedMovie && (
          <MovieInfoModal
            movie={selectedMovie}
            trailer={trailer}
            onClose={closeModal}
            logos={logos[selectedMovie.id]}
          />
        )}
      </View>
    </Layout>
  );
};

export default SearchMovies;
