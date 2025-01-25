import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {COLORS, ICONS, wp} from '../../themes';
import {Button, Text} from '../../components/index';
import {globalStyle} from '../../global/styles';
import {SheetManager} from 'react-native-actions-sheet';
import {LangauageSheet} from '../(Others)/sheets.other';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const LoginScreen = (props: Props) => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  return (
    <View style={[styles.main, globalStyle.container]}>
      <Text fontWeight="semibold" style={styles.text}>
        {t('welcome', {name: 'Subrata'})}
      </Text>
      <Button
        type="Primary"
        activeOpacity={0.7}
        onPress={() => {
          if (i18n.language == 'en') {
            i18n.changeLanguage('ben');
          } else {
            i18n.changeLanguage('en');
          }
        }}>
        {i18n.language == 'en'
          ? t('Change Language', {lang: 'Bengali'})
          : t('Change Language', {lang: 'English'})}
      </Button>
      <Button
        type="Outline"
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('Onboard' as never);
        }}>
        {i18n.language == 'en'
          ? t('Change Language', {lang: 'Bengali'})
          : t('Change Language', {lang: 'English'})}
      </Button>
      <Button
        icon={<Image source={ICONS.translate} style={styles.icon} />}
        activeOpacity={0.7}
        onPress={() => {
          SheetManager.show('lang-sheet');
        }}>
        {i18n.language == 'en'
          ? t('Change Language', {lang: 'Bengali'})
          : t('Change Language', {lang: 'English'})}
      </Button>
      <LangauageSheet
        currentLang={{
          name: 'English',
          id: 'ben',
        }}
        setCurrentLang={undefined}
        languageList={[
          {
            name: 'English',
            id: 'en',
          },
          {
            name: 'Bengali',
            id: 'ben',
          },
        ]}
        onPress={function (): void {
          SheetManager.hide('lang-sheet');
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  text: {
    color: COLORS.primary,
    fontSize: wp(7),
  },
  main: {
    padding: 4,
    // marginTop: StatusBar.currentHeight,
  },
  icon: {
    height: wp(4),
    width: wp(4),
    resizeMode: 'contain',
  },
});
