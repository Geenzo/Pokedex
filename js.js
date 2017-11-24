const POKEAPIURL = 'https://pokeapi.co/api/v2/pokemon/'
var pokemonid = 0;
var pokemonheight = 0;
var pokemonweight = 0;
var pokemonname = 0;
var pokemonweaknessBG = 0;

//setting colours for types of pokemon
let pokemonColours = {
  "groundbrown": 'rgb(210, 179, 92)',
  "grassgreen": 'rgb(79, 179, 29)',
  "poisonpurple": 'rgb(175, 49, 175)',
  "firered": 'rgb(241, 23, 23)',
  "flyingteal": 'rgb(161, 138, 229)',
  "waterblue": 'rgb(69, 120, 237)',
  "buggreen": 'rgb(64, 128, 32)',
  "normalgrey": 'rgb(156, 156, 99)',
  "electricyellow": 'rgb(246, 201, 19)',
  "fairypink": 'rgb(232, 120, 144)',
  "fightingbrown": 'rgb(123, 30, 25)',
  "psychicpink": 'rgb(212, 53, 101)',
  "rockbrown": 'rgb(164, 143, 50)',
  "iceteal": 'rgb(126, 206, 206)',
  "ghostpurple": 'rgb(100, 78, 136)',
  "dragonblue": 'rgb(94, 29, 247)',
  "steelgrey": 'rgb(160, 160, 192)',
  "darkblack": 'rgb(62, 49, 40)'

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
      pokemonid = responseBody.id;
      pokemonheight = responseBody.height;
      pokemonweight = responseBody.weight;
      pokemonname = responseBody.name;
      pokemonsprite = responseBody.sprites.front_default;
      pokemonweakness = 0;
      pokemonabilities = 0;

      //for checking if one pokemon has multiple types -----------turn into for loop or while -----
      pokemontype = responseBody.types;
      console.log(pokemontype)
      if (pokemontype.length > 1) {
        pokemontype1 = pokemontype[0].type.name;
        pokemontype2 = pokemontype[1].type.name;
        $('.pokemontype1').html(pokemontype1).css("display", "inline");
        $('.pokemontype2').html(pokemontype2).css("display", "inline");
      } else {
        pokemontype1 = pokemontype[0].type.name;
        $('.pokemontype1').html(pokemontype1).css("display", "inline");
      }

      switch (pokemontype1) {
        case "ground":
          document.body.style.setProperty('--main-bg-color', pokemonColours.groundbrown);
          break;
        case "grass":
          document.body.style.setProperty('--main-bg-color', pokemonColours.grassgreen);
          break;
        case "poison":
          document.body.style.setProperty('--main-bg-color', pokemonColours.poisonpurple);
          break;
        case "fire":
          document.body.style.setProperty('--main-bg-color', pokemonColours.firered);
          break;
        case "flying":
          document.body.style.setProperty('--main-bg-color', pokemonColours.flyingteal);
          break;
        case "water":
          document.body.style.setProperty('--main-bg-color', pokemonColours.waterblue);
          break;
        case "bug":
          document.body.style.setProperty('--main-bg-color', pokemonColours.buggreen);
          break;
        case "normal":
          document.body.style.setProperty('--main-bg-color', pokemonColours.normalgrey);
          break;
        case "electric":
          document.body.style.setProperty('--main-bg-color', pokemonColours.electricyellow);
          break;
        case "fairy":
          document.body.style.setProperty('--main-bg-color', pokemonColours.fairypink);
          break;
        case "fighting":
          document.body.style.setProperty('--main-bg-color', pokemonColours.fightingbrown);
          break;
        case "psychic":
          document.body.style.setProperty('--main-bg-color', pokemonColours.psychicpink);
          break;
        case "rock":
          document.body.style.setProperty('--main-bg-color', pokemonColours.rockbrown);
          break;
        case "ice":
          document.body.style.setProperty('--main-bg-color', pokemonColours.iceteal);
          break;
        case "ghost":
          document.body.style.setProperty('--main-bg-color', pokemonColours.ghostpurple);
          break;
        case "dragon":
          document.body.style.setProperty('--main-bg-color', pokemonColours.dragonblue);
          break;
        case "steel":
          document.body.style.setProperty('--main-bg-color', pokemonColours.steelgrey);
          break;
        case "dark":
          document.body.style.setProperty('--main-bg-color', pokemonColours.darkblack);
          break;
        default:
          document.body.style.setProperty('--main-bg-color', pokemonColours.firered);
      }



      //looping through abilities and appending them into pokeabilities span
      $('.pokeabilities').html("");

      for (var i = 0; i < responseBody.abilities.length; i++) {
        pokemonabilities = responseBody.abilities[i].ability.name;
        $('.pokeabilities').append(pokemonabilities + "<br>");
      }

      $('.pokename').html("#" + pokemonid + " " + pokemonname);
      $('.pokeweight').html(pokemonweight + "cm");
      $('.pokeheight').html(pokemonheight);
      $('.pokesprite').html('<img src="' + pokemonsprite + '">');



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
