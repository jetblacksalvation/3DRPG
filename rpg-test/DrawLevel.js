import * as THREE from 'three';
//rendering objects
import {scene,camera, renderer} from "./main.js"
import { createMachine, interpret } from 'xstate';
//player and world data 
var LevelGrid = [];

var PlayerPosition =[];// x and z are used, camera is bound to y i think? 

const listener = new THREE.AudioListener();
camera.add( listener );
const sound = new THREE.Audio( listener );

const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'Ikebukuro_Explore.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	sound.play();
});

// var fr=new FileReader();//use this later. 

//change to be more dynamic later 
const text = new THREE.TextureLoader().load("brickWall.png");

renderer.render(scene,camera);
var HasLoadedScene = false;
var blue = new THREE.TextureLoader().load("blue.png");
var road = new THREE.TextureLoader().load("road.png")

LoadLevel();

var CubeBuffer = [];
import {CellHandlerDict} from "/CellHandler.js";
function animate(){
    //basicallly main...

    //draw level here 

    requestAnimationFrame(animate);
    renderer.renderLists.dispose();
    for(let x =0; CubeBuffer.length >0&& x <CubeBuffer.length; x++){
        scene.remove(CubeBuffer[x]);
    }
    CubeBuffer = [];

    // LoadLevel();
    //clear buffer later... 
    for(let x =0; LevelGrid !== 'undefined' && x<LevelGrid.length; x++){
        // console.log("level grid length =", LevelGrid.length);
        for (let y =0; y <LevelGrid[x].length; y++){
            if (LevelGrid[x][y] !== 'undefined' && LevelGrid[x][y] == 1 ){
                CubeBuffer.push(new THREE.Mesh(new THREE.BoxGeometry(2,2,2), new THREE.MeshBasicMaterial({map:text})) );
                CubeBuffer[CubeBuffer.length-1].position.x = (x - PlayerPosition[0])*2;
                //y is actually z here...
                CubeBuffer[CubeBuffer.length-1].position.z =( y - PlayerPosition[1])*2;

            }
            else if (LevelGrid[x][y] !== 'undefined' && LevelGrid[x][y] == 0 ){
               CubeBuffer.push.apply(CubeBuffer, CellHandlerDict[0]['function']((x - PlayerPosition[0])*2,( y - PlayerPosition[1])*2));
               
            }
        }
        // console.log(LevelGrid[x], 'is x');
    }
    for(let x =0; CubeBuffer.length >0 && x <CubeBuffer.length; x++){
        scene.add(CubeBuffer[x]);
    }
    //add something here that handles events/ moments and states...
    renderer.render(scene,camera);

}


animate()
//DIRECTION HANDLER 
function LoadLevel(){

    //load level ...
    if(LevelGrid.length == 0){
        LevelGrid.push.apply(LevelGrid, [ 
            [1,1,1,1,1,1,1],
            [1,0,0,0,0,0,1],
            [1,1,1,0,1,0,0,1],
            [1,1,1,1,1,1,0,1],
            [0,0,0,0,0,1,0,1],
            [0,0,0,0,0,1,0,1],
            [0,0,0,0,0,1,0,1]
            [0,0,0,0,0,1,1,1]


        ]
            
        );
    }
    if (PlayerPosition.length == 0){
        PlayerPosition.push.apply(PlayerPosition,[1,1]);

    }
}

var directionPointer = 0;
var direction = [0, Math.PI/2, Math.PI ,(3*Math.PI)/2]
camera.rotation.y = direction[directionPointer];

window.addEventListener('keydown', function(event){

    //theta = Math.atan2(vector.x,vector.z);
    // console.log("the x = ", camera.position.x);
    // console.log("the z = ", camera.position.z);
    //camera.rotation.y = what you are looking at 
    
    switch(event.key){
        //send signal to a function that will handle any key that isn't e or q... this function determins movement on the grid 
        case 'r':
            camera.position.x =0;
            camera.position.y =0;
            camera.position.z = 0;
            break;
        case 'w':
            if (directionPointer == 0){
                if (LevelGrid[PlayerPosition[0]][PlayerPosition[1] -1] ==0 ){
                    PlayerPosition[1] -=1;
                }
                // camera.position.z -=2;
            }
            else if(directionPointer ==1){
                if(LevelGrid[PlayerPosition[0] -1][PlayerPosition[1]] == 0){
                    PlayerPosition[0] -=1;
                }
                // camera.position.x -=2;
            }
            else if(directionPointer ==2){
                if(LevelGrid[PlayerPosition[0]][PlayerPosition[1] +1 ] ==0){
                    PlayerPosition[1] +=1;
                }
                // camera.position.z +=2;
            }
            else if(directionPointer ==3){
                if(LevelGrid[PlayerPosition[0] +1][PlayerPosition[1]] == 0){
                    PlayerPosition[0] +=1;
                }

                // camera.position.x +=2;
            }
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
        // default:
        //     HandleGridMovement(event.key);
        //f
    }
    console.log(directionPointer, 'is direction');

    camera.rotation.y = direction[directionPointer];
    console.log("The rotation is ", camera.rotation.y);

})
