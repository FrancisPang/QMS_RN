import { Platform } from 'react-native';

export const QmsDashboardView =
  Platform.OS === 'ios'
    ? require('./QmsDashboardView.ios').QmsDashboardView
    : require('./QmsDashboardView.android').QmsDashboardView;
