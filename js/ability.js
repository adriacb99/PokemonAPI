function loadJSON()
{
    pageNum = 0;
    count = 48;

    divObj1 = document.getElementById("demo");
    capi1 = document.getElementById("sumapagina");
    capi2 = document.getElementById("restapagina");
    searchBar = document.getElementById("searchPokemon");

    capi1.addEventListener("click", paginas);
    capi2.addEventListener("click", paginas);
    searchBar.addEventListener("change", show);

    console.log(location.href);
    showAbilities();
}

function show()
{
	if (searchBar.value.length == 0) showAbilities();
	else showHabilityBySearch();
}

function showHabilityBySearch()
{   
	divObj1.innerHTML="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONsearch;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/ability?offset=0&limit=500");
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
				divObj1.innerHTML+="<div id="+search.results[p].name+" class='abilities_name'>"+search.results[p].name+"</div>";
			}			
		}
        clickImg = document.getElementsByClassName("abilities_name");
        for (var i = 0; i < clickImg.length; i++) {
            clickImg[i].addEventListener("click", showInfo); 		  
        }
	}
}

function showAbilities()
{
    divObj1.innerHTML="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONabilities;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/ability?offset="+pageNum*count+"&limit=48");
	xmlhttp.send();
}

function showAbi(obj)
{
    console.log(obj.id);
}

function showInfo(obj)
{
    console.log(obj.target.id);
    divObj1.innerHTML="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONinfoabi;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/ability/"+obj.target.id);
	xmlhttp.send();
}

function vuelve()
{
    divObj1.innerHTML="";
	mam2.innerHTML="";
    searchBar.value = "";
    show();
}

function processJSONinfoabi()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var abilities=JSON.parse(this.responseText);
        if (abilities.effect_entries.length != 0){
            divObj1.innerHTML+="<button id='volver'>Volver</button><div id='abiinfo'><p id='nameabi'>"+abilities.name+"</p>"+abilities.effect_entries[1].effect+"</div>";
        }
        else divObj1.innerHTML+="<button id='volver'>Volver</button>This hability dont have description";
        mam2 = document.getElementById("volver");
		mam2.addEventListener("click", vuelve);
	}
}

function processJSONabilities()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var abilities=JSON.parse(this.responseText);
		for (var p in abilities.results)
		{
            actual = parseFloat(p)+1;
			divObj1.innerHTML+="<div id="+abilities.results[p].name+" class='abilities_name'>"+abilities.results[p].name+"</div>";
			
		}
        clickImg = document.getElementsByClassName("abilities_name");
        for (var i = 0; i < clickImg.length; i++) {
            clickImg[i].addEventListener("click", showInfo); 		  
        }
	}
}

function paginas(obj)
{
    if (obj.target.id == "sumapagina") 
    {
        pageNum++;
        showAbilities();
    }
    else if (obj.target.id == "restapagina")
    {
        pageNum--;
        if (pageNum < 0) pageNum = 0;
        else showAbilities();
    }
    console.log(pageNum);
}