module objects {
    // fuel Class ++++++++++++++++++++++++++++++++++++++
    export class Fuel extends objects.gameobject {
       

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.dx = 5;
            this.name = "fuel";
            this.sound = "powerup";
            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if fuel has left screen
            if (this.x < 0 - 480) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = Math.floor(Math.random() * 480); // start fuel at random location
            this.x = +640; // start fuel off stage
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= this.dx; // moves fuel down the stage
            this.checkBounds();
        }
    }
} 