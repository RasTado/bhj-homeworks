const ml = document.querySelectorAll('.menu__link');
let menus = document.querySelectorAll('.menu');

ml.forEach(l => {
    l.onclick = (q) => {
        const subMenu = l.closest('.menu__item').querySelector('.menu_sub')
        if (subMenu) {
            if (subMenu.classList.contains('menu_active')) {
                subMenu.classList.remove('menu_active');
            } else {
                menus.forEach(m => {
                    m.classList.remove('menu_active');
                });
                subMenu.classList.add('menu_active');
            }
            q.preventDefault();
        }
    }
});