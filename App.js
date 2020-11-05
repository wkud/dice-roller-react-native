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
      {/* <Text>cze</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-between'
  }
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
