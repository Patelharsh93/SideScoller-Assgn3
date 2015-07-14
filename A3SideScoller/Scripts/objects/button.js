var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Button Class
    var Button = (function (_super) {
        __extends(Button, _super);
        // Constructor
        function Button(imageString, x, y) {
            _super.call(this, imageString);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.x = x;
            this.y = y;
            //event listeners for on and out
            this.on("mouseover", this.onOver);
            this.on("mouseout", this.onOut);
        }
        Button.prototype.update = function () {
        };
        // Public events
        // mouse over
        Button.prototype.onOver = function (event) {
            this.alpha = 0.8;
        };
        // mouse out
        Button.prototype.onOut = function (event) {
            this.alpha = 1;
        };
        return Button;
    })(createjs.Bitmap);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map