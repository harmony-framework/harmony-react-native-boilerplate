import { combineReducers, Reducer } from 'redux';
import { fork, all } from 'redux-saga/effects';
import { systemSaga } from "./system";
import { pendingTasksReducer } from 'react-redux-spinner';
import { SystemState } from './system/interface';
import globalSpinnerReducer, { GlobalSpinnerState } from '@base/features/base-global-spinner/reducer';
import { flowManagerReducer, MultipleFlowManagerState, FlowManagerState } from 'redux-flow-manager';
import { flowManagerSaga } from './flowManager';

const appReducer: any = combineReducers<any>({
	flowManager: flowManagerReducer,
	system: require('./system').reducer,
	pendingTasks: pendingTasksReducer,
	globalSpinner: globalSpinnerReducer

});

export const rootReducer: any = (state: any, action: any) => {
	// console.log(state);
	return appReducer(state, action);
};


export const rootSaga = function* () {
	yield all([fork(flowManagerSaga)]);
	yield all([fork(systemSaga)]);

}