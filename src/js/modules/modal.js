export const modal = () => {

    const subBtn = document.getElementById('subscribe-button');
    const CVBtn = document.getElementById('send-cv-button');
    const SubmitRequestBtn = document.getElementById('submit-request');

    if (subBtn) subBtn.addEventListener('click', () => modalAct(subModal));
    if (CVBtn) CVBtn.addEventListener('click', () => modalAct(CVModal));
    if (SubmitRequestBtn) SubmitRequestBtn.addEventListener('click', () => modalAct(subModal));


    let subModal = document.getElementById('subscribe-modal');
    let CVModal = document.getElementById('CV-modal');

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

    let closeBtn = document.querySelectorAll('.modal__exit-button');

    closeBtn.forEach(btn => btn.addEventListener('click', () => modalAct(btn.parentElement.parentElement)));
}