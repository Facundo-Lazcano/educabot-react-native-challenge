import React from 'react'
import { ScrollView } from 'react-native'
import ComunicacionesCard from '../../components/ComunicacionesCard'

const MessagesScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingTop: 24 }}>
      <ComunicacionesCard />
    </ScrollView>
  )
}

export default MessagesScreen
