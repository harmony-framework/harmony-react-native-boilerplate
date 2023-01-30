import {RSValue} from '@utils/common';
import React, {useState} from 'react';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {ThemeProps} from 'src/theme/ThemeProvider';
import useThemedStyles from 'src/theme/useThemedStyles';
import useTheme from 'src/theme/useTheme';

interface ProgressBarProps {
  numerator: number;
  denominator: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({numerator, denominator}) => {
  const style = useThemedStyles(styles);
  const theme: ThemeProps = useTheme();
  const [cardWidth, setCardWidth] = useState(0);

  const progressBarWidthAnimated = useAnimatedStyle(() => {
    return {
      width: withSpring((numerator / denominator) * cardWidth, {
        overshootClamping: false,
        stiffness: 75,
      }),
    };
  }, [numerator, denominator, cardWidth]);

  const progressBarStyles: ViewStyle[] = [
    style.progressBar,
    progressBarWidthAnimated,
  ];

  if (numerator / denominator > 0.8) {
    progressBarStyles.push({backgroundColor: theme.colors.ERROR});
  }

  return (
    <View
      style={style.container}
      onLayout={e => setCardWidth(e.nativeEvent.layout.width)}>
      <View style={style.progressBarContainer}>
        <Animated.View style={progressBarStyles} />
      </View>
    </View>
  );
};

const styles = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      //   flex: 1,
      //   backgroundColor: theme.colors.PRIMARY,
      //   borderRadius: RSValue(1),
    },
    progressBarContainer: {
      backgroundColor: theme.colors.ON_BACKGROUND,
      height: RSValue(10),
      borderRadius: RSValue(12),
    },
    progressBar: {
      height: RSValue(10),
      backgroundColor: theme.colors.PRIMARY,
      borderRadius: RSValue(12),
    },
  });

export {ProgressBar};
