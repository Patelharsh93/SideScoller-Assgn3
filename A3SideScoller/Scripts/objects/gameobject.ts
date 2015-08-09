module objects {
    // Cloud Class ++++++++++++++++++++++++++++++++++++++
    export class gameobject extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        public width: number;
        public height: number;
        public turnRate: number;
        public speed: number;
        public direction: number;
        public isColliding: boolean = false;
        public sound: string = "";
        public name: string = "";


        // PROTECTED PROPERTIES ++++++++++++++++++++++++++++
        protected dy: number;
        protected dx: number;
        

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }


        // Calculate the game object's new x and y coordinates
        public calcVector() {
            var radians: number = this.direction * (Math.PI / 180);
            this.dx = this.speed * Math.cos(radians);
            this.dy = this.speed * Math.sin(radians);
            this.dy *= -1;
        }
        
        // Slide left  
        public slideBack() {
            this.x -= config.PLAYER_MOVEMENT;
        }
        
        // Slide right
        public slideUp() {
            this.y -= config.PLAYER_MOVEMENT;
        }
        
        // Move forward
        public slideForward() {
            this.x += config.PLAYER_MOVEMENT;
        }
        // move backwards
        public slideDown() {
            this.y += config.PLAYER_MOVEMENT;
        }
        // Calculate the game object's new position
        public calcPosition() {
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}     