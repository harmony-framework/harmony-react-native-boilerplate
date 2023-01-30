import {Theme} from '@react-navigation/native';
import {RSValue} from '@utils/common';
import {StyleSheet} from 'react-native';
import {Fonts} from './fonts';

const normalFontSize = 16;

export const CommonStyle = (theme: Theme) =>
  StyleSheet.create({
    safeAreaViewStyle: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },

    // Text Styles

    lightText: {
      fontFamily: Fonts.PrimaryFontLight,
      fontSize: RSValue(normalFontSize),
      color: theme.colors.text,
    },
    lightItalicText: {
      fontFamily: Fonts.PrimaryFontLightItalic,
      fontSize: RSValue(normalFontSize),
      color: theme.colors.text,
    },
    normalText: {
      fontFamily: Fonts.PrimaryFont,
      fontSize: RSValue(normalFontSize),
      color: theme.colors.text,
    },
    italicText: {
      fontFamily: Fonts.PrimaryFontItalic,
      fontSize: RSValue(normalFontSize),
      color: theme.colors.text,
    },
    semiBoldText: {
      fontFamily: Fonts.PrimaryFontSemiBold,
      fontSize: RSValue(normalFontSize),
      color: theme.colors.text,
    },
    semiBoldItalicText: {
      fontFamily: Fonts.PrimaryFontSemiBoldItalic,
      fontSize: RSValue(normalFontSize),
      color: theme.colors.text,
    },
    boldText: {
      fontFamily: Fonts.PrimaryFontBold,
      fontSize: RSValue(normalFontSize),
      color: theme.colors.text,
    },
    boldTextItalic: {
      fontFamily: Fonts.PrimaryFontBoldItalic,
      fontSize: RSValue(normalFontSize),
      color: theme.colors.text,
    },
  });
