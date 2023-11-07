export const formBtn = () => {
    const footerFormBtn = document.getElementById('footer__form-btn');
    const footerChecker = document.getElementById('agree');

    footerChecker.onchange = function() {
        footerFormBtn.disabled = !this.checked;
    }

    if (document.title !== 'Contacts') return

    const mainFormBtn = document.getElementById('contact__form-btn');
    const mianChecker = document.getElementById('form__agree');

    mianChecker.onchange = function() {
        mainFormBtn.disabled = !this.checked;
    }
 
}