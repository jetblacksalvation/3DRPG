// import './style.css'
import {BoxGeometry, MeshBasicMaterial,TextureLoader,Mesh} from 'three';



class LoadThings{
    static LoadIfNotLoaded(string){
        console.log("loading...")
        //where string is a file/dir to file 
        var isInsideDict = false;
        for(let k in this.LoadedInDict){
            if (string === k){
                isInsideDict = true;
                
            }

        }
        if(isInsideDict){
            // console.log("is in dict");
        }
        else{
            // console.log("Loading ", string, "...");
            LoadThings.LoadedInDict[string] = new TextureLoader().load(string);
        }
    }
    static LoadedInDict = {
    };//start off empty. If CellHandler is called, 
};
const Load = new LoadThings;

const CellHandlerDict = {
    //here function must return a list
    0 : { 'function' : function(xPosition, zPosition){
        for(let x in this.dependancies){
            LoadThings.LoadIfNotLoaded(this.dependancies[x]);
        }

        var CubeBuffer = [];
 
        CubeBuffer.push(new Mesh(new BoxGeometry(2,2,2), new MeshBasicMaterial({map:LoadThings.LoadedInDict[this.dependancies[0]]})));
        CubeBuffer[CubeBuffer.length-1].position.x = xPosition;
        CubeBuffer[CubeBuffer.length-1].position.y = 2;
        //y is actually z here...
        CubeBuffer[CubeBuffer.length-1].position.z =zPosition;

        CubeBuffer.push(new Mesh(new BoxGeometry(2,2,2), new MeshBasicMaterial({map:LoadThings.LoadedInDict[this.dependancies[1]]})));
        CubeBuffer[CubeBuffer.length-1].position.x = xPosition;
        CubeBuffer[CubeBuffer.length-1].position.y = -2;
        //y is actually z here...
        CubeBuffer[CubeBuffer.length-1].position.z =zPosition;
        return CubeBuffer;

    },'dependancies' :["blue.png", "road.png"], 'tileName':"RoadAndsky"},
    1 : {}
};

export {CellHandlerDict};