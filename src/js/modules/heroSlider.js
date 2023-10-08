const leftBtn = document.getElementById('slider-button-to-left');
const rightBtn = document.getElementById('slider-button-to-right');
const wrapper = document.getElementsByClassName('slider__wrapper')[0];

const moveToRight = () => {
    let show = Number(wrapper.getAttribute('show'));
    if (show < wrapper.children.length) {
        rightBtn.parentElement.setAttribute('href', `#slider-block-${show + 2}`);
        leftBtn.parentElement.setAttribute('href', `#slider-block-${show}`);
        wrapper.setAttribute('show', show + 1);
        console.log(show);
    }
}
const moveToLeft = () => {
    let show = Number(wrapper.getAttribute('show'));
    if (show > 1) {
        rightBtn.parentElement.setAttribute('href', `#slider-block-${show}`);
        leftBtn.parentElement.setAttribute('href', `#slider-block-${show - 2}`);
        wrapper.setAttribute('show', show - 1);
        console.log(show);
    }
}

rightBtn.addEventListener('click', () => setTimeout(moveToRight, 60));
leftBtn.addEventListener('click', () => setTimeout(moveToLeft, 60));