import React from 'react'
import { View } from 'react-native'
import { Path, Svg } from 'react-native-svg'

const IconoHome = ({ color, size }) => {
  return (
    <View style={{ position: 'absolute', left: -4, top: -10 }}>
      <Svg width={size - 2} height={size} viewBox='0 0 22 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <Path d='M11 2L1 10V23H8V16H14V23H21V10L11 2Z' fill={color} fill-opacity='0.3' stroke={color} stroke-width='10' stroke-miterlimit='10' stroke-linecap='square' />
      </Svg>
    </View>
  )
}
export default IconoHome
