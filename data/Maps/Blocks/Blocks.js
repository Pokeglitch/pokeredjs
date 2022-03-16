let BlocksJSON = json('./Blocks.json'),
    Blocks = new Collection();

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

Object.keys(BlocksJSON).forEach(id => {
    let block = new BlocksData(id, BlocksJSON[id]);
    Blocks.add(block);
});