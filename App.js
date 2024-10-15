import React from 'react';

import {StyleSheet, View} from 'react-native';
import LoginForm from './src/components/Iniciar';
import Interaction from './src/components/Interacciones';
import { NavigationContainer } from '@react-navigation/native';
import NotebookCover from './src/components/Inicio';




export default function App(){

return (
  <View>
    <NavigationContainer>
      <NotebookCover/>
   </NavigationContainer>
    </View>
  );
}

