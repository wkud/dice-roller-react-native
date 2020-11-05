import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import HeaderBar from './components/HeaderBar';
import Equation from './components/Equation';
import Result from './components/Result';
import ButtonGrid from './components/ButtonGrid'
import RollButton from './components/RollButton';

const App = () => {
  return (
    <View style={styles.rootContainer}>
      <HeaderBar />
      <Equation>Let's role some dice!</Equation>
      <Result>= 120</Result>
      <ButtonGrid/>
      <RollButton/>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-between'
  }
});

export default App;
