let TownMapEntries = json('./TownMapEntries.json'),
    TownMapEntryTables = {
        External : new Table("ExternalTownMapEntryTable", map => map.TownMapEntry.compile() ),
        Internal : new Table("InternalTownMapEntryTable", data => [data.Map.Index+1, data.Coords.compile()], -1 )
    }

class TownMapEntry {
    constructor(id, data){
        this.ID = id;
        this.Name = data.Name;
        this.Coords = {};
        
        Object.keys(data.Coords).forEach(index => {
            this.Coords[index] = new TownMapCoordinates(this, index, data.Coords[index])
        });

        this.Pointer = Data(this.ID, this.Name + "@");
    }
}

class TownMapCoordinates {
    constructor(entry, index, data){
        this.Entry = entry;
        this.Index = index;
        this.X = data.X;
        this.Y = data.Y;
        this.Maps = new Set();

        this.Internal = 
        this.MapGroups = [];
    }
    addMap(map){
        this.Maps.add(map);

        if(map.isExternal){
            TownMapEntryTables.External.add(map);
        }
        else{
            // Update the last map entry if the coords are the same
            if( TownMapEntryTables.Internal.LastAdd && TownMapEntryTables.Internal.LastAdd.Coords == this ){
                TownMapEntryTables.Internal.LastAdd.Map = map;
            }
            // Otherwise, add a new row
            else{
                TownMapEntryTables.Internal.add({
                    Map : map,
                    Coords : this
                })
            }
        }
    }
    compile(){
        return [ (this.Y << 4) + this.X, this.Entry.Pointer];
    }
}

Goto('TownMapNames');

Object.keys(TownMapEntries).forEach(id => {
    let value = TownMapEntries[id];
    TownMapEntries[id] = new TownMapEntry(id, value);
});
