## 📷  React Native camera with SVG overlay

##### Functional React Native camera application using CameraHooks and SVG.
<br />

![MercadoLibre](https://www.dropbox.com/s/v5g9gsocynlfqkd/cameras_svg.png?raw=1)

## Dependencies
<br />

```
$ npm install react-native-camera-hooks
```
```
$ npm install react-native-fs
```
```
$ npm install react-native-svg
```
```
$ npm install react-native-camera
```

### @react-native-camera iOS permissions

#### Add permissions with usage descriptions to your app Info.plist:

```
<!-- Required with iOS 10 and higher -->
<key>NSCameraUsageDescription</key>
<string>Your message to user when the camera is accessed for the first time</string>

<!-- Required with iOS 11 and higher: include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>

<!-- Include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>

<!-- Include this only if you are planning to use the microphone for video recording -->
<key>NSMicrophoneUsageDescription</key>
<string>Your message to user when the microphone is accessed for the first time</string>
```

## Dependencies documentation

[react-native-camera](https://markdownlivepreview.com/)

[react-native-camera-hooks](https://markdownlivepreview.com/)

[react-native-fs](https://markdownlivepreview.com/)

[react-native-svg](https://markdownlivepreview.com/)

## License

MIT
