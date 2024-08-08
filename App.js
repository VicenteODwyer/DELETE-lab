import React from 'react' ;
import {StyleSheet, View} from 'react-native';
import Main from './components/main.jsx';


export default function App() {
  return (
     <View style={styles.container}>
      <Main/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Montserrat',
    fontSize: 18,
    backgroundColor: "#F5F5F5",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 123,
  },
});