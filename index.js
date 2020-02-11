var i = 0;
var txt = 'Larry Park';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function blink() {
	var blink = document.getElementById('cursor');
	setInterval(function() {
		blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
	}, 500); 
}


setTimeout(typeWriter, 2000);
blink();
