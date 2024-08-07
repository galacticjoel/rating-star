let star = document.querySelectorAll('input');
let showValue = document.querySelector('#rating-value');

for (let i = 0; i < star.length; i++) {
	star[i].addEventListener('click', function() {
		i = this.value;
		const element = document.getElementById("hidden");
		element.remove();
		showValue.innerHTML = i + " out of 5";
	});
}



