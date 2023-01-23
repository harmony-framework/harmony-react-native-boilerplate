/* -------- Harmony Features Bootstrap --------- */
import Store, { persistor } from './base-store';
import CreateFlowManager from '@base/features/base-flow-manager';

const flowManager = CreateFlowManager(Store);

export {
	Store,
	persistor,
	flowManager
};
