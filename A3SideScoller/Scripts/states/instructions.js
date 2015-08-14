var states;
(function (states) {
    var Instruction = (function () {
        // Constructor
        function Instruction() {
            this.main();
        }
        Instruction.prototype.update = function () {
            startgame1.update();
        };
        // PUBLIC METHODS
        // When Main Menu Button is Clicked
        Instruction.prototype.gobackClick = function (event) {
            game.removeAllChildren();
            currentState = config.START_STATE;
            changeState();
            stage.addChild(game);
        };
        Instruction.prototype.main = function () {
            // Add Game Container
            game = new createjs.Container();
            // add city object to stage
            city = new objects.City(assets.getResult("city"));
            game.addChild(city);
            // add  easy start game to stage
            goback = new objects.Button(assets.getResult("goback"), 520, 100);
            game.addChild(goback);
            goback.on("click", this.gobackClick, this);
            // add  key control image to stage
            keycontrols = new objects.Button(assets.getResult("keys"), 250, 250);
            game.addChild(keycontrols);
        };
        return Instruction;
    })();
    states.Instruction = Instruction;
})(states || (states = {}));
//# sourceMappingURL=instructions.js.map