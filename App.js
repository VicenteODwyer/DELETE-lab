import React from 'react' ;
import {StyleSheet, View} from 'react-native';
import Main from './src/components/main.jsx';
import NotebookCover from './src/components/inicio.jsx';
import Comunication from './src/components/comunicado.jsx';
import LoginForm from './src/components/iniciar.jsx';

import NotificationPopup from './src/components/Notification.jsx';
import HamburgerMenu from './src/components/HamburgerMenu.jsx';



export default function App() {
  return (
      <View>
      <NotebookCover /> 
      </View>
  );
}

