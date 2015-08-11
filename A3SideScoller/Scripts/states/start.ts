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

        public startgameeasyClick(event: MouseEvent) {
            game.removeAllChildren();
            currentState = config.PLAY_EASY_STATE;
            changeState();
            startGameEasy.off("click", this.startgameeasyClick);

        }
        public startgamehardClick(event: MouseEvent) {
            game.removeAllChildren();
            currentState = config.PLAY_EASY_STATE;
            changeState();
            startGameHard.off("click", this.startgamehardClick);

        }

        public instructionsClick(event:MouseEvent)
        {
            currentState = config.INSTRUCTION_STATE;
            changeState();
        }


        //main function
        main() {
            //instantiate new game container
            game = new createjs.Container();


            // add city object to stage
            city = new objects.City(assets.getResult("city"));
            game.addChild(city);


            // add Mail Pilot Label
            var label: objects.Label = new objects.Label("FIGHTER PLANE", config.FONT_EXTRA_LARGE, config.FONT_FAMILY, config.YELLOW, 320, 100);
            game.addChild(label);
            
            // add start game to stage
            startGameEasy = new objects.Button(assets.getResult("easy"), 250, 200);  
            game.addChild(startGameEasy);          
            startGameEasy.on("click", this.startgameeasyClick);
           
            // add  easy start game to stage
            startgame1 = new objects.Button(assets.getResult("normal"), 250, 250);
            game.addChild(startgame1);
            startgame1.on("click", this.startgameClick, this);

            // add  easy start game to stage
            startGameHard = new objects.Button(assets.getResult("hard"), 250, 300);
            game.addChild(startGameHard);
            startGameHard.on("click", this.startgamehardClick, this);
            
            // add instruction to stage
            instructions = new objects.Button(assets.getResult("instructions"),250,400);           
            game.addChild(instructions);
            instructions.on("click", this.instructionsClick);
            
            stage.addChild(game);
        }
    }
    }
