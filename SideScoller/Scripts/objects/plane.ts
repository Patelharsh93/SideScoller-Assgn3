﻿module objects {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    export class Plane extends objects.gameobject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.sound = "engine";
            this.x = 100;
            createjs.Sound.play(this.sound, { "loop": -1 });

        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; // position plane under mouse
        }
    }
}    