import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Text,
  useWindowDimensions,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native'
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
} from 'react-native-heroicons/outline'
import {HeartIcon} from 'react-native-heroicons/solid'
import { styles } from '../theme'
import MovieList from './MovieList'
export default function PersonScreen() {
  var { width, height } = useWindowDimensions()
  const [isFavourite, setIsFavourite] = useState(false)
  const ios = Platform.OS === 'ios'
  const verticalMargin = ios ? '' : 'mx-3'
  const Navigation = useNavigation()
  const [personMovies,setPersonMovies] = useState([1,2,3,4])
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
          onPress={() => Navigation.navigate('MovieScreen')}
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
          <View
            className="flex-row justify-center"  
          >
            <View className="items-center rounded-full overflow-hidden h-72 w-72 shadow-2xl shadow-gray-50">
              <Image 
              source={require('../../assets/images/moviePoster.jpg')}
              style={{height: height*0.73,width:width*0.74}}
              />
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-3xl text-white font-bold text-center">Keanu Reaves</Text>
            <Text className="text-base text-neutral-500 text-center">London,United Kindom</Text>   
          </View>
          <View className="mx-3 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full p-5">
            <View className="border-r-2 border-r-neutral-400 px-3 items-center">
              <Text className="text-white font-semibold">Gender</Text>
              <Text className="text-neutral-300 text-sm">Male</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-3 items-center">
              <Text className="text-white font-semibold">Birthday</Text>
              <Text className="text-neutral-300 text-sm">1964-09-02</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-3 items-center">
              <Text className="text-white font-semibold">Known for</Text>
              <Text className="text-neutral-300 text-sm">Acting</Text>
            </View>
            <View className=" border-r-neutral-400 px-3 items-center">
              <Text className="text-white font-semibold">Popularity</Text>
              <Text className="text-neutral-300 text-sm">91.2</Text>
            </View>
          </View>
          <View className="my-6 mx-4 spac-y-2">
            <Text className="text-white text-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide my-2">Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .sr-only class.Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .sr-only class.Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .sr-only class.</Text>
          </View>
          {/*Person Movies */}
          <MovieList title="Movies" hideSeeAll={true} data={personMovies} />
        </View>
        
      
    </ScrollView>
  )
}
