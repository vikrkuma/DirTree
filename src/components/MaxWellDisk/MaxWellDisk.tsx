import { memo } from "react";
import { RotationMethod } from "hooks/useRotationMethod";
import JsCssMaxWellDisk from "components/JsCssMaxwellDisk";

interface IMaxWellDiskProps {
  rotationMethod: RotationMethod;
  speedInMs: number;
}

function MaxWellDisk({ rotationMethod, speedInMs }: IMaxWellDiskProps) {
  return <JsCssMaxWellDisk rotationMethod={rotationMethod} speedInMs={speedInMs} />;
}

export default memo(MaxWellDisk);
