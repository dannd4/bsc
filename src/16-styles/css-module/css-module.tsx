import { useState } from "react";
import clsx from "clsx";
import classes from "./style.module.scss";

export default function CSSModule() {
  const [toggle, setToggle] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <h1 className={classes.title}>CSS Module Demo</h1>

      <hr className="my-4" />

      <h3>Thay đổi CSS đựa trên state/props thông qua className</h3>
      <div
        className={clsx(classes.toggle, {
          [classes.toggleOff]: !toggle,
          [classes.toggleOn]: toggle,
        })}
        onClick={() => setToggle(!toggle)}
      >
        <div
          className={clsx(classes.toggleBall, {
            [classes.toggleBallOn]: toggle,
          })}
        ></div>
      </div>

      <hr className="my-4" />

      <h3>Thay đổi CSS đựa trên state/props thông qua data attribute</h3>
      <div className={classes.accordion}>
        <div
          className={classes.header}
          onClick={() => setCollapsed(!collapsed)}
        >
          React
        </div>
        <div
          className={classes.body}
          data-collapsed={collapsed ? "true" : "false"}
        >
          <p>This is the accordion content.</p>
        </div>
      </div>
    </div>
  );
}
