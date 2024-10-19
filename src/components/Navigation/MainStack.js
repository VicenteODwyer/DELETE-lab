import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react from "react";
import Comunication from "../Screens/Comunicado";
import NotebookCover from "../Screens/inicio";

const Stack = createNativeStackNavigator()

const MainStack = ({navigation}) => {
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen 
          name="Inicio"
          component={NotebookCover}
        />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack;