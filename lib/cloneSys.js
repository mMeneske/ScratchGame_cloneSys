//cloneSys v0.26.7a
//Credits: mMeneske
//Requirements: ScatchGame v0.26.6b

class Scratchclone {
    clones;
    #amountOfClones;
    #currentId;

    constructor(key, x, y){
        this.clones = [game.createSprite(key, x, y)];
        this.#amountOfClones = 1;
        this.#currentId = 1;
    }

    createclones(amount,base){
        for(let i = this.#currentId; i < this.#currentId + amount; ++i){
            this.clones[i] = this.clones[base];
            ++this.#currentId;
            ++this.#amountOfClones;
        }
    }

    deleteclones(from, to){
        for(let i = from; i < to; ++i){
            this.clones[i] = 0;
            --this.#amountOfClones;
        }
        console.warn("The clones that you deleted are now inaccessible, and running any code for the ids will crash the project!")
    }

    amount(){
        return this.#amountOfClones;
    }

    runAll(func){
        for(let i = 0; i < this.#currentId;){
            if(this.clones[i] != 0){
                func(i);
            } else {
                console.warn("Clone for id", i, "missing. Running any code for this id will crash the project!");
            }
        }
    }
    
}

class ScratchPlane {
    plane;
    #amountOfClones;
    sizeX;
    sizeY;

    constructor(key, coardsX, coardsY, offsetX, offsetY, lengthX, lengthY){
        this.plane = [];
        this.#amountOfClones = lengthX * lengthY;

        this.sizeX = lengthX;
        this.sizeY = lengthY;

        for(let i = 0; i < lengthY; ++i){
            this.plane[i] = []
        }

        for(let x = 0, y = 0; x < lengthX || y < lengthY - 1; ++x){
            if(x == lengthX){
                x = 0;
                ++y;
            }

            this.plane[x][y] = game.createSprite(key, coardsX + x * offsetX, coardsY + y * offsetY);
            this.plane[x][y].planeX = x;
            this.plane[x][y].planeY = y;
        }
    }

    amount() {
        return this.#amountOfClones;
    }

    runAll(func){
        for(let x = 0; x < this.sizeX; ++x){
            for(let y = 0; y < this.sizeY; ++y){
                func(x, y);
            }
        }
    }
}

function initClones(key, x, y) {
    return new Scratchclone(key, x, y);
}

function initPlane(key, coardsX, coardsY, offsetX, offsetY, lengthX, lengthY){
    return new ScratchPlane(key, coardsX, coardsY, offsetX, offsetY, lengthX, lengthY);
}
