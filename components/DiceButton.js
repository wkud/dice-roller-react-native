import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import fonts from '../styles/fonts';
import {marginHorizontal, backgroundPrimary} from '../styles/commonStyles';
import {DiceContext} from '../contexts/DiceContext'

const DiceButton = ({item}) => {
  const {onDiceButtonClick} = useContext(DiceContext)

  return (
    <TouchableHighlight underlayColor='#9553f4' style={styles.item} activeOpacity={0.6} onPress={() => onDiceButtonClick(item.diceType)}>
        <Text style={fonts.whiteSmallFont}>{item.name}</Text>
    </TouchableHighlight>
  );
};

const itemMargin = {horizontal: 5, vertical: 13};
const gridHeight = Dimensions.get('window').height / 3;
const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: itemMargin.horizontal,
    marginVertical: itemMargin.vertical,
    width:
      (Dimensions.get('window').width - marginHorizontal.marginHorizontal * 2) /
        3 -
      2 * itemMargin.horizontal,
    height: gridHeight / 3 - 2 * itemMargin.vertical + 4,
    ...backgroundPrimary,
  },
});

export default DiceButton;
