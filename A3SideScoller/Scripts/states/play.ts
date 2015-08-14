module states {
     export class Play {

        //Constructor+++++++++++++++++++++++++++
        constructor() {
            this.main();
        }
        //PUBLIC METHODS
        //UPDATE METHODS
        update() {
            //update functions
            city.update();

            plane.update();

            bulletManager.update();
            fuel.update();

            for (var fire = 0; fire < 5; fire++) {
                fires[fire].update();
                collision.check(fires[fire]);
            }
            collision.check(fuel);

            this.checkLives();

            scoreBoard.update();
        }

        public checkLives()
        {
            if (scoreBoard.lives < 1)
            {
                 
                game.removeAllChildren(); 
                currentState = config.END_STATE;
                changeState();
            }
        }
    

//Our main function
         main() {

        //instantiate new game container
            game = new createjs.Container();


        // add space image object to stage
             space = new objects.City(assets.getResult("space"));
             game.addChild(space);
  

        // add plane object to stage
             plane = new objects.playerControl(assets.getResult("plane"));
             game.addChild(plane);

             // instantiate my bullet manager object
             bulletManager = new managers.BulletManager();


    

        // add 5 fire objects to stage
        for (var fire = 0; fire < 5; fire++) {
            fires[fire] = new objects.Fire(assets.getResult("rocket"));
            game.addChild(fires[fire]);
        }

        //add fuel object to stage
        fuel = new objects.Fuel(assets.getResult("fuel"));
        game.addChild(fuel);

        //add scoreboard
        scoreBoard = new objects.scoreboard();

        //add collision manager
        collision = new managers.Collision();

        //add game container to the stage
        stage.addChild(game);
    }
    }
} 