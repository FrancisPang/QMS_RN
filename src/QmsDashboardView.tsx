// src/QmsDashboardView.tsx
import React from 'react';
import { requireNativeComponent, Platform } from 'react-native';
import type { ViewStyle } from 'react-native';

type Props = {
  style?: ViewStyle;
};

const NativeQmsDashboardView = requireNativeComponent<Props>(
  Platform.OS === 'ios' ? 'QmsDashboardView' : 'QmsDashboard'
);

export const QmsDashboardView: React.FC<Props> = (props) => {
  return <NativeQmsDashboardView {...props} />;
};
