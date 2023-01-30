import {RSValue} from '@utils/common';
import withPreventDoubleClick from '@utils/common/withPreventDoubleClick';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {ThemeProps} from 'src/theme/ThemeProvider';
import useThemedStyles from 'src/theme/useThemedStyles';

interface ButtonProps {
  buttonAction?: () => void;
  buttonText?: string;
  buttonColor?: string;
  textColor?: string;
  shadowColor?: string;
  fontSize?: number;
  mainContainer?: ViewStyle;
  borderWidth?: number;
  minWidth?: number;
  borderColor?: string;
  height?: number;
  toValue?: number;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isFullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  buttonAction = () => {},
  buttonText,
  buttonColor,
  borderWidth,
  textColor,
  fontSize,
  mainContainer,
  borderColor,
  minWidth,
  height = RSValue(35),
  toValue = 0.98,
  isPrimary = true,
  isSecondary = false,
  isFullWidth = false,
}) => {
  const style = useThemedStyles(styles);
  const TouchableOpacityEx = withPreventDoubleClick(TouchableOpacity);
  const AnimatedTouchableOpacityEx =
    Animated.createAnimatedComponent(TouchableOpacityEx);

  const buttonScale = useSharedValue(1);

  const onPressIn = () => {
    buttonScale.value = withSpring(toValue);
  };

  const onPressOut = () => {
    buttonScale.value = withSpring(1);
  };

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: buttonScale.value,
        },
      ],
    };
  });

  return (
    <AnimatedTouchableOpacityEx
      activeOpacity={1}
      style={[rStyle, mainContainer, !isFullWidth && style.row]}
      onPress={() => {
        buttonAction();
      }}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <View
        style={[
          style.buttonContainer,
          isPrimary && style.primaryButton,
          isSecondary && style.secondaryButton,
          buttonColor && {backgroundColor: buttonColor},
          borderWidth && {borderWidth: borderWidth},
          borderColor && {borderColor: borderColor},
          minWidth && {minWidth: minWidth},
          height && {height: height},
        ]}>
        <Text
          style={[
            isPrimary && style.primaryText,
            isSecondary && style.secondaryText,
            style.buttonText,
            fontSize && {fontSize: fontSize},
            textColor && {color: textColor},
          ]}>
          {buttonText}
        </Text>
      </View>
    </AnimatedTouchableOpacityEx>
  );
};

const styles = (theme: ThemeProps) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
    },
    primaryButton: {
      backgroundColor: theme.colors.PRIMARY,
    },
    secondaryButton: {
      backgroundColor: theme.colors.BACKGROUND,
      borderWidth: RSValue(1),
      borderColor: theme.colors.PRIMARY,
    },
    primaryText: {
      color: theme.colors.ON_PRIMARY,
    },
    secondaryText: {
      color: theme.colors.PRIMARY,
    },
    buttonContainer: {
      borderRadius: RSValue(20),
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: theme.colors.SHADOW,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: theme.typography.size.S,
      paddingHorizontal: RSValue(16),
    },
  });
export {Button};
