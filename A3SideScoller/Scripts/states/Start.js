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
            startgame.update();
            instructions.update();
        };
        //clicked events
        Start.prototype.startgameClicked = function (event) {
            game.removeAllChildren();
            stateName = "play";
            play = new states.Play();
        };
        Start.prototype.instructionsClicked = function (event) {
        };
        //main function
        Start.prototype.main = function () {
            //instantiate new game container
            game = new createjs.Container();
            // add city object to stage
            city = new objects.City(assets.getResult("city"));
            game.addChild(city);
            // add start game to stage
            startgame = new objects.Button(assets.getResult("startgame"), 100, 200);
            game.addChild(startgame);
            startgame.on("click", this.startgameClicked);
            // add play again to stage
            instructions = new objects.Button(assets.getResult("instruction"), 100, 400);
            game.addChild(instructions);
            instructions.on("click", this.instructionsClicked);
        };
        return Start;
    })();
    states.Start = Start;
})(states || (states = {}));
//# sourceMappingURL=start.js.map