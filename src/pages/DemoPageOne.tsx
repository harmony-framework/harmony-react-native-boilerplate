/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { FlowManagerActions } from '@actions/flowManager/redux';
import { SystemActions } from '../actions/system/redux';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams, CompositeScreenProps, useFocusEffect } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import FlowManagerConfig from '../config/flow-manager/types.json';
import { useTranslation, Trans } from "react-i18next";
import { default as StyledButton } from '../common-components/controllers/Button/Button.component';
import {
	Button,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useDispatch } from 'react-redux';

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

function Section({ children, title }: SectionProps): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';
	return (
		<View style={styles.sectionContainer}>
			<Text
				style={[
					styles.sectionTitle,
					{
						color: isDarkMode ? Colors.white : Colors.black,
					},
				]}>
				{title}
			</Text>
			<Text
				style={[
					styles.sectionDescription,
					{
						color: isDarkMode ? Colors.light : Colors.dark,
					},
				]}>
				{children}
			</Text>
		</View>
	);
}

function DemoPageOne({ navigation }: CompositeScreenProps<BottomTabScreenProps<any, any>, RootStackScreenProps<keyof RootStackParamList>>): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';
	const dispatch = useDispatch();
	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};
	const { t, i18n } = useTranslation();
	const changeLanguage = (lng: string | undefined) => {
		i18n.changeLanguage(lng);
	};
	useFocusEffect(
		React.useCallback(() => {
			// Do something when the screen is focused
			const { stepTypes, flowTypes } = FlowManagerConfig;
			dispatch(FlowManagerActions.startFlow(flowTypes.DemoFlow, stepTypes.DEMO_PAGE_ONE.name));
			return () => {
				// Do something when the screen is unfocused
				// Useful for cleanup functions
			};
		}, [])
	);
	useEffect(() => {
		dispatch(SystemActions.systemInitStart());
	})
	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				backgroundColor={backgroundStyle.backgroundColor}
			/>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={backgroundStyle}>
				<Header />
				<View
					style={{
						backgroundColor: isDarkMode ? Colors.black : Colors.white,
					}}>
					<Section title="Page Title">
						{t("Welcome to React")}
					</Section>
					<Section title="Step One">
						Edit <Text style={styles.highlight}>DemoPageOne.tsx</Text> to change this
						screen and then come back to see your edits.
					</Section>
					<Section title="See Your Changes">
						<ReloadInstructions />
					</Section>
					<Section title="Debug">
						<DebugInstructions />
					</Section>
					<Section title="Flipper">
						Flipper platform for debugging mobile apps on iOS and Android, you can view there your Redux, Logs, crash reports, etc
						Install it from https://github.com/facebook/flipper
					</Section>
					<Section title="Storybook">
						To run the storybook, you should execute npm run storybook and uncomment the STORYBOOK section in the index.tsx and comment AppRegistry.registerComponent(appName, () => RootContainer);
					</Section>
					<Section title="Language">
						<Text>{t("Language description")}</Text>
						{"\n\n"}
					
						<Button
							title="DE"
							onPress={() => changeLanguage('de')}
						/>
						<Button
							title="EN"
							onPress={() => changeLanguage('en')}
						/>
					</Section>
					<Section title="Custom Components">
						Common components will be developed in the common components folder, for example
						{"\n\n"}
						<StyledButton
							title="DE"
							onPress={() => changeLanguage('de')}
						/>
						{"  "}
						<StyledButton
							title="EN"
							onPress={() => changeLanguage('en')}
						/>
					</Section>
					<Section title="Flow Manager Navigation">
						<Button
							title="Go to page two"
							onPress={() => dispatch(FlowManagerActions.moveToNextStep())}
						/>
					</Section>
					<LearnMoreLinks />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},

	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
});

export default DemoPageOne;
