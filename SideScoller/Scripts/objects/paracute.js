var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    var Paracute = (function (_super) {
        __extends(Paracute, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Paracute(imageString) {
            _super.call(this, imageString);
            this.sound = "engine";
            this.x = 100;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Paracute.prototype.update = function () {
            this.y = stage.mouseY; // position plane under mouse
        };
        return Paracute;
    })(objects.gameobject);
    objects.Paracute = Paracute;
})(objects || (objects = {}));
//# sourceMappingURL=paracute.js.map