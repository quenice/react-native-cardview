
# react-native-card-view

## Getting started

`$ npm install react-native-rn-cardview --save`

### Mostly automatic installation

`$ react-native link react-native-rn-cardview`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-rn-cardview` and add `RNCardView.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCardView.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.quenice.reactnative.RNCardViewPackage;` to the imports at the top of the file
  - Add `new RNCardViewPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-rn-cardview'
  	project(':react-native-rn-cardview').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-rn-cardview/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-rn-cardview')
  	```


## Usage
```javascript
import RNCardView from 'react-native-rn-cardview';

// TODO: What to do with the module?
RNCardView;
```
  