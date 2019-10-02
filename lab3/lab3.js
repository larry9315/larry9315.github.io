function firstFunction() {
  var x = document.getElementById("inputDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function secondFunction() {
	var newDiv = document.createElement("div");
	newDiv.setAttribute("class", "elements");

	var artistNameVal = document.getElementsByClassName("inputDivSearchbox")[0];
	var aboutArtistVal = document.getElementsByClassName("inputDivSearchbox")[1];
	var imgUrlVal = document.getElementsByClassName("inputDivSearchbox")[2];


	var h2Element = document.createElement("h2");
	var text = document.createTextNode(artistNameVal.value);
	h2Element.appendChild(text);


	var imgElement = document.createElement("img");
	imgElement.setAttribute("src", imgUrlVal.value);


	var pElement = document.createElement("p");
	var text2 = document.createTextNode(aboutArtistVal.value);
	pElement.appendChild(text2);


	var inputElement = document.createElement("input");
	inputElement.setAttribute("type", "submit");
	inputElement.setAttribute("value", "Delete");
	inputElement.setAttribute("onclick", "this.parentNode.remove();");



	newDiv.appendChild(imgElement);
	newDiv.appendChild(inputElement);
	newDiv.appendChild(h2Element);
	newDiv.appendChild(pElement);

	var currentDiv = document.getElementById("elementDiv");
	currentDiv.appendChild(newDiv);

}
