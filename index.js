var i = 0;
var j = 0;
var name = 'Larry Park';
var speed = 100;

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
	threshold: 1,
	rootMargin: "0px 0px -20px 0px"
};

const appearOnScroll = new IntersectionObserver(
	function(entries, appearOnScroll) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.add('appear');
				appearOnScroll.unobserve(entry.target);
			}
		})
	}, appearOptions);

function typeWriter(txt) {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(function() {
    	typeWriter(name);
    }, speed);
  }
}


function blink() {
	var blink = document.getElementById('cursor');
	setInterval(function() {
		blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
	}, 500); 
}

faders.forEach(fader => {
	appearOnScroll.observe(fader);
})


setTimeout(function() {
    	typeWriter(name);
    }, 2000);


blink();


$("#projectTab").click(function() {
	event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#section1").offset().top - 100},
        'slow');
});

$("#contactTab").click(function() {
	event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#section2").offset().top - 100},
        'slow');
});

$("#homeTab").click(function() {
	event.preventDefault();
    $('html,body').animate({
        scrollTop: $("body").offset().top - 500},
        'slow');
});