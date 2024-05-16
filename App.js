import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import RickAndMortyList from './screens/RickAndMortyList'
import RickAndMortyDetails from './screens/RickAndMortyDetails'


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName='RickAndMortyList'
       screenOptions={{headerShown: false}}>
        <Stack.Screen name="RickAndMortyList" component={RickAndMortyList} />
        <Stack.Screen name="RickAndMortyDetails" component={RickAndMortyDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})