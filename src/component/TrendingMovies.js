// import { View, Text,Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
// import React from 'react'
// import Carousel from 'react-native-reanimated-carousel';
// import {
//     GestureHandlerRootView,
//   } from 'react-native-gesture-handler';
// import {Dimensions} from 'react-native';
// import { useNavigation } from '@react-navigation/native';


// export default function TrendingMovies({data}) {
//     const windowWidth = Dimensions.get('window').width;
//     const windowHeight = Dimensions.get('window').height;
//     const navigation = useNavigation();
//     const handleClick=()=>{
//         navigation.navigate('Movie',item)
//     }
//   return (
//     <GestureHandlerRootView>
//     <View className="mb-8">
//       <Text className="text-white text-xl mx-4 mb-5">Whats trending ?</Text>
//         <Carousel
//             data={data}
//             renderItem={({item})=><MovieCard item={item} handleClick={handleClick}></MovieCard>}
//             width={windowWidth}
//             height={windowHeight/2}
            
//             slideStyle={{display:'flex',alignItems:'center'}}
//         />
//     </View>
//     </GestureHandlerRootView>
//   )
// }
// const MovieCard = ({item,handleClick}) =>{
//     const windowWidth = Dimensions.get('window').width;
//     const windowHeight = Dimensions.get('window').height;
//     return(
//         <TouchableWithoutFeedback onPress={handleClick}>
//             <>
//             <Text className="text-white">Movies</Text>
//             <Image 
//                 source={require('../../assets/images/moviePoster.jpg')}
//                 style={{
//                     width:windowWidth/2,
//                     height:windowHeight*0.5,
//                     borderRadius: '1.5rem'

//                 }}
//                 className="rounded-3xl"
//             />
//             </>
//         </TouchableWithoutFeedback>
//     )
// }
import {
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    View,
    Text,
  } from 'react-native';
  import React from 'react';
  import MovieCard from './MovieCard';
  import {theme} from '../theme'
  const TrendingMovies = ({data}) => {
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.carouselContainer}>
          <Text className="text-white text-xl mx-4 mb-5 font-normal">What's trending ?</Text>
          <MovieCard
            data={data}
            autoPlay={true}
            pagination={true}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default TrendingMovies;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor:'#262626',
    },
    text: {textAlign: 'center', color: 'black', marginBottom: 10},
    carouselContainer: {
      marginBottom: 20,
    },
  });