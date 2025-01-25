import React, {useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {COLORS} from '../themes';
import LoginScreen from '../srceens/(Auth)/login.screen';
import Onboard from '../srceens/(Onboard)';
import {navigationRef} from '../utils/helper/RootNavigation';
import MyStatusBar from '../utils/MyStatusBar';
import SignUp from '../srceens/(Auth)/signup.screen';
import CarCollection from '../srceens/CollectFarefromCar';
const Stack = createStackNavigator<ParamListBase>();

export default function StackNavigatior() {
  //   const {isLoader} = useSelector((state: any) => state.AppHandel);
  const AuthScreens = {
    Onboard: Onboard,
    Login: LoginScreen,
    SignUp: SignUp,
    CarCollection: CarCollection,
  };
  //   const LoaderCom = useCallback(() => {
  //     if (isLoader) {
  //       return <Loader />;
  //     } else {
  //       return <></>;
  //     }
  //   }, [isLoader]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="CarCollection">
        {Object.entries({
          ...AuthScreens,
        }).map(([name, component]) => {
          return (
            <Stack.Screen
              key={name}
              name={name}
              component={component as React.ComponentType<any>}
            />
          );
        })}
      </Stack.Navigator>
      <MyStatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.background}
      />
    </NavigationContainer>
  );
}
