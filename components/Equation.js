import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Equation = ({children}) => {
  return (
    <View style={styles.labelBody}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  labelBody: {
    flex: 1,
    margin: 30,
    height: 30,
    backgroundColor: '#000',
    maxHeight: 25 * 4 ,
  },
  text: {color: '#828282', fontSize: 20},
});

export default Equation;
