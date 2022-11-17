import { useState } from "react";

export type IRotationMethod = [
  RotationMethod,
  number,
  (arg: RotationMethod) => void,
  (arg: number) => void
];

export enum RotationMethod {
  STOP = "Stop",
  JS = "JS",
  CSS = "CSS",
  WEBGL = "WebGL",
}

export default function useRotationMethod(): IRotationMethod {
  const [rotationMethod, setRotationMethod] = useState<RotationMethod>(RotationMethod.STOP);
  const [speedInMs, setSpeedInMs] = useState<number>(60);

  return [rotationMethod, speedInMs, setRotationMethod, setSpeedInMs];
}
