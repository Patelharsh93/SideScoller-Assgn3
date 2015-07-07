var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Fire Class ++++++++++++++++++++++++++++++++++++++
    var Fire = (function (_super) {
        __extends(Fire, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Fire(imageString) {
            _super.call(this, imageString);
            this.sound = "thunder";
            this.name = "fire";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Fire.prototype.checkBounds = function () {
            // check if cloud has left screen
            if (this.x < 0 - 480) {
                this.reset();
            }
        };
        Fire.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480); // start fire at random location
            this.x = +640; // start fire off stage
            this.dy = Math.floor(Math.random() * 5) - 2;
            this.dx = Math.floor(Math.random() * -4) - 5;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Fire.prototype.update = function () {
            this.y += this.dy; // moves cloud down the stage
            this.x += this.dx; // drifts cloud right and left
            this.checkBounds();
        };
        return Fire;
    })(objects.gameobject);
    objects.Fire = Fire;
})(objects || (objects = {}));
//# sourceMappingURL=fire.js.map