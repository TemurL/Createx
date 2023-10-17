export const newCard = () => {
    const newCardArr = Array.from(document.getElementsByClassName('new-card'));
    newCardArr.forEach((card) => {
        let previewImgPath = card.getAttribute('previewPath');
        card.children[0].style.backgroundImage = `url(${previewImgPath})`;
    })
}