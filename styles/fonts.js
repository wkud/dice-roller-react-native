import {StyleSheet} from 'react-native';
import colors from './colors';

const fonts = StyleSheet.create({
  whiteMediumFont: {color: colors.white, fontSize: 20},
  whiteSmallFont: {color: colors.white, fontSize: 15},
  
  grayMediumFont: {color: colors.gray, fontSize: 20},
  grayLargeFont: {color: colors.gray, fontSize: 80},
});

export default fonts;
