import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import CheckBox from '@react-native-community/checkbox'

const PHONE_WIDTH = Dimensions.get('window').width
const Formulario = ({ label, textContentType, secureTextEntry, boton, onButtonPress, check }) => {
  const [texto, setTexto] = useState('')
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const renderCheck = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 16 }}>
        <CheckBox
          style={{ borderRadius: 12, alignSelf: 'center' }}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={{ marginLeft: 12, fontSize: 16, fontWeight: '400', lineHeight: 20.83 }}>
          Recordarme en este dispositivo
        </Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTexto}
        value={texto}
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
      />
      {check ? renderCheck() : null}
      <Button title={boton} color='#4F36D6' onPress={onButtonPress} buttonStyle={styles.button} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F6',
    marginHorizontal: 12,
    marginVertical: 24
  },
  input: {
    height: 48,
    borderColor: '#DFDFDA',
    borderRadius: 3,
    borderWidth: 1,
    width: PHONE_WIDTH - 24,
    paddingLeft: 16
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18.23,
    marginBottom: 8,
    textTransform: 'uppercase'
  },
  button: {
    height: 48,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#2f2565',
    color: '#ffffff'
  }
})

export default Formulario
