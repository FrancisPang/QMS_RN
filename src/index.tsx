// import { NativeModules, Platform } from 'react-native';

// type Native = {
//   openDashboard(): Promise<boolean>;
// };

// const { QmsPlugin } = NativeModules as { QmsPlugin?: Native };

// if (Platform.OS === 'android' && !QmsPlugin) {
//   throw new Error(
//     'QmsPlugin native module not found. Did autolinking fail? Make sure android builds and the package name is com.convep.qmsplugin.'
//   );
// }

// export { default as QmsPluginDashboard } from './QmsPluginDashboard';
// export type { QmsPluginDashboardProps } from './QmsPluginDashboard';
// export default {
//   // Keep your methods too if you like
//   openDashboard: () => (NativeModules as any).QmsPlugin.openDashboard?.(),
// };
//log

import QmsPlugin from './NativeQmsPlugin';
export { QmsDashboardView } from './QmsDashboardView';

export function showPluginUI(): void {
  QmsPlugin.showPluginUI();
}

// export default {
//   showPluginUI,
//   QmsDashboardView,
// };
