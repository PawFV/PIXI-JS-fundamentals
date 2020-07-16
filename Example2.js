// CREATES APP IN CANVAS
const CANVAS = document.getElementById('canvas');
const app = new PIXI.Application({
  view: CANVAS,
  width: 300,
  height: 300
});

const loader = PIXI.Loader.shared;
/* USING ONE INSTANCE OF LOADER
(We can use many instances with `new PIXI.Loader()` )*/

// ADDING & LOADING RESOURCES
loader
  .add("circle", "assets/circle.png") // USING ALIAS
  .add("assets/star.png")
  .on('progress', handleLoadProgress) // FIRESS PROGRESS UPDATES
  .on('load', handleLoadAsset) // FIRES WHEN INDIVIDUAL ASSET IS LOADED
  .on('error', handleLoadError) // FIRES ERROR WHEN LOADING ASSET
  .load(handleLoadComplete); // FIRES A FUNCTION AFTER LOADING ALL RESOURCES

let img;

function handleLoadAsset(loader, resource) {
  console.log(`Asset: ${resource.name} -> Loaded`);
}

function handleLoadError() {
  console.error("Load Error");
}

function handleLoadProgress(loader, resource) {
  console.log(loader.progress + '% loaded');
}

function handleLoadComplete() {
  // CONVERTS TEXTURE TO SPRITE
  const texture = loader.resources.circle.texture; // APPLYING ALIAS { LINE: 16 }
  circle = new PIXI.Sprite(texture);
  circle.anchor.x = 0.5;
  circle.anchor.y = 0.5;
  circle.interactive = true;
  circle.on('pointerdown', clickEvent);
  // ADDS ASSET TO CANVAS
  app.stage.addChild(circle);

  app.ticker.add(rotate);
  console.log(app.ticker);
  setTimeout(() => {
    circle.texture = loader.resources['assets/star.png'].texture;
  }, 2000);
}

function rotate() {
  circle.x = app.renderer.screen.width / 2;
  circle.y = app.renderer.screen.height / 2;
  circle.rotation += 0.05;
};

let toggle = true;
function clickEvent(event) {
  if (toggle) {
    app.ticker.remove(rotate);
    toggle = false;
  } else {
    app.ticker.add(rotate);
    toggle = true;
  }
}