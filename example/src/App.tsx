// import React from 'react';
// import { Platform, SafeAreaView, StatusBar, StyleSheet,ScrollView } from 'react-native';
// import { QmsPluginDashboard } from 'react-native-qms-plugin';

// export default function App() {
//   const companyCode = 'ABC123';
//   return (
//     <SafeAreaView style={styles.container}>
//       <QmsPluginDashboard
//         style={styles.dashboard}
//         collapsable={false}
//         token={token}
//         companyCode={companyCode}
//         payload={[
//           { key: 'foo', value: 'bar' },
//         ]}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0,
//   },
//   dashboard: {
//     flex: 1,
//     width:"100%",
//     height:"100%",
//   },
// });

import React from 'react';
import {
  StatusBar,
  useColorScheme,
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';
import { QmsDashboardView } from 'react-native-qms-plugin';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <QmsDashboardView style={styles.container} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
