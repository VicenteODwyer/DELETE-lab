import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotebookCover from './Inicio';

// Import other screen components
import Horarios from './Horarios';
// ... import other screens

const Stack = createStackNavigator();

const Interaction = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={NotebookCover} />
        <Stack.Screen name="Horarios" component={Horarios} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Interaction;
