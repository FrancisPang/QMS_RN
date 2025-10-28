// import React from 'react';
// import { Platform, SafeAreaView, StatusBar, StyleSheet,ScrollView } from 'react-native';
// import { QmsPluginDashboard } from 'react-native-qms-plugin';

// export default function App() {
//   const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImF0aGlyYWh6YWlkaUBjb252ZXAuY29tIiwicGFzc3dvcmQiOiIkMnkkMTAkNU9xYklqMnZ6UHJwckJrcVd5c3I2LmJCc1hVYS9Hd014eUhnL3RhUUhPUkNQcGdmTG8yakciLCJzdWIiOjIxNzAsImlzcyI6Imh0dHBzOi8va2l0YWRldi5jb21tdWRlc2suY29tL2FwaS9vd25lci9hdXRoL3Bhc3N3b3JkbGVzc19sb2dpbiIsImlhdCI6MTc2Mjg0NTA1MywiZXhwIjoyMDc4NDE0NTczLCJuYmYiOjE3NjI4NDUwNTMsImp0aSI6IjcxRExNQ3JEaVJ2emZPNXgifQ.VMJF-9OZ3LCDbwnJZwYFJxwpBIF7seDSajE8pIB5kU4';
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
