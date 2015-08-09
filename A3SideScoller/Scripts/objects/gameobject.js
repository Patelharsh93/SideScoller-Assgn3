var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Cloud Class ++++++++++++++++++++++++++++++++++++++
    var gameobject = (function (_super) {
        __extends(gameobject, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function gameobject(imageString) {
            _super.call(this, imageString);
            this.isColliding = false;
            this.sound = "";
            this.name = "";
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        // Calculate the game object's new x and y coordinates
        gameobject.prototype.calcVector = function () {
            var radians = this.direction * (Math.PI / 180);
            this.dx = this.speed * Math.cos(radians);
            this.dy = this.speed * Math.sin(radians);
            this.dy *= -1;
        };
        // Slide left  
        gameobject.prototype.slideBack = function () {
            this.x -= config.PLAYER_MOVEMENT;
        };
        // Slide right
        gameobject.prototype.slideUp = function () {
            this.y -= config.PLAYER_MOVEMENT;
        };
        // Move forward
        gameobject.prototype.slideForward = function () {
            this.x += config.PLAYER_MOVEMENT;
        };
        // move backwards
        gameobject.prototype.slideDown = function () {
            this.y += config.PLAYER_MOVEMENT;
        };
        // Calculate the game object's new position
        gameobject.prototype.calcPosition = function () {
            this.x += this.dx;
            this.y += this.dy;
        };
        return gameobject;
    })(createjs.Bitmap);
    objects.gameobject = gameobject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map