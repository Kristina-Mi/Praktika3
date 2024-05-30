const accordion = () => {
    const btns = document.querySelectorAll(".accordion-head");
    btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            this.classList.toggle("active-style");
            //Следующий элемент
            this.nextElementSibling.classList.toggle("active-content");
            if (this.classList.contains("active-style")) {
                this.nextElementSibling.style.maxHeight =
                    this.nextElementSibling.scrollHeight + 50 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = "0px";
            }
        });
    });

    // const blocks = document.querySelectorAll(".accordion-block");

    // blocks.forEach((block) => {
    // 	block.classList.add("animate__animated", "animate__bounceInUp");
    // });
    // btns.forEach((btn) => {
    // 	btn.addEventListener("click", function () {
    // 		if (!this.classList.contains("active-p")) {
    // 			btns.forEach((btn) => {
    // 				btn.classList.remove("active-p", "active-style");
    // 			});
    // 			this.classList.add("active-p", "active-style");
    // 		} else {
    // 			btns.forEach((btn) => {
    // 				btn.classList.remove("active-p", "active-style");
    // 			});
    // 		}
    // 	});
    // });
};
accordion();