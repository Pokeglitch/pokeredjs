const POKEMON = {
    Name : {
        Length : 10,
        Undefined : "MISSINGNO."
    }
}

let Pokemon = json('./Pokemon.json'),
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

Object.keys(Pokemon).forEach(name => {
    let value = Pokemon[name];
    Pokemon[name] = new PokemonData(name, value);
});
