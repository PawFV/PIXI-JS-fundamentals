const canvas = document.getElementById('canvas');
const app = new PIXI.Application({
  view: canvas,
  width: 500,
  height: 500
});

// LOAD ASSET
const texture = PIXI.Texture.from('assets/dude.png');
const DUDE = new PIXI.Sprite(texture);

// POSITION
DUDE.position.set(app.screen.width / 2); // Middle of screen since it is 500x500
DUDE.anchor.set(0.5); // Align center

// FILTERS 

DUDE.filters = [new PIXI.filters.BlurFilter()];

// <-------- --------->
/*
FILTER EXAMPLES
url: https://pixijs.io/pixi-filters/tools/demo/
docs: http://pixijs.download/release/docs/PIXI.filters.html
*/
// <-------- --------->


// STAGE ASSET
app.stage.addChild(DUDE);



