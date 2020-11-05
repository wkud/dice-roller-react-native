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
    marginHorizontal: 30,
    backgroundColor: '#222222',
    maxHeight: 80,
  },
  text: {color: '#828282', fontSize: 80},
});

export default Result;
