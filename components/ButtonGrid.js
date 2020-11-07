import React, {useContext} from 'react';
import {StyleSheet, FlatList, Dimensions} from 'react-native';
import {marginHorizontal} from '../styles/commonStyles';
import DiceButton from './DiceButton';
import {DiceContext} from '../contexts/DiceContext';

const ButtonGrid = () => {
  const {buttonNames} = useContext(DiceContext);

  return (
    <FlatList
      style={styles.container}
      data={buttonNames}
      renderItem={({item}) => <DiceButton item={item} />}
      numColumns={3}
      scrollEnabled={false}
      keyExtractor={(item,) => item.diceType.toString()}
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
