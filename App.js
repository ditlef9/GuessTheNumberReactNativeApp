import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess the Number" />
      <StartGameScreen />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, /* Take full width and height */
    backgroundColor: '#252526'
  },
});
