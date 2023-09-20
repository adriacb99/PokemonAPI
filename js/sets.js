function processJSONsets()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var sets=JSON.parse(this.responseText);
		for (var p in sets.data)
		{
			divObj1.innerHTML+=sets.data[p].name+"<img src="+sets.data[p].images.logo+"><br />";
		}
	}
}

function showSets()
{
	divObj1.innerHTML="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONsets;
	xmlhttp.open("GET", "https://api.pokemontcg.io/v2/sets");
	//xmlhttp.open("GET", "https://www.el-tiempo.net/api/json/v2/provincias/08/municipios");
	xmlhttp.send();
}

function showCards()
{
    let actual = location.href;
	location.href = actual+"/../cards.html";
}

function showIndex()
{
    let actual = location.href;
	location.href = actual+"/../../index.html";
}

function loadJSON()
{
    divObj1 = document.getElementById("demo");
    sets = document.getElementById("sets");
    index = document.getElementById("index");

    index.addEventListener("click", showIndex);
    cards.addEventListener("click", showCards);

    showSets();
    console.log(location.href);
}
