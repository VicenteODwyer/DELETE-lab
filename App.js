import React from 'react';
import { View } from 'react-native';
import MainStack from './src/components/Navigation/MainStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotebookCover from './src/components/Screens/inicio';
import Fondo from './src/components/Hooks/Fondo';
import Main from './src/components/Screens/main';




export default function App() {
  return (
    <View style={{ flex: 1 }}>
        <MainStack />
       
    </View>
  );
}
