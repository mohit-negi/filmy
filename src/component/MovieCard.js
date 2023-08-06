// // import React from 'react';
// // import { Dimensions, Image, View } from 'react-native';
// // import Carousel from 'react-native-reanimated-carousel';

// import {StyleSheet, View, Image, useWindowDimensions, TouchableOpacity} from 'react-native';
// import React, {useState, useEffect, useRef} from 'react';
// import Animated, {
//   useSharedValue,
//   useAnimatedScrollHandler,
//   useAnimatedStyle,
//   interpolate,
//   useAnimatedRef,
// } from 'react-native-reanimated';
// import MovieCardPagination from './MovieCardPagination';
// import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
// import { useNavigation } from '@react-navigation/native';
// const  MovieCard = ({data, autoPlay, pagination,item}) => {
  
//   return (
//     <View style={tailwind('flex-1 pt-30 px-10 bg-gray-200')}>
//       <FlatList
//         data={movieData}
//         renderItem={({ item }) => <MovieItem title={item.title} poster_path={item.poster_path} />}
//         keyExtractor={(item) => item.title}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//       />
      
//     </View>
//   );
// };
// // const MovieItem = ({ title, poster_path }) => {
// //   return (
// //     <View style={tailwind('mr-4 items-center')}>
// //       <Image style={tailwind('w-40 h-60 rounded-md')} source={{ }} />
// //       <Text style={tailwind('mt-2 text-lg font-bold')}>{title}</Text>
// //     </View>
// //   );
// // };