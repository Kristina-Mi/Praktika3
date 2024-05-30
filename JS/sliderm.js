let slideIndex1 = 1,
slides1 = document.querySelectorAll(".sliderNew-itemm"),
prev1 = document.querySelector(".prevm"),
next1 = document.querySelector(".nextm"),
dotsWrap1 = document.querySelector(".sliderNew-dotsm"),
dots1 = document.querySelectorAll(".dotm");

showSlidesi(slideIndex1);

function showSlidesi(ni) {
if (ni > slides1.length) {
    slideIndex1 = 1;
}
if (ni < 1) {
    slideIndex1 = slides1.length;
}

slides1.forEach((itemm) => (itemm.style.display = "none"));
dots1.forEach((itemm) => itemm.classList.remove("dotm-active"));

slides1[slideIndex1 - 1].style.display = "flex";
dots1[slideIndex1 - 1].classList.add("dotm-active");
}
function plusSlidesi(ni) {
showSlidesi((slideIndex1 += ni));
}
function currentSlidei(ni) {
showSlidesi((slideIndex1 = ni));
}

prev1.addEventListener("click", function () {
plusSlidesi(-1);
});

next1.addEventListener("click", function () {
plusSlidesi(1);
});
dotsWrap1.addEventListener("click", function (event) {
for (let ni = 0; ni < dots1.length + 1; ni++) {
    if (
        event.target.classList1.contains("dotm") &&
        event.target == dots1[ni - 1]
    ) {
        currentSlidei(ni);
    }
}
});