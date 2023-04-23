interface Cef {
  set_focus(focused: boolean): void;
  on(eventName: string, callback: Function): void;
  off(eventName: string, callback: Function): void;
  hide(hide: boolean): void;
  emit(eventName: string, ...args: any): void;
}

interface Window {
  cef: Cef;
}

declare var cef: Cef;
