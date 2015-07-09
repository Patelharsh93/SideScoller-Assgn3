var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // fuel Class ++++++++++++++++++++++++++++++++++++++
    var Fuel = (function (_super) {
        __extends(Fuel, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Fuel(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.name = "fuel";
            this.sound = "powerup";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Fuel.prototype.checkBounds = function () {
            // check if fuel has left screen
            if (this.x < 0 - 480) {
                this.reset();
            }
        };
        Fuel.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480); // start fuel at random location
            this.x = +640; // start fuel off stage
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Fuel.prototype.update = function () {
            this.x -= this.dx; // moves fuel down the stage
            this.checkBounds();
        };
        return Fuel;
    })(objects.gameobject);
    objects.Fuel = Fuel;
})(objects || (objects = {}));
//# sourceMappingURL=fuel.js.map