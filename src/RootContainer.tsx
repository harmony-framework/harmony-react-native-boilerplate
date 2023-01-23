import { Store } from "@base/features";
import { Component } from "react";
import { Provider, connect } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './utils/navigation';
import { flowManager } from '@base/features';
import ReactotronConfig from './config/reactotron.config';

import App from "./App";
import React from "react";
import { getFlowInformation } from "./actions/flowManager/manager";
import FlowManagerConfig from './config/flow-manager/types.json';
import { BackHandler } from 'react-native';
import "./translations";

export default class RootContainer extends Component {
	render() {
		return (
			<Provider store={Store}>

				<NavigationContainer ref={navigationRef}>
					<App pendingTasks={[]} /> 
				</NavigationContainer>
			</Provider>
		)
	}
}

if(__DEV__) {
	import('./config/reactotron.config').then(() => console.log('Reactotron Configured'))
	ReactotronConfig.display({
		name: 'KNOCK KNOCK',
		preview: 'Who\'s there?',
		value: 'TEST"'
	  })
}

