import { createActions, createReducer } from 'reduxsauce';
import { TypesNames, ActionCreator } from './interface';
import { Draft, createDraft } from 'immer';
import createReducerCase from '@base/features/base-decorator/createReducerCase';

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	systemInitStart: null, // handle by saga
	systemInit: ['initSystem'] // handle by saga
});

export const SystemActionTypes = TypesNames;
export const SystemActions = Creators;

const INITIAL_STATE = createDraft<any>({
	isSystemInitialized: false
});

const setSystemInitReducer = (draft: Draft<any>, action: TypesNames.SYSTEM_INIT) => {
	const { initSystem } = action;
	console.log('ACTION');
	draft.isSystemInitialized = initSystem;
	console.log('test');
};

export const reducer = createReducer<any, any>(INITIAL_STATE, {
	[TypesNames.SYSTEM_INIT]: createReducerCase(setSystemInitReducer),
});