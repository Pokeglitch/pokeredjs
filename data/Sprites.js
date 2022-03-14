let Sprites = json('./Sprites.json');

class SpriteData {
    constructor(id, data){
        this.ID = id;
        this.Index = data.Index;
    }
}

Object.keys(Sprites).forEach(id => {
    let value = Sprites[id];
    Sprites[id] = new SpriteData(id, value);
});
