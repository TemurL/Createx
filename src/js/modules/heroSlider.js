const leftBtn = document.getElementById('slider-button-to-left');
const rightBtn = document.getElementById('slider-button-to-right');
const wrapper = document.getElementsByClassName('slider__wrapper')[0];
const slider = document.getElementsByClassName('slider')[0];

const setGridTamplate = () => {
    let blocksQtt = wrapper.children.length;
    wrapper.style.setProperty("--blocksQtt", blocksQtt);
    wrapper.setAttribute('show', 1);
    slider.setAttribute('show', 1);
}

const moveToRight = () => {
    let show = Number(wrapper.getAttribute('show'));
    if (show < wrapper.children.length) {
        rightBtn.parentElement.setAttribute('href', `#slider-block-${show + 2}`);
        leftBtn.parentElement.setAttribute('href', `#slider-block-${show}`);
        wrapper.setAttribute('show', show + 1);
        slider.classList.add('slider_on-transition');
        setTimeout(() => {
            slider.setAttribute('show', show + 1);
        }, 250);
        setTimeout(() => {
            slider.classList.remove('slider_on-transition');
        }, 500);
    }
}
const moveToLeft = () => {
    let show = Number(wrapper.getAttribute('show'));
    if (show > 1) {
        rightBtn.parentElement.setAttribute('href', `#slider-block-${show}`);
        leftBtn.parentElement.setAttribute('href', `#slider-block-${show - 2}`);
        wrapper.setAttribute('show', show - 1);
        slider.classList.add('slider_on-transition');
        setTimeout(() => {
            slider.setAttribute('show', show - 1);
        }, 250);
        setTimeout(() => {
            slider.classList.remove('slider_on-transition');
        }, 500);
    }
}

setGridTamplate();
rightBtn.addEventListener('click', () => setTimeout(moveToRight, 100));
leftBtn.addEventListener('click', () => setTimeout(moveToLeft, 100));