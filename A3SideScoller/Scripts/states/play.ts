﻿module states {
    export class Play {

        //Constructor+++++++++++++++++++++++++++
        constructor()
        {
            this.main();
        }
        //PUBLIC METHODS
        //UPDATE METHODS
        update() {
            //update functions
            city.update();

            plane.update();

            fuel.update();

            for (var fire = 0; fire < 4; fire++) {
                fires[fire].update();
                collision.check(fires[fire]);
            }
            collision.check(fuel);
            
            scoreBoard.update();
        }


//Our main function
         main() {

        //instantiate new game container
            game = new createjs.Container();


        // add city object to stage
             city = new objects.City(assets.getResult("city"));
             game.addChild(city);

        // add plane object to stage
             plane = new objects.Plane(assets.getResult("plane"));
             game.addChild(plane);


    

        // add 3 fire objects to stage
        for (var fire = 0; fire < 4; fire++) {
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