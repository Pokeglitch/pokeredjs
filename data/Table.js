class Table {
    constructor(name, mapper = null){
        this.Name = name;
        this.Mapper = mapper;
        this.Data = [];
        this.Pointer = null;
    }
    add(row){
        this.Data.push( row );
    }
    toROM(){
        let data = this.Data.map(this.Mapper);
        this.Pointer = Data(this.Name, data);
    }
}