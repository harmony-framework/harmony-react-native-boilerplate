import { all, fork, takeLatest } from 'redux-saga/effects';
import { createSaga } from '@base/features/base-decorator';
import * as Sagas from './sagas';
import { SystemActionTypes } from './redux';

/* ------------- Export Redux ------------- */
export * from './redux';

/* ------------- Export Sagas ------------- */
function* watchSystemInitSaga() {
	yield takeLatest(SystemActionTypes.SYSTEM_INIT_START , createSaga(Sagas?.systemInitialize));
}

export function* systemSaga() {
	yield all([
		fork(watchSystemInitSaga)
	]);
}