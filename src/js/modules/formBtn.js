export const formBtn = () => {
    const formBtn = document.getElementById('footer__form-btn');
    const checker = document.getElementById('agree');

    checker.onchange = function() {
        formBtn.disabled = !this.checked;
    }
}