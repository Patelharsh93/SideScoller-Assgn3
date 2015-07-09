var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Bullet Class ++++++++++++++++++++++++++++++++++++++
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Bullet(imageString) {
            _super.call(this, imageString);
            this.sound = "thunder";
            this.name = "bullet";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Bullet.prototype.checkBounds = function () {
            // check if cloud has left screen
            if (this.x < 0 - 480) {
                this.reset();
            }
        };
        Bullet.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480); // start fire at random location
            this.x = +640; // start fire off stage
            this.dy = Math.floor(Math.random() * 5) - 2;
            this.dx = Math.floor(Math.random() * -4) - 5;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Bullet.prototype.update = function () {
            this.y += this.dy; // moves cloud down the stage
            this.x += this.dx; // drifts cloud right and left
            this.checkBounds();
        };
        return Bullet;
    })(objects.gameobject);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map