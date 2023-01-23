import { put, call } from 'redux-saga/effects';
import { SystemActions } from './redux';
import { AxiosResponse } from 'axios';
import api from '../../requests';
import FlowManagerConfig from '../../config/flow-manager/types.json';
import { FlowManagerActions } from '../../actions/flowManager';
import { navigateToPath } from '@utils/navigation';

export function* systemInitialize(action: any) {
	const { initSystem } = action;
	const response: AxiosResponse<any> = yield call(api.someApi);
	
	yield put(SystemActions.systemInit(true));
}
