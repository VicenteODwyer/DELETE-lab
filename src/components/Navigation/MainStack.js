import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Comunication from "../Screens/Comunicado";
import NotebookCover from "../Screens/inicio";
import Horario from "../Screens/Horarios";
import Retiro from "../Screens/Retiro";
import Header from "../Hooks/Header";
import Notas from "../Screens/Notas";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          header: (props) => <Header {...props} />
        }}
      >
        <Stack.Screen name="Inicio" component={NotebookCover} />
        <Stack.Screen name="Comunicado" component={Comunication} />
        <Stack.Screen name="Horario" component={Horario} />
        <Stack.Screen name="Retiro" component={Retiro} />
        <Stack.Screen name="Notas" component={Notas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;