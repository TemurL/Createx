export const contactUsForm = () => {
    const form = document.getElementsByClassName('contact-us__form')[0];
    if (!form) return
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        formData.delete('agree');

        const formDataAsObject = Object.fromEntries(formData);
        let res = 'INPUT DATA: \n'
        for (let prop in formDataAsObject) {
            res += `${prop} - ${formDataAsObject[prop]}; \n`
        }
        alert(res);
    })
}