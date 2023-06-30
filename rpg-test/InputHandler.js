import './style.css'

import * as THREE from 'three';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
// const {camera} = require('./main.js');
// const {window} = require('./main.js');
import { camera } from './main.js'


window.addEventListener('keydown', function(event){
    console.log(event.key, " is key");
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
      case 'q' : 
        camera.rotation.y -=0.1;
        break;
      case 'e':
        camera.rotation.y +=0.1;
        break;
    }
  })