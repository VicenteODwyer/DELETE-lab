import React from 'react' ;
import {StyleSheet, View} from 'react-native';
import Main from './src/main.jsx';
import './src/modules/main.css';


export default function App() {
  return (
     <View style={styles.container}>
      <Main/>
      </View>
  );
}

