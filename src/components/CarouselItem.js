import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const Carousel = ({ item, index }) => {
  return (
    <View key={index}>
      <Text style={styles.texto}>{item.texto}
        <Text style={{ fontWeight: 'bold' }}>{item.texto2}</Text>
        {item.texto3}
      </Text>

    </View>
  )
}
const styles = StyleSheet.create({
  texto: {
    alignSelf: 'center',
    width: 288,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    alignItems: 'flex-end',
    textAlign: 'center',
    color: '#ffffff'
  }
})

export default Carousel
