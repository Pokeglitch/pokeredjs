class Table {
    constructor(id, mapper = null, terminator = null){
        this.ID = id;
        this.Mapper = mapper;
        this.Terminator = terminator;
        this.Data = [];
        this.Pointer = null;
        this.LastAdd = null;
    }
    add(row){
        this.Data.push( row );
        this.LastAdd = row;
    }
    toROM(){
        let data = this.Mapper ? this.Data.map(this.Mapper) : this.Data.slice();

        if( this.Terminator ){
            data.push( this.Terminator );
        }

        this.Pointer = Data(this.ID, data);
    }
}

class Collection {
    constructor(){
        this.byID = {};
        this.byIndex = [];
        this.byOrder = [];
        this.LastAdd = null;
    }
    add(value){
        this.byID[value.ID] = value;
        this.byIndex[value.Index] = value;
        this.byOrder.push(value);
        this.LastAdd = value;
    }
    by(key, skipValues=[null]){
        let list = [];
        this.byOrder.forEach(item => {
            if( skipValues.indexOf(item[key]) === -1 ){
                list.push(item);
            }
        })
        return list.sort( (a,b) => a[key] - b[key] );
    }
    sort(key){}
    getBy(key, value){
        let collection = new Collection();
        return collection;
    }
}

include('./Items/Items.js')
include('./Pokemon/Pokemon.js')

include('./Sprites/Sprites.js')
include('./Trainers/Trainers.js')

include('./Maps/Maps.js')
