import * as THREE from 'three';
//rendering objects
import {scene,camera, renderer} from "./main.js"
//player and world data 
var LevelGrid = [];
var PlayerPosition =[];

// var fr=new FileReader();//use this later. 
//change to be more dynamic later 
const text = new THREE.TextureLoader().load("astolfo.jpg");
const cube = new THREE.Mesh( new THREE.BoxGeometry( 2, 2, 2 ),new  THREE.MeshBasicMaterial({map :text} ) );
const cube2 = new THREE.Mesh( new THREE.BoxGeometry( 2, 2, 2 ),new  THREE.MeshBasicMaterial({map :text} ) );
const cube3 = new THREE.Mesh(new THREE.BoxGeometry(2,2,2), new THREE.MeshBasicMaterial({map:text}));
//right
cube.position.x = 2;// x =0, z =2
cube.position.z =2;
cube.position.y = 0;
//forwards
cube2.position.x = 4;//x = 2, z= 0
cube2.position.z = 0;
cube2.position.y = 0;
//left
cube3.position.x = 0;
cube3.position.z = -2;

scene.add( cube2 );
scene.add( cube );
scene.add(cube3);


//decent enough...
camera.position.y = 0;
camera.position.x =2;
    // camera.position.z =1;
// console.log(cube.position, 'is cube');

// camera.rotation.y = 4.71238898038469;
// cube.position.z =1;
//left, figure out scale factor ...
// cube.position.x = -2;
// cube.position.z =2;
// camera.position.z = 5;
renderer.render(scene,camera);
var HasLoadedScene = false;

function animate(){
    //draw level here 

    requestAnimationFrame(animate);
    renderer.renderLists.dispose();

    // LoadLevel();

    for(let x =0; LevelGrid !== 'undefined' && x<LevelGrid.length; x++){
        for (let y =0; y <LevelGrid[x].length; y++){
            
        }
        // console.log(LevelGrid[x], 'is x');
    }
    renderer.render(scene,camera);

}


animate()
//DIRECTION HANDLER 
function LoadLevel(){
    var temp = {Data:[[1,1,1],
        [1,0,1],
        [1,1,1]]};

    //load level ...
    if(LevelGrid.length == 0){
        LevelGrid.push.apply(LevelGrid, [ 
            [1,1,1],
            [1,0,1],
            [1,1,1]]);
    }
    if (PlayerPosition.length == 0){
        PlayerPosition.push.apply(PlayerPosition,[1,1]);

    }
    // for(let x =0; x<LevelGrid.length; x++){
    //     console.log(x, 'is part of level grid')
    // }
    // console.log(PlayerPosition, 'player pso')
}

function HandleGridMovement( keyValue){
    LoadLevel();
    console.log(LevelGrid, 'is grid');
    if (typeof(LevelGrid) !== 'undefined') {
    }
    else{
    }

}
var directionPointer = 0;
var direction = [2*Math.PI, Math.PI/2, Math.PI ,(3*Math.PI)/2]
camera.rotation.y = direction[directionPointer];

window.addEventListener('keydown', function(event){
    console.log(directionPointer, 'is direction');

    //theta = Math.atan2(vector.x,vector.z);
    console.log("The rotation is ", camera.rotation.y);
    //camera.rotation.y = what you are looking at 
    
    switch(event.key){
        //send signal to a function that will handle any key that isn't e or q... this function determins movement on the grid 
        case 'w':
            if (directionPointer == 0){

            }
            else if(directionPointer ==1){

            }
            else if(directionPointer ==2){

            }
            else if(directionPointer ==3){
                
            }
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
