var objects;
(function (objects) {
    var scoreboard = (function () {
        // CONSTRUCTOR +++++++++++++++++++
        function scoreboard() {
            // PUBLIC PROPERTIES
            this.score = 0;
            this.lives = 5;
            this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "#FFFF00");
            this.scoreLabel = new createjs.Text("Score:", "40px Consolas", "#FFFF00");
            this.scoreLabel.x = 350;
            game.addChild(this.livesLabel);
            game.addChild(this.scoreLabel);
        }
        // PUBLIC METHODS +++++++++++++++++
        scoreboard.prototype.update = function () {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        };
        return scoreboard;
    })();
    objects.scoreboard = scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map