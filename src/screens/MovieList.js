import { View, Text, Image, useWindowDimensions } from 'react-native'
import React,{useEffect, useState} from 'react'
import {styles} from '../theme'
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
export default function MovieList({title,data,hideSeeAll}) {
    let movieName = "Ant-man and the wasp"
    const navigation = useNavigation();
    const {width,height} = useWindowDimensions();
    
  return (
    <View className="mb-8 space-y-4">
        <View className="mx-4 flex-row justify-between items-center">
            <Text className="text-white text-xl">{title}</Text>
            {!hideSeeAll &&(<TouchableOpacity>
                <Text style={styles.text}  className="text-lg">See All</Text>
            </TouchableOpacity>)}
        </View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
        >
        {
            data.map((item,index)=>{
                return(
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={()=>navigation.navigate('Movie',item)}
                    >
                        <View className="space-y-l mr-4">
                            <Image
                                source={require('../../assets/images/moviePoster.jpg')}
                                className="rounded-3xl"
                                style={{width: width*0.33,height:height*0.22}}
                            />
                            <Image/>
                        <Text className="text-neutral-300 ml-l">
                            {movieName.length > 14 ? movieName.slice(0,14)+'...':movieName
                            }
                        </Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            })
        }
        </ScrollView>
    </View>
  )
}