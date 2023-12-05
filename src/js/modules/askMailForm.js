export const askMailForm = () => {
    let form = document.getElementsByClassName('ask-mail__form')[0];
    if (!form) return
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        alert(`Thank you, ${formData.get('name')}! Your message: "${formData.get('message')}" was sent!`)
    })
}