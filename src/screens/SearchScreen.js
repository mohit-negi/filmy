import { View, Text, TouchableOpacity,TextInput,Image, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
export default function SearchScreen() {
    const Navigation = useNavigation();
    const[Results,setResults] = useState([1,2,3,4])
    var { width, height } = useWindowDimensions()
    const movieName = "Ant man and quantummania";
    
  return (
    <SafeAreaView className="bg-neutral-800 flex-1">

        <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
            <TextInput
                placeholder='Search Movie'
                placeholderTextColor={'lightgray'}
                className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
            />
            <TouchableOpacity
                onPress={()=>{Navigation.navigate("HomeScreen")}}
                className="rounded-full p-3 m-1 bg-neutral-500"
            >
            <XMarkIcon size={25} color={"white"} />
            </TouchableOpacity>
        </View>
        {
            Results.length > 0?(
                <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:15}}
        className="space-y-3"
      >
        <Text className="text-white font-semibold m-1">Results({Results.length})</Text>
        <View className="flex-row justify-between flex-wrap">
            {
                Results.map((item,index)=>{
                    return(
                        <TouchableOpacity
                        key={index}
                        onPress={()=>Navigation.navigate("MovieScreen",item)}
                        >
                        <View className="space-y-2 mb-4">
                        <Image
                            className="rounded-3xl"
                            source={require("../../assets/images/moviePoster.jpg")}
                            style={{width:width*0.44,height:height*0.3}}
                        />
                        <Text className="text-neutral-400 ml-1">{movieName.length > 22 ? movieName.slice(0,22)+"..." : movieName}</Text>
                        </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
      </ScrollView>
            ):(
                <View className="flex-row justify-center">
                    <Image 
                    className="h-96 w-96"
                    source={require("../../assets/images/moviePoster.jpg")}
                    style={{width:width*0.44,height:height*0.3}}
                    />
                </View>
            )
        }
      
    </SafeAreaView>
  )
}