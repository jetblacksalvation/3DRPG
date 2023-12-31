import Game_Globals from "./init"
import LoaderInstance from "./CellHandler"
import InputHandler from "./InputHandler"
import LevelandStateDrawer from "./DrawLevel";

var LevelNumber = 1;
window.addEventListener('load', () =>{
    LoaderInstance.LevelHandlerDict[ LevelNumber]['function'](LoaderInstance.LevelGrid, LoaderInstance.PlayerPosition);

    function MainLoop(){
        //request animation frame here for infinate loop 
        LevelandStateDrawer["roam"].function(Game_Globals.renderer, Game_Globals.scene, Game_Globals.camera);
        requestAnimationFrame(MainLoop);
    }
    MainLoop();
}
)
