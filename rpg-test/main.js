import './style.css'

import * as THREE from 'three';


const scene = new THREE.Scene();
export {scene};
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);
export { camera };



const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),

});
export{renderer};

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


// const geometry = new THREE.TorusGeometry(1,1,1);
// const material = new THREE.MeshStandardMaterial({ });
// const torus = new THREE.Mesh(geometry, material);



