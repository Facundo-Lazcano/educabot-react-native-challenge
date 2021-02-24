import React from 'react'
import { View } from 'react-native'
import { Path, Svg, Circle } from 'react-native-svg'

const IconoPeople = ({ color }) => {
  return (
    <View style={{ position: 'absolute', left: -4, top: -10 }}>
      <Svg width='24' height='24' viewBox='0 0 24 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <Path d='M7 17L7.19739 14.073C7.40147 11.48 9.15122 10 12.0017 10C14.8521 10 16.6019 11.48 16.806 14.0565L17 17' stroke={color} stroke-width='2' />
        <Path d='M5.00134 12C2.72098 12 1.32118 13.0571 1.15791 14.9093L1 17' stroke={color} stroke-width='3' />
        <Path d='M19 12C21.2796 12 22.6789 13.0571 22.8421 14.9093L23 17' stroke={color} stroke-width='3' />
        <Circle cx='12' cy='4' r='3' stroke={color} stroke-width='3' />
        <Circle cx='4' cy='7' r='3' stroke={color} stroke-width='3' />
        <Circle cx='20' cy='7' r='3' stroke={color} stroke-width='3' />
      </Svg>
    </View>
  )
}

export default IconoPeople
