include('./TownMap/TownMap.js')
include('./Tilesets/Tilesets.js')
include('./Blocks/Blocks.js')
include('./Objects/Objects.js')
include('./Headers/Headers.js')

let MapsJSON = json('./Maps.json'),
    Maps = new Collection(),
    MapHeaderPointers = new Table('MapHeaderPointers', map => map.Header.Pointer),
    MapHeaderBanks = new Table('MapHeaderBanks', map => map.Header.Pointer.Bank),
    SafariZoneRestHouses = new Table('SafariZoneRestHouses', map => map.Index, -1 ),
    DungeonMaps = new class extends Collection {
        constructor(){
            super();
            this.Solo = new Table('DungeonMaps1', map => map.Index, -1);
            this.Group = new Table('DungeonMaps2', data => [data.Start.Index, data.End.Index], -1);
        }
        addToTable(data){
            if( data.Start === data.End ){
                this.Solo.add( data.Start )
            }
            else{
                this.Group.add(data);
            }
        }
        toROM(){
            let data = null;
            this.byOrder.forEach(map => {
                if( data ){
                    if( (map.Index === data.End.Index + 1) ){
                        data.End = map;
                        return;
                    }
                    this.addToTable(data);
                }
                data = {
                    Start : map,
                    End : map
                }
            });
            this.addToTable(data);

            this.Solo.toROM();
            this.Group.toROM();
        }
    },
    ForcedBikeOrSurfMaps = new Table('ForcedBikeOrSurfMaps', data => [data.Map.Index, data.Coords.Y, data.Coords.X], -1)

class MapData {
    constructor(id, data, isExternal){
        this.ID = id;
        this.isExternal = isExternal;
        this.Index = data.Index;

        this.Header = Headers.byID[data.Header];
        this.Header.addMap(this);

        this.TownMapEntry = TownMapEntries.byID[data.TownMapEntry.ID].Coords[data.TownMapEntry.Coords];
        this.TownMapOrder = null;

        this.isSafariZoneRestHouse = data.hasOwnProperty('isSafariZoneRestHouse') ? data.isSafariZoneRestHouse : false;
        this.isDungeon = data.hasOwnProperty('isDungeon') ? data.isDungeon : false;
        this.Force = data.hasOwnProperty('Force') ? data.Force : null;
    }
    finalize(){
        MapHeaderPointers.add(this);
        MapHeaderBanks.add(this);
        this.TownMapEntry.addMap(this);
        if( this.isSafariZoneRestHouse ){
            SafariZoneRestHouses.add(this);
        }
        if( this.isDungeon ){
            DungeonMaps.add(this);
        }
        if( this.Force ){
            let coords = [];
            if(this.Force.Bike){
                this.Force.Bike.forEach( ([X,Y]) => coords.push({X,Y}) );
            }
            if(this.Force.Surf){
                this.Force.Surf.forEach( ([X,Y]) => coords.push({X,Y}) );
            }
            coords.sort( (a,b) => (a.X - b.X) || (a.Y - b.Y) ).forEach( Coords => ForcedBikeOrSurfMaps.add({ Map : this, Coords }) );
        }
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

TownMapJSON.Order.forEach( (id, index) => {
    let map = Maps.byID[id];
    map.TownMapOrder = index;
    TownMapOrder.add(map);
})