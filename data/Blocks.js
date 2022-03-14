let Blocks = json('./Blocks.json');

class BlocksData {
    constructor(id, data){
        this.ID = id;
        this.Data = data;        
        this.Headers = new Set();

        Goto(this.ID)
        this.Pointer = Data(this.ID, this.Data);
    }
    addHeader(header){
        this.Headers.add(header);
    }
    removeHeader(header){
        this.Headers.remove(header);
    }
}

Object.keys(Blocks).forEach(id => {
    let value = Blocks[id];
    Blocks[id] = new BlocksData(id, value);
});