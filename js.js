var pokemonid = 0;
var pokemonheight = 0;
var pokemonweight = 0;
var pokemonname = 0;
var pokemonweaknessBG = 0;

//setting colours for types of pokemon
var groundbrown = 'rgb(210, 179, 92)';
var grassgreen = 'rgb(79, 179, 29)';
var poisonpurple = 'rgb(175, 49, 175)';
var firered = 'rgb(241, 23, 23)';
var flyingteal = 'rgb(161, 138, 229)';
var waterblue = 'rgb(69, 120, 237)';
var buggreen = 'rgb(64, 128, 32)';
var normalgrey = 'rgb(156, 156, 99)';
var electricyellow = 'rgb(246, 201, 19)';
var fairypink = 'rgb(232, 120, 144)';
var fightingbrown = 'rgb(123, 30, 25)';
var psychicpink = 'rgb(212, 53, 101)';
var rockbrown = 'rgb(164, 143, 50)';
var iceteal = 'rgb(126, 206, 206)';
var ghostpurple = 'rgb(100, 78, 136)';
var dragonblue = 'rgb(94, 29, 247)';
var steelgrey = 'rgb(160, 160, 192)';
var darkblack = 'rgb(62, 49, 40)';

function GetPokeNumber() {
  var pokeidentifier = document.getElementById('pokeidentifier').value;

  $.get("https://pokeapi.co/api/v2/pokemon/" + pokeidentifier, function(data) {
    pokemonid = data.id;
    pokemonheight = data.height;
    pokemonweight = data.weight;
    pokemonname = data.name;
    pokemonsprite = data.sprites.front_default;
    pokemonweakness = 0;
    pokemonabilities = 0;



    //for checking if one pokemon has multiple types -----------turn into for loop or while -----
    pokemontype = data.types;
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
        document.body.style.setProperty('--main-bg-color', groundbrown);
        break;
      case "grass":
        document.body.style.setProperty('--main-bg-color', grassgreen);
        break;
      case "poison":
        document.body.style.setProperty('--main-bg-color', poisonpurple);
        break;
      case "fire":
        document.body.style.setProperty('--main-bg-color', firered);
        break;
      case "flying":
        document.body.style.setProperty('--main-bg-color', flyingteal);
        break;
      case "water":
        document.body.style.setProperty('--main-bg-color', waterblue);
        break;
      case "bug":
        document.body.style.setProperty('--main-bg-color', buggreen);
        break;
      case "normal":
        document.body.style.setProperty('--main-bg-color', normalgrey);
        break;
      case "electric":
        document.body.style.setProperty('--main-bg-color', electricyellow);
        break;
      case "fairy":
        document.body.style.setProperty('--main-bg-color', fairypink);
        break;
      case "fighting":
        document.body.style.setProperty('--main-bg-color', fightingbrown);
        break;
      case "psychic":
        document.body.style.setProperty('--main-bg-color', psychicpink);
        break;
      case "rock":
        document.body.style.setProperty('--main-bg-color', rockbrown);
        break;
      case "ice":
        document.body.style.setProperty('--main-bg-color', iceteal);
        break;
      case "ghost":
        document.body.style.setProperty('--main-bg-color', ghostpurple);
        break;
      case "dragon":
        document.body.style.setProperty('--main-bg-color', dragonblue);
        break;
      case "steel":
        document.body.style.setProperty('--main-bg-color', steelgrey);
        break;
      case "dark":
        document.body.style.setProperty('--main-bg-color', darkblack);
        break;
      default:
        document.body.style.setProperty('--main-bg-color', firered);
    }



    //looping through abilities and appending them into pokeabilities span
    $('.pokeabilities').html("");

    for (var i = 0; i < data.abilities.length; i++) {
      pokemonabilities = data.abilities[i].ability.name;
      $('.pokeabilities').append(pokemonabilities + "<br>");
    }


    //getting weaknesses of the choosen pokemon
    $.get("http://pokeapi.co/api/v2/type/" + pokemontype1, function(data) {
      $('.pokemonweakness').html("");



      for (var i = 0; i < data.damage_relations.double_damage_from.length; i++) {
        pokemonweakness = data.damage_relations.double_damage_from[i].name;

        //Setting background colours of weaknesses
        switch (pokemonweakness) {
          case "ground":
            pokemonweaknessBG = groundbrown;
            break;
          case "grass":
            pokemonweaknessBG = grassgreen;
            break;
          case "poison":
            pokemonweaknessBG = poisonpurple;
            break;
          case "fire":
            pokemonweaknessBG = firered;
            break;
          case "flying":
            pokemonweaknessBG = flyingteal;
            break;
          case "water":
            pokemonweaknessBG = waterblue;
            break;
          case "bug":
            pokemonweaknessBG = buggreen;
            break;
          case "normal":
            pokemonweaknessBG = normalgrey;
            break;
          case "electric":
            pokemonweaknessBG = electricyellow;
            break;
          case "fairy":
            pokemonweaknessBG = fairypink;
            break;
          case "fighting":
            pokemonweaknessBG = fightingbrown;
            break;
          case "psychic":
            pokemonweaknessBG = psychicpink;
            break;
          case "rock":
            pokemonweaknessBG = rockbrown;
            break;
          case "ice":
            pokemonweaknessBG = iceteal;
            break;
          case "ghost":
            pokemonweaknessBG = ghostpurple;
            break;
          case "dragon":
            pokemonweaknessBG = dragonblue;
            break;
          case "steel":
            pokemonweaknessBG = steelgrey;
            break;
          case "dark":
            pokemonweaknessBG = darkblack;
            break;
          default:
            pokemonweaknessBG = firered;
        }


        $('.pokemonweakness').append("<span class='pokemontype1' style='background-color:" + pokemonweaknessBG + "; display:inline;'>" + pokemonweakness + "</span> ");
      }


    });

    $('.pokename').html("#" + pokemonid + " " + pokemonname);
    $('.pokeweight').html(pokemonweight + "cm");
    $('.pokeheight').html(pokemonheight);
    $('.pokesprite').html('<img src="' + pokemonsprite + '">');


  });
}
