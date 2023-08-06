import { View, Text,Image,StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React ,{useState,useEffect}from 'react'
import Carousel from 'react-native-reanimated-carousel';
import {
  FlatList,
    GestureHandlerRootView,
  } from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { image500 } from '../api/moviedb';

export default function TrendingMovies({data}) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();
    const handleClick=(item)=>{
        navigation.navigate('MovieScreen',item)
    }
    // console.log(data)
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
      if (data && Array.isArray(data)) {
        // Filter out any undefined items from the data array
        const nonUndefinedData = data.filter((item) => item !== undefined);
        setFilteredData(nonUndefinedData);
      }
    }, [data]);
    const MovieItem = ({ item,handleClick }) => {
      // console.log(item.original_title)
      return (
        <TouchableOpacity 
        width={windowWidth}
        height={windowHeight * 0.5}
        activeOpacity={1}
        onPress={()=> handleClick(item)}
        >
        <Image 
            // source={require('../assets/images/moviePoster.jpg')} 
            source={{uri: image500(item.poster_path)}} 
            style={{
                width: windowWidth * 0.7,
                height: windowHeight * 0.5,
                marginHorizontal: windowWidth * 0.02,
                
                
                // transition: transform 0.3s cubic-bezier(0.8, 0, 1, 1);

            }}
            className="rounded-3xl" 
        />
    </TouchableOpacity>
      );
    };
    //  console.log(data.original_title)

  return (
    <GestureHandlerRootView>
    
    <View className="mb-8 w-100 " style={{width:windowWidth*2}}>
      <Text className="text-white text-xl mx-4 mb-5">Whats trending ?</Text>
      <View className = 'flex-1 pt-30 px-10 bg-neutral-800 '>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id} // Provide a unique key for each item
          
          style={
            {
              margin:0,
              marginLeft:-40,
            }
          }
          renderItem={
            
            ({item}) =>{
              
              return <MovieItem  item={item} handleClick={handleClick}/>
            }
          }
          
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
    </GestureHandlerRootView>
  )
  
}
