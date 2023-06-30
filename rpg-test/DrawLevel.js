import * as THREE from 'three';
//rendering objects
import {scene,camera, renderer} from "./main.js"
//player and world data 
import {LoadLevel,LevelGrid,PlayerPosition, direction} from "./InputHandler.js"


//change to be more dynamic later 
const text = new THREE.TextureLoader().load("astolfo.jpg");
const cube = new THREE.Mesh( new THREE.BoxGeometry( 2, 2, 2 ),new  THREE.MeshBasicMaterial({map :text} ) );
const cube2 = new THREE.Mesh( new THREE.BoxGeometry( 2, 2, 2 ),new  THREE.MeshBasicMaterial({map :text} ) );
cube2.position.x = 4;
cube2.position.z = 0;
cube2.position.y = 0;
scene.add(cube2);
scene.add( cube );

//right
cube.position.x = 2;
cube.position.z =2;
cube.position.y = 0;

//decent enough...
camera.position.y = 0;
camera.position.x =2;
    // camera.position.z =1;
console.log(cube.position, 'is cube');

// camera.rotation.y = 4.71238898038469;
// cube.position.z =1;
//left, figure out scale factor ...
// cube.position.x = -2;
// cube.position.z =2;
// camera.position.z = 5;
renderer.render(scene,camera);

function animate(){
    //draw level here 
    
    requestAnimationFrame(animate);
    
    renderer.render(scene,camera);
    // LoadLevel();
    for(let x =0; x < LevelGrid.lenght; x++){
        console.log(x);
    }

}

animate()
