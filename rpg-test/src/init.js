import './style.css'

import * as THREE from 'three';

class Game_Globals{
  constructor(){
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1,1000);

    this.listener = new THREE.AudioListener();
    this.camera.add(this.listener);
    this.sound = new THREE.Audio( this.listener );

    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg')});
    this.audioLoader = new THREE.AudioLoader()
    this.scene.background = new THREE.TextureLoader().load( "Images/blue.png" )
    this.audioLoader.load( 'Music/Ikebukuro_Explore.mp3', ( buffer ) =>{
    this.sound.setBuffer( buffer );
    this.sound.setLoop( true );
    this.sound.setVolume( 0.5 );
    this.sound.play();
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }


}
Game_Globals_Instance = new Game_Globals();
console.log(Game_Globals_Instance);
export default Game_Globals_Instance;
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



