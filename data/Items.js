let Items = json('./Items.json');

class ItemData {
    constructor(name, data){
        this.Name = name;
        this.ID = data.ID;
    }
}

Object.keys(Items).forEach(name => {
    let value = Items[name];
    Items[name] = new ItemData(name, value);
});
