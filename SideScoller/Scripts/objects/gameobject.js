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
        return gameobject;
    })(createjs.Bitmap);
    objects.gameobject = gameobject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map