// src/NativeQmsPlugin.tsx
import { TurboModuleRegistry, type TurboModule } from 'react-native';

export interface Spec extends TurboModule {
  showPluginUI(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('QmsPlugin');
