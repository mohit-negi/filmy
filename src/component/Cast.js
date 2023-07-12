import { View, Text, TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
export default function Cast({cast}) {
    const [characterName,setCharacterName] = useState("John Wick")
    const [personName,setPersonName] = useState("Keanu Reaves")
    const navigation = useNavigation();
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
                        onPress={()=>{navigation.navigate("PersonScreen")}}
                        key={index}
                        className="mr-4 itemm-center"
                    >   
                    <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                        <Image
                            className="rounded-2xl h-24 w-20"
                            source={require('../../assets/images/moviePoster.jpg')}
                        />
                    </View>
                    <Text className="text-white text-xs mt-1">
                        {
                            characterName.length > 10 ? characterName.slice(0,10)+'...':characterName
                        }
                    </Text>
                    <Text className="text-neutral-400 text-xs mt-1">
                        {
                            personName.length > 10 ? personName.slice(0,10)+'...':personName
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