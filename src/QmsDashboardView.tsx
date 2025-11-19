// src/QmsDashboardView.tsx
import React from 'react';
import { requireNativeComponent, Platform } from 'react-native';
import type { ViewStyle } from 'react-native';

export type QmsDashboardProps = {
  style?: ViewStyle;
  clientID?: string;
  clientCode?: string;
  userToken?: string;
};

const NativeQmsDashboardView = requireNativeComponent<QmsDashboardProps>(
  Platform.OS === 'ios' ? 'QmsDashboardView' : 'QmsDashboard'
);

export const QmsDashboardView: React.FC<QmsDashboardProps> = (props) => {
  return <NativeQmsDashboardView {...props} />;
};
