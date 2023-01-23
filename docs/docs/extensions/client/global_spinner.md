

# Global Spinner

## Global Spinner Concept
 
While we perform Api calls, most of the time we want the page show indication that page load, this is why we need loader.
The global Spinner feather in harmony do it easly and automatic without any effort.

Any time there is "pending" request in the network, global spinner will be display.
That mean in redux speak - any time we have network task, we will have value greater then 1 in store under `pendingTask` slice.
But, what about api calls that we dont want to display global spinner and block the screen ?
how we can customize the spinner ?

## Ignore List

<b>Location</b> - `src/configurations/spinner.config.json`

In that file you can add any regex value to be ignore.
any URI on that list will be ignore by the Global Spinner.

```json
{
  "ignoreList": [
    "http://.*:5555/devices"
  ]
}
```

## Customization

<b>Location</b> - `src/pages/App.tsx`

In that file we are using standard Spinner Component.
You can replace it with any Spinner do you like and decied display it or not display it by the `pendingTask` value is greater then 1.

```js
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, View } from "react-native";
import ReactotronConfig from './config/reactotron.config';
import Navigator from "./pages/Navigator";
import { PendingTasks } from "@base/features/base-global-spinner/reducer";

interface Props {
	pendingTasks: PendingTasks;
}
class App extends Component<Props> {
	render() {
		const { pendingTasks } = this.props;
		const loading = pendingTasks?.length;
		return (
			<>
				{loading ? <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0,right: 0, alignItems: "center", justifyContent: "center", zIndex: 20 }}>
					<ActivityIndicator size="large" />
				</View> : ''}
				<Navigator />
			</>
		)
	}
}
const mapStateToProps = (state: any) => {
	console.log(state);
	return {
		pendingTasks: state.globalSpinner.pendingTasks,
	}
};
export const mapDispatchToProps = () => {
	return {

	};
};
export default connect(mapStateToProps, null)(App);


```