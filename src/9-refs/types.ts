export interface FormValues {
  username: string;
  email: string;
}

export interface ToggleRef {
  toggle: () => void;
  getState: () => boolean;
}
