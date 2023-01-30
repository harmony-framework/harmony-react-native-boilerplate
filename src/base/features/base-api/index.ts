import uuid from 'react-native-uuid';
import _ from 'lodash';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {endSpinner, startSpinner} from '../base-global-spinner';
import {config as appConfig} from '../../../config';

export interface GeneralErrorInfo {
  errorCode: string;
  status: number;
}
export interface Options {
  unauthorized?: boolean;
  ignoreErrorHandler?: boolean;
  generalErrorInfo?: GeneralErrorInfo;
  skipSpinner?: boolean;
}

class Request {
  constructor() {
    if (appConfig.COMMON_URL_PARAMS) {
      this.setCommonParams(appConfig.COMMON_URL_PARAMS);
    }
  }

  setCommonHeader(key: string, value: string) {
    axios.defaults.headers.common[key] = value;
  }

  setCommonParams(commonParams: Array<{key: string; value: string}>) {
    axios.defaults.params = {};

    commonParams.forEach(param => {
      axios.defaults.params[param.key] = param.value;
    });
  }

  async setRequestHeaders(originalConfig: AxiosRequestConfig) {
    const config = originalConfig;
    const commonAuthHeader =
      appConfig.COMMON_AUTHORIZATION_HEADER_REQUEST ||
      'appConfig.COMMON_AUTHORIZATION_HEADER_REQUEST';
    // const token = window.localStorage.getItem(commonAuthHeader);

    let token;

    try {
      console.log(commonAuthHeader);
      token = await AsyncStorage.getItem(`@HRMSTORE:${commonAuthHeader}`);
      console.log(token);
    } catch (e: any) {
      token = null;
    }

    const auth = token ? {[commonAuthHeader]: token} : undefined;
    config.headers = {
      ...originalConfig.headers,
      ...auth,
    };
    return config;
  }

  async call(originalConfig: AxiosRequestConfig, options?: Options) {
    let response: AxiosResponse;
    const tempUuid = uuid.v4();
    // console.log(tempUuid);
    const config = await this.setRequestHeaders(originalConfig);
    try {
      const commonAuthHeader = appConfig.COMMON_AUTHORIZATION_HEADER || '';
      const {generalErrorInfo, ignoreErrorHandler, skipSpinner} = options || {};

      if (skipSpinner) {
        response = await axios(config as any);
      } else {
        startSpinner(config.url, tempUuid.toString());
        response = await axios(config as any);
        endSpinner(config.url, tempUuid.toString());
      }

      if (
        commonAuthHeader &&
        response?.headers &&
        response.headers[commonAuthHeader]
      ) {
        this.setCommonHeader(
          commonAuthHeader,
          response.headers[commonAuthHeader],
        );
      }

      return response;
    } catch (e: any) {
      const error = e?.response || {};
      const {generalErrorInfo, skipSpinner} = options || {};
      // if (!skipSpinner) endSpinner(config.url, uuid);
      if (error.status === 401) {
        // move to login
      } else if (!options?.ignoreErrorHandler) {
        // dispatchErrorHandler(error, generalErrorInfo);
      }

      return error;
    }
  }
}

const request = new Request();

export default request;
