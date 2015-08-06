module states {
    export class End {

    
        //Constructor+++++++++++++++++++++++++++
        constructor() {
            this.main();
        }
        //public methods
        public update()
        {
            again.update();

        }
        public againClicked(event: MouseEvent)
        {
            currentState = config.PLAY_STATE;
            changeState();
        }

        main() {
            //instantiate new game container
            game = new createjs.Container();


            // add city object to stage
            city = new objects.City(assets.getResult("city"));
            game.addChild(city);

            // Add Game Over Label
            gameOver = new objects.Label("GAME OVER", config.FONT_MEDIUM, config.FONT_FAMILY, config.GREEN,350, 200);
            gameOver.textAlign = "center";
            game.addChild(gameOver);

            //  Final Score            
            finalScore = new objects.Label("FINAL SCORE: " + scoreBoard.score,config.FONT_SMALL, config.FONT_FAMILY, config.GREEN, 350, 250);
            finalScore.textAlign = "center";
            game.addChild(finalScore);

            // add play again to stage
            again = new objects.Button(assets.getResult("again"), 250, 300);
            game.addChild(again);
            again.on("click", this.againClicked);         
        }
    }
}