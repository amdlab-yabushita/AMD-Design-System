import React from "react";
import * as Switch from "@radix-ui/react-switch";
import styles from "./ToggleButton.module.css";

const ToggleButton = () => (
  <div>
    <form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label
          className={styles.Label}
          htmlFor="airplane-mode"
          style={{ paddingRight: 15 }}
        >
          トグルボタン
        </label>
        <Switch.Root className={styles.SwitchRoot} id="airplane-mode">
          <Switch.Thumb className={styles.SwitchThumb} />
        </Switch.Root>
      </div>
    </form>
  </div>
);

export default ToggleButton;
