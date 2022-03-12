let Tilesets = json('./Tilesets.json');

class TilesetData {
    constructor(data){
        this.ID = data.ID;
        this.Headers = new Set();
    }
    addHeader(header){
        this.Headers.add(header);
    }
    removeHeader(header){
        this.Headers.remove(header);
    }
}

Object.keys(Tilesets).forEach(name => {
    let value = Tilesets[name];
    Tilesets[name] = new TilesetData(value);
});