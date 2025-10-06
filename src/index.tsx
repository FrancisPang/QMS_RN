import { NativeModules, Platform } from 'react-native';

type Native = {
  openWelcome(): Promise<boolean>;
};

const { QmsPlugin } = NativeModules as { QmsPlugin: Native };

if (Platform.OS === 'android' && !QmsPlugin) {
  throw new Error(
    'QmsPlugin native module not found. Did autolinking fail? Make sure android builds and the package name is com.qmsplugin.'
  );
}

export default {
  openWelcome: (): Promise<boolean> => QmsPlugin.openWelcome(),
};
