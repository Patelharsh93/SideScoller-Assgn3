module objects {

    // Bullet Class
    export class Bullet extends objects.gameobject {
        constructor() {
            super("bullet");
            this.init();
            game.addChild(this);
        }

        // PUBLIC METHODS
        public init() {
            this.direction = plane.direction;
            //console.log(this.direction);

            
            console.log(this.direction);
            this.speed = config.BULLET_SPEED;
            this.x = plane.x + 8;
            this.y = plane.y - 50;
        }

        update() {
            this.calcVector();
            this.calcPosition();
        }
    }
} 1