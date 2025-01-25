import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React, {ReactNode} from 'react';
import {COLORS, hp, wp} from '../themes';
import Text, {fontWeight} from './text.component';

type btnType = 'Primary' | 'Outline';
interface ButtonProps extends TouchableOpacityProps {
  type?: btnType;
  icon?: ReactNode;
  children: ReactNode;
  fontWeight?: fontWeight;
}

const Button = (props: ButtonProps) => {
  switch (props.type) {
    case 'Primary':
      return (
        <TouchableOpacity
          {...props}
          style={[styles.btn, styles.primaryBtn, props.style]}>
          {props.icon}
          <Text style={styles.primaryBtnTxt} fontWeight={props.fontWeight}>
            {props.children}
          </Text>
        </TouchableOpacity>
      );
    case 'Outline':
      return (
        <TouchableOpacity
          {...props}
          style={[styles.btn, styles.outlineBtn, props.style]}>
          {props.icon}
          <Text fontWeight={props.fontWeight} style={styles.outlineBtnTxt}>
            {props.children}
          </Text>
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity
          {...props}
          style={[styles.btn, styles.customBtn, props.style]}>
          {props.icon}
          <Text fontWeight={props.fontWeight} style={styles.customBtnTxt}>
            {props.children}
          </Text>
        </TouchableOpacity>
      );
  }
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    height: hp(4.9),
    width: '90%',
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: wp(3),
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.4), 0 6px 20px 0 rgba(0,0,0,0.19);',
    flexDirection: 'row',
    columnGap: wp(2),
  },
  primaryBtn: {
    backgroundColor: COLORS.primary,
  },
  primaryBtnTxt: {
    color: COLORS.background,
  },
  outlineBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.grey2,
  },
  outlineBtnTxt: {
    color: COLORS.white,
  },
  customBtn: {
    backgroundColor: COLORS.secondaryBtnColor,
  },
  customBtnTxt: {
    color: COLORS.white,
  },
});
