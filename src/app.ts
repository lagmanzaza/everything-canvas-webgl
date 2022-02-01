import { Rectangle } from "./core/shapes/Rectangle";
import { CanvasManager, Dimension } from "./core/CanvasManager";
window.onload = () => {
  const canvas = document.getElementById(
    "canvas-playground"
  ) as HTMLCanvasElement;

  if (!canvas) {
    alert("Canvas Element not found");
  }

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const canvasDimension: Dimension = {
    width: windowWidth,
    height: windowHeight,
  };
  const canvasManager = new CanvasManager(canvas);
  canvasManager.setDimension(canvasDimension);
  const rect1 = new Rectangle({ x: 30, y: 30, width: 100, height: 100 });
  rect1.draw(canvasManager.context);
  const rect2 = new Rectangle({ x: 150, y: 30, width: 100, height: 100 });
  rect2.fill = "yellow";
  rect2.draw(canvasManager.context);
  // resize canvas

  window.onresize = () => {
    canvasManager.setDimension(canvasDimension);
  };
};
