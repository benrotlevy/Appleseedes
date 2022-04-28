function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

const pokemon1 = new Pokemon("Charmander", "Fire", ["Growl", "Scratch"]);
const pokemon2 = new Pokemon("Bulbasaur", "Grass", ["Growl", "Tackle"]);
const pokemon3 = new Pokemon("Spearow", "Flying", ["Growl", "Peck"]);

Pokemon.prototype.callPokemon = function() {
    console.log(`I choose you, ${this.name}`);
}

Pokemon.prototype.attack = function(attackNum) {
    console.log(`${this.name} used ${this.attackList[attackNum-1]}`);
}

pokemon1.callPokemon();
pokemon1.attack(2);
pokemon2.callPokemon();
pokemon2.attack(2);
pokemon3.callPokemon();
pokemon3.attack(2);
