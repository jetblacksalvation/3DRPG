import './style.css'

import * as THREE from 'three';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);
export { camera };



const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),

});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene,camera);

const geometry = new THREE.TorusGeometry(1,1,1);
const material = new THREE.MeshStandardMaterial({ });
const torus = new THREE.Mesh(geometry, material);
const text = new THREE.TextureLoader().load("astolfo.jpg");



const cube = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ),new  THREE.MeshBasicMaterial({map :text} ) );
scene.add( cube );

camera.position.z = 5;
scene.add(torus)
renderer.render(scene,camera);
var count = 0
function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
 

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

}
animate()