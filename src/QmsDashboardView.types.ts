import type { StyleProp, ViewStyle } from 'react-native';

export type QmsDashboardViewProps = {
  style?: StyleProp<ViewStyle>;
  /**
   * Preferred camelCase props. Uppercase variants are kept for backwards compatibility
   * with the native iOS view manager prop names.
   */
  clientID?: string;
  clientCode?: string;
  ClientID?: string;
  ClientCode?: string;
  user_token?: string;
  userToken?: string;
  token?: string;
  autoShow?: boolean; // optional: Android uses this, iOS can ignore
};
