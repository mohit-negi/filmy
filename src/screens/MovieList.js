import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { fallbackMoviePoster, image185 } from '../api/moviedb'
import { styles } from '../theme'

export default function MovieList({ title, data, hideSeeAll }) {
  const navigation = useNavigation()
  const { width, height } = useWindowDimensions()
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    // Add any filtering logic here based on 'data' if needed
    setFilteredData(data)
  }, [data])

  const handleClick = (item) => {
    navigation.navigate('MovieScreen', item)
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleClick(item)}>
      <View style={{ marginHorizontal: 4 }}>
        <Image
          source={{
            uri: image185(item.poster_path) || fallbackMoviePoster,
          }}
          style={{
            width: width * 0.33,
            height: height * 0.22,
            borderRadius: 16,
          }}
        />
        <Text
          style={{ color: 'rgba(229, 231, 235, 1)', marginLeft: 12 }}
        >
          {item.original_title.length > 14
            ? item.original_title.slice(0, 14) + '...'
            : item.original_title}
        </Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={{ marginBottom: 8, marginTop: 4 }}>
      <View
        style={{
          marginLeft: 4,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity onPress={() => console.log('See All')}>
            <Text style={[styles.text, { fontSize: 16 }]}>
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          marginVertical: 5,
        }}
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  )
}
