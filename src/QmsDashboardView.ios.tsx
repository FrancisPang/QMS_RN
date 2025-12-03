import React from 'react';
import { requireNativeComponent } from 'react-native';
import type { QmsDashboardViewProps } from './QmsDashboardView.types';

// Make sure your iOS native view manager is exported as "QmsDashboardView"
const NativeQmsDashboardView =
  requireNativeComponent<QmsDashboardViewProps>('QmsDashboardView');

export const QmsDashboardView: React.FC<QmsDashboardViewProps> = (props) => {
  return <NativeQmsDashboardView {...props} />;
};
