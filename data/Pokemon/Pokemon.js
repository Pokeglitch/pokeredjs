const POKEMON = {
    Name : {
        Length : 10,
        Undefined : "MISSINGNO."
    }
}

let PokemonJSON = json('./Pokemon.json'),
    Pokemon = new Collection(),
    PokemonNames = new Table("MonsterNames", pokemon => pokemon.getROMName() )

class PokemonData {
    constructor(id, data){
        this.ID = id;
        this.Index = data.Index;
        this.Name = data.Name;

        PokemonNames.add(this);
    }
    getROMName(){
        if( !this.Name ){
            return POKEMON.Name.Undefined;
        }
        let suffix = "@".repeat(POKEMON.Name.Length - this.Name.length);

        return this.Name + suffix;
    }
}

Object.keys(PokemonJSON).forEach(name => {
    let pokemon = new PokemonData(name, PokemonJSON[name]);
    Pokemon.add(pokemon);
});
