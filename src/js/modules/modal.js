export const modal = () => {
    if (document.title !== 'About Us') return


    const subBtn = document.getElementById('subscribe-button');
    const CVBtn = document.getElementById('send-cv-button');
    let subModal = document.getElementById('subscribe-modal');
    let CVModal = document.getElementById('CV-modal');

    if (!subBtn) return
    const modalModif = 'modal_active';
    const modifScrollLock = 'scroll-lock';

    


    const modalAct = (modal) => {
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

    subBtn.addEventListener('click', () => modalAct(subModal));
    CVBtn.addEventListener('click', () => modalAct(CVModal));

    let closeBtn = document.querySelectorAll('.modal__exit-button');

    closeBtn.forEach(btn => btn.addEventListener('click', () => modalAct(btn.parentElement.parentElement)));
}