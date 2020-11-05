import React from 'react';
import {StyleSheet, FlatList, Dimensions} from 'react-native';
import {marginHorizontal} from '../styles/commonStyles';
import DiceButton from './DiceButton';

const ButtonGrid = () => {
  const buttonNames = [
    {name: 'd100', key: 100},
    {name: 'd20', key: 20},
    {name: 'd12', key: 12},
    {name: 'd10', key: 10},
    {name: 'd8', key: 8},
    {name: 'd6', key: 6},
    {name: 'd4', key: 4},
    {name: 'd3', key: 3},
    {name: 'd2', key: 2},
  ];

  return (
    <FlatList
      style={styles.container}
      data={buttonNames}
      renderItem={({item}) => <DiceButton item={item} />}
      numColumns={3}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    height: Dimensions.get('window').height / 3,
    maxHeight: Dimensions.get('window').height / 3,
    ...marginHorizontal,
  },
});

export default ButtonGrid;
