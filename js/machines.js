function processJSONpokemon()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var machines=JSON.parse(this.responseText);
		console.log(machines.name);
        divObj1.innerHTML="<div id='move_info'><p>"+machines.name+"</p></br>Accuracy  "+machines.accuracy+"</br>Power  "+machines.power+"</br>PP  "+machines.pp+"</br>Priority  "+machines.priority+"</br>Attack type  "+machines.damage_class.name+"</br></br>Description</br>"+machines.effect_entries[0].effect+"</div>";
	}
}

function processJSONMachines()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var machine=JSON.parse(this.responseText);
        divMachine = document.getElementById(machine.id);
        divMachine.innerHTML+=machine.item.name
	}
}

function processJSONversion()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var version=JSON.parse(this.responseText);
		for (var p in version.results)
		{
            var o1;
            o1 = document.createElement('option');
            o1.value = version.results[p].name;
            o1.innerHTML = version.results[p].name;
            VersionsList.appendChild(o1);
		}
	}
}

function showVersions()
{
	divObj1.innerHTML="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONversion;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/move?offset=0&limit=200");
	xmlhttp.send();
}

function showPokemon()
{   
	divObj1.innerHTML="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONpokemon;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/move/"+VersionsList.value);
	xmlhttp.send();
}

function showMachine()
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONMachines;
	xmlhttp.open("GET", actual);
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

function loadJSON()
{
    pageNum = 0;
    limit = 40;

    divObj1 = document.getElementById("demo");

    VersionsList = document.getElementById("provs");
    VersionsList.addEventListener("change", showPokemon);

    console.log(location.href);

    showVersions();
    //showPokemon();
}

