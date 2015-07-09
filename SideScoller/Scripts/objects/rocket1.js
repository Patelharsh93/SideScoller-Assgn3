var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Rocket Class ++++++++++++++++++++++++++++++++++++++
    var Rocket1 = (function (_super) {
        __extends(Rocket1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Rocket1(imageString) {
            _super.call(this, imageString);
            this.sound = "explosion";
            this.name = "fire";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Rocket1.prototype.checkBounds = function () {
            // check if cloud has left screen
            if (this.x < 0 - 480) {
                this.reset();
            }
        };
        Rocket1.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480); // start fire at random location
            this.x = +640; // start fire off stage
            this.dy = Math.floor(Math.random() * 5) - 2;
            this.dx = Math.floor(Math.random() * -4) - 5;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Rocket1.prototype.update = function () {
            this.y += this.dy; // moves cloud down the stage
            this.x += this.dx; // drifts cloud right and left
            this.checkBounds();
        };
        return Rocket1;
    })(objects.gameobject);
    objects.Rocket1 = Rocket1;
})(objects || (objects = {}));
//# sourceMappingURL=rocket1.js.map