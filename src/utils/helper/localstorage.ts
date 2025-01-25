import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';

export async function getData(key: string) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    ToastAndroid.show(JSON.stringify(e, null, 2), ToastAndroid.LONG);
  }
}

export async function setData(key: string, value: any) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
    ToastAndroid.show(JSON.stringify(e, null, 2), ToastAndroid.LONG);
  }
}
