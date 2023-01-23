/**
 * Here you add all the apis urls defenition
 */
import request from '@base/features/base-api';
import { AxiosResponse } from 'axios';
import { config } from '../config';

export interface Api {
	someApi: () => Promise<AxiosResponse>;
}

export const createApi = (baseURL = config.ROOT_SERVER_URL): Api => ({
	someApi: () => request.call({
		baseURL,
		method: 'get',
		url: '/pokemon/ditto',
	})
});

export default createApi();
