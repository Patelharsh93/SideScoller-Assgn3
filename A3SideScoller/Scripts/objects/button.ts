module objects {
    // Button Class

    export class Button extends createjs.Bitmap{

     
        // Constructor
        constructor(imageString: string, x: number, y: number) {
            super(imageString);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.x = x;
            this.y = y;

            //event listeners for on and out
            this.on("mouseover", this.onOver);
            this.on("mouseout", this.onOut);
        }

        public update(): void {
           
        }

        // Public events
        // mouse over
        public onOver(event: MouseEvent): void {
            this.alpha = 0.8;
        }
        // mouse out
        public onOut(event: MouseEvent): void {
            this.alpha = 1;
        }
    }
}  