import { memo } from "react";

interface IWebGlMaxWellDiskProps {
  speedInMs: number;
}

function WebGlMaxWellDisk({ speedInMs }: IWebGlMaxWellDiskProps) {
  console.log({ speedInMs });
  return (
    <div>
      <canvas id="webgl-disc-canvas" width="500" height="500" />
    </div>
  );
}

export default memo(WebGlMaxWellDisk);
