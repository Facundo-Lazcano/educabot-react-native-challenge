import React from 'react'
import { View, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LoginScreen1 from './src/screens/auth/loginScreen1'
import LoginScreen2 from './src/screens/auth/loginScreen2'
import HomeScreen from './src/screens/main/homeScreen'
import PeopleScreen from './src/screens/main/peopleScreen'
import MessagesScreen from './src/screens/main/messagesScreen'
import PriceScreen from './src/screens/main/priceScreen'
import SettingsScreen from './src/screens/main/settingsScreen'
import IconoHome from './src/components/iconos/IconoHome'
import IconoPeople from './src/components/iconos/IconoPeople'
import IconoMensajes from './src/components/iconos/IconoMensajes'
import IconoPrice from './src/components/iconos/IconoPrice'
import IconoSettings from './src/components/iconos/IconoSettings'

const mainNavigator = createBottomTabNavigator()
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function authFlow () {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name='dni' component={LoginScreen1} />
      <Stack.Screen
        name='password'
        component={LoginScreen2}
        options={{
          headerStyle: {
            backgroundColor: '#F8F8F6',
            elevation: 0
          },
          headerTitle: false
        }}
      />
    </Stack.Navigator>
  )
}

function mainFlow () {
  return (
    <Tab.Navigator tabBarOptions={{
      showLabel: false,
      activeTintColor: 'rgba(39, 168, 255, 0.3)',
      inactiveTintColor: '#6D7878'

    }}
    >
      <Tab.Screen
        name='home' component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={{ position: 'relative' }}>
              {
              focused
                ? <View style={{ height: 4, width: 64, position: 'absolute', bottom: 20, right: -38.5, backgroundColor: '#27A8FF' }} />
                : null
            }
              <IconoHome color={color} size={24} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name='people' component={PeopleScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View>
              {
              focused
                ? <View style={{ height: 4, width: 64, position: 'absolute', bottom: 20, right: -38.5, backgroundColor: '#27A8FF' }} />
                : null
            }
              <IconoPeople color={color} size={24} />

            </View>
          )
        }}
      />
      <Tab.Screen
        name='messages' component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={{ position: 'relative' }}>
              {
              focused
                ? <View style={{ height: 4, width: 64, position: 'absolute', bottom: 20, right: -38.5, backgroundColor: '#27A8FF' }} />
                : null
            }
              <View style={{ position: 'relative' }}>
                <IconoMensajes color={color} size={24} />
                <View style={{ height: 6, width: 6, borderRadius: 50, borderColor: 'white', borderWidth: 3, backgroundColor: '#F45C3A', position: 'absolute', top: -11.5, left: 10, zIndex: 9999, padding: 2 }} />
              </View>
            </View>
          )
        }}
      />
      <Tab.Screen
        name='price' component={PriceScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={{ position: 'relative' }}>
              {
              focused
                ? <View style={{ height: 4, width: 64, position: 'absolute', bottom: 20, right: -38.5, backgroundColor: '#27A8FF' }} />
                : null
            }
              <View style={{ position: 'relative' }}>
                <IconoPrice color={color} size={24} />
                <View style={{ height: 6, width: 6, borderRadius: 50, borderColor: 'white', borderWidth: 3, backgroundColor: '#F45C3A', position: 'absolute', top: -11.5, left: 10, zIndex: 9999, padding: 2 }} />
              </View>
            </View>
          )
        }}
      />
      <Tab.Screen
        name='settings' component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={{ position: 'relative' }}>
              {
              focused
                ? <View style={{ height: 4, width: 64, position: 'absolute', bottom: 20, right: -38.5, backgroundColor: '#27A8FF' }} />
                : null
            }
              <IconoSettings size={24} color={color} />

            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default () => {
  LogBox.ignoreAllLogs()
  return (
    <NavigationContainer>
      <mainNavigator.Navigator>
        <mainNavigator.Screen options={{ tabBarVisible: false }} name='Auth' component={authFlow} />
        <mainNavigator.Screen options={{ tabBarVisible: false }} name='Main' component={mainFlow} />
      </mainNavigator.Navigator>
    </NavigationContainer>

  )
}
