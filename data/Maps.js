let Maps = json('./Maps.json'),
    MapHeaderPointers = new Table('MapHeaderPointers', map => map.Header.Pointer),
    MapHeaderBanks = new Table('MapHeaderBanks', map => map.Header.Pointer.Bank);

class MapData {
    constructor(name, data){
        this.Name = name;
        this.ID = data.ID;
        this.Header = Headers[data.Header];
        this.Header.addMap(this);

        MapHeaderPointers.add(this);
        MapHeaderBanks.add(this);
    }
}

Object.keys(Maps).forEach(name => {
    let value = Maps[name];
    Maps[name] = new MapData(name, value);
});

// Once all maps have been defined, then finalize the other data that refer to maps
Object.keys(Objects).forEach(name => {
    Objects[name].finalize();
});

Object.keys(Headers).forEach(name => {
    Headers[name].finalize();
});

