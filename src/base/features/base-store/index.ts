import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import ReactotronConfig from '../../../config/reactotron.config';
const createDebugger = require("redux-flipper").default;

import { globalStoreListener, STORE_ACTION_LISTENERS } from '../base-services';
// import { config } from 'config';
import { rootReducer, rootSaga } from '../../../actions';
import { SystemActions } from '../../../actions/system/redux';

/* --------- define middleware ---------- */

export const globalActionListener = (/* store */) => (next: any) => (action: any) => {
	const result = next(action);
	globalStoreListener.publish(STORE_ACTION_LISTENERS, action);
	return result;
};

const sagaMiddleware = createSagaMiddleware();

/* -------- create the store with middleware ---------- */
let customCompose = compose(applyMiddleware(sagaMiddleware, globalActionListener, createDebugger()), ReactotronConfig.createEnhancer!());


const store = createStore(rootReducer, customCompose);

console.log('Store Setup');
/* -------- run root saga ---------- */
sagaMiddleware.run(rootSaga);
// Sanity check for Saga

/* -------- expose store functionality to page level ------------- */
export const persistor = persistStore(store);
export default store;


