import QmsPlugin from './NativeQmsPlugin';

export function multiply(a: number, b: number): number {
  return QmsPlugin.multiply(a, b);
}
