let Items = json('./Items.json');

class ItemData {
    constructor(id, data){
        this.ID = id;
        this.Index = data.Index;
    }
}

Object.keys(Items).forEach(id => {
    let value = Items[id];
    Items[id] = new ItemData(id, value);
});
