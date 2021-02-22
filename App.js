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
import { FontAwesome5, MaterialIcons, MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons'

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
      inactiveTintColor: '#e1e1e1'

    }}
    >
      <Tab.Screen
        name='home' component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View>
              {
              focused
                ? <View style={{ height: 4, width: 64, position: 'absolute', top: -10, left: -16, backgroundColor: '#27A8FF' }} />
                : null
            }
              <MaterialIcons name='home-filled' size={30} color={color} />
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
                ? <View style={{ height: 4, width: 64, position: 'absolute', top: -10, left: -16, backgroundColor: '#27A8FF' }} />
                : null
            }
              <FontAwesome5 name='users' size={30} color={color} />

            </View>
          )
        }}
      />
      <Tab.Screen
        name='messages' component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View>
              {
              focused
                ? <View style={{ height: 4, width: 64, position: 'absolute', top: -10, left: -16, backgroundColor: '#27A8FF' }} />
                : null
            }
              <Ionicons name='chatbox-outline' size={30} color={color} />
              <MaterialCommunityIcons name='text-short' size={24} color={color} style={{ position: 'absolute', zIndex: 99, left: 2 }} />
              <View style={{ height: 6, width: 6, borderRadius: 50, borderColor: 'white', borderWidth: 3, backgroundColor: '#F45C3A', position: 'absolute', top: 1, right: 0, zIndex: 9999, padding: 2 }} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name='price' component={PriceScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View>
              {
              focused
                ? <View style={{ height: 4, width: 64, position: 'absolute', top: -10, left: -16, backgroundColor: '#27A8FF' }} />
                : null
            }
              <MaterialCommunityIcons name='currency-usd-circle-outline' size={30} color={color} />
              <View style={{ height: 6, width: 6, borderRadius: 50, borderColor: 'white', borderWidth: 3, backgroundColor: '#F45C3A', position: 'absolute', top: 1, right: 0, zIndex: 9999, padding: 2 }} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name='settings' component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View>
              {
              focused
                ? <View style={{ height: 4, width: 64, position: 'absolute', top: -10, left: -16, backgroundColor: '#27A8FF' }} />
                : null
            }
              <Feather name='settings' size={30} color={color} />

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
