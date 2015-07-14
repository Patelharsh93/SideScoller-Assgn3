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
            play.update();
        }

        main() {
            //instantiate new game container
            game = new createjs.Container();


            // add city object to stage
            city = new objects.City(assets.getResult("city"));
            game.addChild(city);

            // Add Game Over Label
            gameOver = new createjs.Text("GAME OVER", "70px", "#2EFE2E");
            gameOver.textAlign = "center";
            gameOver.x = 100;
            gameOver.y = 100;
            game.addChild(gameOver);

            //  Final Score            
            finalScore = new createjs.Text("FINAL SCORE: " + scoreBoard.score, "50px", "#2EFE2E");
            finalScore.textAlign = "center";
            finalScore.x = 100;
            finalScore.y = 200;
            game.addChild(finalScore);

            // add play again to stage
            again = new objects.Button(assets.getResult("again"), 100, 400);
            game.addChild(again);
            again.on("click", this.againClicked);         
        }
    }
}