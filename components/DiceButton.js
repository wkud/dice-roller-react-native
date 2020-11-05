import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import fonts from '../styles/fonts';
import {marginHorizontal, backgroundPrimary} from '../styles/commonStyles';

const DiceButton = ({item}) => {
  return (
    <TouchableHighlight activeOpacity={0.6} onPress={() => alert('lol')}>
      <View style={styles.item}>
        <Text style={fonts.whiteSmallFont}>{item.name}</Text>
      </View>
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
