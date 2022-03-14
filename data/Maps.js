let Maps = json('./Maps.json'),
    MapHeaderPointers = new Table('MapHeaderPointers', map => map.Header.Pointer),
    MapHeaderBanks = new Table('MapHeaderBanks', map => map.Header.Pointer.Bank);

class MapData {
    constructor(id, data){
        this.ID = id;
        this.Index = data.Index;
        this.Header = Headers[data.Header];
        this.Header.addMap(this);

        MapHeaderPointers.add(this);
        MapHeaderBanks.add(this);
    }
}

Object.keys(Maps).forEach(id => {
    let value = Maps[id];
    Maps[id] = new MapData(id, value);
});

// Once all maps have been defined, then finalize the other data that refer to maps
Object.keys(Objects).forEach(id => {
    Objects[id].finalize();
});

Object.keys(Headers).forEach(id => {
    Headers[id].finalize();
});

