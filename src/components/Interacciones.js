import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NotebookCover from './NotebookCover';
import DatosAlumno from './DatosAlumno';
import HorarioEscolar from './HorarioEscolar';
import Comunicados from './Comunicados';
import Notas from './Notas';
import EntradaRetiro from './EntradaRetiro';

const Stack = createStackNavigator();


const Interaction = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NotebookCover">
        <Stack.Screen name="NotebookCover" component={NotebookCover} options={{ title: 'Cuaderno de Comunicaciones' }} />
        <Stack.Screen name="DatosAlumno" component={DatosAlumno} options={{ title: 'Datos del Alumno' }} />
        <Stack.Screen name="HorarioEscolar" component={HorarioEscolar} options={{ title: 'Horario Escolar' }} />
        <Stack.Screen name="Comunicados" component={Comunicados} options={{ title: 'Comunicados' }} />
        <Stack.Screen name="Notas" component={Notas} options={{ title: 'Notas' }} />
        <Stack.Screen name="EntradaRetiro" component={EntradaRetiro} options={{ title: 'Entrada y Retiro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Interaction;