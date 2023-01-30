import withPreventDoubleClick from '@utils/common/withPreventDoubleClick';
import React from 'react';
import {StyleSheet, Text, ViewStyle, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {ThemeProps} from 'src/theme/ThemeProvider';
import useThemedStyles from 'src/theme/useThemedStyles';

interface HyperlinkProps {
  hyperlinkAction?: () => void;
  text?: string;
  color?: string;
  fontSize?: number;
  mainContainer?: ViewStyle;
  toValue?: number;
}

const HyperLink: React.FC<HyperlinkProps> = ({
  hyperlinkAction: buttonAction = () => {},
  text,
  color,
  fontSize,
  mainContainer,
  toValue = 0.98,
}) => {
  const style = useThemedStyles(styles);
  const TouchableOpacityEx = withPreventDoubleClick(TouchableOpacity);
  const AnimatedTouchableOpacityEx =
    Animated.createAnimatedComponent(TouchableOpacityEx);

  const hyperlinkScale = useSharedValue(1);

  const onPressIn = () => {
    hyperlinkScale.value = withSpring(toValue);
  };

  const onPressOut = () => {
    hyperlinkScale.value = withSpring(1);
  };

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: hyperlinkScale.value,
        },
      ],
    };
  });

  return (
    <AnimatedTouchableOpacityEx
      activeOpacity={1}
      style={[rStyle, style.container, mainContainer]}
      onPress={() => {
        buttonAction();
      }}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Text
        style={[
          style.text,
          fontSize && {fontSize: fontSize},
          color && {color: color},
        ]}>
        {text}
      </Text>
    </AnimatedTouchableOpacityEx>
  );
};

const styles = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    text: {
      textAlign: 'center',
      fontSize: theme.typography.size.M,
      color: theme.colors.TEXT,
      textDecorationLine: 'underline',
    },
  });
export {HyperLink};
