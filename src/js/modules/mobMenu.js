export const mobMenu = () => {
    const menuBtn = document.getElementsByClassName('mob-menu__button')[0];
    const menuBody = document.getElementsByClassName('mob-menu')[0];
    const menuLiArr = Array.from(document.getElementsByClassName('mob-menu__li'));

    const modifMenuBtn = 'mob-menu__button_active';
    const modifMenuBody = 'mob-menu_active';
    const modifScrollLock = 'scroll-lock';

    const menuAct = () => {
        menuBtn.classList.toggle(modifMenuBtn);
        menuBody.classList.toggle(modifMenuBody);
        document.body.classList.toggle(modifScrollLock);
        document.querySelector('html').classList.toggle(modifScrollLock);
    }
    menuBtn.addEventListener('click', () => {
        menuAct();
    })
    menuLiArr.forEach((li) => {
        li.addEventListener('click', () => {
            menuAct();
        })
    })
}