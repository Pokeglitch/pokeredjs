let Blocks = json('./Blocks.json');

class BlocksData {
    constructor(name, data){
        this.Name = name;
        this.Data = data;        
        this.Headers = new Set();

        Goto(this.Name)
        this.Pointer = Data(this.Name, this.Data);
    }
    addHeader(header){
        this.Headers.add(header);
    }
    removeHeader(header){
        this.Headers.remove(header);
    }
}

Object.keys(Blocks).forEach(name => {
    let value = Blocks[name];
    Blocks[name] = new BlocksData(name, value);
});