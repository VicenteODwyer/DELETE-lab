import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Comunication from "../Screens/Comunicado";
import NotebookCover from "../Screens/inicio";
import Horario from "../Screens/Horarios";
import Header from "../Hooks/Header";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;