import React from 'react' ;
import {StyleSheet, View} from 'react-native';
import Main from './src/components/main.jsx';
import NotebookCover from './src/components/inicio.jsx';
import Comunication from './src/components/comunicado.jsx';
import LoginForm from './src/components/iniciar.jsx';
import Horarios from './src/components/Horarios.jsx'
import NotificationPopup from './src/components/Notification.jsx';



export default function App() {
  return (
     <View>
      <Horarios /> 
      </View>
  );
}

