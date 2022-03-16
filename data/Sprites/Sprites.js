let SpritesJSON = json('./Sprites.json'),
    Sprites = new Collection();

class SpriteData {
    constructor(id, data){
        this.ID = id;
        this.Index = data.Index;
    }
}

Object.keys(SpritesJSON).forEach(id => {
    let sprite =  new SpriteData(id, SpritesJSON[id]);
    Sprites.add( sprite );
});
