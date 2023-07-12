
import React, {useState} from 'react';
import { Platform, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassCircleIcon } from'react-native-heroicons/outline';
import {styles} from '../theme'
import tw from 'twrnc'
import TrendingMovies from '../component/TrendingMovies';
import MovieList from './MovieList';
import { useNavigation } from '@react-navigation/native';
const ios = Platform.OS === 'ios';

function HomeScreen() {
  const Navigation = useNavigation();
    const [trending,setTrending] = useState([
        {
          image: require('../../assets/images/moviePoster.jpg'),
        },
        {
          image: require('../../assets/images/moviePoster.jpg'),
        },
        {
          image: require('../../assets/images/moviePoster.jpg'),
        },
        {
          image: require('../../assets/images/moviePoster.jpg'),
        },
      ]
      )
    const [upComing,setUpComing] = useState([1,2,3])
    const[topRated,setTopRated] = useState([1,2,3])
    return (
      <View className="flex-1 bg-neutral-800">
        <SafeAreaView className={ios ?"-mb-2":'mb-3'}>
            <StatusBar style='light'/>
            <View className="flex-row justify-between items-center mx-4">
                <Bars3CenterLeftIcon size={30} strokeWidth={1} color="white"/>
                <Text className="text-white text-3xl font-bold">
                    <Text style={styles.text}>F</Text>ilmy
                </Text>
                <TouchableOpacity onPress={()=>Navigation.navigate("SearchScreen")}>
                    <MagnifyingGlassCircleIcon size={30} strokeWidth={1} color="white"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:10}}
        >
         {/*Trending Movies View */}
         <TrendingMovies data={trending} />
         {/*Upcoming Movies View */}
         <MovieList title={"Upcoming"} data={upComing}/>
         {/*Top rated Movies View */}
         <MovieList title={"Top rated"} data={topRated}/>
        </ScrollView>
      </View>
    );
  }
  export default HomeScreen;