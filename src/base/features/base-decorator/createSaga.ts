import { put } from 'redux-saga/effects';

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

export default (originalSaga: Function, isDoneHandler = false) => {
	return function* (...args: any) {
		const type = args?.[0]?.type;
		const payload = { ...args?.[0] };

		const response: ResponseGenerator = yield originalSaga(...args);

		if (type && !isDoneHandler) {
			yield put({ type: `${type}_DONE`, response, payload });
		}

		return response;
	};
};
