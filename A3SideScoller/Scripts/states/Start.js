var states;
(function (states) {
    var Start = (function () {
        //Constructor+++++++++++++++++++++++++++
        function Start() {
            this.main();
        }
        //Public Methods
        //Update method
        Start.prototype.update = function () {
            startgame1.update();
            instructions.update();
        };
        //clicked events
        Start.prototype.startgameClick = function (event) {
            game.removeAllChildren();
            currentState = config.PLAY_STATE;
            changeState();
        };
        Start.prototype.startgameeasyClick = function (event) {
            game.removeAllChildren();
            currentState = config.PLAY_EASY_STATE;
            changeState();
            startGameEasy.off("click", this.startgameeasyClick);
        };
        Start.prototype.startgamehardClick = function (event) {
            game.removeAllChildren();
            currentState = config.PLAY_EASY_STATE;
            changeState();
            startGameHard.off("click", this.startgamehardClick);
        };
        Start.prototype.instructionsClick = function (event) {
            currentState = config.INSTRUCTION_STATE;
            changeState();
        };
        //main function
        Start.prototype.main = function () {
            //instantiate new game container
            game = new createjs.Container();
            // add city object to stage
            city = new objects.City(assets.getResult("city"));
            game.addChild(city);
            // add Mail Pilot Label
            var label = new objects.Label("FIGHTER PLANE", config.FONT_EXTRA_LARGE, config.FONT_FAMILY, config.YELLOW, 320, 100);
            game.addChild(label);
            // add start game to stage
            startGameEasy = new objects.Button(assets.getResult("easy"), 250, 200);
            game.addChild(startGameEasy);
            startGameEasy.on("click", this.startgameeasyClick);
            // add  easy start game to stage
            startgame1 = new objects.Button(assets.getResult("normal"), 250, 250);
            game.addChild(startgame1);
            startgame1.on("click", this.startgameClick, this);
            // add  easy start game to stage
            startGameHard = new objects.Button(assets.getResult("hard"), 250, 300);
            game.addChild(startGameHard);
            startGameHard.on("click", this.startgamehardClick, this);
            // add instruction to stage
            instructions = new objects.Button(assets.getResult("instructions"), 250, 400);
            game.addChild(instructions);
            instructions.on("click", this.instructionsClick);
            stage.addChild(game);
        };
        return Start;
    })();
    states.Start = Start;
})(states || (states = {}));
//# sourceMappingURL=start.js.map