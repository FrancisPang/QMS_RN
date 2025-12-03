import type { StyleProp, ViewStyle } from 'react-native';

export type QmsDashboardViewProps = {
  style?: StyleProp<ViewStyle>;
  ClientID?: string;
  ClientCode?: string;
  user_token?: string;
  autoShow?: boolean; // optional: Android uses this, iOS can ignore
};
