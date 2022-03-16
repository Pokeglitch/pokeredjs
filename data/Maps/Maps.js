include('./TownMap/TownMapEntries.js')
include('./Tilesets/Tilesets.js')
include('./Blocks/Blocks.js')
include('./Objects/Objects.js')
include('./Headers/Headers.js')

let MapsJSON = json('./Maps.json'),
    Maps = new Collection(),
    MapHeaderPointers = new Table('MapHeaderPointers', map => map.Header.Pointer),
    MapHeaderBanks = new Table('MapHeaderBanks', map => map.Header.Pointer.Bank);

class MapData {
    constructor(id, data, isExternal){
        this.ID = id;
        this.isExternal = isExternal;
        this.Index = data.Index;

        this.Header = Headers.byID[data.Header];
        this.Header.addMap(this);

        this.TownMapEntry = TownMapEntries.byID[data.TownMapEntry.ID].Coords[data.TownMapEntry.Coords];
    }
    finalize(){
        MapHeaderPointers.add(this);
        MapHeaderBanks.add(this);
        this.TownMapEntry.addMap(this);
    }
}

Object.keys(MapsJSON.External).forEach(id => {
    let map = new MapData(id, MapsJSON.External[id], true);
    Maps.add(map);
});
Object.keys(MapsJSON.Internal).forEach(id => {
    let map = new MapData(id, MapsJSON.Internal[id], false);
    Maps.add(map);
});

// Once all maps have been defined, then finalize the other data that refer to maps
Maps.byIndex.forEach( map => map.finalize() );
Objects.byOrder.forEach(object => object.finalize());
Headers.byOrder.forEach(header => header.finalize());