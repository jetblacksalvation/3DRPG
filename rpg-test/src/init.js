import './style.css'

import * as THREE from 'three';

export default class Game_Globals{
  Game_Periferals(){
    scene.background = new THREE.TextureLoader().load( "Images/blue.png" )
    audioLoader.load( 'Music/Ikebukuro_Explore.mp3', function( buffer ) {
      sound.setBuffer( buffer );
      sound.setLoop( true );
      sound.setVolume( 0.5 );
      sound.play();
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1,1000);
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
  
  });
  listener = new THREE.AudioListener();
  sound = new THREE.Audio( listener );
  audioLoader = new THREE.AudioLoader()

}


// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector('#bg'),

// });
// camera.add( listener );
// const sound = new THREE.Audio( listener );

// const audioLoader = new THREE.AudioLoader();
// audioLoader.load( 'Music/Ikebukuro_Explore.mp3', function( buffer ) {
// 	sound.setBuffer( buffer );
// 	sound.setLoop( true );
// 	sound.setVolume( 0.5 );
// 	sound.play();
// });
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);



// const geometry = new THREE.TorusGeometry(1,1,1);
// const material = new THREE.MeshStandardMaterial({ });
// const torus = new THREE.Mesh(geometry, material);



