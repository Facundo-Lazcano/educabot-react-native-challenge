import React, { useState } from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, FlatList, SafeAreaView, ScrollView } from 'react-native'
import { data } from './calendarioData'
import { AntDesign } from '@expo/vector-icons'
import IconoLectura from './iconos/IconoLectura'
import IconoLapiz from './iconos/IconoLapiz'
// import Calendar from 'json-calendar'

const { height } = Dimensions.get('window')

const Calendario = () => {
  const [selectId, setSelectId] = useState('02')
  // const calendar = new Calendar({ languageCode: 'es' })

  const renderItem = ({ item }) => {
    const backgroundColor = item.numero === selectId ? '#27A8FF' : '#ffffff'
    const color = item.numero === selectId ? '#ffffff' : '#000000'
    return (
      <Dia dia={item} onPress={() => setSelectId(item.numero)} backgroundColor={{ backgroundColor }} color={{ color }} />
    )
  }

  const renderActividades = ({ item }) => {
    if (item.extraData) {
      return item.extraData.map((clase, i) => {
        const renderIcon = () => {
          if (clase.tipo === 1) {
            return (
              <View style={{ height: 24, width: 24, backgroundColor: 'rgba(244,92,58,0.15)', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                <AntDesign size={15} name='play' color='#F45C3A' />
              </View>
            )
          }
          if (clase.tipo === 2) {
            return (
              <View style={{ height: 24, width: 24, backgroundColor: 'rgba(1, 206, 170,0.15)', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                <IconoLectura />
              </View>
            )
          }
          if (clase.tipo === 3) {
            return (
              <View style={{ position: 'relative', height: 24, width: 24, backgroundColor: 'rgba(255, 184, 0, 0.15)', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                <IconoLapiz />
              </View>
            )
          }
        }
        return (
          <View key={i}>
            <View style={{ height: 0, borderWidth: 0.3, borderColor: 'rgba(0,0,0,0.1)', backgroundColor: 'rgba(0,0,0,0.3)', paddingHorizontal: 12 }} />

            <View>
              <View style={{ height: 56, paddingHorizontal: 12, flexDirection: 'row', backgroundColor: '#ffffff', alignItems: 'center' }}>
                {renderIcon()}
                <Text>{clase.tipo === 1 ? <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{clase.hora} • </Text> : null} <Text style={{ fontSize: 14, fontWeight: '400' }}>{clase.titulo}</Text></Text>
              </View>
            </View>
          </View>
        )
      })
    }
    return null
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.numero}
          extraData={selectId}
          horizontal
          contentContainerStyle={styles.container}
        />
      </ScrollView>
      <SafeAreaView style={{ paddingHorizontal: 12, backgroundColor: '#ffffff', flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderActividades}
          keyExtractor={(item) => item.numero}
          extraData={selectId}
        />
      </SafeAreaView>
    </SafeAreaView>
  )
}

const Dia = ({ dia, onPress, backgroundColor, color }) => {
  return (
    <TouchableOpacity
      style={[styles.dia, backgroundColor]}
      onPress={onPress}
    >
      <Text style={[styles.textoDia, color]}>{dia.dia}</Text><Text style={[styles.textoDia, color]}>{dia.numero}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: height * 0.15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  dia: {
    borderRadius: 10,
    width: 42,
    marginVertical: 6,
    paddingVertical: 6.5
  },
  textoDia: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    margin: 3
  }
})

export default Calendario
