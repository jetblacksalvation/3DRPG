import * as THREE from 'three';



// camera.addEventListener('change', animate);
function DrawLevel(renderer, scene, camera){
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
        //  ("level grid length =", LevelGrid.length);
        for (let y =0; y <LevelGrid[x].length; y++){
            for(let img in CellHandlerDict[LevelGrid[x][y]].dependancies){
                // show_image(CellHandlerDict[LevelGrid[x][y]].dependancies[img], 10,10);
                // var imgg= document.createElement('div');
                // imgg.setAttribute('id','#overlay');
                // imgg.source = CellHandlerDict[LevelGrid[x][y]].dependancies[img];
                // const uiElement = document.querySelector( '' );
		        // uiElement.style.display = 'none';
            }


            CubeBuffer.push.apply(CubeBuffer,CellHandlerDict[LevelGrid[x][y]]['function']((x - PlayerPosition[0])*2, ( y - PlayerPosition[1])*2));
        }
        // console.log(LevelGrid[x], 'is x');
    }
    for(let x =0; CubeBuffer.length >0 && x <CubeBuffer.length; x++){
        scene.add(CubeBuffer[x]);
    }
    for (var i= document.images.length; i-->0;){
        document.images[i].parentNode.removeChild(document.images[i]);

    }
    renderer.render(scene,camera);

}


// animate()
//DIRECTION HANDLER 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



