# cloneSys v1.26.8a for ScratchGame v1.26.8a
## An expantion for ScratchGame

## Prior knowledge

Before you can use this libary you need to learn ScratchGame. You can read about ScratchGame on github:
https://github.com/Mperv/scratch-game/blob/main/readme.en.md

## Downloading Libaries

You can download Phaser 3 from:
https://phaser.io/download/phaser3

You can download ScratchGame from:
https://github.com/Mperv/scratch-game

## Starting Server

To run any game you need to run it on a server.

For Python you can use:
```bash
python -m http.server 8080
```

For NodeJS you can use:
```bash
npx http-server . -p 8080
```

## Connecting Libaries

First you will need to connnect Phaser, ScratchGame and CloneSys.

```html
<head>
    <script src="lib/phaser.min.js"></script>
    <script src="lib/ScratchGame.js"></script>
    <script src="lib/CloneSys.js"></script>
</head>
```

## Clones

Clones are arrys of sprites that you can easily interact with.

```js
function create() {
    // initClones(key, x ,y) works just as game.createSprite(key, x, y) with the only
    // exception that it allows you to create extra sprites that are controled as one 
    // entity.
    testClones = initClones('dude', 100, 100);
}

function update() {
    // testClones.clone[i] will let you interact with sprite number "i.
    // (An example would be setting its x value to 200)
    testClones.clones[i].x = 200;

    // testClones.createClone(amount, base) adds "amount" sprites to the next empty indexes,
    // that has the exact coardinates, orinetation and costume as sprite with index "base".
    testClones.createClone(3, 0);

    // testClones.runall(func) will run func(), with argumets func(index), for all sprites
    // of this type. 
    testClones.runAll(function);

    // testClones.amount() will return the amount of currently active sprites.
    console.log(testClones.amount());

    // testClones.length() will return the length of the array, that stores all the sprites
    // (testClones.clones).
    console.log(testClones.length());

    // testClones(from, to) removes all sprites, from sprite with index "from" to sprite with
    // index "to" (included). 
    testClones.deleteClones(0, 2);

    // testClones.allowPermaHide() needs to be run in the update function, for 
    // testClones.permaHide() to have any effect.
    testClones.allowPermaHide();

    // testClones.permaHide(from, to) does the same as testClones.deleteClones(), but
    // the sprites still exists they are just invisible.
    testClones.permaHide(0, 2);
    // We have not found any reason to use testclones.permaHide(), instead of
    // testClones.deleteClones(), but it exist if anybody needs it.
}
```

## Planes

Planes are 2 diemetional arrays of sprites that you can easily interact with.

```js
function create() {
    // initPlane(key, coardsX, coardsY, offsetX, offsetY, lengthX, lengthY) starts with
    // the usual "key", but then it continues to "coardsX" and "Y" those are just the coards
    // for the first sprite in the plane. Then we have "offsetX" and "Y" witch are the offsets
    // for the next sprites. And lastly "lengthX" and "Y" is the sixe of the plane in this 
    // example it is 15 * 10.
    testPlane = initPlane('dude', 32, 48, 32, 48, 15, 10);
    // An important thing is that you can't add more sprites later on 
    // (maybee it will be possible in a later relase).
}

function update() {
    // testPlane.runAll(func) run the function "func" for each existing sprite with argumnets:
    // func(x ,y);
    testPlane.runAll(function);

    // testPlane.lengthX() and testPlane.lengthY() return the length of their respective diemention.
    console.log(testPlane.lengthX());
    console.log(testPlane.lengthY());

    // testPlane.amount() returns the amount of currently reachable clones.
    console.log(testPlane.amount());

    // testClones(fromX, fromY, toX, toY) removes all sprites, that have 
    // coardinates between "fromX" and "toX" and between "fromY" and "toY".
    testPlane.deletePlanePart(1, 1, 3, 3);

    // testPlane.allowPermaHide() needs to be run in the update function, for 
    // testPlane.permaHide() to have any effect.
    testClones.allowPermaHide();

    // testPlane.permaHide(fromX, fromY, toX, toY) does the same as 
    // testPlane.deletePlanePart(), but the sprites still exists
    // they are just invisible.
    testClones.permaHide(1, 1, 3, 3);
    // We have not found any reason to use testplane.permaHide(), instead of
    // testPlane.deletePlanePart(), but it exist if anybody needs it.
}
```

## Demo Project 

Right now there is not a proper demo project to showcase but if you want you can go to the file called 01.html in the main branch, while an empty file ready for code is index.html.