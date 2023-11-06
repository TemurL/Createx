export const modal = () => {
    if (document.title !== 'About Us') return


    const subBtn = document.querySelector('.we-can-do__button.vacant-positions__send-cv-button');


    if (!subBtn) return
    const modalModif = 'modal_active';
    const modifScrollLock = 'scroll-lock';


    const modalAct = () => {
        let modal = document.getElementsByClassName('modal')[0]
        if (!modal.classList.contains(modalModif)) {
            modal.style.animationName = 'modalIn';
            modal.classList.add(modalModif);
        } else {
            modal.style.animationName = 'modalOut'
            setTimeout(() => {
                modal.classList.remove(modalModif);
                modal.style.animationName = '';
            }, 400)
        }
        document.body.classList.toggle(modifScrollLock);
        document.querySelector('html').classList.toggle(modifScrollLock);
    }

    subBtn.addEventListener('click', modalAct);
    setTimeout(() => {
        document.querySelector('.modal__exit-button').addEventListener('click', modalAct);
    }, 1000);



    // Uncomment if modal window needs to de shown automaticly every 20 sec
    // setInterval(() => {
    //     let modal = document.getElementsByClassName('modal')[0]
    //     if (modal.classList.contains(modalModif)) return
    //     modalAct();
    // }, 20000);
}