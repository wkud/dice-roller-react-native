import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import fonts from '../styles/fonts';
import {backgroundPrimary} from '../styles/commonStyles';

const RollButton = () => {
  return (
    <TouchableHighlight activeOpacity={0.6} onPress={() => alert('lol')}>
      <View style={styles.container}>
        <Text style={fonts.whiteMediumFont}>Roll</Text>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 30,
    minHeight: 50,
    alignItems: 'center',
    ...backgroundPrimary,
  },
});
export default RollButton;
