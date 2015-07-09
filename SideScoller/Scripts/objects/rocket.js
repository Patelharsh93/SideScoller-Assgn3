var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Rocket Class ++++++++++++++++++++++++++++++++++++++
    var Rocket = (function (_super) {
        __extends(Rocket, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Rocket(imageString) {
            _super.call(this, imageString);
            this.sound = "explosion";
            this.name = "fire";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Rocket.prototype.checkBounds = function () {
            // check if cloud has left screen
            if (this.x < 0 - 480) {
                this.reset();
            }
        };
        Rocket.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480); // start fire at random location
            this.x = +640; // start fire off stage
            this.dy = Math.floor(Math.random() * 5) - 2;
            this.dx = Math.floor(Math.random() * -4) - 5;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Rocket.prototype.update = function () {
            this.y += this.dy; // moves cloud down the stage
            this.x += this.dx; // drifts cloud right and left
            this.checkBounds();
        };
        return Rocket;
    })(objects.gameobject);
    objects.Rocket = Rocket;
})(objects || (objects = {}));
//# sourceMappingURL=rocket.js.map