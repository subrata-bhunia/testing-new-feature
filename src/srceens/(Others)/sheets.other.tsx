import {Button, Sheet, Text} from '../../components';
import {COLORS, hp, wp} from '../../themes';
import {SheetManager} from 'react-native-actions-sheet';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
type LangauageSheetProps = {
  languageList: any[];
  onPress: () => void;
  currentLang: any;
  setCurrentLang: any;
};
export const LangauageSheet = ({
  languageList,
  currentLang,
  setCurrentLang,
  onPress,
}: LangauageSheetProps) => {
  return (
    <Sheet
      sheetId={'lang-sheet'}
      containerStyle={styles.actionSheet}
      onTouchBackdrop={() => Alert.alert('Test')}
      onOpen={() => {
        Alert.alert('Open');
      }}
      backdropProps={{
        style: {
          backgroundColor: 'red',
          opacity: 1,
        },
      }}>
      <View style={{zIndex: -111}}>
        <View>
          <Text fontWeight="semibold" style={styles.h1Text}>
            Choose Language
          </Text>
          <Text style={styles.h3Text}>Which Langauage do you want to use?</Text>
        </View>
        <View
          style={{
            gap: hp(2),
            marginVertical: hp(2),
          }}>
          {languageList.map((value, index) => {
            const current = currentLang?.id == value?.id;
            return (
              <TouchableOpacity
                style={styles.btn}
                key={index}
                onPress={() => {
                  setCurrentLang(value);
                }}>
                <Text
                  fontWeight="medium"
                  style={{
                    color: current ? COLORS.primary : COLORS.white,
                    fontSize: wp(5),
                  }}>
                  {value.name}
                </Text>
                <View
                  style={{
                    height: wp(6),
                    width: wp(6),
                    borderRadius: wp(6),
                    borderWidth: 1,
                    borderColor: current ? COLORS.primary : COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {current && (
                    <View
                      style={{
                        backgroundColor: COLORS.primary,
                        height: '70%',
                        width: '70%',
                        borderRadius: '70%',
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
          <Button
            onPress={() => {
              onPress();
              SheetManager.hide('lang-sheet');
            }}
            fontWeight="semibold"
            type="Primary"
            style={{
              marginTop: hp(7),
              width: wp(90),
            }}>
            {'Use ' + currentLang?.name}
          </Button>
        </View>
      </View>
    </Sheet>
  );
};

const styles = StyleSheet.create({
  actionSheet: {
    backgroundColor: COLORS.secondaryBtnColor,
    padding: wp(3),
    borderTopLeftRadius: wp(7),
    borderTopRightRadius: wp(7),
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
});
