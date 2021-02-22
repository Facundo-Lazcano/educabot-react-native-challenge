import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Escuela1 from '../../assets/escuela1.png'
import Escuela2 from '../../assets/escuela2.png'
import Escuela3 from '../../assets/escuela3.png'

const Escuelas = () => {
  return (
    <View style={styles.container}>
      <Logos escuela={Escuela1} />
      <Logos escuela={Escuela2} />
      <Logos escuela={Escuela3} />
    </View>
  )
}

const Logos = ({ escuela }) => {
  return (
    <View style={styles.logos}>
      <Image source={escuela} style={{ height: 44, width: 44 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 80,
    justifyContent: 'space-between'
  },
  logos: {
    backgroundColor: '#ffffff',
    padding: 6,
    height: 56,
    width: 56
  }
})

export default Escuelas
