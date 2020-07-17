const canvas = document.getElementById('canvas');
const app = new PIXI.Application({
  view: canvas,
  width: 500,
  height: 500
});

const graphic = new PIXI.Graphics();
graphic.position.set(app.renderer.width / 2);
app.stage.addChild(graphic);

// DRAWING SHAPES
draw("circle", -180, -180);
draw("rect", 180, 180);
draw("star", 180, -180);
draw("poligon", -180, 180);

function draw(type, x, y) {
  graphic.lineStyle(5, 0x00ff00);
  graphic.beginFill(0xff0000);
  if (type === "circle") graphic.drawCircle(x, y, 50); // DRAW A CIRCLE
  if (type === "rect") graphic.drawRect(x, y, 50, 50); // DRAW A RECTANGLE
  if (type === "star") graphic.drawStar(x, y, 5, 20, 50); // DRAW A STAR
  if (type === "poligon") graphic.drawPolygon([x, y, -150, 200, -200, 200]) // DRAW POLIGON
  graphic.closePath();
  graphic.endFill();
}

// DRAWING LINES
drawLine(50, 150, 100, 200);
drawLine(100, 200, 40, 200);

function drawLine(fromX, fromY, toX, toY) {
  graphic.lineStyle(3, 0x00ff00);
  graphic.beginFill(0xff0000);
  graphic.moveTo(fromX, fromY);
  graphic.lineTo(toX, toY);
  graphic.endFill();
}

// ANIMATE SHAPE
setTimeout(() => {
  app.ticker.add(animate);
}, 2000);

let radius = 20;
let delta = 0;
function animate() {
  delta += 0.04;
  radius = 30 + Math.sin(delta) * 15;

  graphic.clear();
  graphic.beginFill(0xff0000);
  graphic.position.set(100 + Math.sin(delta) * 50)
  graphic.arc(0, 0, radius, 0, Math.PI * 2)
  graphic.endFill();
}
