module objects {
    // PlayerControl Class ++++++++++++++++++++++++++++++++++++++
    export class playerControl extends objects.gameobject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.name = "plane";
            this.sound = "engine";
            this._init(); // initialize avatar
            this._assignControls();
        }

      
        // PRIVATE METHODS +++++++++++++++++++++++++++++
        private _init() {
            this.x = 320;
            this.y = 240;
            this.speed = 0;
            this.direction = 0;
            this.dx = 0;
            this.dy = 0;
        }

        // Bind key actions to player events
        private _assignControls() {
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
        }

        // Switch statement to activate movement and rotation
        private _onControlDown(event: KeyboardEvent) {
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
                case config.KEY_SPACE:
                    config.FIRING = true;
                    break;
            }
        }

        // switch statement to reset controls
        private _onControlUp(event: KeyboardEvent) {
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
                case config.KEY_SPACE:
                    config.FIRING = false;
                    break;
            }
        }

        // Respond to player key presses
        private _controlAction() {
            // Execute left turn
            if (config.BACK) {
                if (this.x > 0) {
                    this.slideBack();
                }
            }

            // Execute right turn
            if (config.FORWARD) {
                if (this.x < 600) {
                    this.slideForward();
                }
            }

            // Forward Movement
            if (config.UP) {
                if (this.y > 50) {
                    this.slideUp();
                }
            }

            // Reverse Movement
            if (config.DOWN) {
                if (this.y < 400) {
                    this.slideDown();
                }
            }

            // Forward Stop
            if ((config.FORWARD == false) && (config.UP == false)) {
                this.speed = 0;
            }

        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            
            this._controlAction();
            this.calcVector();
            this.calcPosition();
        }
    }
}  