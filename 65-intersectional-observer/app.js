const observador = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
				observador.unobserve(entry.target);
			} else {
				entry.target.classList.remove('show');
			}
		});
	},
	{
		// threshold: 0.5,
		rootMargin: '-50px',
	}
);

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
	observador.observe(card);
});


const observador2 = new IntersectionObserver();
