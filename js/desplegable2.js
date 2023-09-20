function processJSONtypes()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var type=JSON.parse(this.responseText);
		for (var p in type.results)
		{
            var o1;
            o1 = document.createElement('option');
            o1.value = type.results[p].name;
            o1.innerHTML = type.results[p].name;
            typeList.appendChild(o1);
		}
	}
}

function processJSONitems()
{
	if ((this.readyState==4) && (this.status==200))
	{
        remove();
		var item=JSON.parse(this.responseText);
		for (var p in item.items)
		{
            var o1;
            o1 = document.createElement('option');
            o1.value = item.items[p].name;
            o1.innerHTML = item.items[p].name;
            itemList.appendChild(o1);
		}
	}
}

function processJSONinfoItem()
{
	if ((this.readyState==4) && (this.status==200))
	{
		var info=JSON.parse(this.responseText);
        
        divObj2.innerHTML+=info.name.bold();
        divObj2.innerHTML+="</br></br><img id='item_sprite' src="+info.sprites.default+"></br>";
        divObj2.innerHTML+="attributes: ";
        for (var p in info.attributes)
		{
            divObj2.innerHTML+=info.attributes[p].name+", ";
        }
        if (info.attributes.length == 0) divObj2.innerHTML+="none";
        
        if (info.cost == 0) divObj2.innerHTML+="</br>cost: This item cant be sold";
        else divObj2.innerHTML+="</br>cost: "+info.cost;

        
        divObj1.innerHTML+="<table id=item_info></table>";
        var div_info = document.getElementById('item_info');
        div_info.innerHTML+="<th class='th_border_left'>Version group</th><th class='th_border_right'>Description</th>";
        var ult = 0;
        for (var i in info.flavor_text_entries)
        {
            if(info.flavor_text_entries[i].language.name == "en")
            {
                div_info.innerHTML+="<tr><th>"+info.flavor_text_entries[i].version_group.name+"</th><td>"+info.flavor_text_entries[i].text+"</td></tr>";
            }
        }
        if(info.category.name == "all-machines") divObj2.innerHTML+="</br></br>"+info.effect_entries[0].effect;
	}
}

function remove()
{
    let select_item = document.getElementById('item_name');
    let options = select_item.getElementsByTagName('option');
    for (var i=options.length; i--;) 
    {
        select_item.removeChild(options[i]);
    }
}


function showTypes()
{   
	divObj1.innerHTML="";
    divObj2.innerHTML="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONtypes;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/item-category?offset=0&limit=60");
	xmlhttp.send();
}

function showItems()
{   
    itemList.childNodes = new Array();
	divObj1.innerHTML="";
    divObj2.innerHTML="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONitems;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/item-category/"+typeList.value);
	xmlhttp.send();
}

function infoItem()
{
    divObj1.innerHTML="";
    divObj2.innerHTML="";
    divObj2.style.visibility= "visible";
    console.log(itemList.value);
    itemList.childNodes = new Array();
	divObj1.innerHTML="";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processJSONinfoItem;
	xmlhttp.open("GET", "https://pokeapi.co/api/v2/item/"+itemList.value);
	xmlhttp.send();
}

function loadJSON()
{
    pageNum = 0;
    limit = 40;

    divObj1 = document.getElementById("demo");
    divObj2 = document.getElementById("item_inf");

    divObj2.style.visibility= "hidden";

    typeList = document.getElementById("item_type");
    typeList.addEventListener("change", showItems);
    itemList = document.getElementById("item_name");
    itemList.addEventListener("change", infoItem);

    console.log(location.href);

    showTypes();
    //showPokemon();
}