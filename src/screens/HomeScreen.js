
import React, {useEffect, useState} from 'react';
import { Platform, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassCircleIcon } from'react-native-heroicons/outline';
import {styles} from '../theme'
import TrendingMovies from '../component/TrendingMovies';
import MovieList from './MovieList';
import { useNavigation } from '@react-navigation/native';
import axiosInstance,{ urls } from '../api/jsonServer';
import Loading from '../component/Loading';
const ios = Platform.OS === 'ios';

function HomeScreen() {
  const Navigation = useNavigation();
    
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular,setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getUpcomingMovies = async () => {
    try {
      setLoading(true);
      const url = urls.getUpcomingMovies + '?api_key=51a1d4627fd9c868eb918017e8c43370';
      console.log(url);
      const response = await axiosInstance.get(url);
      // Handle the response data here
      // console.log(response.data)
      setUpcoming(response.data.results);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error fetching Upcoming movies:', error);
        setUpcoming([]);
    } finally {
      setLoading(false);
    }
  };
  const getTrendingMovies = async () => {
    try {
      setLoading(true);
      const url = urls.getTrendingMovies + '?api_key=51a1d4627fd9c868eb918017e8c43370';
      console.log(url);
      const response = await axiosInstance.get(url);
      // Handle the response data here
      setTrending(response.data.results);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error fetching trending movies:', error);
        setTrending([]);
    } finally {
      setLoading(false);
    }
  };
  const getTopRatedMovies = async () => {
    try {
      setLoading(true);
      const url = urls.getTopRatedMovies + '?api_key=51a1d4627fd9c868eb918017e8c43370';
      console.log(url);
      const response = await axiosInstance.get(url);
      // Handle the response data here
      setTopRated(response.data.results);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error fetching toprated movies:', error);
        setTopRated([]);
    } finally {
      setLoading(false);
    }
  };
  const getPopularMovies = async () => {
    try {
      setLoading(true);
      const url = urls.getPopularMovies + '?api_key=51a1d4627fd9c868eb918017e8c43370';
      console.log(url);
      const response = await axiosInstance.get(url);
      // Handle the response data here
      // console.log(response.data.results)
      setPopular(response.data.results);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error fetching popular movies:', error);
        setPopular([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
    getPopularMovies();
   
  
  },[]);
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
        {loading ? <Loading/> : null}
         {/*Trending Movies View */}
         <TrendingMovies data={trending} />
         {/*Upcoming Movies View */}
         <MovieList title={"Upcoming"} data={upcoming}/>
         {/*Top rated Movies View */}
         <MovieList title={"Popular"} data={popular}/>
         {/*Top rated Movies View */}
         <MovieList title={"Top rated"} data={topRated}/>
         
        </ScrollView>
      </View>
    );
  }
  export default HomeScreen;