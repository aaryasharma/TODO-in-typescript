window.onload =function() {
    var input = document.getElementById('txt1');
    var btn = document.getElementById('add');
    var table1 = document.createElement('table');


    btn.onclick = function () {
		var data = {
			input: input.value,
			status: 0
		};

        var newInput = list.addItem(data);
        //console.log('input is ' + newInput[0].input);
        
		recreateActiveDiv(newInput);
	document.getElementById("txt1").value = ""
    };
}

function completed(i)
{
	var updatedList = list.completeItem(i);

	console.log(updatedList);
	console.log("fgfgerge" + updatedList.newInput );
	recreateActiveDiv(updatedList.newInput);
	recreateCompletedDiv(updatedList.complted)

}

function deleted(value,i)
{
    console.log("deleted" +i);
	var updatedList = list.removeItem(i);
    recreateDeletedDiv(updatedList.deleted)
	
	recreateActiveDiv(updatedList.newInput);
	
}


function updated(i) {
    console.log("updated" + i);
    updatedValue = prompt("enter updated value");
    list.updateElememnt(updatedValue,i);
    recreateActiveDivUpdate(updatedValue);
	console.log("exited")

};

function recreateActiveDiv(newInput)
{
	var dis = "";

	for(i=0;i<newInput.length;i++)
	{
		if(list.findElement(i) != undefined)
		{
            dis += "<div id = " + "'itemDisplayDiv"  + i + "'/>  " + list.findElement(i).input+ "   <button onclick='completed(" + i + ")'> Complete </button> " +
                "<button onclick='deleted(\"" + list.findElement(i) + "\"," + i + ")'>Delete</button>" +
                "<button onclick='updated(" + i + ")'>Update</button> </div><br>";
           // console.log("asdasd " + list.findElement(i) + " afsasfa")
		}

	}
				document.getElementById('added').innerHTML = dis
}

function recreateActiveDivUpdate(newInput)
{
    var dis = "";

    for(i=0;i<newInput.length;i++)
    {
        if(list.findElement(i) != undefined)
        {
            dis += "<div id = \"'itemDisplayDiv\"  + i + \"'/>  " + newInput + "   <button onclick='completed(" + i + ")'> Complete </button> " +
                "<button onclick='deleted(\"" + list.findElement(i) + "\"," + i + ")'>Delete</button>" +
                "<button onclick='updated(" + i + ")'>Update</button> </div><br>";

        }

    }



    document.getElementById('added').innerHTML = dis
}

function recreateDeletedDiv(deleted)
{
	var dis = ""
	for(i=0;i<deleted.length;i++)
	{
		
		dis += deleted[i].input + "<br>";
		
	}	
				
				document.getElementById('deleted').innerHTML = dis
}

function recreateCompletedDiv(completed)
{
	var dis = ""
	for(i=0;i<completed.length;i++)
	{
		
		dis += completed[i].input + "<br>";
		
	}	
				
				document.getElementById('completed').innerHTML = dis
}

