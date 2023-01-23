import { Action } from 'redux';

/* ------------- Define Actions and State ------------- */
export enum TypesNames {
	SYSTEM_INIT_START = 'SYSTEM_INIT_START',
	SYSTEM_INIT = 'SYSTEM_INIT'
}

export declare function SystemInitStartFunction(): SystemInitStartAction;
export declare function SystemInitFunction(initSystem?: boolean): SystemInitAction;

export interface ActionCreator {
	systemInitStart: typeof SystemInitStartFunction;
	systemInit: typeof SystemInitFunction;
}

export interface SystemInitStartAction extends Action<TypesNames.SYSTEM_INIT_START> {}

export interface SystemInitAction extends Action<TypesNames.SYSTEM_INIT> {
	initSystem?: boolean;
}
export interface SystemState {
	isSystemInitialized?: boolean;
}

/* ------------- Define Any Interfaces ------------- */
