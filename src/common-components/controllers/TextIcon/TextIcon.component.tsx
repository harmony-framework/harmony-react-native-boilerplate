import {RSValue} from '@utils/common';
import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import AppIcons, {IconsType} from 'src/styles/icons';
import {ThemeProps} from 'src/theme/ThemeProvider';
import useTheme from 'src/theme/useTheme';
import useThemedStyles from 'src/theme/useThemedStyles';

interface TextIconProps {
  text?: string;
  iconType: IconsType;
  iconName: string;
  iconSize: number;
  mainContainerStyle?: ViewStyle;
  isLeftIcon?: boolean;
}

const TextIcon: React.FC<TextIconProps> = ({
  text,
  iconType,
  iconName,
  iconSize,
  mainContainerStyle,
  isLeftIcon = true,
}) => {
  const style = useThemedStyles(styles);
  const theme: ThemeProps = useTheme();
  return (
    <View style={[style.container, mainContainerStyle]}>
      {isLeftIcon && (
        <Text style={[style.text, style.marginRight]}>{text}</Text>
      )}
      <AppIcons
        type={iconType}
        size={iconSize}
        name={iconName}
        color={theme.colors.PRIMARY}
      />
      {!isLeftIcon && (
        <Text style={[style.text, style.marginLeft]}>{text}</Text>
      )}
    </View>
  );
};

const styles = (theme: ThemeProps) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    marginLeft: {
      marginLeft: RSValue(6),
    },
    marginRight: {
      marginRight: RSValue(6),
    },
    text: {
      color: theme.colors.PRIMARY,
      fontSize: theme.typography.size.S,
      textAlign: 'center',
    },
  });

export {TextIcon};
