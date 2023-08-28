import EventEmitter from 'events';

type GLFWMonitor = number;
type GLFWWindow = number;

interface GLFWEvent {
  type: string;
}

interface GLFWWindowPosEvent extends GLFWEvent {
  type: 'window_pos';
  x: number;
  y: number;
}
interface GLFWResizeEvent extends GLFWEvent {
  type: 'resize';
  width: number;
  height: number;
}
interface GLFWFramebufferResizeEvent extends GLFWEvent {
  type: 'framebuffer_resize';
  width: number;
  height: number;
}
interface GLFWQuitEvent extends GLFWEvent {
  type: 'quit';
}
interface GLFWRefreshEvent extends GLFWEvent {
  type: 'refresh';
  window: GLFWWindow;
}
interface GLFWIconifiedEvent extends GLFWEvent {
  type: 'iconified';
  iconified: boolean;
}
interface GLFWFocusedEvent extends GLFWEvent {
  type: 'focused';
  focused: boolean;
}
interface GLFWKeyEvent extends GLFWEvent {
  keyCode: number;
  charCode: number;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
}
interface GLFWKeyUpEvent extends GLFWKeyEvent {
  type: 'keyup';
}
interface GLFWKeyDownEvent extends GLFWKeyEvent {
  type: 'keydown';
}
interface GLFWKeyPressEvent extends GLFWKeyEvent {
  type: 'keypress';
}
interface GLFWMouseEvent extends GLFWEvent {
  pageX: number;
  pageY: number;
  x: number;
  y: number;
}
interface GLFWMouseMoveEvent extends GLFWMouseEvent {
  type: 'mousemove';
}
interface GLFWMouseEnterEvent extends GLFWEvent {
  type: 'mouseenter';
  entered: boolean;
}
interface GLFWMouseDownEvent extends GLFWMouseEvent {
  type: 'mousedown';
  button: number;
}
interface GLFWMouseUpEvent extends GLFWMouseEvent {
  type: 'mouseup';
  button: number;
}
interface GLFWMouseWheelEvent extends GLFWEvent {
  type: 'mousewheel';
  wheelDeltaX: number;
  wheelDeltaY: number;
}

interface GLFWEventEmitter extends EventEmitter {
  on(value: 'window_pos', cb: (ev: GLFWWindowPosEvent) => void): this;
  on(value: 'resize', cb: (ev: GLFWResizeEvent) => void): this;
  on(value: 'framebuffer_resize', cb: (ev: GLFWFramebufferResizeEvent) => void): this;
  on(value: 'quit', cb: (ev: GLFWQuitEvent) => void): this;
  on(value: 'refresh', cb: (ev: GLFWRefreshEvent) => void): this;
  on(value: 'iconified', cb: (ev: GLFWIconifiedEvent) => void): this;
  on(value: 'focused', cb: (ev: GLFWFocusedEvent) => void): this;
  on(value: 'keyup', cb: (ev: GLFWKeyUpEvent) => void): this;
  on(value: 'keydown', cb: (ev: GLFWKeyUpEvent) => void): this;
  on(value: 'keypress', cb: (ev: GLFWKeyPressEvent) => void): this;
  on(value: 'mousemove', cb: (ev: GLFWMouseMoveEvent) => void): this;
  on(value: 'mouseenter', cb: (ev: GLFWMouseEnterEvent) => void): this;
  on(value: 'mousedown', cb: (ev: GLFWMouseDownEvent) => void): this;
  on(value: 'mouseup', cb: (ev: GLFWMouseUpEvent) => void): this;
  on(value: 'mousewheel', cb: (ev: GLFWMouseWheelEvent) => void): this;
}

interface GLFWInterface {
  events: GLFWEventEmitter;
  debug: boolean;

  VERSION_MAJOR: number;
  VERSION_MINOR: number;
  VERSION_REVISION: number;
  RELEASE: number;
  PRESS: number;
  REPEAT: number;
  KEY_UNKNOWN: number;
  KEY_SPACE: number;
  KEY_APOSTROPHE: number;
  KEY_COMMA: number;
  KEY_MINUS: number;
  KEY_PERIOD: number;
  KEY_SLASH: number;
  KEY_0: number;
  KEY_1: number;
  KEY_2: number;
  KEY_3: number;
  KEY_4: number;
  KEY_5: number;
  KEY_6: number;
  KEY_7: number;
  KEY_8: number;
  KEY_9: number;
  KEY_SEMICOLON: number;
  KEY_EQUAL: number;
  KEY_A: number;
  KEY_B: number;
  KEY_C: number;
  KEY_D: number;
  KEY_E: number;
  KEY_F: number;
  KEY_G: number;
  KEY_H: number;
  KEY_I: number;
  KEY_J: number;
  KEY_K: number;
  KEY_L: number;
  KEY_M: number;
  KEY_N: number;
  KEY_O: number;
  KEY_P: number;
  KEY_Q: number;
  KEY_R: number;
  KEY_S: number;
  KEY_T: number;
  KEY_U: number;
  KEY_V: number;
  KEY_W: number;
  KEY_X: number;
  KEY_Y: number;
  KEY_Z: number;
  KEY_LEFT_BRACKET: number;
  KEY_BACKSLASH: number;
  KEY_RIGHT_BRACKET: number;
  KEY_GRAVE_ACCENT: number;
  KEY_WORLD_1: number;
  KEY_WORLD_2: number;
  KEY_ESCAPE: number;
  KEY_ENTER: number;
  KEY_TAB: number;
  KEY_BACKSPACE: number;
  KEY_INSERT: number;
  KEY_DELETE: number;
  KEY_RIGHT: number;
  KEY_LEFT: number;
  KEY_DOWN: number;
  KEY_UP: number;
  KEY_PAGE_UP: number;
  KEY_PAGE_DOWN: number;
  KEY_HOME: number;
  KEY_END: number;
  KEY_CAPS_LOCK: number;
  KEY_SCROLL_LOCK: number;
  KEY_NUM_LOCK: number;
  KEY_PRINT_SCREEN: number;
  KEY_PAUSE: number;
  KEY_F1: number;
  KEY_F2: number;
  KEY_F3: number;
  KEY_F4: number;
  KEY_F5: number;
  KEY_F6: number;
  KEY_F7: number;
  KEY_F8: number;
  KEY_F9: number;
  KEY_F10: number;
  KEY_F11: number;
  KEY_F12: number;
  KEY_F13: number;
  KEY_F14: number;
  KEY_F15: number;
  KEY_F16: number;
  KEY_F17: number;
  KEY_F18: number;
  KEY_F19: number;
  KEY_F20: number;
  KEY_F21: number;
  KEY_F22: number;
  KEY_F23: number;
  KEY_F24: number;
  KEY_F25: number;
  KEY_KP_0: number;
  KEY_KP_1: number;
  KEY_KP_2: number;
  KEY_KP_3: number;
  KEY_KP_4: number;
  KEY_KP_5: number;
  KEY_KP_6: number;
  KEY_KP_7: number;
  KEY_KP_8: number;
  KEY_KP_9: number;
  KEY_KP_DECIMAL: number;
  KEY_KP_DIVIDE: number;
  KEY_KP_MULTIPLY: number;
  KEY_KP_SUBTRACT: number;
  KEY_KP_ADD: number;
  KEY_KP_ENTER: number;
  KEY_KP_EQUAL: number;
  KEY_LEFT_SHIFT: number;
  KEY_LEFT_CONTROL: number;
  KEY_LEFT_ALT: number;
  KEY_LEFT_SUPER: number;
  KEY_RIGHT_SHIFT: number;
  KEY_RIGHT_CONTROL: number;
  KEY_RIGHT_ALT: number;
  KEY_RIGHT_SUPER: number;
  KEY_MENU: number;
  KEY_LAST: number;
  MOD_SHIFT: number;
  MOD_CONTROL: number;
  MOD_ALT: number;
  MOD_SUPER: number;
  MOUSE_BUTTON_1: number;
  MOUSE_BUTTON_2: number;
  MOUSE_BUTTON_3: number;
  MOUSE_BUTTON_4: number;
  MOUSE_BUTTON_5: number;
  MOUSE_BUTTON_6: number;
  MOUSE_BUTTON_7: number;
  MOUSE_BUTTON_8: number;
  MOUSE_BUTTON_LAST: number;
  MOUSE_BUTTON_LEFT: number;
  MOUSE_BUTTON_RIGHT: number;
  MOUSE_BUTTON_MIDDLE: number;
  JOYSTICK_1: number;
  JOYSTICK_2: number;
  JOYSTICK_3: number;
  JOYSTICK_4: number;
  JOYSTICK_5: number;
  JOYSTICK_6: number;
  JOYSTICK_7: number;
  JOYSTICK_8: number;
  JOYSTICK_9: number;
  JOYSTICK_10: number;
  JOYSTICK_11: number;
  JOYSTICK_12: number;
  JOYSTICK_13: number;
  JOYSTICK_14: number;
  JOYSTICK_15: number;
  JOYSTICK_16: number;
  JOYSTICK_LAST: number;
  initialized: number;
  NO_CURRENT_CONTEXT: number;
  INVALID_ENUM: number;
  INVALID_VALUE: number;
  OUT_OF_MEMORY: number;
  API_UNAVAILABLE: number;
  VERSION_UNAVAILABLE: number;
  PLATFORM_ERROR: number;
  FORMAT_UNAVAILABLE: number;
  FOCUSED: number;
  ICONIFIED: number;
  RESIZABLE: number;
  VISIBLE: number;
  DECORATED: number;
  RED_BITS: number;
  GREEN_BITS: number;
  BLUE_BITS: number;
  ALPHA_BITS: number;
  DEPTH_BITS: number;
  STENCIL_BITS: number;
  ACCUM_RED_BITS: number;
  ACCUM_GREEN_BITS: number;
  ACCUM_BLUE_BITS: number;
  ACCUM_ALPHA_BITS: number;
  AUX_BUFFERS: number;
  STEREO: number;
  SAMPLES: number;
  SRGB_CAPABLE: number;
  REFRESH_RATE: number;
  CLIENT_API: number;
  CONTEXT_VERSION_MAJOR: number;
  CONTEXT_VERSION_MINOR: number;
  CONTEXT_REVISION: number;
  CONTEXT_ROBUSTNESS: number;
  OPENGL_FORWARD_COMPAT: number;
  OPENGL_DEBUG_CONTEXT: number;
  OPENGL_PROFILE: number;
  OPENGL_API: number;
  OPENGL_ES_API: number;
  NO_ROBUSTNESS: number;
  NO_RESET_NOTIFICATION: number;
  LOSE_CONTEXT_ON_RESET: number;
  OPENGL_ANY_PROFILE: number;
  OPENGL_CORE_PROFILE: number;
  OPENGL_COMPAT_PROFILE: number;
  CURSOR: number;
  STICKY_KEYS: number;
  STICKY_MOUSE_BUTTONS: number;
  CURSOR_NORMAL: number;
  CURSOR_HIDDEN: number;
  CURSOR_DISABLED: number;
  CONNECTED: number;
  DISCONNECTED: number;

  Init(): number;
  Terminate(): void;
  GetVersion(): { major: number; minor: number; rev: number };
  GetVersionString(): string;
  GetTime(): number;
  SetTime(time: number): void;
  GetMonitors(): GLFWMonitor[];
  CreateWindow(width: number, height: number, title: string, monitor?: GLFWMonitor): GLFWWindow;
  WindowHint(hint: number, value: number): void;
  DefaultWindowHints(): void;
  DestroyWindow(window: GLFWWindow): void;
  SetWindowShouldClose(window: GLFWWindow, close: boolean): void;
  WindowShouldClose(window: GLFWWindow): number;
  SetWindowTitle(window: GLFWWindow, title: string): void;
  GetWindowSize(window: GLFWWindow): { width: number; height: number };
  SetWindowSize(window: GLFWWindow, width: number, height: number): void;
  GetWindowPos(window: GLFWWindow): { x: number; y: number };
  SetWindowPos(window: GLFWWindow, x: number, y: number): void;
  GetFramebufferSize(window: GLFWWindow): { width: number; height: number };
  IconifyWindow(window: GLFWWindow): void;
  RestoreWindow(window: GLFWWindow): void;
  ShowWindow(window: GLFWWindow): void;
  HideWindow(window: GLFWWindow): void;
  GetWindowAttrib(window: GLFWWindow, attrib: number): number;
  PollEvents(): void;
  WaitEvents(): void;
  GetKey(window: GLFWWindow, key: number): number;
  GetMouseButton(window: GLFWWindow, button: number): number;
  GetCursorPos(window: GLFWWindow): { x: number; y: number };
  SetCursorPos(window: GLFWWindow, x: number, y: number): void;
  MakeContextCurrent(window: GLFWWindow): void;
  GetCurrentContext(): GLFWWindow;
  SwapBuffers(window: GLFWWindow): void;
  SwapInterval(window: GLFWWindow, interval: number): void;
  ExtensionSupported(ext: string): boolean;
  JoystickPresent(): boolean;
  GetJoystickAxes(id: number): string;
  GetJoystickButtons(id: number): string;
  GetJoystickName(id: number): string;
}

declare const GLFW: GLFWInterface;

export { GLFW };
