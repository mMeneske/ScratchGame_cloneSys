//cloneSys v0.26.6a
//Credits: mMeneske
//Requirements: ScatchGame v0.26.6b

class Scratchclone {
    clones;

    constructor(x, y, key){
        this.clones = [game.createSprite(key, x, y)];
        console.log(this.clones);
    }

    createclones(amount,base){
        for(let i = 0; i < amount; ++i){
            this.clones[this.clones.length] = game.createSprite(this.clones[base].key, this.clones[base].x, this.clones[base].y);
        }
    }
    
}

function initclones(key, x, y) {
    return new Scratchclone(key, x, y); 
}
