window.addEventListener('DOMContentLoaded', function() {
    'use strict';

});

let tab1 = document.querySelectorAll('.info-header-tab'),
    info1 = document.querySelector('.info-header1'),
    tabContect1 = document.querySelectorAll('.info-tabcontent');

function hideTabContectn(aa) {
    for (let ia = aa; ia < tabContect1.length; ia++) {
        tabContect1[ia].classList.remove("show1");
        tabContect1[ia].classList.add("hide1");
    }
}

hideTabContectn(1);

function ShowTabContectn(ba) {
    if (tabContect1[ba].classList.contains('hide1')){
        tabContect1[ba].classList.remove("hide1");
        tabContect1[ba].classList.add("show1");
    }
}

info1.addEventListener('click', function (event) {
    let target1 = event.target;

    if (target1 && target1.classList.contains('info-header-tab')){
        for(let ia = 0; ia < tab1.length; ia++){
            if (target1 == tab1[ia]){
                hideTabContectn(0);
                tab1.forEach(item => {
                    item.classList.remove('active1');
                });
                target1.classList.add('active1');
                ShowTabContectn(ia);
                break
            }
        }
    }
});