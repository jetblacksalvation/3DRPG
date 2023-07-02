import Game_Globals_Instance from "./init";
import CellHandler from "./CellHandler";
class InputHandler{
    constructor(){
        this.lastKey = '';
        this.directionPointer = 0;
        this.direction = [0, Math.PI/2, Math.PI ,(3*Math.PI)/2]
        

        this.state;//pass state to inputhandler..
        window.addEventListener('keydown', (e) =>{
            switch(e.key){
        //send signal to a function that will handle any key that isn't e or q... this function determins movement on the grid 
            case 'r':
                Game_Globals_Instance.camera.position.x =0;
                Game_Globals_Instance.camera.position.y =0;
                Game_Globals_Instance.camera.position.z = 0;
                break;
            case 'w':

                if (directionPointer == 0){
                    if (CellHandler.LevelGrid[CellHandler.PlayerPosition[0]][CellHandler.PlayerPosition[1] -1] ==0 ){
                        PlayerPosition[1] -=1;
                    }
                    // camera.position.z -=2;
                }
                else if(directionPointer ==1){
                    if(CellHandler.LevelGrid[CellHandler.PlayerPosition[0] -1][CellHandler.PlayerPosition[1]] == 0){
                        PlayerPosition[0] -=1;
                    }
                    // camera.position.x -=2;
                }
                else if(directionPointer ==2){
                    if(CellHandler.LevelGrid[CellHandler.PlayerPosition[0]][CellHandler.PlayerPosition[1] +1 ] ==0){
                        PlayerPosition[1] +=1;
                    }
                    // camera.position.z +=2;
                }
                else if(directionPointer ==3){
                    if(CellHandler.LevelGrid[CellHandler.PlayerPosition[0] +1][PlayerPosition[1]] == 0){
                        PlayerPosition[0] +=1;
                    }

                    // camera.position.x +=2;
                }
                if (getRandomInt(10)){
                    //draw to screen also change music
                    sound.stop();
                    audioLoader.load( 'Music/20_Boss.mp3', function( buffer ) {
                        sound.setBuffer( buffer );
                        sound.setLoop( true );
                        sound.setVolume( 0.5 );
                        sound.play();
                    });
                    console.log("You have run Into a demon!!")
                }
                break;
            //e and q are for turning. using hard coded vals cause idgaf 
            //i would be surprised if this code needs to be changed/ maintained in any way 
            case 'e':
                if (this.directionPointer - 1 <0){
                    this.directionPointer = 3;
                    break;
                }
                else{
                    this.directionPointer -=1;
                }
                //moves clock wise
                break;
            case 'q':
                if (this.directionPointer + 1 >3){
                    this.directionPointer = 0;
                    break;
                }
                else{
                    this.directionPointer +=1;
                }
                //moves counter clock wise  
                break;
                // default:
                //     HandleGridMovement(event.key);
                //f
            }

            console.log(this.directionPointer, 'is direction');
            console.log(Game_Globals.camera)
            Game_Globals.camera.rotation.y = this.direction[this.directionPointer];
            console.log("The rotation is ", Game_Globals.camera.rotation.y);
            }
        );
        window.addEventListener('keyup', (e)=>{console.log("keyup is", e)});

    }
}
const InputHandlerInstance = new InputHandler()
export default InputHandlerInstance;
