import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import styles from "./TrendingContentStyles";
import MovieCard from "../movieCard/Moviecard";
import MovieInfoModal from "../movieInfoModal/MovieInfoModal";
import { Movie } from "../../types/MovieType";

import {
  getProviderLogoURLs,
  getTrailer,
  getTrendingMovies,
  getTrendingTvShows,
  getTopRatedMovies,
  getTopRatedTvShows,
} from "../../services/TMDB Services/api";
import Layout from "../Layout/Layout";

const TrendingContent = ({ navigation }) => {
  const [trendingMovies, setTrendingMovies] = useState<any[]>([]);
  const [trendingTvShows, setTrendingTvShows] = useState<any[]>([]);
  const [providers, setProviders] = useState<{ [key: number]: any }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [trailers, setTrailers] = useState<{ [key: number]: string | null }>(
    {}
  );
  const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]);
  const [topRatedTvShows, setTopRatedTvShows] = useState<any[]>([]);
  const [topRatedTrailers, setTopRatedTrailers] = useState<{
    [key: number]: string | null;
  }>({});
  const [topRatedProviders, setTopRatedProviders] = useState<{
    [key: number]: any;
  }>({});
  const [logos, setLogos] = useState<string[]>([]);

  const openModal = async (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
    const trailerURL = await getTrailer(movie.id, movie.media_type);
    setTrailers((prevTrailer) => ({ ...prevTrailer, [movie.id]: trailerURL }));
    const providerLogos = await getProviderLogoURLs(movie.id, movie.media_type);
    setLogos(providerLogos);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const windowWidth = Dimensions.get("window").width;

  useEffect(() => {
    const fetchContent = async (
      fetchMoviesFunction: { (): Promise<any>; (): Promise<any>; (): any },
      fetchTvShowsFunction: {
        (): Promise<{ results: never[] }>;
        (): Promise<any>;
        (): any;
      },
      setMoviesState: {
        (value: React.SetStateAction<any[]>): void;
        (value: React.SetStateAction<any[]>): void;
        (arg0: any): void;
      },
      setTvShowsState: {
        (value: React.SetStateAction<any[]>): void;
        (value: React.SetStateAction<any[]>): void;
        (arg0: any): void;
      },
      setTrailersState: {
        (value: React.SetStateAction<{ [key: number]: string | null }>): void;
        (value: React.SetStateAction<{ [key: number]: string | null }>): void;
        (arg0: any): void;
      },
      setProvidersState: {
        (value: React.SetStateAction<{ [key: number]: any }>): void;
        (value: React.SetStateAction<{ [key: number]: any }>): void;
        (arg0: any): void;
      }
    ) => {
      try {
        const moviesResponse = await fetchMoviesFunction();
        const tvShowsResponse = await fetchTvShowsFunction();

        const moviesData = moviesResponse.results;
        const tvShowsData = tvShowsResponse.results;

        const providerPromises = [
          ...moviesData.map((movie: { id: number }) =>
            getProviderLogoURLs(movie.id, "movie")
          ),
          ...tvShowsData.map((tvShow: { id: number }) =>
            getProviderLogoURLs(tvShow.id, "tv")
          ),
        ];

        const trailerPromises = [
          ...moviesData.map((movie: { id: number }) =>
            getTrailer(movie.id, "movie")
          ),
          ...tvShowsData.map((tvShow: { id: number }) =>
            getTrailer(tvShow.id, "tv")
          ),
        ];

        const trailerDataList = await Promise.all(trailerPromises);
        const providerDataList = await Promise.all(providerPromises);

        const newTrailers = trailerDataList.reduce((acc, data, index) => {
          const allItems = [...moviesData, ...tvShowsData];
          acc[allItems[index].id] = data;
          return acc;
        }, {});

        const newProviders = providerDataList.reduce((acc, data, index) => {
          const allItems = [...moviesData, ...tvShowsData];
          acc[allItems[index].id] = data;
          return acc;
        }, {});

        setMoviesState(moviesData);
        setTvShowsState(tvShowsData);
        setTrailersState(newTrailers);
        setProvidersState(newProviders);
      } catch (error) {
        console.error("Error fetching content", error);
      }
    };

    fetchContent(
      getTrendingMovies,
      getTrendingTvShows,
      setTrendingMovies,
      setTrendingTvShows,
      setTrailers,
      setProviders
    );

    fetchContent(
      getTopRatedMovies,
      getTopRatedTvShows,
      setTopRatedMovies,
      setTopRatedTvShows,
      setTopRatedTrailers,
      setTopRatedProviders
    );
  }, []);

  return (
    <Layout navigation={navigation}>
      <View style={styles.carouselWrapper}>
        <View style={styles.carouselContainer}>
          <Text style={styles.carouselContainerH2}>
            Trending Movies This Week
          </Text>
          <View style={styles.carouselItem}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {trendingMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onPress={openModal}
                  isCarouselItem
                  logos={providers[movie.id] || []}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.carouselContainer}>
          <Text style={styles.carouselContainerH2}>
            Trending TV Shows This Week
          </Text>
          <View style={styles.carouselItem}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {trendingTvShows.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onPress={openModal}
                  isCarouselItem
                  logos={providers[movie.id] || []}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.carouselContainer}>
          <Text style={styles.carouselContainerH2}>Top Rated Movies</Text>
          <View style={styles.carouselItem}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {topRatedMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onPress={openModal}
                  isCarouselItem
                  logos={providers[movie.id] || []}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.carouselContainer}>
          <Text style={styles.carouselContainerH2}>Top Rated TV Shows</Text>
          <View style={styles.carouselItem}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {topRatedTvShows.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onPress={openModal}
                  isCarouselItem
                  logos={providers[movie.id] || []}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        {isModalOpen && selectedMovie && (
          <MovieInfoModal
            movie={selectedMovie}
            trailer={
              trailers[selectedMovie.id] || topRatedTrailers[selectedMovie.id]
            }
            onClose={closeModal}
            logos={
              providers[selectedMovie.id] ||
              topRatedProviders[selectedMovie.id] ||
              []
            }
          />
        )}
      </View>
    </Layout>
  );
};

export default TrendingContent;
