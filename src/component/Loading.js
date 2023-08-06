import { View, Text } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import * as Progress from 'react-native-progress'
import {theme} from '../theme'
export default function Loading() {
    var { width, height } = useWindowDimensions()
  return (
    <View style={{height,width}} className="absolute flex-row justify-center items-center">
      <Progress.CircleSnail thickness={12} size={160} color={theme.background}/>
    </View>
  )
}