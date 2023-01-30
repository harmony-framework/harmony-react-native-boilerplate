import {Dimensions, Platform, StatusBar} from 'react-native';

const standardScreenHeight = 852;
const {height, width} = Dimensions.get('window');
const standardLength = width > height ? width : height;
const offset =
  width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight;

const deviceHeight =
  isIphoneX() || Platform.OS === 'android'
    ? standardLength - offset!
    : standardLength;

export function RSValue(fontSize: number) {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export function isIphoneX() {
  const dimension = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    (dimension.height === 780 ||
      dimension.width === 780 ||
      dimension.height === 812 ||
      dimension.width === 812 ||
      dimension.height === 844 ||
      dimension.width === 844 ||
      dimension.height === 896 ||
      dimension.width === 896 ||
      dimension.height === 926 ||
      dimension.width === 926)
  );
}

export const isIos = () => Platform.OS === 'ios';
