export const paralaxCeo = () => {
    if (document.title === 'About Us') {
        const img = document.getElementsByClassName('ceo__img')[0];
        const textContent = document.getElementsByClassName('ceo__text-content')[0];
        window.addEventListener('scroll', () => {
            if (window.innerWidth > 1080) {
                img.style.top = `${(scrollY * 0.05)}px`;
                textContent.style.top = `${80 - (scrollY * 0.1)}px`;
            }
        })
    }
}