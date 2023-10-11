const mobMenu = () => {
    const menuBtn = document.getElementsByClassName('mob-menu__button')[0];
    const menuBody = document.getElementsByClassName('mob-menu')[0];
    const menuLiArr = Array.from(document.getElementsByClassName('mob-menu__li'));

    const modifMenuBtn = 'mob-menu__button_active';
    const modifMenuBody = 'mob-menu_active';
    const modifScrollLock = 'scroll-lock';

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle(modifMenuBtn);
        menuBody.classList.toggle(modifMenuBody);
        document.body.classList.toggle(modifScrollLock);
    })
    menuLiArr.forEach((li) => {
        li.addEventListener('click', () => {
            menuBtn.classList.toggle(modifMenuBtn);
            menuBody.classList.toggle(modifMenuBody);
            document.body.classList.toggle(modifScrollLock);
        })
    })
}
mobMenu();