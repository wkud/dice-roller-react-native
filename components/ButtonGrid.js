import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import fonts from '../styles/fonts';
import {marginHorizontal, backgroundPrimary} from '../styles/commonStyles'

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
  const renderItem = ({item}) => (
    <TouchableHighlight activeOpacity={0.6} onPress={() => alert('lol')}>
      <View style={styles.item}>
        <Text style={fonts.whiteSmallFont}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );
  return (
    <FlatList
      style={styles.container}
      data={buttonNames}
      renderItem={renderItem}
      numColumns={3}
    />
  );
};
const container = {
  flex: 3,
  height: Dimensions.get('window').height / 3,
  maxHeight: Dimensions.get('window').height / 3,
  ...marginHorizontal,
};
const itemMargin = {horizontal: 5, vertical: 13};
const item = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: itemMargin.horizontal,
  marginVertical: itemMargin.vertical,
  width:
  (Dimensions.get('window').width - container.marginHorizontal * 2) / 3 -
  2 * itemMargin.horizontal,
  height: container.height / 3 - 2 * itemMargin.vertical + 4,
  ...backgroundPrimary,
};
const styles = StyleSheet.create({item, container});

export default ButtonGrid;
