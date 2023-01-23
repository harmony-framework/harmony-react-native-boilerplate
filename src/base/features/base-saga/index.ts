import { call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

export enum STATUS {
	PENDING = 'pending',
	SUCCESS = 'success',
	ERROR = 'error'
}

export const fields = ['status', 'data', 'error'];
export interface API {
	status?: STATUS.PENDING | STATUS.SUCCESS | STATUS.ERROR;
	data?: any;
	error?: any;
}

export declare type Saga = (response: AxiosResponse) => void;
export declare type ApiToCall = (payload?: any) => Promise<AxiosResponse>;

export declare type Config = {
	putAction: any;
	payload?: any;
	ignoreSuccessHandling?: boolean;
	ignoreErrorHandling?: boolean;
	initialize?: {
		data?: any;
		error?: any;
	};
	successStatus?: number[];
	apiToCall: ApiToCall;
};

export const sagaCase = function* (config: Config, saga?: Saga) {
	const {
		putAction, payload, ignoreSuccessHandling, ignoreErrorHandling, initialize, successStatus = [], apiToCall
	} = config;
    
	const data = initialize?.data ? initialize.data : null;
	const error = initialize?.error ? initialize.error : null;

	yield put(
		putAction({
			status: STATUS.PENDING,
			data,
			error
		})
	);

	const response: AxiosResponse = payload ? yield call(apiToCall, payload) : yield call(apiToCall);

	if ((response?.status === 200 || successStatus.includes(response.status)) && !ignoreSuccessHandling) {
		yield put(
			putAction({
				status: STATUS.SUCCESS,
				data: response?.data,
				error
			})
		);
	} else if ((response?.status !== 200 && !successStatus.includes(response.status)) && !ignoreErrorHandling) {
		yield put(
			putAction({
				status: STATUS.ERROR,
				data,
				error: { _status: response?.status, _path: response?.config?.url, ...response?.data }
			})
		);
	}

	if (saga) yield saga(response);
};

export default sagaCase;
