const POKEAPIURL = 'https://pokeapi.co/api/v2/pokemon/'
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

function GetPokeNumber() {
  var pokeidentifier = document.getElementById('pokeidentifier').value;

  fetch(POKEAPIURL + pokeidentifier)
    .then(resp => {
      if (resp.status === 200) {
        return resp.json()
      } else {
        return console.error('Error fetching from POKE API')
      }
    })
    .then(responseBody => {
      console.log(responseBody)
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
      console.log(pokemonType)

      for(pokemon in pokemonType) {
        pokemonsType = pokemonType[pokemon].type.name;
        console.log(pokemonsType)
        console.log(`.pokemontype${pokemon}`)
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



    })
    .catch(err => console.error(err))

    //getting weaknesses of the choosen pokemon
    // $.get("http://pokeapi.co/api/v2/type/" + pokemontype1, function(data) {
    //   $('.pokemonweakness').html("");
    //
    //
    //
    //   for (var i = 0; i < data.damage_relations.double_damage_from.length; i++) {
    //     pokemonweakness = data.damage_relations.double_damage_from[i].name;
    //
    //     //Setting background colours of weaknesses
    //     switch (pokemonweakness) {
    //       case "ground":
    //         pokemonweaknessBG = pokemonColours.groundbrown;
    //         break;
    //       case "grass":
    //         pokemonweaknessBG = pokemonColours.grassgreen;
    //         break;
    //       case "poison":
    //         pokemonweaknessBG = pokemonColours.poisonpurple;
    //         break;
    //       case "fire":
    //         pokemonweaknessBG = pokemonColours.firered;
    //         break;
    //       case "flying":
    //         pokemonweaknessBG = pokemonColours.flyingteal;
    //         break;
    //       case "water":
    //         pokemonweaknessBG = pokemonColours.waterblue;
    //         break;
    //       case "bug":
    //         pokemonweaknessBG = pokemonColours.buggreen;
    //         break;
    //       case "normal":
    //         pokemonweaknessBG = pokemonColours.normalgrey;
    //         break;
    //       case "electric":
    //         pokemonweaknessBG = pokemonColours.electricyellow;
    //         break;
    //       case "fairy":
    //         pokemonweaknessBG = pokemonColours.fairypink;
    //         break;
    //       case "fighting":
    //         pokemonweaknessBG = pokemonColours.fightingbrown;
    //         break;
    //       case "psychic":
    //         pokemonweaknessBG = pokemonColours.psychicpink;
    //         break;
    //       case "rock":
    //         pokemonweaknessBG = pokemonColours.rockbrown;
    //         break;
    //       case "ice":
    //         pokemonweaknessBG = pokemonColours.iceteal;
    //         break;
    //       case "ghost":
    //         pokemonweaknessBG = pokemonColours.ghostpurple;
    //         break;
    //       case "dragon":
    //         pokemonweaknessBG = pokemonColours.dragonblue;
    //         break;
    //       case "steel":
    //         pokemonweaknessBG = pokemonColours.steelgrey;
    //         break;
    //       case "dark":
    //         pokemonweaknessBG = pokemonColours.darkblack;
    //         break;
    //       default:
    //         pokemonweaknessBG = pokemonColours.firered;
    //     }
    //
    //
    //     $('.pokemonweakness').append("<span class='pokemontype1' style='background-color:" + pokemonweaknessBG + "; display:inline;'>" + pokemonweakness + "</span> ");
    //   }
    //
    //
    // });

}
