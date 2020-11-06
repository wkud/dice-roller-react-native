import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderBar from './HeaderBar';
import Equation from './Equation';
import Result from './Result';
import ButtonGrid from './ButtonGrid';
import RollButton from './RollButton';
import {DiceContext} from '../contexts/DiceContext';

const MainScreen = () => {
  const {equationString, totalResultString, buttonNames, onRollButtonClick, onDiceButtonClick} = useContext(
    DiceContext,
  );
  return (
    <View style={styles.rootContainer}>
      <HeaderBar />
      <Equation>Let's role some dice!</Equation>
      <Result>= 120</Result>
      <ButtonGrid buttonNames={buttonNames} />
      <RollButton />
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
export default MainScreen;
