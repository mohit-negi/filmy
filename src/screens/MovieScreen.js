import { View, Text, TouchableOpacity,Image ,useWindowDimensions} from 'react-native'
import React, { useEffect,useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDoubleLeftIcon, ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid'
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../component/Cast';
import MovieList from './MovieList';
import {styles} from '../theme';
export default function MovieScreen() {
    const {params: item} = useRoute();
    useEffect(()=>{
        
    },[item])
    
    const [cast,setCast] = useState([1,2,3,4,5]);
    const [isFavourite,setIsFavourite] = useState(false);
    const [similarMovies,setSimilarMovies] = useState([1,2,3,4,5]);
    const{width,height} = useWindowDimensions();
    let movieName = "Ant-man and the wasp"
    const Navigation = useNavigation();
    
  return (
    <ScrollView
        contentContainerStyle={{paddingBottom:20}}
        className="flex-1 bg-neutral-900"
    >
        {/*Back button to movie poster*/}
        <View className='w-full'>
            <SafeAreaView className="z-20 w-full flex-row justify-between items-center px-4">
                <TouchableOpacity className="rounded-xl p-1" style={styles.background} onPress={()=>Navigation.navigate("HomeScreen")}>
                    <ChevronLeftIcon size={28} strokeWidth={2.5} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity className="rounded-xl p-1" onPress={()=>setIsFavourite(!isFavourite)}>
                    <HeartIcon size={28} strokeWidth={2.5} color={isFavourite ? "red":"white"}/>
                </TouchableOpacity>
            </SafeAreaView>
            <View>
                <Image
                source={require('../../assets/images/moviePoster.jpg')}
                style={{
                    width: width,
                    height: height*0.55,}}
                />
                <LinearGradient
                    // Background Linear Gradient
                    colors={['transparent','rgba(23,23,23,0.7)', 'rgba(23,23,23,1))']}
                    style={{width:width,height:height*0.55}}
                    start={{x:0.5,y:0}}
                    end={{x:0.5,y:1}}
                    className="absolute bottom-0"
                />
            </View>

            <View style={{marginTop: -(height*0.09)}} className="space-y-3">
                <Text className="text-white text-center text-3xl font-bold tracking-wider">
                    {movieName}
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Released • 2020 • 170min
                </Text>
            </View>
            <View className="flex-row justify-center mx-5 space-x-2">
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Action •
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Thrill •
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Comedy 
                </Text>
            </View>
            {/* Description */}
            <Text className="text-neutral-400 mx-4 tracking-wide">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            {/* Cast*/}
            <Cast navigation={Navigation} cast={cast}/>
            <MovieList title="Similar Movies" data={similarMovies}/>
        </View>
    </ScrollView>
  )
}
