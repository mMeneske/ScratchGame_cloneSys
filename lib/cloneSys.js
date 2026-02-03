//cloneSys v0.26.6a
//Credits: mMeneske
//Requirements: ScatchGame v0.26.6b

class Scratchclone {
    clones;
    #amountOfClones;

    constructor(x, y, key){
        this.clones = [game.createSprite(key, x, y)];
        ++this.#amountOfClones;
    }

    createclones(amount,base){
        for(let i = 1; i <= amount; ++i){
            this.clones[i] = this.clones[base];
        }
    }

    deleteclones(from, to){
        for(let i = from; i < to; ++i){
            this.clones[i] = 0;
            --this.#amountOfClones;
        }
    }

    length(){
        return this.#amountOfClones;
    }
    
}

function initClones(key, x, y) {
    return new Scratchclone(key, x, y); 
}
