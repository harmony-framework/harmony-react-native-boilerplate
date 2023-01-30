/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {FlowManagerActions} from '@actions/flowManager/redux';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  NavigatorScreenParams,
  CompositeScreenProps,
  useFocusEffect,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import FlowManagerConfig from '../config/flow-manager/types.json';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {useDispatch} from 'react-redux';
import useTheme from 'src/theme/useTheme';
import useThemedStyles from 'src/theme/useThemedStyles';
import {ThemeProps} from 'src/theme/ThemeProvider';
import {Button} from 'src/common-components/controllers/Button/Button.component';
import {RSValue} from '@utils/common';
import {ProgressBar} from 'src/common-components/controllers/ProgressBar/ProgressBar.component';
import {HyperLink} from 'src/common-components/controllers/Hyperlink/Hyperlink.component';
import {BackgroundIcon} from 'src/common-components/controllers/BackgroundIcon/BackgroundIcon.component';
import {TextIcon} from 'src/common-components/controllers/TextIcon/TextIcon.component';

export type RootStackParamList = {
  DemoPageOne: NavigatorScreenParams<any>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
  DemoPageOne: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function DemoPageOne({
  navigation,
}: CompositeScreenProps<
  BottomTabScreenProps<any, any>,
  RootStackScreenProps<keyof RootStackParamList>
>): JSX.Element {
  const dispatch = useDispatch();
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const {t, i18n} = useTranslation('dashboard');
  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      const {stepTypes, flowTypes} = FlowManagerConfig;
      dispatch(
        FlowManagerActions.startFlow(
          flowTypes.DemoFlow,
          stepTypes.DEMO_PAGE_ONE.name,
        ),
      );
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );
  return (
    <SafeAreaView style={style.safeAreaView}>
      <View style={style.mainContainer}>
        <Text style={style.mb}>Secondary Button</Text>
        <Button
          buttonAction={() => {
            changeLanguage('de');
          }}
          buttonText={t('changeLanguage')!}
          isSecondary
          toValue={0.99}
        />
        <Text style={[style.mb, {fontSize: RSValue(16)}]}>Primary Button</Text>
        <Button
          buttonAction={() => {
            theme.toggleTheme();
          }}
          buttonText="Change theme"
          toValue={0.99}
        />
        <Text style={style.mb}>Primary Button Full Width</Text>
        <Button
          buttonAction={() => {
            theme.toggleTheme();
          }}
          buttonText="Change theme"
          isFullWidth
          toValue={0.99}
        />
        <View style={style.progressBar}>
          <Text style={style.mb}>Animated Progress Bar</Text>
          <ProgressBar numerator={10} denominator={11} />
          <Text style={style.mb}>Animated Progress Bar</Text>
          <ProgressBar numerator={10} denominator={40} />
        </View>
        <Text style={style.mb}>Hyperlink</Text>
        <HyperLink text="Upgrade Device" />
        <Text style={style.mb}>Background Icon</Text>
        <View style={style.row}>
          <BackgroundIcon
            onPress={() => {}}
            text="Upgrade Device"
            iconType="MaterialCommunity"
            iconName="sim"
            mainContainerStyle={{marginRight: RSValue(10)}}
          />
          <BackgroundIcon
            onPress={() => {}}
            text="New Device"
            iconType="MaterialCommunity"
            iconName="help"
          />
        </View>
        <Text style={style.mb}>TEXT Left Icon </Text>
        <TextIcon
          iconType="Ion"
          iconName="print-outline"
          iconSize={RSValue(20)}
          text="Print"
          isLeftIcon={false}
        />
        <Text style={style.mb}>TEXT Right Icon </Text>
        <TextIcon
          iconType="Ion"
          iconName="globe-outline"
          iconSize={RSValue(20)}
          text="Internet"
          isLeftIcon={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = (theme: ThemeProps) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    progressBar: {
      marginTop: RSValue(20),
      marginBottom: RSValue(20),
    },
    safeAreaView: {
      flex: 1,
      backgroundColor: theme.colors.BACKGROUND,
    },
    mainContainer: {
      paddingHorizontal: RSValue(20),
      top: RSValue(10),
    },
    mb: {
      marginBottom: RSValue(5),
      marginTop: RSValue(15),
    },
  });

export default DemoPageOne;
