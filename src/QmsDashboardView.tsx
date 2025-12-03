import React, { useEffect } from 'react';
import {
  NativeModules,
  Platform,
  requireNativeComponent,
  View,
} from 'react-native';
import type { ViewStyle } from 'react-native';

type IOSProps = {
  style?: ViewStyle;
  ClientID?: string;
  ClientCode?: string;
  user_token?: string;
};

export type QmsDashboardProps = {
  style?: ViewStyle;
  clientID?: string;
  clientCode?: string;
  // prefer snake_case to match native expectation; keep others for compatibility
  user_token?: string;
  token?: string;
  userToken?: string;
  autoShow?: boolean;
};

const { QmsModule } = NativeModules;

// Only resolve the native view on iOS to avoid runtime errors on Android
const NativeQmsDashboardView =
  Platform.OS === 'ios'
    ? requireNativeComponent<IOSProps>('QmsDashboardView')
    : null;

export const showQms = (
  token?: string,
  clientID?: string,
  clientCode?: string
) => {
  QmsModule?.showQms?.(token, clientID, clientCode);
};

export const QmsDashboardView: React.FC<QmsDashboardProps> = ({
  style,
  clientID = '',
  clientCode = '',
  user_token,
  token,
  userToken,
  autoShow = true,
}) => {
  const effectiveToken = user_token ?? token ?? userToken ?? '';

  useEffect(() => {
    if (Platform.OS === 'android' && autoShow) {
      QmsModule?.showQms?.(effectiveToken, clientID, clientCode);
    }
  }, [effectiveToken, clientID, clientCode, autoShow]);

  if (Platform.OS === 'ios') {
    return (
      NativeQmsDashboardView && (
        <NativeQmsDashboardView
          style={style}
          ClientID={clientID}
          ClientCode={clientCode}
          user_token={effectiveToken}
        />
      )
    );
  }

  return <View style={style} />;
};
