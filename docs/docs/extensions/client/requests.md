

# Requests

## Requests
 
<b>Location</b>: `client/requests/index.ts` 

API Requests is one of the features coming from Harmony.<br/>

Requests class include the following methods:

### call

Call to API

<b>Parameters:</b>

config - axios config json.

<b>Usage</b>

import from `src/base/base-api/index.ts`
``` JS
request.call({
    method: 'post',
    baseURL: baseURL,
    url: 'users/login',
    data: data
});
```


## Requests Definitions File

<b>Location</b>: `./src/requests/index.ts`

In requests file we define all the requests calls and use it in sagas.
Harmony prefer to use one file to export requests definitions for Best Practice.

### Example Code

``` JS
createUser: (data) => {
    return request.call({
        method: 'post',
        baseURL: baseURL,
        url: '/users',
        data: data
    });
}
```

<br />

Usage Example:

```typescript
	getDevices: () => request.call({
		baseURL: 'http://6ew7g.mocklab.io/' || baseURL,
		method: 'get',
		url: '/getlatestWithCustomResponseCode'
	}, { unauthorized: true, generalErrorInfo: { errorCode: 'getDevicesFiledForSomeReason', status: 500 } })
```
