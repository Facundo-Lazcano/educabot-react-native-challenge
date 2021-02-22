import React, { useState } from 'react'
import {
  Text,
  View, StyleSheet,
  Image, ScrollView,
  Dimensions,
  SafeAreaView
} from 'react-native'
import { CheckBox } from 'react-native-elements'
import Feather from 'react-native-vector-icons/Feather'
import Escuela1 from '../../../assets/escuela1.png'
import Calendario from '../../components/Calendario'
import ComunicacionesCard from '../../components/ComunicacionesCard'

const { height } = Dimensions.get('window')

const HomeScreen = () => {
  const [checked, setChecked] = useState(false)
  const [noLeidos, setNoLeidos] = useState(true)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.image}>
          <Image source={Escuela1} style={{ height: height * 0.040, width: height * 0.040 }} />
        </View>
        <Feather.Button name='bell' size={height * 0.04} style={{ padding: 0 }} backgroundColor='#27A8FF' />
      </View>
      <ScrollView>
        <View style={{ marginVertical: 40, marginHorizontal: 24 }}>
          <Text style={styles.titulo1}>👋 Hola Candelaria</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={styles.titulo2}>Mamá de </Text>
            <View style={styles.hijo}>
              <Text style={styles.titulo2}>Luciano</Text>
              <Feather name='arrow-right' color='#ffffff' size={16} />
            </View>
          </View>
          <View style={{ height: 0, borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, marginVertical: 24 }} />
          <Text style={styles.novedades}>💡 A continuación la información que tenés que tener a mano esta semana:</Text>
        </View>
        <View>
          <View style={styles.tarjeta}>
            <Text style={styles.textoTarjeta}>Comunicaciones</Text>
            <CheckBox
              center
              checkedColor='#2f2565'
              uncheckedColor='rgba(0,0,0,0)'
              title='Marcar como vistas'
              checked={checked}
              containerStyle={{ borderColor: '#F8F8F6' }}
              textStyle={{ color: '#2f2565' }}
              checkedIcon='check'
              size={15}
              onPress={() => {
                checked === false ? setChecked(true) : setChecked(false)
                setNoLeidos(false)
              }}
            />
          </View>
          <View style={{ height: 264 }}>
            <ComunicacionesCard noLeidos={noLeidos} />
          </View>
          <View style={[styles.tarjeta, { borderTopLeftRadius: 0, borderTopRightRadius: 0 }]}>
            <Text style={styles.textoTarjeta}>Calendario</Text>
          </View>
          <Calendario />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    backgroundColor: '#27A8FF',
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 12,
    alignItems: 'center',
    height: height * 0.065,
    borderColor: 'rgba(0,0,0, 0.1)',
    borderBottomWidth: 1
  },
  image: {
    height: height * 0.05,
    width: height * 0.05,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  titulo1: {
    fontSize: 24, lineHeight: 31.25, fontWeight: '500', color: '#ffffff'
  },
  titulo2: {
    fontSize: 16, lineHeight: 20.83, fontWeight: '400', color: '#ffffff', paddingVertical: 1.5
  },
  hijo: {
    flexDirection: 'row',
    width: 102,
    borderRadius: 24,
    paddingHorizontal: 12,
    backgroundColor: '#248bd1',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  novedades: {
    fontSize: 14,
    lineHeight: 18.23,
    fontWeight: '400',
    color: '#ffffff'
  },
  tarjeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F8F6',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 12,
    height: 56
  },
  textoTarjeta: {
    fontSize: 16,
    lineHeight: 20.83,
    fontWeight: '700'
  }
})

export default HomeScreen
