let Maps = json('./Maps.json'),
    MapHeaderPointers = new Table('MapHeaderPointers', map => map.Header.Pointer),
    MapHeaderBanks = new Table('MapHeaderBanks', map => map.Header.Pointer.Bank);

class MapData {
    constructor(id, data, isExternal){
        this.ID = id;
        this.isExternal = isExternal;
        this.Index = data.Index;
        this.Header = Headers[data.Header];
        this.Header.addMap(this);

        this.TownMapEntry = TownMapEntries[data.TownMapEntry.ID].Coords[data.TownMapEntry.Coords];
        this.TownMapEntry.addMap(this);

        MapHeaderPointers.add(this);
        MapHeaderBanks.add(this);
    }
}

Object.keys(Maps.External).forEach(id => Maps[id] = new MapData(id, Maps.External[id], true) );
Object.keys(Maps.Internal).forEach(id => Maps[id] = new MapData(id, Maps.Internal[id], false) );

delete Maps.External;
delete Maps.Internal;

// Once all maps have been defined, then finalize the other data that refer to maps
Object.keys(Objects).forEach(id => {
    Objects[id].finalize();
});

Object.keys(Headers).forEach(id => {
    Headers[id].finalize();
});

