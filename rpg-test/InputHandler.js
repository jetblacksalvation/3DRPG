import './style.css'

import * as THREE from 'three';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
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
        case 'w':

            camera.y += 0.1;
            break;  
        case 's':
            break;
        case 'd':
            break;
        case 'a':
            break;
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

        
    }
    camera.rotation.y = direction[directionPointer];
  })