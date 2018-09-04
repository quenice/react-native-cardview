
# react-native-card-view

## Getting started

`$ npm install react-native-rn-cardview --save`

### Mostly automatic installation

`$ react-native link react-native-rn-cardview`

### Manual installation


#### iOS

> no need link

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

### example
```javascript

/**
 * Sample React Native CardView
 *
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CardView from 'react-native-rn-cardview'


export default class App extends Component {
    render() {
        return (
				<CardView cardElevation={4}
                          maxCardElevation={4}
                          radius={10}
                          backgroundColor={'#ffffff'}>
                    <View style={{padding:10}}>
                        <View>
                            <Text>ReactNative CardView for iOS and Android</Text>
                        </View>
                        <View>
                            <Text>This is test</Text>
                        </View>
                    </View>
                </CardView>
        );
    }
}

```
### screenshots
#### iOS
![iOS](https://github.com/quenice/react-native-cardview/raw/master/screenshots/ios.png)
#### android
![android](https://github.com/quenice/react-native-cardview/raw/master/screenshots/android.png)

## Attributes
Name | Type | Desc
---|---|---
cardElevation | Number | the elevation of the card view
maxCardElevation | Number | if not set, equals the ``` cardElevation ``` default
radius | Number | the border radius of the card view
backgroundColor | String | the background color of the card view
