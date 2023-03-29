// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Анимация label в input формы CF7

	const form = () => {
		const inputText1 = document.querySelectorAll("#feedname");
		const nameText1 = document.querySelectorAll("#label-feedname");

		inputText1.addEventListener("focusin", (e) => {
			nameText1.classList.add("active");
		});

		inputText1.addEventListener("focusout", (e) => {
			if (inputText1.value.length == 0)
				nameText1.classList.remove("active");
		});


		const inputText2 = document.querySelectorAll("#tel");
		const nameText2 = document.querySelectorAll("#label-tel");

		inputText2.addEventListener("focusin", (e) => {
			nameText2.classList.add("active");
		});

		inputText2.addEventListener("focusout", (e) => {
			if (inputText2.value.length == 0)
				nameText2.classList.remove("active");
		});


		const inputText3 = document.querySelectorAll("#date");
		const nameText3 = document.querySelectorAll("#label-date");

		inputText3.addEventListener("focusin", (e) => {
			nameText3.classList.add("active");
		});

		inputText3.addEventListener("focusout", (e) => {
			if (inputText3.value.length == 0)
				nameText3.classList.remove("active");
		});


		const inputText4 = document.querySelectorAll("#days");
		const nameText4 = document.querySelectorAll("#label-days");

		inputText4.addEventListener("focusin", (e) => {
			nameText4.classList.add("active");
		});

		inputText4.addEventListener("focusout", (e) => {
			if (inputText4.value.length == 0)
				nameText4.classList.remove("active");
		});


		const inputText5 = document.querySelectorAll("#people");
		const nameText5 = document.querySelectorAll("#label-people");

		inputText5.addEventListener("focusin", (e) => {
			nameText5.classList.add("active");
		});

		inputText5.addEventListener("focusout", (e) => {
			if (inputText5.value.length == 0)
				nameText5.classList.remove("active");
		});


		const inputText6 = document.querySelectorAll("#comment");
		const nameText6 = document.querySelectorAll("#label-comment");

		inputText6.addEventListener("focusin", (e) => {
			nameText6.classList.add("active");
		});

		inputText6.addEventListener("focusout", (e) => {
			if (inputText6.value.length == 0)
				nameText6.classList.remove("active");
		});
	};

	form();

	// Переключение на страницу благодорности после отправки формы CF7

	document.addEventListener( 'wpcf7mailsent', function( event ) {
		 location = 'https://gusarovshcina.by/stranitsa-blagodarnosti/';
	}, false );



