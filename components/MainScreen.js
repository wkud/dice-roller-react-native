import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderBar from './HeaderBar';
import Equation from './Equation';
import Result from './Result';
import ButtonGrid from './ButtonGrid';
import RollButton from './RollButton';
import {DiceContext} from '../contexts/DiceContext';

const MainScreen = () => {
  const {equationString, totalResultString, buttonNames} = useContext(
    DiceContext,
  );
  return (
    <View style={styles.rootContainer}>
      <HeaderBar />
      <Equation>
        {equationString === '' ? "Let's role some dice!" : equationString}
      </Equation>
      <Result>{totalResultString}</Result>
      <ButtonGrid />
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
