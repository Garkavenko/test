import React from 'react';
import PizzaPicker from './src/components/PizzaPicker';
import {StyleSheet, View} from 'react-native';

const App = () => {
  console.log('hello');
  return (
    <View style={styles.container}>
      <PizzaPicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
