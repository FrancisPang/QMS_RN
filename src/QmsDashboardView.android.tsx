import React, { useEffect } from 'react';
import { View, NativeModules } from 'react-native';
import type { QmsDashboardViewProps } from './QmsDashboardView.types';

const { QmsModule } = NativeModules as {
  QmsModule?: {
    showQms?: (
      userToken?: string,
      clientID?: string,
      clientCode?: string
    ) => void;
  };
};

export const QmsDashboardView: React.FC<QmsDashboardViewProps> = ({
  style,
  clientID,
  clientCode,
  ClientID,
  ClientCode,
  user_token,
  token,
  userToken,
  autoShow = true,
}) => {
  useEffect(() => {
    const resolvedClientID = clientID ?? ClientID ?? '';
    const resolvedClientCode = clientCode ?? ClientCode ?? '';
    const resolvedToken = user_token ?? token ?? userToken ?? '';

    if (autoShow && QmsModule?.showQms) {
      // map props to native method args
      QmsModule.showQms(resolvedToken, resolvedClientID, resolvedClientCode);
    }
  }, [
    clientID,
    clientCode,
    ClientID,
    ClientCode,
    user_token,
    token,
    userToken,
    autoShow,
  ]);

  // Android doesn’t need to show native UI as a "view" here,
  // we just render an empty container so JSX stays consistent.
  return <View style={style} />;
};
