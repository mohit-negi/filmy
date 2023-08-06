import { View, Text, TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { fallbackPersonImage, image185, image342 } from '../api/moviedb';

export default function Cast({cast,Navigation}) {
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:15}}
      >
        {
            cast && cast.map((person,index)=>{
                return(
                    <TouchableOpacity
                        onPress={()=>{Navigation.navigate("PersonScreen")}}
                        key={index}
                        className="mr-4 itemm-center"
                    >   
                    <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                        <Image
                            className="rounded-2xl h-24 w-20"
                            // source={require('../assets/images/castImage1.png')} 
                            source={{uri: image185(person?.profile_path) || fallbackPersonImage}}
                        />
                    </View>
                    <Text className="text-white text-xs mt-1">
                        {
                            person?.character.length>10? person.character.slice(0,10)+'...' : person?.character
                        }
                    </Text>
                    <Text className="text-neutral-400 text-xs">
                        {
                            person?.original_name.length>10? person.original_name.slice(0,10)+'...' : person?.original_name
                        }
                    </Text>
                    </TouchableOpacity>

                )
            })
        }
      </ScrollView>

    </View>
  )
}