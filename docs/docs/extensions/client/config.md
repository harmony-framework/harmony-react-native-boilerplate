# Config

Client configuration located on `./src/config/index.ts`

```typescript
export const config = {
	COMMON_AUTHORIZATION_HEADER: 'Authorization',
	COMMON_AUTHORIZATION_HEADER_REQUEST: 'Authorization',
	COMMON_URL_PARAMS: [{ key: 'permanentParam', value: 'channel' }],
	ROOT_SERVER_URL: 'https://SOME_BASE_URL'
}

```

Define your root server url
These variables are used in app.
