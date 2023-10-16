export const portfolioCard = () => {
    const cardArr = Array.from(document.getElementsByClassName('portfolio__card'));
    cardArr.forEach((card) => {
        card.addEventListener('click', () => {
            card.children[0].classList.toggle('portfolio__card-text-content_active');
        })
    })
}