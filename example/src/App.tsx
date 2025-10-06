import React from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';
import QmsPlugin from 'react-native-qms-plugin';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Open QMS Welcome"
        onPress={() => QmsPlugin.openDashboard()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
