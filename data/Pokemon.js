let Pokemon = json('./Pokemon.json');

class PokemonData {
    constructor(name, data){
        this.Name = name;
        this.ID = data.ID;
    }
}

Object.keys(Pokemon).forEach(name => {
    let value = Pokemon[name];
    Pokemon[name] = new PokemonData(name, value);
});
