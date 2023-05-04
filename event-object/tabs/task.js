tabs = document.querySelectorAll('.tab');
tabContnts = document.querySelectorAll('.tab__content');

function chTab(n) {
    tabs.forEach((item) => item.classList.remove('tab_active'));
    tabs[n].classList.add('tab_active');
    tabContnts.forEach((item) => item.classList.remove('tab__content_active'));
    tabContnts[n].classList.add('tab__content_active');
}

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        let indexTab = Array.from(tabs).indexOf(e.srcElement); 
        chTab(indexTab)
    });
});