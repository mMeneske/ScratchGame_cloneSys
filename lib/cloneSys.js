//Scratch Game v0.26.6a
//Credits: mMeneske

class ScratchClone {

    constructor(key, x, y){
        let clone = [game.createSprite(key, x, y)]; 
    }
    
}

function initClones(key, x, y) {
    return new ScratchClone(key, x, y); 
}
