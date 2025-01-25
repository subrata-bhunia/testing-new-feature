import {StyleSheet} from 'react-native';
import {COLORS, hp, wp} from '../themes';

export const globalStyle = StyleSheet.create({
  icon: {
    height: hp(3),
    width: wp(40),
    resizeMode: 'contain',
  },
  container: {
    backgroundColor: COLORS.background,
    ...StyleSheet.absoluteFillObject,
  },
});
