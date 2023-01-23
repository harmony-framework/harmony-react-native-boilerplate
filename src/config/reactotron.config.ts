import Config from './debug.config'
// import Immutable from 'seamless-immutable'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

const middleware = (tron: any) => {
	return {
		...sagaPlugin(tron)
	}
};

// https://github.com/infinitered/reactotron for more options!
const ReactotronInstance = Reactotron
	.configure({ name: 'Harmony' })
	.useReactNative()
	.use(reduxPlugin())
	.use(middleware)
	.connect()

export default ReactotronInstance;