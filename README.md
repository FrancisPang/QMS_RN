
# Welcome to @convep_mobilogy/react-native-qms-plugin

A React Native plugin that provides ****native QMS (Quality Management System)**** components and APIs for defect management, dashboard visualization, and QMS workflow operations.

---

#  Installation

Install using npm:
```sh
npm install @convep_mobilogy/react-native-qms-plugin
```
Or using Yarn:
```sh
yarn add @convep_mobilogy/react-native-qms-plugin
```
---

# iOS Setup
Autolinking should set up everything automatically.
1. Navigate to your iOS folder:

```sh
cd ios
pod install
```
---

 
# Android Setup

Autolinking should set up everything automatically.

---

# Usage

  

Below are simple examples to help you use each part of the plugin.
```tsx
import  React  from  'react';

import {

StatusBar,

useColorScheme,

SafeAreaView,

View,

StyleSheet,

} from  'react-native';

import { QmsDashboardView } from  '@convep_mobilogy/react-native-qms-plugin';

  

export  default  function  App() {

const  isDarkMode  =  useColorScheme() ===  'dark';

return (

<SafeAreaView>

<StatusBar  barStyle={isDarkMode ? 'light-content' : 'dark-content'}  />

<View  style={styles.container}>

<QmsDashboardView  style={styles.container}  />

</View>

</SafeAreaView>

);

}
  

const  styles  =  StyleSheet.create({

container: {

flex:  1,

},

});
```  
---

# License

MIT © Convep