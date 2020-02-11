var i = 0;
var j = 0;
var name = 'Larry Park';
var hammad = 'Fuck you Hammad, when are you back? ;)'
var speed = 100;

function typeWriter(txt) {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(function() {
    	typeWriter(name);
    }, speed);
  }
}

function typeWriter2(txt) {
  if (j < txt.length) {
    document.getElementById("temp").innerHTML += txt.charAt(j);
    j++;
    setTimeout(function() {
    	typeWriter2(hammad);
    }, speed);
  }
}

function blink() {
	var blink = document.getElementById('cursor');
	setInterval(function() {
		blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
	}, 500); 
}


setTimeout(function() {
    	typeWriter(name);
    }, 2000);

setTimeout(function() {
    	typeWriter2(hammad);
    }, 4000);


blink();
