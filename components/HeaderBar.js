import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import fonts from '../styles/fonts';
import {backgroundPrimary} from '../styles/commonStyles'

const HeaderBar = () => {
  return (
    <View style={styles.header}>
      <Text style={fonts.whiteMediumFont}>DiceRoller</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 10,
    maxHeight: 50,
    justifyContent: 'center',
    ...backgroundPrimary
  },
});

export default HeaderBar;
