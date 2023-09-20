function processJSONpokemon()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var pokemon=JSON.parse(this.responseText);
		for (var p in pokemon.pokemon_entries)
		{
            actual = pokemon.pokemon_entries[p].pokemon_species.name;
			divObj1.innerHTML+="<div onclick='cccc()' id="+actual+" class=regionPoke><div class=info><p class=num># "+pokemon.pokemon_entries[p].entry_number+"</p><p class=name>"+actual+"</p></div></div>"
			count++;
			showSprite();
		}
	}
}

function processJSONpokemonSprite()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var pokemon=JSON.parse(this.responseText);
		divPoke = document.getElementById(pokemon.name);
		divPoke.innerHTML+="<img class=pok src="+pokemon.sprites.other["official-artwork"].front_default+">";

		divPoke = divPoke.getElementsByClassName("info")[0]
		divPoke.innerHTML+="<p class=type1>"+pokemon.types[0].type.name+"</p>"

		//Set background color for each type
		if (pokemon.types[0].type.name=="grass") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#83CB89";
		if (pokemon.types[0].type.name=="fire") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#DE4B34";
		if (pokemon.types[0].type.name=="normal") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#FFF4B0";
		if (pokemon.types[0].type.name=="fighting") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#c02038";
		if (pokemon.types[0].type.name=="flying") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#a890f0";
		if (pokemon.types[0].type.name=="poison") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#a040a0";
		if (pokemon.types[0].type.name=="ground") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#e0c068";
		if (pokemon.types[0].type.name=="rock") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#b8a038";
		if (pokemon.types[0].type.name=="bug") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#a8b820";
		if (pokemon.types[0].type.name=="ghost") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#705898";
		if (pokemon.types[0].type.name=="steel") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#b8b8d0";
		if (pokemon.types[0].type.name=="water") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#6890f0";
		if (pokemon.types[0].type.name=="electric") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#f8d030";
		if (pokemon.types[0].type.name=="psychic") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#f85888";
		if (pokemon.types[0].type.name=="ice") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#98d8d8";
		if (pokemon.types[0].type.name=="dragon") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#7038f8";
		if (pokemon.types[0].type.name=="dark") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#705848";
		if (pokemon.types[0].type.name=="fairy") divPoke.getElementsByClassName("type1")[0].style.backgroundColor = "#ee99ac";
		if (pokemon.types.length == 2)
		{
			divPoke.innerHTML+="<p class=type2>"+pokemon.types[1].type.name+"</p>"
			if (pokemon.types[1].type.name=="grass") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#83CB89";
			if (pokemon.types[1].type.name=="fire") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#DE4B34";
			if (pokemon.types[1].type.name=="normal") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#FFF4B0";
			if (pokemon.types[1].type.name=="fighting") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#c02038";
			if (pokemon.types[1].type.name=="flying") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#a890f0";
			if (pokemon.types[1].type.name=="poison") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#a040a0";
			if (pokemon.types[1].type.name=="ground") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#e0c068";
			if (pokemon.types[1].type.name=="rock") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#b8a038";
			if (pokemon.types[1].type.name=="bug") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#a8b820";
			if (pokemon.types[1].type.name=="ghost") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#705898";
			if (pokemon.types[1].type.name=="steel") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#b8b8d0";
			if (pokemon.types[1].type.name=="water") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#6890f0";
			if (pokemon.types[1].type.name=="electric") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#f8d030";
			if (pokemon.types[1].type.name=="psychic") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#f85888";
			if (pokemon.types[1].type.name=="ice") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#98d8d8";
			if (pokemon.types[1].type.name=="dragon") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#7038f8";
			if (pokemon.types[1].type.name=="dark") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#705848";
			if (pokemon.types[1].type.name=="fairy") divPoke.getElementsByClassName("type2")[0].style.backgroundColor = "#ee99ac";
		}
	}
}

function processJSONpokedex()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var pokedex=JSON.parse(this.responseText);
		for (var p in pokedex.results)
		{
            var o1;
            o1 = document.createElement('option');
            o1.value = pokedex.results[p].url;
            o1.innerHTML = pokedex.results[p].name;
            listaSets.appendChild(o1);
		}
	}
}

function showPokedex()
{
	divObj1.innerHTML="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONpokedex;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokedex/?offset=0&limit=50");
	xmlhttp.send();
}

function showPokemon()
{   
	count = 0;
	divObj1.innerHTML="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONpokemon;
	xmlhttp.open("GET", listaSets.value);
	xmlhttp.send();
}

function showSprite()
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONpokemonSprite;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+actual);
	xmlhttp.send();
}

function loadJSON()
{
	count = 0;
    divObj1 = document.getElementById("demo");
    listaSets = document.getElementById("provs");

    listaSets.addEventListener('change', showPokemon);

    showPokedex();
    console.log(location.href);
			
	/*clickImg = document.getElementsByClassName("pok");
	for (var i = 0; i < count; i++) {
    	clickImg[i].addEventListener("click", changeCasilla); 		
    
	}*/
}

function changeCasilla()
{
	clickImg = document.getElementsByClassName("regionPoke");
	for (var i = 0; i < clickImg.length; i++) {
    	clickImg[i].addEventListener("click", cccc); 		   
	}
}

function cccc()
{
	console.log("hola");
}