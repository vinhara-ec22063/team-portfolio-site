const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const themeToggle = document.querySelector('.theme-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

menuToggle.addEventListener('click', () => {
	const isOpen = siteNav.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', isOpen);
});

themeToggle.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
	themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light mode' : 'Dark mode';
});

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		navLinks.forEach((item) => item.classList.remove('active'));
		link.classList.add('active');
		siteNav.classList.remove('open');
		menuToggle.setAttribute('aria-expanded', 'false');
	});
});

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (!form.checkValidity()) {
		formStatus.textContent = 'Please complete all fields with a valid email.';
		return;
	}
	formStatus.textContent = 'Thanks! Your message has been received.';
	form.reset();
});
