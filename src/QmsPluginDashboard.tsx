import React from 'react';
import { requireNativeComponent, ViewProps } from 'react-native';

type Props = ViewProps; // extend later with custom props if needed
const NativeDashboard = requireNativeComponent<Props>('QmsDashboard');

export default function QmsPluginDashboard(props: Props) {
  return <NativeDashboard {...props} />;
}
