
# Getting Started
 To use this Pre saved code, please use the following steps:

 ## Step 1: 
 ```bash
 git clone https://github.com/kuljitsingh-crypto/expo-rn-template.git
 ```

## Step 2: 
 
To use `Google Login` and `Facebook Login`, you have to prebuild `Expo App`. It can not be used in `Expo Go`.

### Google Login

You have to first create `OAuth 2.0 Client ID` for Web type without adding any redirect uri

#### Android
You need to create a `OAuth 2.0 Client ID` with android  type
`Google` require to add Sha-1 token

For `development` to  get sha-1
```bash
cd android/ && ./gradlew signingReport
```
Choose from `Task:app`

For `production` to get sha-1 go to your `Play Store Console` to obtain the SHA-1 certificate fingerprint from `Release` > `Setup` > `App Integrity` > `App signing key certificate.`

#### Ios
To obtain iosUrlScheme, go to the `Google Cloud Console` and copy the "`iOS URL scheme`" from your iOS client in the "`OAuth 2.0 Client IDs`" section.

```bash
{
  "expo": {
    "plugins": [
      [
        "@react-native-google-signin/google-signin",
        {
          "iosUrlScheme": "com.googleusercontent.apps._some_id_here_"
        }
      ]
    ]
  }
}

```

### Facebook Login

After installing `react-native-fbsdk-next` npm package, add the config plugin to the plugins array of your `app.json `or `app.config.js`:

The plugin provides props for extra customization. Every time you change the props or plugins, `you'll need to rebuild` (`and prebuild`) the native app. If no extra properties are added, defaults will be used.

`Required configuration`:

* **`appID`** (string): Facebook Application ID.
* **`displayName`** (string): Application Name.
* **`clientToken`** (string): Client Token.
* **`scheme`** (string): The scheme to use for returning to the app from Facebook. Of the form `fb[app-id]`.

`Optional configuration`:

* **`iosUserTrackingPermission`** (string || false): iOS User Tracking Permission.
* **`advertiserIDCollectionEnabled`** (boolean): Enable advertiser ID collection. Default false.
* **`autoLogAppEventsEnabled`** (boolean): Default false.
* **`isAutoInitEnabled`** (boolean): Default false.

You can get that value of `clientToken` from "`Facebook Developers` > `Your App` > `Configurations` > `Advanced`".

`Example:`
```bash
{
  "expo": {
    "plugins": [
      [
        "react-native-fbsdk-next",
        {
          "appID": "48127127xxxxxxxx",
          "clientToken": "c5078631e4065b60d7544a95xxxxxxxx",
          "displayName": "RN SDK Demo",
          "scheme": "fb48127127xxxxxxxx",
          "advertiserIDCollectionEnabled": false,
          "autoLogAppEventsEnabled": false,
          "isAutoInitEnabled": true,
          "iosUserTrackingPermission": "This identifier will be used to deliver personalized ads to you."
        }
      ]
    ]
  }
} 
```

`Android Configuration`
* To add Key hash, 
For `development` to  get sha-1
```bash
cd android/ && ./gradlew signingReport
```
Choose from `Task:app`

For `production` to get sha-1 go to your `Play Store Console` to obtain the SHA-1 certificate fingerprint from `Release` > `Setup` > `App Integrity` > `App signing key certificate.`

 * Then, convert the value of the [Hex value of the certificate to Base64] (https://base64.guru/converter/encode/hex) and add it under the `Android` > `Key hashes` in your Facebook project.

* You can find the Package name in your `app config` under the `android.package field`.
The Class name is `MainActivity` by default, and you can use `package.MainActivity` where package is the android.package in your project's app config. For example, `com.myapp.example.MainActivity`, where `com.myapp.example` is the package name of your app.
Then, click Save changes to save the configuration.

`Ios Configuration`
You need `bundle Identifier` for  ios
you can get under `ios.bundleIdentifier`
For more info, go to 
https://docs.expo.dev/versions/latest/config/app/#config



## Step 3
Run Following command in your terminal
```bash
yarn install
```
or 
```bash
npm install
```
and 
```bash
yarn run android
```
or 

```bash
yarn run ios
```

For Future `Package`
use 
```bash
yarn expo packagename
```
or 
```bash
npx expo packagename
```

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
