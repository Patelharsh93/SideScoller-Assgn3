var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // PlayerControl Class ++++++++++++++++++++++++++++++++++++++
    var playerControl = (function (_super) {
        __extends(playerControl, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function playerControl(imageString) {
            _super.call(this, imageString);
            this.sound = "engine";
            this._init(); // initialize avatar
            this._assignControls();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++
        playerControl.prototype._init = function () {
            this.x = 320;
            this.y = 240;
            this.speed = 0;
            this.direction = 0;
            this.dx = 0;
            this.dy = 0;
        };
        // Bind key actions to player events
        playerControl.prototype._assignControls = function () {
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
        };
        // Switch statement to activate movement and rotation
        playerControl.prototype._onControlDown = function (event) {
            switch (event.keyCode) {
                case config.KEY_A:
                case config.KEY_BACK:
                    config.BACK = true;
                    break;
                case config.KEY_D:
                case config.KEY_FORWARD:
                    config.FORWARD = true;
                    break;
                case config.KEY_W:
                case config.KEY_UP:
                    config.UP = true;
                    break;
                case config.KEY_S:
                case config.KEY_DOWN:
                    config.DOWN = true;
                    break;
            }
        };
        // switch statement to reset controls
        playerControl.prototype._onControlUp = function (event) {
            switch (event.keyCode) {
                case config.KEY_A:
                case config.KEY_BACK:
                    config.BACK = false;
                    break;
                case config.KEY_D:
                case config.KEY_FORWARD:
                    config.FORWARD = false;
                    break;
                case config.KEY_W:
                case config.KEY_UP:
                    config.UP = false;
                    break;
                case config.KEY_S:
                case config.KEY_DOWN:
                    config.DOWN = false;
                    break;
            }
        };
        // Respond to player key presses
        playerControl.prototype._controlAction = function () {
            // Execute left turn
            if (config.BACK) {
                if (this.x > 0) {
                    this.slideBack();
                }
            }
            // Execute right turn
            if (config.FORWARD) {
                if (this.x < 625) {
                    this.slideForward();
                }
            }
            // Forward Movement
            if (config.UP) {
                if (this.y > 0) {
                    this.slideUp();
                }
            }
            // Reverse Movement
            if (config.DOWN) {
                if (this.y < 450) {
                    this.slideDown();
                }
            }
            // Forward Stop
            if ((config.FORWARD == false) && (config.UP == false)) {
                this.speed = 0;
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        playerControl.prototype.update = function () {
            this._controlAction();
            this.calcVector();
            this.calcPosition();
        };
        return playerControl;
    })(objects.gameobject);
    objects.playerControl = playerControl;
})(objects || (objects = {}));
//# sourceMappingURL=playercontrol.js.map