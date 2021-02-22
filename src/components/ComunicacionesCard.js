import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { data } from './comunicacionesData'

const { width, height } = Dimensions.get('window')

const ComunicacionesCard = ({ noLeidos }) => {
  return (
    data.map((user) => {
      const [leido, setLeido] = useState(false)

      return (
        <TouchableOpacity
          key={user.id} style={styles.card} onPress={() => {
            setLeido(true)
          }}
        >

          <View>
            <Image
              style={styles.image}
              resizeMode='cover'
              source={{ uri: user.avatar }}
            />
          </View>
          <View style={{ width: width * 0.7, flexDirection: 'column', position: 'relative' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'relative' }}>
              <Text style={styles.cardTextoNegrita}>{user.nombre}</Text>
              {
            noLeidos && leido === false
              ? <View style={styles.noLeido} />
              : null
            }
            </View>
            <Text style={styles.cardTextoNegrita}>{user.institucion}</Text>
            <Text ellipsizeMode='tail' numberOfLines={3}>
              <Text style={styles.cardTextoNegrita}>{user.mensajeTitulo} • </Text>
              <Text style={styles.cardTextoComun}>{user.mensajeDescripcion}</Text>
            </Text>
            <Text style={styles.cardTextoFecha}>{user.fecha}</Text>
          </View>
        </TouchableOpacity>
      )
    })
  )
}

const styles = StyleSheet.create({
  card: {
    height: height * 0.20,
    width: width,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: '#F8F8F6',
    borderWidth: 1,
    backgroundColor: '#ffffff'
  },
  noLeido: {
    backgroundColor: '#27A8FF',
    height: 8,
    width: 8,
    borderRadius: 50,
    position: 'absolute',
    left: 267,
    top: 5,
    zIndex: 9999
  },
  image: {
    height: 44,
    width: 44,
    borderRadius: 5,
    marginRight: 16
  },
  cardTextoNegrita: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18.23,
    color: '#000000'
  },
  cardTextoComun: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: '#000000'
  },
  cardTextoFecha: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 16,
    color: '#6D7878',
    marginTop: 8
  }
})

export default ComunicacionesCard
