# cloneSys v1.26.6a для ScratchGame v0.26.6b

## Добытье библиотек 

ScratchGame можно скачать с GitHub
https://github.com/Mperv/scratch-game

## Подключение библиотек

Прежде всего надо подключить Phaser, ScratchGame и cloneSys

```html
<head>
    <script src="lib/phaser.min.js"></script>
    <script src="lib/scratch_game.js"></script>
    <script src="lib/cloneSys.js"></script>
</head>
```

## Функции cloneSys
```javascript
    
    //initClones работает как this.createSprite(key, x, y) но initClones разрешает после создавать клоны.
    testClones = initClones(key, x, y);
    //Создаёт заданое количество клонов которые становятся идентичными копиями клона номер base.
    testClones = createclones(amount,base);
    //Вместо i можно поставить любое число и действовать этим клоном как отдельным спрайтом.
    testclones.clones[i].x = 100;
    //Возвращает количество клонов этого типа.
    testclones.length()
    //Удаляет все клоны с идексом от from до to.
    deleteclones(from, to);

```

