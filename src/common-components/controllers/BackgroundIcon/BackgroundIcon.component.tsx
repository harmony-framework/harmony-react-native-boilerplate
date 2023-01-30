import {RSValue} from '@utils/common';
import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import AppIcons, {IconsType} from 'src/styles/icons';
import {ThemeProps} from 'src/theme/ThemeProvider';
import useTheme from 'src/theme/useTheme';
import useThemedStyles from 'src/theme/useThemedStyles';
import {Pressable} from '../Pressable/Pressable.component';

interface BackgroundIconProps {
  onPress: Function;
  text?: string;
  iconType: IconsType;
  iconName: string;
  containerSize?: number;
  mainContainerStyle?: ViewStyle;
}

const BackgroundIcon: React.FC<BackgroundIconProps> = ({
  onPress,
  text,
  containerSize = RSValue(80),
  mainContainerStyle,
  iconType,
  iconName,
}) => {
  const style = useThemedStyles(styles);
  const theme: ThemeProps = useTheme();
  return (
    <View
      style={[
        style.container,
        mainContainerStyle,
        {width: containerSize, borderRadius: containerSize * 0.16},
      ]}>
      <Pressable mainContainer={style.iconContainer} onPress={onPress}>
        <View style={[style.iconContainer, {height: containerSize}]}>
          <AppIcons
            type={iconType}
            size={containerSize / 2}
            name={iconName}
            color={theme.colors.PRIMARY}
          />
        </View>
      </Pressable>

      {text && <Text style={style.text}>{text}</Text>}
    </View>
  );
};

export {BackgroundIcon};

const styles = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer: {
      backgroundColor: theme.colors.PRIMARY_VARIANT,
      width: '100%',
      borderRadius: RSValue(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: theme.colors.PRIMARY,
      fontSize: theme.typography.size.S,
      marginTop: RSValue(10),
      textAlign: 'center',
    },
  });
