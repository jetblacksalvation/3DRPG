import './style.css'
// const {camera} = require('./main.js');
// const {window} = require('./main.js');
import { camera } from './main.js'

var directionPointer = 0;
var direction = [0, Math.PI/2, Math.PI ,(3*Math.PI)/2]
export {direction};

window.addEventListener('keydown', function(event){
    // console.log(event.key, " is key");

    //theta = Math.atan2(vector.x,vector.z);
    console.log("The rotation is ", camera.rotation.y);
    //camera.rotation.y = what you are looking at 
    
    switch(event.key){
        //send signal to a function that will handle any key that isn't e or q... this function determins movement on the grid 
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
        default:
            HandleGridMovement(event.key);
        
    }
    camera.rotation.y = direction[directionPointer];
})
var Level =1;
var LastLevel = 0;
var LevelGrid;
var PlayerPosition = [1,1];

export {LevelGrid};
export {PlayerPosition};

function LoadLevel(){
    if (Level != LastLevel){
        //load level ...
        LevelGrid = [
            [1,1,1]
            [1,0,1]
            [1,1,1]
        ]
    }
}
function HandleGridMovement( keyValue){
    if (typeof(LevelGrid) !== 'undefined') {
    }
    else{
        LoadLevel();
    }

}

