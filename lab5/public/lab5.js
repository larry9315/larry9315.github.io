var elementDiv = document.getElementById("elementDiv");
var x = document.getElementById("inputDiv");
// window.onload = restoreLocalhost;




function firstFunction() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function fetchArtist(name, about, img, index) {
	var newDiv = document.createElement("div");
	newDiv.setAttribute("class", "elements");

	// var artistNameVal = document.getElementsByClassName("inputDivSearchbox")[0];
	// var aboutArtistVal = document.getElementsByClassName("inputDivSearchbox")[1];
	// var imgUrlVal = document.getElementsByClassName("inputDivSearchbox")[2];

	var h2Element = document.createElement("h2");
	var text = document.createTextNode(name);
	h2Element.appendChild(text);


	var imgElement = document.createElement("img");
	imgElement.setAttribute("src", img);


	var pElement = document.createElement("p");
	var text2 = document.createTextNode(about);
	pElement.appendChild(text2);


	var inputElement = document.createElement("input");
	inputElement.setAttribute("type", "submit");
	inputElement.setAttribute("value", "Delete");
	inputElement.setAttribute("onclick", "deleteArtist(" + index + ");");





	newDiv.appendChild(imgElement);
	newDiv.appendChild(inputElement);
	newDiv.appendChild(h2Element);
	newDiv.appendChild(pElement);

	var currentDiv = document.getElementById("elementDiv");
	currentDiv.appendChild(newDiv);
	// saveLocalhost();
	x.style.display = "none";

}

function deleteArtist(index) {
	fetch("/deleteUsers/" + index, {method:"DELETE"}).then((err)=>{
		var element = document.getElementById("elementDiv");
		element.innerHTML = "";
		getData();
	})
}



function searchFunction() {
	var inputValue = document.getElementById("searchBox").value.toLowerCase();

	var classes = document.getElementsByClassName("elements");
	for (let i = 0; i < classes.length; i++) {
		var strValue = String(classes[i].querySelector("h2").innerHTML).toLowerCase();
		
		var isStartWith = strValue.includes(inputValue);
		if (isStartWith) {
			classes[i].style.display = "block";
		} else {
			classes[i].style.display = "none";
		}

	}
	// saveLocalhost();
}

async function getData() {
	let data = await fetch("/getAllData");
	let jsonData = await data.json();
	
	for (let i = 0; i < jsonData.length; i++) {
		fetchArtist(jsonData[i].name, jsonData[i].about, jsonData[i].img,i);	
	}

	
}

getData();
// function saveLocalhost() {
// 	localStorage.clear();
// 	localStorage.setItem("canvas", elementDiv.innerHTML);
// }

// function restoreLocalhost() {
// 	elementDiv.innerHTML = localStorage.getItem("canvas");
// }