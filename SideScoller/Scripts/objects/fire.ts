module objects {
    // Fire Class ++++++++++++++++++++++++++++++++++++++
    export class Fire extends objects.gameobject {
     

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.sound = "thunder";
            this.name = "fire";
            this.reset();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if cloud has left screen
            if (this.x < 0 - 480) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = Math.floor(Math.random() * 480); // start fire at random location
            this.x = +640; // start fire off stage
            this.dy = Math.floor(Math.random() * 5) - 2;
            this.dx = Math.floor(Math.random() * -4) - 5;
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves cloud down the stage
            this.x += this.dx; // drifts cloud right and left
            this.checkBounds();
        }
    }
}   