/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="utility/utility.ts" />

/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/city.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/fuel.ts" />
/// <reference path="objects/fire.ts" />

/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />

//Game framework variable

var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;


var assets: createjs.LoadQueue;
var manifest = [
    { id: "city", src: "assets/images/city.jpg" },
    { id: "plane", src: "assets/images/plane2.png" },
    { id: "fuel", src: "assets/images/fuel.png" },
    { id: "rocket", src: "assets/images/rocket.png" },
    { id: "engine", src: "assets/audio/engine.ogg" },
    { id: "powerup", src: "assets/audio/powerup.wav" },
    { id: "thunder", src: "assets/audio/thunder.wav" },
];


// Game Variables
var city: objects.City;
var plane: objects.Plane;
var fuel: objects.Fuel;
var fires = [];
var scoreBoard: objects.scoreboard;
var game: createjs.Container;

// Game Managers

var collision: managers.Collision;

// Game States
var play: states.Play;


//preloaded Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    //assets.on is an event Listener, triggers when assets are cmpletely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);     //Manifest is assets manager, an array of object

    //Setup statics object
    setupStats();
}



function init() {
    stage = new createjs.Stage(canvas);  //refrence to the stage
    stage.enableMouseOver(20);
    //Ticker is a static class
    createjs.Ticker.setFPS(60); //framerate for the game
    //event listener triggers 60 ms times every second
    createjs.Ticker.on("tick", gameLoop);


    // calling main game function
    main();
}

function setupStats() {
    stats = new Stats();
    stats.setMode(2);

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}

//Call back function that creates our main gameLoop- refresed 60 fps
function gameLoop() {
    stats.begin(); //Begin measuring
   
    play.update();

    stage.update();
    stats.end(); //
}

//Call back function that allows me to respond to button clcik events
function pinkButtonClicked(event: createjs.MouseEvent) {
    createjs.Sound.play("clicked");
}


// Our Main Game Function
function main() {
    // instantiate new game container
    game = new createjs.Container();

    // instantiate play state
    play = new states.Play();

    //add game container to stage
    stage.addChild(game);
}
