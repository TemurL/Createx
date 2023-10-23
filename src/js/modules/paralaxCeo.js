export const paralaxCeo = () => {
    if (document.title === 'About Us') {
        const img = document.getElementsByClassName('ceo__img')[0];
        const textContent = document.getElementsByClassName('ceo__text-content')[0];

        document.getElementsByClassName('ceo__img')[0].style.top = '80px';


        window.addEventListener('scroll', () => {
            document.getElementsByClassName('ceo__img')[0].style.top = `${80 + (scrollY * 0.05)}px`;
            document.getElementsByClassName('ceo__text-content')[0].style.top = `${80 - (scrollY * 0.1)}px`;
        })
    }
}