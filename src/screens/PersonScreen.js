import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import {
  View,
  Text,
  useWindowDimensions,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { useNavigation, useRoute } from '@react-navigation/native'

import { HeartIcon } from 'react-native-heroicons/solid'
import { styles } from '../theme'
import MovieList from './MovieList'
import axiosInstance from '../api/jsonServer'
import { image500, fallbackMoviePoster } from '../api/moviedb'
import { TMDB_API_KEY } from '@env'

export default function PersonScreen() {
  const { params: item } = useRoute()
  var { width, height } = useWindowDimensions()
  const [isFavourite, setIsFavourite] = useState(false)
  const [similarMovies, setSimilarMovies] = useState([])
  const [Loading, setLoading] = useState(false)
  const ios = Platform.OS === 'ios'
  const verticalMargin = ios ? '' : 'mx-3'
  const Navigation = useNavigation()
  const [personMovies, setPersonMovies] = useState([])
  const baseUrl = '/person/'
  const getPersonDetails = async () => {
    try {
      setLoading(true)
      const url = baseUrl + `${item.id}` + `?api_key=${TMDB_API_KEY}`
      const response = await axiosInstance.get(url)
      // console.log(response.data)
      setPersonMovies(response.data)
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error fetching Person:', error)
      setPersonMovie([])
    } finally {
      setLoading(false)
    }
  }
  const baseUrl2 = '/person/'
  const getSimilarMovies = async () => {
    try {
      setLoading(true)
      const url =
        baseUrl2 +
        `${item.id}` +
        `/movie_credits?api_key=${TMDB_API_KEY}`
      const response = await axiosInstance.get(url)
      console.log(response.data.cast[0])
      setSimilarMovies(response.data.cast)
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(
        'Error fetching similar Movies of person',
        `${item.id} :`,
        error
      )
      setSimilarMovies([])
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getPersonDetails()
    getSimilarMovies()
  }, [])
  return (
    <ScrollView
      className={'flex-1 bg-neutral-900 pt-10'}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeAreaView
        className={
          'z-20 w-full flex-row justify-between items-center px-4 border-cyan-500' +
          verticalMargin
        }
      >
        <TouchableOpacity
          className="rounded-xl p-1"
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
          onPress={() => setIsFavourite(!isFavourite)}
          className="rounded-xl p-1"
        >
          <HeartIcon
            size={28}
            strokeWidth={2.5}
            color={isFavourite ? 'red' : 'white'}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {/*Person details */}

      <View>
        <View className="flex-row justify-center">
          <View className="items-center rounded-full overflow-hidden h-72 w-72 shadow-2xl shadow-gray-50">
            <Image
              source={{
                uri:
                  image500(item.profile_path) || fallbackMoviePoster,
              }}
              // source={require('../../assets/images/moviePoster.jpg')}
              style={{ height: height * 0.4, width: width * 0.8 }}
            />
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-3xl text-white font-bold text-center">
            {item.name ? item.name : '...'}
          </Text>
          <Text className="text-base text-neutral-500 text-center">
            {personMovies.place_of_birth
              ? personMovies.place_of_birth
              : '...'}
          </Text>
        </View>
        <View className="mx-1 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full px-5 p-3">
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300 text-sm">
              {personMovies.gender == 2 ? 'Male' : 'Female'}
            </Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-300 text-sm">
              {personMovies.birthday ? personMovies.birthday : '...'}
            </Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">
              Known for
            </Text>
            <Text className="text-neutral-300 text-sm">
              {personMovies.known_for_department
                ? personMovies.known_for_department
                : '...'}
            </Text>
          </View>
          <View className=" border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">
              Popularity
            </Text>
            <Text className="text-neutral-300 text-sm">
              {personMovies.popularity
                ? personMovies.popularity + 'K'
                : '...K'}
            </Text>
          </View>
        </View>
        <View className="my-6 mx-4 spac-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide my-2">
            {personMovies?.biography}
          </Text>
        </View>
        {/*Person Movies */}
        <MovieList
          title="Movies"
          hideSeeAll={true}
          data={similarMovies}
        />
      </View>
    </ScrollView>
  )
}
