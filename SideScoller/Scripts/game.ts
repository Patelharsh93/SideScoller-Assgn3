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

//Game framework variable

var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

var assets: createjs.LoadQueue;
var manifest = [
    { id: "city", src: "assets/images/city.jpg" },
    { id: "plane", src: "assets/images/plane.png" },
    { id: "fuel", src: "assets/images/fuel.png" },
    { id: "fire", src: "assets/images/fire.png" },
    { id: "engine", src: "assets/audio/engine.ogg" },
    { id: "powerup", src: "assets/audio/powerup.wav" },
];

//Game variables
var city: objects.City;
var plane: objects.Plane;
var fuel: objects.Fuel;
var fires = [];
var scoreBoard: objects.scoreboard;

// Game Managers
var collision: managers.Collision;


//preloaded Function
function preload()
{
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    //assets.on is an event Listener, triggers when assets are cmpletely loaded
    assets.on("complete", init, this);  
    assets.loadManifest(manifest);     //Manifest is assets manager, an array of object

    //Setup statics object
    setupStats();
}


//Callback function that intializies game objects
function init(){
    stage = new createjs.Stage(canvas);  //refrence to the stage
    stage.enableMouseOver(20);
    //Ticker is a static class
    createjs.Ticker.setFPS(60); //framerate for the game
    //event listener triggers 60 ms times every second
    createjs.Ticker.on("tick", gameLoop);

    //Calling main Function
    main();
}

function setupStats()
{
    stats = new Stats();
    stats.setMode(2);

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}

//Call back function that creates our main gameLoop- refresed 60 fps
function gameLoop()
{
    stats.begin(); //Begin measuring
    city.update();

    plane.update();

    fuel.update();

    for (var fire = 0; fire < 4; fire++) {
        fires[fire].update();      
    }
    collision.check(fuel);

    scoreBoard.update();


    stage.update();
    stats.end(); //
}

//Call back function that allows me to respond to button clcik events
function pinkButtonClicked(event: createjs.MouseEvent)
{
    createjs.Sound.play("clicked");
}




//Our main function
function main() {

    // add city object to stage
    city= new objects.City(assets.getResult("city"));
    stage.addChild(city);

    // add plane object to stage
    plane = new objects.Plane(assets.getResult("plane"));
    stage.addChild(plane);


    

    // add 3 fire objects to stage
    for (var fire = 0; fire < 4; fire++) {
        fires[fire] = new objects.Fire(assets.getResult("fire"));
        stage.addChild(fires[fire]);
    }

    //add fuel object to stage
    fuel = new objects.Fuel(assets.getResult("fuel"));
    stage.addChild(fuel);

    //add scoreboard
    scoreBoard = new objects.scoreboard();

    //add collision manager
    collision = new managers.Collision();
}