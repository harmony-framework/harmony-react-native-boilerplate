/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import { name as appName } from './app.json';
import RootContainer from 'src/RootContainer';
// import RootContainer from './src/RootContainer';

/* STORYBOOK 
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import './storybook/rn-addons';
// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
	require('./storybook/stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0', port: 7007, onDeviceUI: true, asyncStorage: require('@react-native-community/async-storage').default });

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
*/

AppRegistry.registerComponent(appName, () => RootContainer);
