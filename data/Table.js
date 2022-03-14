class Table {
    constructor(id, mapper = null){
        this.ID = id;
        this.Mapper = mapper;
        this.Data = [];
        this.Pointer = null;
    }
    add(row){
        this.Data.push( row );
    }
    toROM(){
        let data = this.Data.map(this.Mapper);
        this.Pointer = Data(this.ID, data);
    }
}