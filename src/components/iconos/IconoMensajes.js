import React from 'react'
import { View } from 'react-native'
import { Svg, Path, Line } from 'react-native-svg'

const IconoMensajes = ({ color, size }) => {
  return (
    <View style={{ position: 'absolute', left: -4, top: -10 }}>
      <Svg width={size} height={size} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <Path d='M14.5 1.15489C13.426 1.0619 12.244 1 11 1C8.53559 1 6.31411 1.24293 4.69477 1.48932C3.00472 1.74648 1.66565 2.98488 1.37546 4.66957C1.17321 5.84372 1 7.33525 1 9C1 10.6647 1.17321 12.1563 1.37546 13.3304C1.62456 14.7766 2.64656 15.8939 4 16.344V19.7476C4 20.5219 4.84211 21.0024 5.50873 20.6085L11.6241 16.9949C13.8384 16.9586 15.8238 16.7361 17.3052 16.5107C18.9953 16.2535 20.3344 15.0151 20.6245 13.3304C20.8268 12.1563 21 10.6647 21 9C21 8.29904 20.9693 7.62878 20.9186 7' stroke={color} stroke-width='3' />
        <Line x1='6' y1='7' x2='16' y2='7' stroke={color} stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
        <Line x1='6' y1='11' x2='10' y2='11' stroke={color} stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
      </Svg>

    </View>
  )
}

export default IconoMensajes
