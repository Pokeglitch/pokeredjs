let Pokemon = json('./Pokemon.json');

class PokemonData {
    constructor(id, data){
        this.ID = id;
        this.Index = data.Index;
        this.Name = data.Name;
    }
}

Object.keys(Pokemon).forEach(name => {
    let value = Pokemon[name];
    Pokemon[name] = new PokemonData(name, value);
});
