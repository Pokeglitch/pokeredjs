let Sprites = json('./Sprites.json');

class SpriteData {
    constructor(name, data){
        this.Name = name;
        this.ID = data.ID;
    }
}

Object.keys(Sprites).forEach(name => {
    let value = Sprites[name];
    Sprites[name] = new SpriteData(name, value);
});
