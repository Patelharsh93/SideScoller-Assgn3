/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="config/config.ts" />
/// <reference path="utility/utility.ts" />

/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/city.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/playercontrol.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/fuel.ts" />
/// <reference path="objects/fire.ts" />


/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="managers/collision.ts" />

/// <reference path="states/instructions.ts" />
/// <reference path="states/end.ts" />
/// <reference path="states/start.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/play_hard_state.ts" />
/// <reference path="states/play_easy_state.ts" />

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
    { id: "bullet", src: "assets/images/bullet.jpg" },
    { id: "easy", src: "assets/images/easy.jpg" },
    { id: "normal", src: "assets/images/normal.jpg" },
    { id: "hard", src: "assets/images/hard.jpg" },
    { id: "again", src: "assets/images/playagain1.png" },
    { id: "instructions", src: "assets/images/instructions.png" },
    { id: "engine", src: "assets/audio/engine.ogg" },
    { id: "powerup", src: "assets/audio/powerup.wav" },
    { id: "thunder", src: "assets/audio/thunder.wav" },
];


// Game Variables
var city: objects.City;
var plane: objects.playerControl;
var bullet: objects.Bullet;
var fuel: objects.Fuel;
var again: objects.Button;
var startgame1: objects.Button;
var startGameEasy: objects.Button;
var startGameHard: objects.Button;
var instructions: objects.Button;
var fires = [];
var scoreBoard: objects.scoreboard;
var game: createjs.Container;

//label varaible
var instructionLabel: objects.Label;
var gameOver: objects.Label;
var finalScore: objects.Label;

// Game Managers

var collision: managers.Collision;

// Game States
var currentStateFunction;
var currentState: number;
var start: states.Start;
var instruction: states.Instruction;
var end: states.End;
var play: states.Play;
var playEasy: states.PLAY_EASY_STATE;
var playHard: states.PLAY_HARD_STATE;
var bulletManager: managers.BulletManager;



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
function pinkButtonClicked(event: createjs.MouseEvent) {
    createjs.Sound.play("clicked");
}


// Our Main Game Function
function changeState() {
    // instantiate new game container
    game = new createjs.Container();

    switch (currentState)
    {
        case config.START_STATE:
            //// instantiate start state
            start = new states.Start();
            currentStateFunction = start;
            break;

        case config.INSTRUCTION_STATE:
            //// instantiate instruction state
            instruction = new states.Instruction();
            currentStateFunction = instruction;
            break;

        case config.PLAY_STATE:
    //// instantiate start state
            play = new states.Play();
            currentStateFunction = play;
            break;
        case config.PLAY_EASY_STATE:
            //// instantiate start state
            playEasy = new states.PLAY_EASY_STATE();
            currentStateFunction = playEasy;
            break;
        case config.PLAY_HARD_STATE:
            //// instantiate start state
            playHard = new states.PLAY_HARD_STATE();
            currentStateFunction = playHard;
            break;

        case config.END_STATE:
            //// instantiate end state
            end = new states.End();
            currentStateFunction = end;
            break;
    }
    


    //add game container to stage
    stage.addChild(game);
}
