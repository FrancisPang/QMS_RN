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
  const clientID = '3';
  const userToken = '<token>';
  const clientCode = 'KITADEV';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.container}>
        <QmsDashboardView
          style={styles.container}
          clientID={clientID}
          clientCode={clientCode}
          user_token={userToken}
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
