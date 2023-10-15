export const serviceCardHover = () => {
    const cardsArr = Array.from(document.getElementsByClassName('services__card'));
    cardsArr.forEach((card) => {
        card.addEventListener('mouseover', () => {
            let imgSrc = card.children[0].getAttribute('src');
            let pathArr = imgSrc.split('/');
            pathArr[2] = `hover-${pathArr[2]}`;
            let newSrc = `${pathArr[0]}/${pathArr[1]}/${pathArr[2]}`;
            card.children[0].setAttribute('src', newSrc);
        });
        card.addEventListener('mouseout', () => {
            let imgSrc = card.children[0].getAttribute('src');
            let pathArr = imgSrc.split('/');
            pathArr[2] = pathArr[2].substring(6, pathArr[2].length)
            let newSrc = `${pathArr[0]}/${pathArr[1]}/${pathArr[2]}`;
            card.children[0].setAttribute('src', newSrc);
        })
    })
}