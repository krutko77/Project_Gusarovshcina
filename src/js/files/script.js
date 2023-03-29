// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Анимация label в input формы CF7

	const form = () => {
		const inputText1 = document.getElementById("feedname");
		const nameText1 = document.getElementById("label-feedname");

		inputText1.addEventListener("focusin", (e) => {
			nameText1.classList.add("active");
		});

		inputText1.addEventListener("focusout", (e) => {
			if (inputText1.value.length == 0)
				nameText1.classList.remove("active");
		});


		const inputText2 = document.getElementById("tel");
		const nameText2 = document.getElementById("label-tel");

		inputText2.addEventListener("focusin", (e) => {
			nameText2.classList.add("active");
		});

		inputText2.addEventListener("focusout", (e) => {
			if (inputText2.value.length == 0)
				nameText2.classList.remove("active");
		});


		const inputText3 = document.getElementById("date");
		const nameText3 = document.getElementById("label-date");

		inputText3.addEventListener("focusin", (e) => {
			nameText3.classList.add("active");
		});

		inputText3.addEventListener("focusout", (e) => {
			if (inputText3.value.length == 0)
				nameText3.classList.remove("active");
		});


		const inputText4 = document.getElementById("days");
		const nameText4 = document.getElementById("label-days");

		inputText4.addEventListener("focusin", (e) => {
			nameText4.classList.add("active");
		});

		inputText4.addEventListener("focusout", (e) => {
			if (inputText4.value.length == 0)
				nameText4.classList.remove("active");
		});


		const inputText5 = document.getElementById("people");
		const nameText5 = document.getElementById("label-people");

		inputText5.addEventListener("focusin", (e) => {
			nameText5.classList.add("active");
		});

		inputText5.addEventListener("focusout", (e) => {
			if (inputText5.value.length == 0)
				nameText5.classList.remove("active");
		});


		const inputText6 = document.getElementById("comment");
		const nameText6 = document.getElementById("label-comment");

		inputText6.addEventListener("focusin", (e) => {
			nameText6.classList.add("active");
		});

		inputText6.addEventListener("focusout", (e) => {
			if (inputText6.value.length == 0)
				nameText6.classList.remove("active");
		});
	};

	form();

	const form2 = () => {
		const inputText1 = document.getElementById("feedname2");
		const nameText1 = document.getElementById("label-feedname2");

		inputText1.addEventListener("focusin", (e) => {
			nameText1.classList.add("active");
		});

		inputText1.addEventListener("focusout", (e) => {
			if (inputText1.value.length == 0)
				nameText1.classList.remove("active");
		});


		const inputText2 = document.getElementById("tel2");
		const nameText2 = document.getElementById("label-tel2");

		inputText2.addEventListener("focusin", (e) => {
			nameText2.classList.add("active");
		});

		inputText2.addEventListener("focusout", (e) => {
			if (inputText2.value.length == 0)
				nameText2.classList.remove("active");
		});


		const inputText3 = document.getElementById("date2");
		const nameText3 = document.getElementById("label-date2");

		inputText3.addEventListener("focusin", (e) => {
			nameText3.classList.add("active");
		});

		inputText3.addEventListener("focusout", (e) => {
			if (inputText3.value.length == 0)
				nameText3.classList.remove("active");
		});


		const inputText4 = document.getElementById("days2");
		const nameText4 = document.getElementById("label-days2");

		inputText4.addEventListener("focusin", (e) => {
			nameText4.classList.add("active");
		});

		inputText4.addEventListener("focusout", (e) => {
			if (inputText4.value.length == 0)
				nameText4.classList.remove("active");
		});


		const inputText5 = document.getElementById("people2");
		const nameText5 = document.getElementById("label-people2");

		inputText5.addEventListener("focusin", (e) => {
			nameText5.classList.add("active");
		});

		inputText5.addEventListener("focusout", (e) => {
			if (inputText5.value.length == 0)
				nameText5.classList.remove("active");
		});


		const inputText6 = document.getElementById("comment2");
		const nameText6 = document.getElementById("label-comment2");

		inputText6.addEventListener("focusin", (e) => {
			nameText6.classList.add("active");
		});

		inputText6.addEventListener("focusout", (e) => {
			if (inputText6.value.length == 0)
				nameText6.classList.remove("active");
		});
	};

	form2();

	const form3 = () => {
		const inputText1 = document.getElementById("feedname3");
		const nameText1 = document.getElementById("label-feedname3");

		inputText1.addEventListener("focusin", (e) => {
			nameText1.classList.add("active");
		});

		inputText1.addEventListener("focusout", (e) => {
			if (inputText1.value.length == 0)
				nameText1.classList.remove("active");
		});


		const inputText2 = document.getElementById("tel3");
		const nameText2 = document.getElementById("label-tel3");

		inputText2.addEventListener("focusin", (e) => {
			nameText2.classList.add("active");
		});

		inputText2.addEventListener("focusout", (e) => {
			if (inputText2.value.length == 0)
				nameText2.classList.remove("active");
		});


		const inputText3 = document.getElementById("date3");
		const nameText3 = document.getElementById("label-date3");

		inputText3.addEventListener("focusin", (e) => {
			nameText3.classList.add("active");
		});

		inputText3.addEventListener("focusout", (e) => {
			if (inputText3.value.length == 0)
				nameText3.classList.remove("active");
		});


		const inputText4 = document.getElementById("days3");
		const nameText4 = document.getElementById("label-days3");

		inputText4.addEventListener("focusin", (e) => {
			nameText4.classList.add("active");
		});

		inputText4.addEventListener("focusout", (e) => {
			if (inputText4.value.length == 0)
				nameText4.classList.remove("active");
		});


		const inputText5 = document.getElementById("people3");
		const nameText5 = document.getElementById("label-peopl32");

		inputText5.addEventListener("focusin", (e) => {
			nameText5.classList.add("active");
		});

		inputText5.addEventListener("focusout", (e) => {
			if (inputText5.value.length == 0)
				nameText5.classList.remove("active");
		});


		const inputText6 = document.getElementById("comment3");
		const nameText6 = document.getElementById("label-comment3");

		inputText6.addEventListener("focusin", (e) => {
			nameText6.classList.add("active");
		});

		inputText6.addEventListener("focusout", (e) => {
			if (inputText6.value.length == 0)
				nameText6.classList.remove("active");
		});
	};

	form3();

	// Переключение на страницу благодорности после отправки формы CF7

	document.addEventListener( 'wpcf7mailsent', function( event ) {
		 location = 'https://gusarovshcina.by/stranitsa-blagodarnosti/';
	}, false );



