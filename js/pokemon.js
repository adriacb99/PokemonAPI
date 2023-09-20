function processJSONpokemon()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var pokemon=JSON.parse(this.responseText);
		for (var p in pokemon.results)
		{
            actual = pokemon.results[p].name;
            var x = parseFloat(p)+(pageNum*limit)
			divObj1.innerHTML+="<div id="+actual+" class=regionPoke><div class=info><p class=num># "+x+"</p><p class=name>"+actual+"</p></div></div>";
			
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
		divPoke.innerHTML+="<img id="+pokemon.name+"_img class=pok src="+pokemon.sprites.other["official-artwork"].front_default+">";

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
	
	clickImg = document.getElementsByClassName("pok");
	for (var i = 0; i < clickImg.length; i++) {
		clickImg[i].addEventListener("click", showInfo); 		  
	}
}

function showPokemon()
{   
	divObj1.innerHTML="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONpokemon;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/?offset="+pageNum*limit+"&limit="+limit);
	xmlhttp.send();
}

function showSprite()
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONpokemonSprite;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+actual);
	xmlhttp.send();
}

function paginas(obj)
{
    if (obj.target.id == "sumapagina") 
    {
        pageNum++;
        showPokemon();
    }
    else if (obj.target.id == "restapagina")
    {
        pageNum--;
        if (pageNum < 0) pageNum = 0;
        else showPokemon();
    }
    console.log(pageNum);
}

function showInfo(obj)
{
	clicked = obj.target.id.split("_")[0];
	console.log(obj.target.id.split("_")[0]);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONpokemonBlock;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+clicked);
	xmlhttp.send();
}

function processJSONpokemonBlock()
{
	if ((this.readyState==4) && (this.status==200))
	{
		mam.style.visibility="visible";
		var pokemon=JSON.parse(this.responseText);
		divObj1.style.display= 'none';
		mam.innerHTML+="<button id='volver'>Volver</button><br />"+"<img class=pokclick src="+pokemon.sprites.other["official-artwork"].front_default+">";
		mam.innerHTML+="<div id='spi'><ul id='block_info_pok'><li><p class='title'>Name </p><p class='idp'>"+pokemon.name+"</p></li><li><p class='title'>Height </p><p class='idp'>"+pokemon.height+"</p></li>\
		<li><p class='title'>Weight </p><p class='idp'>"+pokemon.weight+"</p></li><li><p class='title'>Types </p><p class='idp' id='type_list'></p></li><li><p class='title'>Abilities </p><p id='abi' class='idp'></p></li><li><p class='title'>Hidden ability </p><p id='abi2' class='idp'></p></li></ul></div>";
		mam2 = document.getElementById("type_list");
		for (var i in pokemon.types)
		{
			mam2.innerHTML+=pokemon.types[i].type.name+"</br>";
		}
		mam2 = document.getElementById("abi");
		for (var i in pokemon.abilities)
		{
			if (!pokemon.abilities[i].is_hidden) mam2.innerHTML+=pokemon.abilities[i].ability.name+"</br>";		
		}
		mam2 = document.getElementById("abi2");
		for (var i in pokemon.abilities)
		{
			if (pokemon.abilities[i].is_hidden) mam2.innerHTML+=pokemon.abilities[i].ability.name+"</br>";		
		}
		mam2 = document.getElementById("volver");
		mam2.addEventListener("click", vuelve);
	}
}

function vuelve()
{
	divObj1.style.display= 'block';
	showPokemon();
	mam.innerHTML="";
	mam2.innerHTML="";
	mam.style.visibility="hidden";
}

function loadJSON()
{
    pageNum = 0;
    limit = 40;
    count = 0;

    divObj1 = document.getElementById("demo");
    capi1 = document.getElementById("sumapagina");
    capi2 = document.getElementById("restapagina");
	searchBar = document.getElementById("searchPokemon");
	mam = document.getElementById("blockPoke");

	mam.style.visibility="hidden";

    capi1.addEventListener("click", paginas);
    capi2.addEventListener("click", paginas);
	searchBar.addEventListener("change", show);

    console.log(location.href);
    showPokemon();
}

function bar()
{
	console.log("cambiio");
}

function show()
{
	if (searchBar.value.length == 0) showPokemon();
	else showPokemonBySearch();
}

function showPokemonBySearch()
{   
	divObj1.innerHTML="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONsearch;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1500");
	xmlhttp.send();
}

function processJSONsearch()
{
	var len = searchBar.value.length;
	if ((this.readyState==4) && (this.status==200))
	{
		var search=JSON.parse(this.responseText);
		for (var p in search.results)
		{
            actual = search.results[p].name;
			if (actual.slice(0, len) == searchBar.value || len==0)
			{
				actual = search.results[p].name;
				var x = parseFloat(p)+(pageNum*limit)
				divObj1.innerHTML+="<div id="+actual+" class=regionPoke><div class=info><p class=num># "+x+"</p><p class=name>"+actual+"</p></div></div>"
				count++;
				showSprite();
			}			
		}
	}
}