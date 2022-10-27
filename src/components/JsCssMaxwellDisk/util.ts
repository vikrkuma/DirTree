let position = 1;
let timeoutId = 0;

const DISC_COLORS = [
  "#FFFF00",
  "#FF8F00",
  "#FF0000",
  "#900090",
  "#622DD1",
  "#0000FF",
  "#009090",
  "#90FF00",
];

function drawArc(ctx: CanvasRenderingContext2D, index: number, color: string) {
  ctx.beginPath();
  ctx.moveTo(250, 250);
  ctx.arc(250, 250, 250, index * 0.25 * Math.PI, index * 0.25 * Math.PI + 0.25 * Math.PI);
  ctx.lineTo(250, 250);
  ctx.fillStyle = color;
  ctx.fill();
}

export function drawMaxwellDisc(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  startIndex = 0
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let index = 0; index < DISC_COLORS.length; index++) {
    drawArc(ctx, index, DISC_COLORS[(startIndex + index) % DISC_COLORS.length]);
  }
}

function rotateDisk(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  drawMaxwellDisc(canvas, ctx, position++);
}

export function animateDisk(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  speed: number
) {
  clearInterval(timeoutId);
  if (speed) {
    timeoutId = window.setInterval(() => {
      rotateDisk(canvas, ctx);
    }, speed / 8);
  }
}

export function stopAnimationOfDisk() {
  clearInterval(timeoutId);
}
