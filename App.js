import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NotebookCover from './src/components/inicio';
import DatosAlumno from './src/components/DatosAlumno';
import HorarioEscolar from './src/components/Horarios';
import Comunicados from './src/components/Comunicado ';
import Notas from './src/components/Notas';
import EntradaRetiro from './src/components/EntradaRetiro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NotebookCover">
        <Stack.Screen 
          name="NotebookCover" 
          component={NotebookCover} 
          options={{ title: 'Cuaderno de Comunicaciones' }}
        />
        <Stack.Screen 
          name="DatosAlumno" 
          component={DatosAlumno} 
          options={{ title: 'Datos del Alumno' }}
        />
        <Stack.Screen 
          name="HorarioEscolar" 
          component={HorarioEscolar} 
          options={{ title: 'Horario' }}
        />
        <Stack.Screen 
          name="Comunicados" 
          component={Comunicados} 
          options={{ title: 'Comunicados' }}
        />
        <Stack.Screen 
          name="Notas" 
          component={Notas} 
          options={{ title: 'Notas' }}
        />
        <Stack.Screen 
          name="EntradaRetiro" 
          component={EntradaRetiro} 
          options={{ title: 'Entrada y Retiro' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}