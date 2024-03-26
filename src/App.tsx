import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {ActivityIndicator, View} from 'react-native';
import ReactotronConfig from './config/reactotron.config';
import Navigator from './pages/Navigator';
import {PendingTasks} from '@base/features/base-global-spinner/reducer';
import ThemeProvider from './theme/ThemeProvider';

import './translations';
interface Props {
  pendingTasks: PendingTasks;
}
class App extends Component<Props> {
  render() {
    // const {pendingTasks} = this.props;
    // const loading = pendingTasks?.length;
    return (
      <>
        {/* {loading ? (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 20,
            }}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          ''
        )} */}
        <ThemeProvider>
          <Navigator />
        </ThemeProvider>
      </>
    );
  }
}
const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    pendingTasks: state.globalSpinner.pendingTasks,
  };
};
export const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, null)(App);

if (__DEV__) {
  import('./config/reactotron.config').then(() =>
    console.log('Reactotron Configured'),
  );
  ReactotronConfig.display({
    name: 'KNOCK KNOCK',
    preview: "Who's there?",
    value: 'TEST"',
  });
}
