import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

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
  const onPageLayout = (event) => {
    const {width, height} = event.nativeEvent.layout;
    setGridDimensions({width, height});
  };
  const renderItem = ({item}) => (
    <TouchableHighlight activeOpacity={0.6} onPress={() => alert('lol')}>
      <View style={styles.item}>
        <Text style={styles.buttonText}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );
  // return <FlatList data={buttonNames} renderItem={({item}) => <Text key={item.key}>{item.name}</Text>} />;
  return (
    <FlatList
      style={styles.container}
      data={buttonNames}
      renderItem={renderItem}
      numColumns={3}
    />
  );
};
const containerMargin = {horizontal: 30, vertical: 0};
const container = {
  flex: 3,
  marginTop: 0,
  marginHorizontal: containerMargin.horizontal,
  marginVertical: containerMargin.vertical,
  backgroundColor: '#000',
  height: Dimensions.get('window').height / 3,
  maxHeight: Dimensions.get('window').height / 3,
};
const itemMargin = {horizontal: 5, vertical: 13};
const item = {
  backgroundColor: '#6818f7',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  marginHorizontal: itemMargin.horizontal,
  marginVertical: itemMargin.vertical,
  width:
    (Dimensions.get('window').width -  containerMargin.horizontal * 2) / 3 -
    2 * itemMargin.horizontal,
  height: container.height / 3 - 2 * itemMargin.vertical + 4,
};
const styles = StyleSheet.create({
  item,
  container,
  buttonText: {color: '#fff', fontSize: 15},
});
export default ButtonGrid;
