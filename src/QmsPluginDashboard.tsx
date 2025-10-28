// src/QmsPluginDashboard.tsx
import { requireNativeComponent } from 'react-native';
import type { ViewProps } from 'react-native';

export type QmsPluginDashboardProps = ViewProps;

const NativeDashboard = requireNativeComponent<QmsPluginDashboardProps>(
  // IMPORTANT: must match the native view name registered on Android/iOS
  'QmsDashboard'
);

export default function QmsPluginDashboard(props: QmsPluginDashboardProps) {
  return <NativeDashboard {...props} />;
}
