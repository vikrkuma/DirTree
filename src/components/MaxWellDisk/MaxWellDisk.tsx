import { RotationMethod } from "hooks/useRotationMethod";
import { memo, useEffect, useRef } from "react";
import styles from "./MaxWellDisk.module.scss";
import { drawMaxwellDisc, animateDisk, stopAnimationOfDisk } from "./util";

interface IMaxWellDiskProps {
  rotationMethod: RotationMethod;
  speedInMs: number;
}

function MaxWellDisk({ rotationMethod, speedInMs }: IMaxWellDiskProps) {
  const canvasRef = useRef<[HTMLCanvasElement, CanvasRenderingContext2D] | null>(null);
  const cssAnimationSpeed = `${rotationMethod === RotationMethod.CSS ? speedInMs : 0}ms`;
  const jsAnimationSpeed = rotationMethod === RotationMethod.JS ? speedInMs : 0;

  useEffect(() => {
    const canvas = document.getElementById("disc-canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    drawMaxwellDisc(canvas, ctx);
    canvasRef.current = [canvas, ctx];

    return stopAnimationOfDisk;
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const [canvas, ctx] = canvasRef.current;
      animateDisk(canvas, ctx, jsAnimationSpeed);
    }
  }, [canvasRef, jsAnimationSpeed]);

  return (
    <div className={styles.rotator} style={{ animationDuration: cssAnimationSpeed }}>
      <canvas id="disc-canvas" width="500" height="500" />
    </div>
  );
}

export default memo(MaxWellDisk);
