import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import fonts from '../styles/fonts';
import {marginHorizontal} from '../styles/commonStyles'

const Equation = ({children}) => {
  return (
    <View style={styles.labelBody}>
      <Text style={fonts.grayMediumFont}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  labelBody: {
    flex: 1,
    maxHeight: 25 * 3.5,
    ...marginHorizontal,
  }
});

export default Equation;
