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
			// Typing effect
			titleElement.innerHTML += txt.charAt(i);
			i++;
			setTimeout(() => typeWriter(txt), speed);
		} else if (isDeleting && i > 0) {
			// Deleting effect
			titleElement.innerHTML = txt.substring(0, i - 1);
			i--;
			setTimeout(() => typeWriter(txt), speed);
		} else if (i === txt.length) {
			// Start deleting after typing is complete
			setTimeout(() => {
				isDeleting = true;
				typeWriter(txt);
			}, 1000); // Delay before deletion
		} else if (i === 0 && isDeleting) {
			// Restart typing after deletion is complete
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

	$("#projectTab, #contactTab, #homeTab").click(function(event) {
		event.preventDefault();
		const targetId = $(this).attr("href");
		const offset = $(targetId).offset().top - 100;
		$('html, body').animate({ scrollTop: offset }, 'slow');
	});
}
