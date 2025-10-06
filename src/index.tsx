import { NativeModules, Platform } from 'react-native';

type Native = {
  openWelcome(): Promise<boolean>;
  openDashboard(): Promise<boolean>;
};

const { QmsPlugin } = NativeModules as { QmsPlugin?: Native };

if (Platform.OS === 'android' && !QmsPlugin) {
  throw new Error(
    'QmsPlugin native module not found. Did autolinking fail? Make sure android builds and the package name is com.convep.qmsplugin.'
  );
}

export default {
  openDashboard: (): Promise<boolean> => QmsPlugin!.openDashboard(),
  openWelcome: (): Promise<boolean> => QmsPlugin!.openWelcome(),
};
