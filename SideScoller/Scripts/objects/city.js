var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // City Class ++++++++++++++++++++++++++++++++++++++
    var City = (function (_super) {
        __extends(City, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function City(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        City.prototype.checkBounds = function () {
            // check if ocean has left screen
            if (this.x == -1280) {
                this.reset();
            }
        };
        City.prototype.reset = function () {
            this.y = 0;
            this.x = 0; // reset ocean off screen
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        City.prototype.update = function () {
            this.x -= this.dx; // moves background left-side
            this.checkBounds();
        };
        return City;
    })(createjs.Bitmap);
    objects.City = City;
})(objects || (objects = {}));
//# sourceMappingURL=city.js.map