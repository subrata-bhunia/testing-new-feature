import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import React, {ReactNode} from 'react';
import {FONTS} from '../themes';

export type fontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

interface TextProps extends RNTextProps {
  children: ReactNode;
  fontWeight?: fontWeight;
}

const Text = (props: TextProps) => {
  switch (props.fontWeight) {
    case 'bold':
      return (
        <RNText {...props} style={[styles.textBold, props.style]}>
          {props.children}
        </RNText>
      );
    case 'medium':
      return (
        <RNText {...props} style={[styles.textMedium, props.style]}>
          {props.children}
        </RNText>
      );
    case 'semibold':
      return (
        <RNText {...props} style={[styles.textSemiBold, props.style]}>
          {props.children}
        </RNText>
      );
    default:
      return (
        <RNText {...props} style={[styles.text, props.style]}>
          {props.children}
        </RNText>
      );
  }
};

export default Text;

const styles = StyleSheet.create({
  textBold: {
    fontFamily: FONTS.bold,
    fontWeight: 'bold',
  },
  textSemiBold: {
    fontFamily: FONTS.semibold,
    fontWeight: '600',
  },
  textMedium: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
  },
  text: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
  },
});
