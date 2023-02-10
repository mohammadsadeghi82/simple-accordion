// Writen By Github @mohammadsadeghi82;

let accardion = document.querySelectorAll('.accordeon');

accardion.forEach(acc => {
	acc.addEventListener('click', ev => {
		let panel = ev.target.nextElementSibling;
		panel.classList.toggle('active');
	})
})