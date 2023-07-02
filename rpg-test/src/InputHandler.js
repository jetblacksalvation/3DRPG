import Game_Globals from "./init";
import CellHandler from "./CellHandler";
export default class InputHandler{
    constructor(){
        this.lastKey = '';
        this.directionPointer = 0;
        this.direction = [0, Math.PI/2, Math.PI ,(3*Math.PI)/2]
        

        this.state;//pass state to inputhandler..
        window.addEventListener('keydown', (e) =>{
            switch(e.key){
        //send signal to a function that will handle any key that isn't e or q... this function determins movement on the grid 
            case 'r':
                Game_Globals.camera.position.x =0;
                Game_Globals.camera.position.y =0;
                Game_Globals.camera.position.z = 0;
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
                if (directionPointer - 1 <0){
                    directionPointer = 3;
                    break;
                }
                else{
                    directionPointer -=1;
                }
                //moves clock wise
                break;
            case 'q':
                if (directionPointer + 1 >3){
                    directionPointer = 0;
                    break;
                }
                else{
                    directionPointer +=1;
                }
                //moves counter clock wise  
                break;
                // default:
                //     HandleGridMovement(event.key);
                //f
            }

            console.log(directionPointer, 'is direction');

            camera.rotation.y = direction[directionPointer];
            console.log("The rotation is ", camera.rotation.y);
            }
        );
        window.addEventListener('keyup', (e)=>{console.log("keyup is", e)});

    }
}


window.addEventListener('keydown', function(event){

    //theta = Math.atan2(vector.x,vector.z);
    // console.log("the x = ", camera.position.x);
    // console.log("the z = ", camera.position.z);
    //camera.rotation.y = what you are looking at 
    
    switch(event.key){
        //send signal to a function that will handle any key that isn't e or q... this function determins movement on the grid 
        case 'r':
            camera.position.x =0;
            camera.position.y =0;
            camera.position.z = 0;
            break;
        case 'w':

            if (directionPointer == 0){
                if (LevelGrid[PlayerPosition[0]][PlayerPosition[1] -1] ==0 ){
                    PlayerPosition[1] -=1;
                }
                // camera.position.z -=2;
            }
            else if(directionPointer ==1){
                if(LevelGrid[PlayerPosition[0] -1][PlayerPosition[1]] == 0){
                    PlayerPosition[0] -=1;
                }
                // camera.position.x -=2;
            }
            else if(directionPointer ==2){
                if(LevelGrid[PlayerPosition[0]][PlayerPosition[1] +1 ] ==0){
                    PlayerPosition[1] +=1;
                }
                // camera.position.z +=2;
            }
            else if(directionPointer ==3){
                if(LevelGrid[PlayerPosition[0] +1][PlayerPosition[1]] == 0){
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
            if (directionPointer - 1 <0){
                directionPointer = 3;
                break;
            }
            else{
                directionPointer -=1;
            }
            //moves clock wise
            break;
        case 'q':
            if (directionPointer + 1 >3){
                directionPointer = 0;
                break;
            }
            else{
                directionPointer +=1;
            }
            //moves counter clock wise  
            break;
        // default:
        //     HandleGridMovement(event.key);
        //f
    }

    console.log(directionPointer, 'is direction');

    camera.rotation.y = direction[directionPointer];
    console.log("The rotation is ", camera.rotation.y);

})