interface Cef {
  on(eventName: string, callback: void): void;
  off(eventName: string, callback: void): void;
  hide(hide: boolean): void;
  emit(eventName: string, ...args: any): void;
}

interface Window {
  cef: Cef;
}

declare var cef: Cef;
