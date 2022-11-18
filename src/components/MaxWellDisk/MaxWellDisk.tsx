import { memo } from "react";
import { RotationMethod } from "hooks/useRotationMethod";
import JsCssMaxWellDisk from "components/JsCssMaxwellDisk";
import WebGlMaxWellDisk from "components/WebGlMaxWellDisk";

interface IMaxWellDiskProps {
  rotationMethod: RotationMethod;
  speedInMs: number;
}

function MaxWellDisk({ rotationMethod, speedInMs }: IMaxWellDiskProps) {
  return rotationMethod === RotationMethod.WEBGL ? (
    <WebGlMaxWellDisk speedInMs={speedInMs} />
  ) : (
    <JsCssMaxWellDisk rotationMethod={rotationMethod} speedInMs={speedInMs} />
  );
}

export default memo(MaxWellDisk);
