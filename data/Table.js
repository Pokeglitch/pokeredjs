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