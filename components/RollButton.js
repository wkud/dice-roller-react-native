import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

const RollButton = () => {
  return (
    <TouchableHighlight activeOpacity={0.6} onPress={() => alert('lol')}>
      <View style={styles.container}>
        <Text style={styles.text}>Roll</Text>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 30,
    backgroundColor: '#6818f7',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 50,
  },
  text: {color: '#fff', fontSize: 20},
});
export default RollButton;
