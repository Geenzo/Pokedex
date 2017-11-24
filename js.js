const POKEAPIURL = 'https://pokeapi.co/api/v2'
var pokemonid = 0;
var pokemonheight = 0;
var pokemonweight = 0;
var pokemonname = 0;
var pokemonweaknessBG = 0;

//setting colours for types of pokemon
let pokemonColours = {
  "ground": 'rgb(210, 179, 92)',
  "grass": 'rgb(79, 179, 29)',
  "poison": 'rgb(175, 49, 175)',
  "fire": 'rgb(241, 23, 23)',
  "flying": 'rgb(161, 138, 229)',
  "water": 'rgb(69, 120, 237)',
  "bug": 'rgb(64, 128, 32)',
  "normal": 'rgb(156, 156, 99)',
  "electric": 'rgb(246, 201, 19)',
  "fairy": 'rgb(232, 120, 144)',
  "fighting": 'rgb(123, 30, 25)',
  "psychic": 'rgb(212, 53, 101)',
  "rock": 'rgb(164, 143, 50)',
  "ice": 'rgb(126, 206, 206)',
  "ghost": 'rgb(100, 78, 136)',
  "dragon": 'rgb(94, 29, 247)',
  "steel": 'rgb(160, 160, 192)',
  "dark": 'rgb(62, 49, 40)'

}

const GetPokeNumber = () => {
  var pokeidentifier = document.getElementById('pokeidentifier').value;

  fetch(POKEAPIURL + "/pokemon/" + pokeidentifier)
    .then(resp => {
      if (resp.status === 200) {
        return resp.json()
      } else {
        return console.error('Error fetching from POKE API')
      }
    })
    .then(responseBody => {
      pokemonID = responseBody.id;
      pokemonHeight = responseBody.height;
      pokemonWeight = responseBody.weight;
      pokemonName = responseBody.name;
      pokemonSprite = responseBody.sprites.front_default;
      pokemonWeakness = 0;
      pokemonAbilities = 0;

      pokemonType = responseBody.types;
      $(`.pokemontype0`).html(pokemonType).css("display", "none")
      $(`.pokemontype1`).html(pokemonType).css("display", "none")

      for (pokemon in pokemonType) {
        pokemonsType = pokemonType[pokemon].type.name;
        $(`.pokemontype${pokemon}`).html(pokemonsType).css("display", "inline");
        document.body.style.setProperty(`--main-bg-color${pokemon}`, pokemonColours[pokemonsType])
      }

      //looping through abilities and appending them into pokeabilities span
      $('.pokeabilities').html("");

      for (var i = 0; i < responseBody.abilities.length; i++) {
        pokemonAbilities = responseBody.abilities[i].ability.name;
        $('.pokeabilities').append(pokemonAbilities + "<br>");
      }

      $('.pokename').html("#" + pokemonID + " " + pokemonName);
      $('.pokeweight').html(pokemonWeight + "cm");
      $('.pokeheight').html(pokemonHeight);
      $('.pokesprite').html('<img src="' + pokemonSprite + '">');

      return pokemonType
    })
    .then(getWeakness)
    .catch(err => console.error(err))
}


const getWeakness = (pokemonType) => {

  fetch(POKEAPIURL + "/type/" + pokemonType[0].type.name)
    .then(resp => {
      if (resp.status === 200) {
        return resp.json()
      } else {
        return console.error('Error fetching from POKE API')
      }
    })
    .then(responseBody => {

      $('.pokemonweakness').html("");
      let weaknesses = responseBody.damage_relations.double_damage_from;

      for(weakness in weaknesses) {
        pokemonWeakness = weaknesses[weakness].name;
        pokemonWeaknessBG = pokemonColours[pokemonWeakness];
        document.body.style.setProperty(`--main-weakness-bg-color${pokemon}`, pokemonColours[pokemonWeakness])
        $('.pokemonweakness').append("<span class='pokemonWeakness" + weakness + "' style='background-color:" + pokemonWeaknessBG + "; display:inline;'>" + pokemonWeakness + "</span> ");
      }

    })
    .catch(err => console.error(err))
}
