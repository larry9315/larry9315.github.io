document.addEventListener("DOMContentLoaded", init);

function init() {
	let i = 0;
	let isDeleting = false;
	const name = 'Larry Park';
	const speed = 100;

	const faders = document.querySelectorAll('.fade-in');
	const appearOptions = {
		threshold: 1,
		rootMargin: "0px 0px -20px 0px"
	};

	const appearOnScroll = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('appear');
				observer.unobserve(entry.target);
			}
		});
	}, appearOptions);

	faders.forEach(fader => appearOnScroll.observe(fader));

	function typeWriter(txt) {
		const titleElement = document.getElementById("title");

		if (!isDeleting && i < txt.length) {
			titleElement.innerHTML += txt.charAt(i);
			i++;
			setTimeout(() => typeWriter(txt), speed);
		} else if (isDeleting && i > 0) {
			titleElement.innerHTML = txt.substring(0, i - 1);
			i--;
			setTimeout(() => typeWriter(txt), speed);
		} else if (i === txt.length) {
			setTimeout(() => {
				isDeleting = true;
				typeWriter(txt);
			}, 2000);
		} else if (i === 0 && isDeleting) {
			isDeleting = false;
			setTimeout(() => typeWriter(txt), 500);
		}
	}

	function blink() {
		const blink = document.getElementById('cursor');
		setInterval(() => {
			blink.style.opacity = blink.style.opacity === "1" ? "0" : "1";
		}, 500);
	}

	setTimeout(() => typeWriter(name), 2000);
	blink();

	$("#experienceTab").click(function() {
		event.preventDefault();
		$('html,body').animate({
				scrollTop: $("#section1").offset().top - 100},
			'slow');
	});

	$("#projectTab").click(function() {
	event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#section2").offset().top - 100},
        'slow');
	});

	$("#contactTab").click(function() {
		event.preventDefault();
	    $('html,body').animate({
	        scrollTop: $("#section3").offset().top - 100},
	        'slow');
	});


	$("#homeTab").click(function() {
		event.preventDefault();
	    $('html,body').animate({
	        scrollTop: $("body").offset().top - 500},
	        'slow');
	});
}
