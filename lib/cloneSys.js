//cloneSys v0.26.7a
//Credits: mMeneske
//Requirements: ScatchGame v0.26.6b

class Scratchclone {
    clones;
    #amountOfClones;
    #currentId;
    #hiddenClones;


    constructor(key, x, y){
        this.clones = [game.createSprite(key, x, y)];
        this.#amountOfClones = 1;
        this.#currentId = 1;
    }

    createClones(amount,base){
        for(let i = this.#currentId; i < this.#currentId + amount; ++i){
            this.clones[i] = game.createSprite(this.clones[base].key, this.clones[base].x, this.clones[base].y);
            this.clones[i].direction = this.clones[base].direction;
            this.clones[i].size = this.clones[base].size;
            this.clones[i].costume = this.clones[base].costume;
        }
        this.#currentId += amount;
        this.#amountOfClones += amount;
    }

    deleteClones(from, to){
        for(let i = from; i <= to; ++i){
            this.plane[i].visible = false;
            this.clones[i] = 0;
            --this.#amountOfClones;
        }
        console.warn("The clones that you deleted are now inaccessible, and running any code for the clones might cause problems!");
    }

    amount(){
        return this.#amountOfClones;
    }

    length(){
        return this.#currentId;
    }

    runAll(func){
        for(let i = 0; i < this.#currentId; ++i){
            if(this.clones[i] == 0){
                console.warn("Clone for id", i, "is missing. Running any code for this clone migth cause problems!");
            } else {
                func(i);
            }
        }
    }

    permaHide(from, to){
        for(let i = from; i <= to; ++i){
            this.clones[i].permaHide = true;
            ++this.#hiddenClones;
        }
        console.warn("For permaHide() to have any effect you need to run yourClonesNameHere.allowPermaHide() in update()");
        
    }

    allowPermaHide(){
        for(let i = 0; i < this.#currentId; ++i){
            if(this.clones[i] != 0 && this.clones[i].permaHide == true){
                this.clones[i].visible = false;
            }
        }
        this.#amountOfClones -= this.#hiddenClones;
        this.#hiddenClones = 0;
    }
    
}

class ScratchPlane {
    plane;
    #amountOfClones;
    #sizeX;
    #sizeY;
    #hiddenClones;

    constructor(key, coardsX, coardsY, offsetX, offsetY, lengthX, lengthY){
        this.plane = [];
        this.#amountOfClones = lengthX * lengthY;

        this.#sizeX = lengthX;
        this.#sizeY = lengthY;

        for(let i = 0; i < lengthX; ++i){
            this.plane[i] = []
        }

        for(let x = 0, y = 0; x < lengthX || y < lengthY - 1; ++x){
            if(x == lengthX){
                x = 0;
                ++y;
            }

            this.plane[x][y] = game.createSprite(key, coardsX + x * offsetX, coardsY + y * offsetY);
        }
    }

    amount() {
        return this.#amountOfClones;
    }

    lengthX(){
        return this.#sizeX;
    }

    lengthY(){
        return this.#sizeY;
    }

    runAll(func){
        for(let x = 0; x < this.#sizeX; ++x){
            for(let y = 0; y < this.#sizeY; ++y){
                if(this.plane[x][y] == 0){
                    console.warn("Clone for coardinates", x,"and", y, " is missing. Running any code for this clone migth cause problems!");
                } else {
                    func(x ,y);
                }
            }
        }
    }

    permaHide(fromX, fromY, toX, toY){
        for(let y = fromY; y <= toY; ++y){
            for(let x = fromX; x <= toX; ++x){
                this.plane[x][y].permaHide = true;
                ++this.#hiddenClones;
            }
        }
        console.warn("For permaHide() to have any effect you need to run yourPlaneNameHere.allowPermaHide() in update()");
        
    }

    allowPermaHide(){
        for(let y = 0; y < this.#sizeY; ++y){
            for(let x = 0; x < this.#sizeX; ++x)    
                if(this.plane[x][y] != 0 && this.plane[x][y].permaHide == true){
                    this.plane[x][y].visible = false;
                }
        }
        this.#amountOfClones -= this.#hiddenClones;
        this.#hiddenClones = 0;
    }

    deletePlanePart(fromX, fromY, toX, toY){
        for(let y = fromY; y <= toY; ++y){
            for(let x = fromX; x <= toX; ++x){
                this.plane[x][y].visible = false;
                this.plane[x][y] = 0; 
                --this.#amountOfClones;
            }
        }
        console.warn("The plane part that you deleted is now inaccessible, and running any code for the plane part might cause problems!");
    }
}

function initClones(key, x, y) {
    return new Scratchclone(key, x, y);
}

function initPlane(key, coardsX, coardsY, offsetX, offsetY, lengthX, lengthY){
    return new ScratchPlane(key, coardsX, coardsY, offsetX, offsetY, lengthX, lengthY);
}

function cloneSysVersion() {
    return "v0.26.7a";
}

function cloneSysVersionId() {
    return 2;
}
