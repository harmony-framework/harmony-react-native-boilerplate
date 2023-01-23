/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DemoPageOne from './DemoPageOne';
import DemoPageTwo from './DemoPageTwo';

const Stack = createNativeStackNavigator();


function Navigator(): JSX.Element {
	return (
		<Stack.Navigator initialRouteName="DemoPageOne">
			<Stack.Screen name="DemoPageOne" component={DemoPageOne} />
			<Stack.Screen name="DemoPageTwo" component={DemoPageTwo} />
		</Stack.Navigator>
	);
}


export default Navigator;
