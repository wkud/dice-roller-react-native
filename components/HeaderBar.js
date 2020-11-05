import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const HeaderBar = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>DiceRoller</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 10,
    backgroundColor: '#6818f7',
    maxHeight: 50,
    justifyContent: 'center'
  },
  text: {color: '#fff', fontSize: 20},
});

export default HeaderBar;
