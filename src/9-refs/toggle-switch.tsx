import { forwardRef, useImperativeHandle, useState } from "react";
import "./style.css";
import { ToggleRef } from "./types";

type ToggleSwitchProps = {
  initialState?: boolean;
};

const ToggleSwitch = forwardRef<ToggleRef, ToggleSwitchProps>((props, ref) => {
  const [isToggled, setIsToggled] = useState(props.initialState ?? false);

  useImperativeHandle(ref, () => ({
    toggle: () => setIsToggled(!isToggled),
    getState: () => isToggled,
  }));
  return (
    <button onClick={() => setIsToggled(!isToggled)} className={`toggle-button ${isToggled ? "toggle-on" : ""}`}>
      <div className={`toggle-circle ${isToggled ? "move-right" : ""}`}></div>
    </button>
  );
});

export default ToggleSwitch;
