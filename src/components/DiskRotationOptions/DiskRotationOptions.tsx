import { ChangeEvent, memo } from "react";
import styles from "./DiskRotationOptions.module.scss";

import { RotationMethod } from "hooks/useRotationMethod";

interface IDiskRotationOptionsProps {
  rotationMethod: RotationMethod;
  speedInMs: number;
  onRotationMethodChange: (arg: RotationMethod) => void;
  onSpeedChange: (arg: number) => void;
}

function DiskRotationOptions({
  rotationMethod,
  onRotationMethodChange,
  speedInMs,
  onSpeedChange,
}: IDiskRotationOptionsProps) {
  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    onRotationMethodChange(event.target.value as RotationMethod);
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value) || 0;
    onSpeedChange(value);
  };

  return (
    <div className={styles.wrapper}>
      <fieldset>
        <legend>Rotation Method</legend>
        <label className={styles.label}>
          <input
            type="radio"
            checked={RotationMethod.STOP === rotationMethod}
            value={RotationMethod.STOP}
            name="rotationMethod"
            onChange={onRadioChange}
          />
          {RotationMethod.STOP}
        </label>
        <label className={styles.label}>
          <input
            type="radio"
            checked={RotationMethod.JS === rotationMethod}
            value={RotationMethod.JS}
            name="rotationMethod"
            onChange={onRadioChange}
          />
          {RotationMethod.JS}
        </label>
        <label className={styles.label}>
          <input
            type="radio"
            checked={RotationMethod.CSS === rotationMethod}
            value={RotationMethod.CSS}
            name="rotationMethod"
            onChange={onRadioChange}
          />
          {RotationMethod.CSS}
        </label>
        <label className={styles.label}>
          <input
            type="radio"
            checked={RotationMethod.WEBGL === rotationMethod}
            value={RotationMethod.WEBGL}
            name="rotationMethod"
            onChange={onRadioChange}
          />
          {RotationMethod.WEBGL}
        </label>
      </fieldset>
      <fieldset>
        <legend>Rotation Speed in ms</legend>
        <input type="number" value={speedInMs} min="0" onChange={onInputChange} />
      </fieldset>
      <fieldset>
        <legend>Rotations per second</legend>
        <input type="number" value={(1000 / speedInMs).toFixed(2)} readOnly />
      </fieldset>
    </div>
  );
}

export default memo(DiskRotationOptions);
