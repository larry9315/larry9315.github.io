var divToRotate = document.getElementById('background');

var squares = document.querySelectorAll(".square");
var scoreHTML = document.getElementById("score");
var tilesHTML = document.getElementById("tileNum");
var choiceHTML = document.getElementById("choice");

var tileArr = [];
var tileNum = 1;
var score = 3;
var winConditionNum = tileNum;
var choiceNum = tileNum + 1;

var choosableTiles = [];



function initialize() {
	for (let i = 0; i < squares.length; i++) {
		choosableTiles.push(i);
		
		squares[i].addEventListener("click", function() {

			if (choosableTiles.includes(i)) {
				choiceNum--;
				choiceHTML.innerHTML = "number of choices: " + choiceNum; 
				if (tileArr.includes(i)) {
					this.style.background = "white";
					score++;

					winConditionNum--;
					scoreHTML.innerHTML = "score: " + score;

					if (winConditionNum <= 0) {
						tileNum++;

						this.style.transform = 'rotate(-90deg)';
						this.innerHTML = "O";
						this.classList.add("writingTile");
						this.style.background = "green";
						setTimeout(refresh, 1500);
						let audio = document.getElementById("audio");
       					audio.play();
						
					}

				} else {
					this.style.background = "purple";
					this.innerHTML = "X";
					this.classList.add("writingTile");
					this.style.transform = 'rotate(-90deg)';
					score--;
					scoreHTML.innerHTML = "score: " + score;

					if (score <= 0) {
						location.href = "summary.html";

					}
					else {
						if (choiceNum == 0) {
							if (tileNum > 1) {
								tileNum--;
							}
							refresh();
						} 
					}
				}

				let audio2 = document.getElementById("audio2");
       			audio2.play();

				
				
				let index = choosableTiles.indexOf(i);
				choosableTiles.splice(index, 1);
			}
			
		})
	}
}

function refresh() {
	winConditionNum = tileNum;
	choiceNum = tileNum + 1;
	showTiles();
	setTimeout(hideTiles, 1000)
	
	setTimeout(reset, 1500);
	setTimeout(pickRandomTiles, 2000);
}

function reset() {
	tileArr = [];
	// score = 3;

	
	// hideTiles();
	

	setTimeout(function() {
		divToRotate.style.transform = 'none';
		divToRotate.style.transition = 'none';
	}, 1000);

	
	setTimeout(function() {
		divToRotate.style.transition = 'all .5s';
	}, 2000);

	for (let i = 0; i < 25; i++) {
		if (!choosableTiles.includes(i)) {
			choosableTiles.push(i);
		}
	}
	
}

function showTiles() {
	for (let i = 0; i < tileArr.length; i++) {
		if (squares[tileArr[i]].style.background != "green") {
			squares[tileArr[i]].style.background = "white";
		}
	}
}

function hideTiles() {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.background = "red";
		squares[i].innerHTML = "";
	}

}	

function rotate() {
	divToRotate.style.transform = 'rotate(90deg)';
}



function pickRandomTiles() {
	tilesHTML.innerHTML = "number of tiles: " + tileNum;
	choiceHTML.innerHTML = "number of choices: " + choiceNum; 
	scoreHTML.innerHTML = "score: " + score;
	let tiles = tileNum;
	while (tiles > 0) {
		let randomNum = Math.floor(Math.random() * squares.length);
		if (!tileArr.includes(randomNum)) {
			tileArr.push(randomNum);
			tiles--;
		} 
	}

	setTimeout(showTiles, 1000);
	setTimeout(hideTiles, 2000);

	setTimeout(rotate, 3000);
		
}

function terminate() {
	if (confirm("Are you sure you want to terminate?")) {
		location.href = "summary.html";
	}
}





initialize();
pickRandomTiles();
