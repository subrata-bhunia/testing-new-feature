import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Button, Sheet, SnapCarousel, Text} from '../../components';
import {COLORS, hp, ICONS, IMAGES, wp} from '../../themes';
import {globalStyle} from '../../global/styles';
import ActionSheet, {
  ActionSheetRef,
  SheetManager,
} from 'react-native-actions-sheet';
import {useTranslation} from 'react-i18next';
import {navigate} from '../../utils/helper/RootNavigation';

type Props = {};
type SelectProps = {
  name: string;
  id: string;
};

const Onboard = (props: Props) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const {t, i18n} = useTranslation();
  const onPress = () => {};
  useEffect(() => {}, []);
  let [currentLang, setCurrentLang] = useState<SelectProps>({
    name: 'English',
    id: 'en',
  });
  let [languageList, setLanguageList] = useState<SelectProps[]>([
    {
      name: 'English',
      id: 'en',
    },
    {
      name: 'Bengali',
      id: 'ben',
    },
  ]);
  const [onBoardData, setOnBoardData] = useState([
    {
      h1: 'Sonic the Hedgehog 3',
      img: 'https://cdn.cinematerial.com/p/500x/sknwepha/sonic-the-hedgehog-3-movie-poster-sm.jpg?v=1732753839',
      content: '',
    },
    {
      h1: 'Moana 2 (2024)',
      img: 'https://media-cache.cinematerial.com/p/500x/qzmrcgyo/moana-2-movie-poster.jpg?v=1727369716',
      content: '',
    },
    {
      h1: 'Pushpa: The Rule - Part 2 (2024)',
      img: 'https://media-cache.cinematerial.com/p/500x/pjm7xmdq/pushpa-the-rule-part-2-indian-movie-poster.jpg?v=1709374118',
      content: '',
    },
  ]);

  return (
    <View style={globalStyle.container}>
      {/* section 1 */}
      <View style={styles.section1}>
        <Image source={IMAGES.logo} style={globalStyle.icon} />
        <Button
          style={styles.langBtn}
          type="Outline"
          activeOpacity={0.7}
          icon={<Image source={ICONS.translate} style={styles.btnicon} />}>
          {currentLang.name}
        </Button>
      </View>
      {/* section 2 */}
      <View
        style={{
          zIndex: 1,
        }}>
        <SnapCarousel
          loop
          width={wp(90)}
          height={hp(50)}
          autoPlay={true}
          scrollAnimationDuration={1000}
          enabled
          style={{
            alignSelf: 'center',
          }}
          renderItem={({item, index}) => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Image source={{uri: item.img}} style={styles.movieposter} />
              <Text style={styles.h1Text}>{item.h1}</Text>
            </View>
          )}
          data={onBoardData}
          pagination={true}
          // mode="vertical-stack"
          pagingEnabled={false}
          overscrollEnabled={false}
        />
        <View style={styles.section1}></View>
      </View>
      {/* section 3 */}
      <View style={styles.section3}>
        <Button
          type="Primary"
          fontWeight="semibold"
          style={styles.authBtn}
          onPress={() => navigate('Login')}>
          Sign In
        </Button>
        <Button
          type="Outline"
          fontWeight="semibold"
          style={styles.authBtn}
          onPress={() => navigate('SignUp')}>
          Sign Up
        </Button>
        <Text style={styles.conText}>
          By sign in or sign up, you agree to our Terms of Service and Privac y
          Policy
        </Text>
      </View>
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  section1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  langBtn: {
    width: wp(30),
    height: hp(4),
    boxShadow: '',
  },
  btnicon: {
    height: wp(4),
    width: wp(4),
    resizeMode: 'contain',
  },
  actionSheet: {
    backgroundColor: COLORS.secondaryBtnColor,
    padding: wp(3),
    borderTopLeftRadius: wp(7),
    borderTopRightRadius: wp(7),
    position: 'absolute',
    bottom: -10,
    zIndex: 77,
  },
  h1Text: {
    fontSize: wp(7),
    color: COLORS.white,
    textAlign: 'center',
  },
  h3Text: {
    fontSize: wp(3.2),
    color: COLORS.white,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '99%',
    alignSelf: 'center',
  },
  movieposter: {
    height: '80%',
    width: '80%',
    resizeMode: 'center',
  },
  authBtn: {
    height: hp(5.5),
    borderRadius: hp(5.5),
  },
  section3: {
    marginTop: 'auto',
  },
  conText: {
    fontSize: wp(3),
    color: COLORS.grey2,
    textAlign: 'center',
    width: wp(70),
    alignSelf: 'center',
    marginVertical: wp(3),
  },
});
