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
  const userToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImF0aGlyYWh6YWlkaUBjb252ZXAuY29tIiwicGFzc3dvcmQiOiIkMnkkMTAkNU9xYklqMnZ6UHJwckJrcVd5c3I2LmJCc1hVYS9Hd014eUhnL3RhUUhPUkNQcGdmTG8yakciLCJzdWIiOjIxNzAsImlzcyI6Imh0dHBzOi8va2l0YWRldi5jb21tdWRlc2suY29tL2FwaS9vd25lci9hdXRoL3Bhc3N3b3JkbGVzc19sb2dpbiIsImlhdCI6MTc2MzUzNTI3MywiZXhwIjoyMDc5MTA0NzkzLCJuYmYiOjE3NjM1MzUyNzMsImp0aSI6IkFpS3Jha3BydDI4TzBEQ3MifQ.A5RHPiy6dOSQQOtnTLd_NKsKtcu1KWhQqkK1MI2a9wM';
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
