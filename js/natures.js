function loadJSON()
{
    divObj1 = document.getElementById("nature_info");

    console.log(location.href);
    showNatures();
}


function showNatures()
{   
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONnatures;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/nature?offset=0&limit=30");
	xmlhttp.send();
}

function showNaturesInfo()
{   
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONnatureInfo;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/nature/"+actual);
	xmlhttp.send();
}


function processJSONnatureInfo()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var info=JSON.parse(this.responseText);
        console.log("hola");
        var gg = document.getElementById(info.name);
        //gg.innerHTML+=info.increased_stat.name+info.decreased_stat.name;
		var x;
		var y;
		if (info.increased_stat==null)
		{
			x = "No increased stat";
		}
		else x = info.increased_stat.name;
		if (info.decreased_stat==null)
		{
			y = "No decreased stat";
		}
		else y = info.decreased_stat.name;
		divObj1.innerHTML+="<tr><th>"+info.name+"</th><td>"+x+"</td><td>"+y+"</td></th>"
    }
}


function processJSONnatures()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var natures=JSON.parse(this.responseText);
		for (var p in natures.results)
		{
            actual = parseFloat(p)+1;
			//divObj1.innerHTML+="<div id="+natures.results[p].name+">"+natures.results[p].name+"</div>";
			
            console.log(actual);
			showNaturesInfo();
		}
	}
}