module states {
    export class Instruction {
        // Constructor
        constructor() {
           
            this.main();
        }

        public update() {
            startgame1.update();
        }

        public main() {
            
            // Add Game Container
            game = new createjs.Container();            

            // add start game to stage
            startgame1 = new objects.Button(assets.getResult("startgame1"), 250, 300);
            game.addChild(startgame1);
            startgame1.on("click", this.startgameClick);   
            
            // Add Instruction Label
            var info = "COntrol the plane using mouse\n\n" +
                "protect the avatar form the bullets upproaching towards it\n\n\n" +
                "Collect fuel to score points\n\n" +
                "Game ends when you collide 5 times with bullets\n\n\nGOOD LUCK!";
            instructionLabel = new objects.Label(info, config.FONT_SMALL,config.FONT_FAMILY,config.RED,200,200);
            game.removeAllChildren();
            game.addChild(instructionLabel);

        }

        // PUBLIC METHOD
        // When Main Menu Button is Clicked
        private startgameClick(event: MouseEvent) {
            game.removeAllChildren();
            currentState = config.PLAY_STATE;
            changeState();
            stage.addChild(game);
        }
    }
}  