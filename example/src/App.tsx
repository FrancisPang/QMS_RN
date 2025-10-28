// example/src/App.tsx
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { QmsPluginDashboard } from 'react-native-qms-plugin';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <QmsPluginDashboard style={styles.fill} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  fill: { flex: 1 },
});
