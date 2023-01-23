import produce from 'immer';
import { Store } from '@base/features';
import { fields } from '@base/features/base-saga';

export default (originalReducerCase: Function, isDoneHandler = false) => {
	return produce((...args: any) => {
		const type = args?.[1]?.type;
		const payload = { ...args?.[1] };

		const res = originalReducerCase(...args, fields);

		if (type && !isDoneHandler) {
			// setTimeout to push action to last in memory stack
			setTimeout(() => {
				Store.dispatch({ type: `${type}_DONE`, payload });
			}, 0);
		}
		return res;
	});
};
