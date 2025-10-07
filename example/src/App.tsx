import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { QmsPluginDashboard } from 'react-native-qms-plugin';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <QmsPluginDashboard style={styles.dashboard} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0,
  },
  dashboard: {
    flex: 1,
  },
});
