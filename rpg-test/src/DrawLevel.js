import * as THREE from 'three';
import LoaderInstance from './CellHandler';
const LevelandStateDrawer = {
    "roam" : { "function":function(renderer, scene, camera) {
        //basicallly main...
    
        //draw level here 
        var LevelGrid = LoaderInstance.LevelGrid;
        renderer.renderLists.dispose();
        for(let x =0; this['metaData']['CubeBuffer'].length >0&& x <this['metaData']['CubeBuffer'].length; x++){
            scene.remove(this['metaData']['CubeBuffer'][x]);
        }
        
    
        // LoadLevel();
        //clear buffer later... 
        this['metaData']['CubeBuffer'] = [];
        for(let x =0; LevelGrid !== 'undefined' && x<LevelGrid.length; x++){
            //  ("level grid length =", LevelGrid.length);
            for (let y =0; y <LevelGrid[x].length; y++){
                
    
                this['metaData']['CubeBuffer'].push.apply(this['metaData']['CubeBuffer'],LoaderInstance.CellHandlerDict[LevelGrid[x][y]]['function']((x - LoaderInstance.PlayerPosition[0])*2, ( y - LoaderInstance.PlayerPosition[1])*2));
            }
            // console.log(LevelGrid[x], 'is x');
        }
        for(let x =0; this['metaData']['CubeBuffer'].length >0 && x <this['metaData']['CubeBuffer'].length; x++){
            scene.add(this['metaData']['CubeBuffer'][x]);
        }

        renderer.render(scene,camera);
    
    }, "metaData" :{"CubeBuffer" :[]}
    }//put refs to metaData here. MetaData is a list of vargs used by invoked function. Function will be bound to dict 
};


export default LevelandStateDrawer;


