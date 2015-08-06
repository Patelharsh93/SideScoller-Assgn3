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
            startgame1.update();
            instructions.update();
            
        }

        //clicked events
        public startgameClick(event:MouseEvent)
        {
            game.removeAllChildren();
            currentState = config.PLAY_STATE;
            changeState();
            
        }

        public instructionsClick(event:MouseEvent)
        {

        }


        //main function
        main() {
            //instantiate new game container
            game = new createjs.Container();


            // add city object to stage
            city = new objects.City(assets.getResult("city"));
            game.addChild(city);


            // add Mail Pilot Label
            var label: objects.Label = new objects.Label("SIDE SCROLLER", config.FONT_EXTRA_LARGE, config.FONT_FAMILY, config.YELLOW, 320, 140);
            game.addChild(label);
            
            // add start game to stage
            startgame1 = new objects.Button(assets.getResult("startgame1"), 250, 300);  
            game.addChild(startgame1);          
            startgame1.on("click", this.startgameClick);
           
            
            // add instruction to stage
            instructions = new objects.Button(assets.getResult("instructions"),250,400);           
            game.addChild(instructions);
            instructions.on("click", this.instructionsClick);
            
            stage.addChild(game);
        }
    }
    }
