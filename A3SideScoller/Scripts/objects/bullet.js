var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Bullet Class
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet() {
            _super.call(this, "bullet");
            this.init();
            game.addChild(this);
        }
        // PUBLIC METHODS
        Bullet.prototype.init = function () {
            this.direction = plane.direction;
            //console.log(this.direction);
            console.log(this.direction);
            this.speed = config.BULLET_SPEED;
            this.x = plane.x + 8;
            this.y = plane.y - 50;
        };
        Bullet.prototype.update = function () {
            this.calcVector();
            this.calcPosition();
        };
        return Bullet;
    })(objects.gameobject);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
1;
//# sourceMappingURL=bullet.js.map