import React from 'react';
import {StyleSheet, View} from 'react-native';
import Interaction from './src/components/Interacciones';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotebookCover from './src/components/Inicio';
import Horario from './src/components/Horarios';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={NotebookCover} />
        <Stack.Screen name="Horarios" component={Horario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}