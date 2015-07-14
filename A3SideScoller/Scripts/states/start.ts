module states
{
    export class Start
    {
        //Constructor+++++++++++++++++++++++++++
        constructor() {
            this.main();
        }

        //Public Methods
        //Update method
        public update()
        {
            startgame.update();
            instructions.update();
        }

        //clicked events
        public startgameClicked(event:MouseEvent)
        {
            game.removeAllChildren();
            stateName = "play";
            play = new states.Play();
        }

        public instructionsClicked(event:MouseEvent)
        {

        }

        //main function
        main() {
            //instantiate new game container
            game = new createjs.Container();


            // add city object to stage
            city = new objects.City(assets.getResult("city"));
            game.addChild(city);

            
            // add start game to stage
            startgame = new objects.Button(assets.getResult("startgame"), 100, 200);  
            game.addChild(startgame);          
            startgame.on("click", this.startgameClicked);
           
            
            // add play again to stage
            instructions = new objects.Button(assets.getResult("instruction"),100,400);           
            game.addChild(instructions);
            instructions.on("click", this.instructionsClicked);
            
        }
    }
    }
