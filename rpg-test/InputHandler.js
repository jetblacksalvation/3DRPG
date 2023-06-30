import './style.css'

import * as THREE from 'three';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
// const {camera} = require('./main.js');
// const {window} = require('./main.js');
import { camera } from './main.js'
var direction = [false, false, false ,false]
export {direction};

window.addEventListener('keydown', function(event){
    // console.log(event.key, " is key");

    //theta = Math.atan2(vector.x,vector.z);
    console.log("The rotation is ", camera.rotation.y);
    //camera.rotation.y = what you are looking at 
    

    if (radians == Math.PI/2){
        console.log("you are looking left");
    }
        // console.log(radians, "is radians");

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
        default:
            var heading = camera.rotation.y;
            var radians = heading > 0 ? heading : (2 * Math.PI) + heading;
            radians = radians % (Math.PI *2);
            camera.rotation.y +=Math.PI/2;

    }
  })