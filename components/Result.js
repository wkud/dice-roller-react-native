import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import fonts from '../styles/fonts';
import {marginHorizontal} from '../styles/commonStyles'

const Result = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={fonts.grayLargeFont}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    maxHeight: 80,
    ...marginHorizontal
  },
});

export default Result;
