import './style.css'

import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1,1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),

});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


export {scene,renderer, camera};

// const geometry = new THREE.TorusGeometry(1,1,1);
// const material = new THREE.MeshStandardMaterial({ });
// const torus = new THREE.Mesh(geometry, material);



