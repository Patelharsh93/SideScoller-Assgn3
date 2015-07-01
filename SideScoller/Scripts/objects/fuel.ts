module objects {
    // Fuel Class ++++++++++++++++++++++++++++++++++++++
    export class Fuel extends objects.gameobject {
       

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.dy = 5;
            this.name = "fuel";
            this.sound = "powerup";
            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if fuel has left screen
            if (this.x > 640 + this.height) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = Math.floor(Math.random() * 480); // start fuel at random location
            this.x = -this.height; // start fuel off stage
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= this.dy; // moves fuel down the stage
            this.checkBounds();
        }
    }
}  