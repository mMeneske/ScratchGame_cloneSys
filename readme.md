# cloneSys v1.26.7a for ScratchGame v0.26.6b
## An expantion of ScratchGame

## Downloading Libaries

You can download Phaser 3 from:
https://phaser.io/download/phaser3

You can download ScratchGame from:
https://github.com/Mperv/scratch-game

## Connecting Libaries

First you will need to connnect Phaser, ScratchGame and cloneSys.

```html
<head>
    <script src="lib/phaser.min.js"></script>
    <script src="lib/scratch_game.js"></script>
    <script src="lib/cloneSys.js"></script>
</head>
```

## Clones

Clones are arrys of sprites that you can easily interact with.

```js
function create() {
    // initClones(key, x ,y) works just as game.createSprite(key, x, y) with the only exception that it allows you to create extra clones.
    testClones = initClones('dude', 100, 100);
}

function update() {
    // testClones.clone[i] will let you interact with clone number "i" as a sprite. (An example would be setting its x value to 200)
    testClones.clones[i].x = 200;

    //testClones.createClone(amount, base) adds "amount" clones to the next empty indexes, that has the exact coardinates, orinetation and costume as clone with index "base".
    testClones.createClone(3, 0);

    //testClones.runall(func) will run func(), with argumets func(index), for all clones of this type. 
    testClones.runAll(function);

    //testClones.amount() will return the amount of currently active clones.
    console.log(testClones.amount());

    //testClones.length() will return the length of the array, that stores all the clones (testClones.clones).
    console.log(testClones.length());

    //testClones(from, to) removes all clones, from clone with index "from" to clone with index "to" (included). 
    testClones.deleteClones(0, 2);

    //testClones.allowPermaHide() needs to be run in the update function, for testClones.permaHide() to have any effect.
    testClones.allowPermaHide();

    //testClones.permaHide(from, to) does the same as testClones.deleteClones(), but the sprite still exists it is just invisible.
    testClones.permaHide(0, 2);
    //We have not found any reason to use testclones.permaHide(), instead of testclones.deleteClones(), but it exist if anybody needs it.
}
```