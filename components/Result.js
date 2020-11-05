import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Result = ({children}) => {
  return (
    <View style={styles.labelBody}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  labelBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 0,
    margin: 30,
    height: 40,
    backgroundColor: '#000',
    maxHeight: 25 * 4,
  },
  text: {color: '#828282', fontSize: 80},
});

export default Result;
