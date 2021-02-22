import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import Escuelas from '../../components/Escuelas'
import Formulario from '../../components/Formulario'
import Logo from '../../components/Logo'

const LoginScreen2 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Logo c1='#FF6428' c2='#FFB800' c3='#4F36D6' c4='#FFFFFF' c5='#23202E' colorCirculo='#27A8FF' />
        <Text style={{ fontSize: 18, lineHeight: 23.44, fontWeight: '700', marginTop: 40, marginBottom: 8 }}>¡Bienvenida Candelaria!</Text>
        <Text style={styles.texto2}>Tu perfil está asociado a las siguientes instituciones. Ingresá tu contraseña para continuar:</Text>
        <View>
          <Escuelas />
        </View>
      </View>
      <Formulario
        boton='Ingresar'
        check
        label='Contraseña'
        secureTextEntry
        textContentType='password'
        onButtonPress={() => navigation.navigate('Main')}
      />
      <TouchableOpacity onPress={() => {}}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name='east' color='#2f2565' />
          <Text style={{ color: '#2f2565', fontSize: 14, fontWeight: '700' }}>He olvidado mi contraseña</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32
  },
  texto1: {
    fontSize: 18, lineHeight: 23.44, fontWeight: '700', marginTop: 40, marginBottom: 8
  },
  texto2: {
    color: '#6D7878', fontSize: 16, lineHeight: 20.83, fontWeight: '400', width: 336, textAlign: 'center', marginBottom: 22
  }
})

export default LoginScreen2
