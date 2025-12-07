# Welcome to @convep_mobilogy/react-native-qms-plugin

A React Native plugin that provides \***\*native QMS (Quality Management System)\*\*** components and APIs for defect management, dashboard visualization, and QMS workflow operations.

---

# Installation

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

Autolinking should set up everything automatically, but you need to add our private Maven repo and enable core library desugaring.

1. In your **android/build.gradle**, add the Maven repo with your credentials:

```gradle
allprojects {
    repositories {
        google()
        mavenCentral()
        maven { url = uri("https://www.jitpack.io") } // keep JitPack if RN needs it

        maven {
            url = uri("https://raw.githubusercontent.com/alepmustaqim03-sudo/aarPublish/main/maven-repo")
            credentials {
                // prefer gradle.properties/env so the token isn’t hardcoded
                username = "alepmustaqim03-sudo"
                password = "<clientToken>"
            }
        }
    }
}
```

2. In **android/app/build.gradle**, enable core library desugaring (inside `dependencies`):

```gradle
dependencies {
    // ...
    coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:2.0.4")
}
```

---

# Usage

Below are simple examples to help you use each part of the plugin.

```tsx
import React from 'react';

import {
  StatusBar,
  useColorScheme,
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';

import { QmsDashboardView } from '@convep_mobilogy/react-native-qms-plugin';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
      const clientID= '<ClientID>';
  const userToken = '<UserToken>';
  const clientCode='<CompanyCode>';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.container}>
        <QmsDashboardView
          style={styles.container}
          clientID= {clientID}
          clientCode={clientCode}
          userToken={userToken}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

---

# License

MIT © Convep
