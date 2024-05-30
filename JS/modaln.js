const modall = document.getElementById("modal1");
	const btnl = document.getElementById("open-modal__btn1");
	const closeBtnl = document.querySelector(".modal__close1");

	btnl.addEventListener("click", function () {
		modall.classList.add("modal_active1");

		closeBtnl.addEventListener("click", closeModall);

		function closeModall() {
			modall.classList.remove("modal_active1");

			closeBtnl.removeEventListener("click", closeModall);

			modall.removeEventListener("click", hideModall);
		}

		modall.addEventListener("click", hideModall);

		//Закрытие при клике вне зоны модального окна
		function hideModall(event) {
			if (event.target === modall) {
				closeModall();
			}
		}
	});