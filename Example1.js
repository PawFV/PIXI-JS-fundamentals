// CREATES APP IN CANVAS
const CANVAS = document.getElementById('canvas');
let _w = window.innerWidth;
let _h = window.innerHeight;

const RENDERER = new PIXI.Renderer({
  view: CANVAS,
  width: _w,
  height: _h,
  resolution: window.devicePixelRatio,
  autoDensity: true
});
// RESIZE WINDOW TO FIT FULL VIEW
window.addEventListener('resize', resize);
function resize() {
  _w = window.innerWidth;
  _h = window.innerHeight;
  RENDERER.resize(_w, _h)
}

const STAGE = new PIXI.Container();

// STAGES IMG & CONVERTS IT TO SPRITE
const texture = PIXI.Texture.from('assets/circle.png');
const IMG = new PIXI.Sprite(texture);
// IMG POSITION
IMG.x = RENDERER.width / 2;
IMG.y = RENDERER.height / 2;
IMG.anchor.x = 0.5;
IMG.anchor.y = 0.5;
STAGE.addChild(IMG);
// APP.stage.addChild(IMG);

const TICKER = new PIXI.Ticker();
TICKER.add(rotate);
TICKER.start();
// TICKER = RENDER UPDATES CALLS function TO ANIMATE
// APP.ticker.add(rotate);

function rotate() {
  IMG.rotation += 0.1;
  IMG.x = RENDERER.screen.width / 2;
  IMG.y = RENDERER.screen.height / 2;
  RENDERER.render(STAGE);
}