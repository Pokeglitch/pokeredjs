let TilesetsJSON = json('./Tilesets.json'),
    Tilesets = new Collection();

class TilesetData {
    constructor(id, data){
        this.ID = id;
        this.Index = data.Index;
        this.Headers = new Set();
    }
    addHeader(header){
        this.Headers.add(header);
    }
    removeHeader(header){
        this.Headers.remove(header);
    }
}

Object.keys(TilesetsJSON).forEach(id => {
    let tileset = new TilesetData(id, TilesetsJSON[id]);
    Tilesets.add(tileset);
});
