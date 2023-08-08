import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { LinearGradient } from 'expo-linear-gradient';
import MovieList from './MovieList';
import { styles } from '../theme';
import Loading from '../component/Loading';
import Cast from '../component/Cast';
import {
  image800,
  image500,
  fallbackMoviePoster,
} from '../api/moviedb'
import axiosInstance from '../api/jsonServer'
import { TMDB_API_KEY } from '@env'

export default function MovieScreen() {
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])
  const { width, height } = useWindowDimensions()
  const [isFavourite, setIsFavourite] = useState(false)
  const { params: item } = useRoute()
  const Navigation = useNavigation()
  const moviesDate = new Date(item.release_date).setHours(0, 0, 0, 0)
  const todaysDate = new Date().setHours(0, 0, 0, 0)
  const baseUrl = '/movie/'
  const similarUrl =
    'https://api.themoviedb.org/3/movie/{movie_id}/similar'
  const getMovieCasts = async () => {
    try {
      setLoading(true)
      const url =
        baseUrl +
        `${item.id}` +
        `?api_key=${TMDB_API_KEY}&append_to_response=credits`
      const response = await axiosInstance.get(url)
      setCast(response.data.credits.cast)
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error fetching Movie Cast:', error)
      setCast([])
    } finally {
      setLoading(false)
    }
  }
  const getSimilarMovies = async () => {
    try {
      setLoading(true)
      const url =
        baseUrl + `${item.id}` + `/similar?api_key=${TMDB_API_KEY}`
      const response = await axiosInstance.get(url)
      setSimilarMovies(response.data.results)
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error fetching Similar Movies:', error)
      setSimilarMovies([])
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    setMovie(item)
    getMovieCasts()
    getSimilarMovies()
    // console.log(cast)
  }, [item])
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      {/* Back button to movie poster */}
      <View className="w-full">
        <SafeAreaView className="z-20 w-full flex-row justify-between items-center px-4  absolute top-0">
          <TouchableOpacity
            className="rounded-xl p-1 "
            style={styles.background}
            onPress={() => Navigation.goBack()}
          >
            <ChevronLeftIcon
              size={28}
              strokeWidth={2.5}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            className="rounded-xl p-1"
            onPress={() => setIsFavourite(!isFavourite)}
          >
            <HeartIcon
              size={28}
              strokeWidth={2.5}
              color={isFavourite ? 'red' : 'white'}
            />
          </TouchableOpacity>
        </SafeAreaView>
        {loading ? (
          <Loading />
        ) : (
          <View>
            <Image
              // source={require('../assets/images/moviePoster2.png')}
              source={{
                uri:
                  image800(movie.poster_path) || fallbackMoviePoster,
              }}
              style={{ width, height: height * 0.55 }}
            />
            <LinearGradient
              colors={[
                'transparent',
                'rgba(23, 23, 23, 0.8)',
                'rgba(23, 23, 23, 1)',
              ]}
              style={{ width, height: height * 0.4 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0"
            />
          </View>
        )}
      </View>
      {/* movie details */}
      <View
        style={{ marginTop: -(height * 0.09) }}
        className="space-y-3"
      >
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movie.title ? movie.title : '...........'}
        </Text>
        {movie?.id ? (
          <Text className="text-neutral-400 font-semibold text-base text-center">
            {moviesDate < todaysDate ? 'Released •' : 'Upcoming •'}{' '}
            {movie?.release_date?.split('-')[0] || 'N/A'} •{' '}
            {movie?.runtime} min
          </Text>
        ) : null}
        {/* genres  */}
        <View className="flex-row justify-center mx-4 space-x-2">
          {movie?.genres?.map((genre, index) => {
            let showDot = index + 1 !== movie.genres.length
            return (
              <Text
                key={index}
                className="text-neutral-400 font-semibold text-base text-center"
              >
                {genre?.name} {showDot ? '•' : null}
              </Text>
            )
          })}
        </View>
        {/* description */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          {movie?.overview}
        </Text>
      </View>
      {/* cast */}
      {movie?.id && cast.length > 0 && (
        <Cast Navigation={Navigation} cast={cast} />
      )}

      {/* similar movies section */}
      {movie?.id && similarMovies.length > 0 && (
        <MovieList
          title={'Similar Movies'}
          hideSeeAll={true}
          data={similarMovies}
        />
      )}
    </ScrollView>
  )
}
