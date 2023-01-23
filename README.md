<h1 align="center"><strong>Harmony Framework</strong></h1>

<div align="center" style="max-width:350px !important;">
    <a href="https://harmony-framework.github.io/harmony-boilerplate/" target="_blank">
        <img width="350px" src="https://raw.githubusercontent.com/harmony-framework/harmony-boilerplate/master/docs/docs/images/harmony-logo.png" alt="react boilerplate banner" align="center" />
    </a>
</div>

<br/>

<div align="center"><strong>Start your next react native project in seconds</strong></div>
<br />
<div align="center">Harmony Boilerplate gives you the best developer experience with all the features you need for production based react redux: react native navigation, TypeScript, sagas, , flow management and more. </div>
<br />
<div align="center">
  <a href="https://harmony-framework.github.io/harmony-boilerplate/" target="_blank">
    Documentation
  </a>
</div>
<br/>

# Harmony Boilerplate - React Native

## Installation
1. Clone the repository
2. If the folder doesnt have ios and android folders, go to Troubleshooting and follow the step in new folder for generating the ios and android in seperate folders
3. Copy the ios and android folders
4. go into ios folder and run `pod install`

## Tourbleshooting

1. Make sure your app name in `app.json` is defined and use it for step 2.
```json
{
  "name": "HRM",
  "displayName": "HRM"
}
```
2. If you want to generate new iOS and Android folders, do the following

```sh
npx react-native init YourProjectName
mv YourProjectName/ios ios
rm -rf YourProjectName
```