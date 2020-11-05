import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import HeaderBar from './components/HeaderBar';
import Equation from './components/Equation';
import Result from './components/Result';
import ButtonGrid from './components/ButtonGrid'

const App = () => {
  return (
    <>
      <HeaderBar />
      <Equation>Let's role some dice!</Equation>
      <Result>= 120</Result>
      <ButtonGrid/>
      <Text>cze</Text>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 10,
    backgroundColor: '#6818f7',
    maxHeight: 40,
  },
  text: {color: '#fff'},
});

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
