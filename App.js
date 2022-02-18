import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess the Number" />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 /* Take full width and height */
  },
});
