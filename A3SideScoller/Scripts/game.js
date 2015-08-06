/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="config/config.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/city.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/fuel.ts" />
/// <reference path="objects/fire.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/start.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/end.ts" />
//Game framework variable
var canvas = document.getElementById("canvas");
var stage;
var stats;
var assets;
var manifest = [
    { id: "city", src: "assets/images/city.jpg" },
    { id: "plane", src: "assets/images/plane2.png" },
    { id: "fuel", src: "assets/images/fuel.png" },
    { id: "rocket", src: "assets/images/rocket.png" },
    { id: "startgame1", src: "assets/images/startgame1.png" },
    { id: "again", src: "assets/images/playagain1.png" },
    { id: "instructions", src: "assets/images/instructions.png" },
    { id: "engine", src: "assets/audio/engine.ogg" },
    { id: "powerup", src: "assets/audio/powerup.wav" },
    { id: "thunder", src: "assets/audio/thunder.wav" },
];
// Game Variables
var city;
var plane;
var fuel;
var again;
var startgame1;
var instructions;
var fires = [];
var scoreBoard;
var game;
//text varaibles
var gameOver;
var finalScore;
// Game Managers
var collision;
// Game States
var currentStateFunction;
var currentState;
var start;
var play;
var end;
//preloaded Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    //assets.on is an event Listener, triggers when assets are cmpletely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest); //Manifest is assets manager, an array of object
    //Setup statics object
    setupStats();
}
function init() {
    stage = new createjs.Stage(canvas); //refrence to the stage
    stage.enableMouseOver(20);
    //Ticker is a static class
    createjs.Ticker.setFPS(60); //framerate for the game
    //event listener triggers 60 ms times every second
    createjs.Ticker.on("tick", gameLoop);
    currentState = config.START_STATE;
    // calling main game function
    changeState();
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
    currentStateFunction.update();
    stage.update();
    stage.update();
    stats.end(); //
}
//Call back function that allows me to respond to button clcik events
function pinkButtonClicked(event) {
    createjs.Sound.play("clicked");
}
// Our Main Game Function
function changeState() {
    // instantiate new game container
    game = new createjs.Container();
    switch (currentState) {
        case config.START_STATE:
            //// instantiate start state
            start = new states.Start();
            currentStateFunction = start;
            break;
        case config.INSTRUCTION_STATE:
            break;
        case config.PLAY_STATE:
            //// instantiate start state
            play = new states.Play();
            currentStateFunction = play;
            break;
        case config.END_STATE:
            break;
    }
    //add game container to stage
    stage.addChild(game);
}
//# sourceMappingURL=game.js.map