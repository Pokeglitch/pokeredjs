let ItemsJSON = json('./Items.json'),
    Items = new Collection();

class ItemData {
    constructor(id, data){
        this.ID = id;
        this.Index = data.Index;
    }
}

Object.keys(ItemsJSON).forEach(id => {
    let item = new ItemData(id, ItemsJSON[id]);
    Items.add( item );
});
