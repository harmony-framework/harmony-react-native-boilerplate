import withPreventDoubleClick from '@utils/common/withPreventDoubleClick';
import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface PressableProps {
  onPress?: Function;
  toValue?: number;
  children: React.ReactNode;
  mainContainer?: ViewStyle;
}

const Pressable: React.FC<PressableProps> = ({
  onPress = () => {},
  toValue = 0.98,
  children,
  mainContainer,
}) => {
  const TouchableOpacityEx = withPreventDoubleClick(TouchableOpacity);
  const AnimatedTouchableOpacityEx =
    Animated.createAnimatedComponent(TouchableOpacityEx);

  const pressableScale = useSharedValue(1);

  const onPressIn = () => {
    pressableScale.value = withSpring(toValue);
  };

  const onPressOut = () => {
    pressableScale.value = withSpring(1);
  };

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: pressableScale.value,
        },
      ],
    };
  });

  return (
    <AnimatedTouchableOpacityEx
      activeOpacity={1}
      style={[rStyle, mainContainer]}
      onPress={() => {
        onPress();
      }}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      {children}
    </AnimatedTouchableOpacityEx>
  );
};

export {Pressable};
