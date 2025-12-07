import React from 'react';
import { requireNativeComponent } from 'react-native';
import type { QmsDashboardViewProps } from './QmsDashboardView.types';

// Make sure your iOS native view manager is exported as "QmsDashboardView"
const NativeQmsDashboardView =
  requireNativeComponent<QmsDashboardViewProps>('QmsDashboardView');

export const QmsDashboardView: React.FC<QmsDashboardViewProps> = (props) => {
  const {
    clientID,
    clientCode,
    ClientID,
    ClientCode,
    user_token,
    userToken,
    token,
    // autoShow is Android-only; ignored on iOS
    ...rest
  } = props;

  const resolvedClientID = clientID ?? ClientID ?? '';
  const resolvedClientCode = clientCode ?? ClientCode ?? '';
  const resolvedToken = user_token ?? token ?? userToken ?? '';

  return (
    <NativeQmsDashboardView
      {...rest}
      ClientID={resolvedClientID}
      ClientCode={resolvedClientCode}
      user_token={resolvedToken}
    />
  );
};
