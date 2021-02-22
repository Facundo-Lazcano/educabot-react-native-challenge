import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Button onPress={() => navigation.navigate('dni')} title='Logout' buttonStyle={{ backgroundColor: '#2f2565', borderRadius: 5, padding: 5, height: 50, width: 250 }} />
    </View>
  )
}

export default SettingsScreen
