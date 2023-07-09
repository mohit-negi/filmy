
import React, {useState} from 'react';
import { Platform, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassCircleIcon } from'react-native-heroicons/outline';
import {styles} from '../theme'
import tw from 'twrnc'
import TrendingMovies from '../component/TrendingMovies';
const ios = Platform.OS === 'ios';

function HomeScreen() {
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
    return (
      <View className="flex-1 bg-neutral-800">
        <SafeAreaView className={ios ?"-mb-2":'mb-3'}>
            <StatusBar style='light'/>
            <View className="flex-row justify-between items-center mx-4">
                <Bars3CenterLeftIcon size={30} strokeWidth={1} color="white"/>
                <Text className="text-white text-3xl font-bold">
                    <Text style={styles.text}>F</Text>ilmy
                </Text>
                <TouchableOpacity>
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
        </ScrollView>
      </View>
    );
  }
  export default HomeScreen;