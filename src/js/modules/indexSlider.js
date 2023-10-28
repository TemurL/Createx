export const indexSlider = () => {
    const slider = document.getElementsByClassName('slider')[0];
    const slideArr = Array.from(document.getElementsByClassName('slide'));
    const nextBtn = document.getElementsByClassName('slider__next-button')[0];
    const prevBtn = document.getElementsByClassName('slider__prev-button')[0];
    const mapBtnArr = Array.from(document.getElementsByClassName('slider__maping-button'));

    const sliderModif = 'slider_on-transition';
    const slideModif = 'slide_active';
    const mapBtnModif = 'slider__maping-button_active';

    const nextSlide = (activeSlide) => {
        let index = slideArr.indexOf(activeSlide);
        if (index === slideArr.length - 1) return
        slider.classList.add(sliderModif);
        activeSlide.style.animationName = 'fadeOut';
        setTimeout(() => {
            slider.setAttribute('bgImg',index + 2)
            activeSlide.classList.remove(slideModif);
            mapBtnArr[index].classList.remove(mapBtnModif);
            mapBtnArr[index + 1].classList.add(mapBtnModif);
            slideArr[index + 1].style.animationName = 'fadeIn';
            slideArr[index + 1].classList.add(slideModif);
        }, 300);
        setTimeout(() => {
            slider.classList.remove(sliderModif);
        }, 600);
    }
    const prevSlide = (activeSlide) => {
        let index = slideArr.indexOf(activeSlide);
        if (index == 0) return
        slider.classList.add(sliderModif);
        activeSlide.style.animationName = 'fadeOutRevers';
        setTimeout(() => {
            slider.setAttribute('bgImg',index)
            activeSlide.classList.remove(slideModif);
            mapBtnArr[index].classList.remove(mapBtnModif);
            mapBtnArr[index - 1].classList.add(mapBtnModif);
            slideArr[index - 1].style.animationName = 'fadeInRevers';
            slideArr[index - 1].classList.add(slideModif);
        }, 300);
        setTimeout(() => {
            slider.classList.remove(sliderModif);
        }, 600);
    }

    const mapBtnClick = (activeSlide, clickedBtnIndex) => {
        let index = slideArr.indexOf(activeSlide);
        slider.classList.add(sliderModif);
        if (clickedBtnIndex > index) {
            activeSlide.style.animationName = 'fadeOut';
        } else {
            activeSlide.style.animationName = 'fadeOutRevers';
        }
        setTimeout(() => {
            activeSlide.classList.remove(slideModif);
            mapBtnArr[index].classList.remove(mapBtnModif);
            mapBtnArr[clickedBtnIndex].classList.add(mapBtnModif);
            if (clickedBtnIndex > index) {
                slideArr[clickedBtnIndex].style.animationName = 'fadeIn';
            } else {
                slideArr[clickedBtnIndex].style.animationName = 'fadeInRevers';
            }
            slideArr[clickedBtnIndex].classList.add(slideModif);
            slider.setAttribute('bgImg', clickedBtnIndex + 1)
        }, 300);
        setTimeout(() => {
            slider.classList.remove(sliderModif);
        }, 600);
    }

    nextBtn.addEventListener('click', () => {
        let activeSlide = document.getElementsByClassName(slideModif)[0];
        nextSlide(activeSlide);
    });
    prevBtn.addEventListener('click', () => {
        let activeSlide = document.getElementsByClassName(slideModif)[0];
        prevSlide(activeSlide);
    });
    mapBtnArr.forEach((mapBtn) => {
        mapBtn.addEventListener('click', () => {
            let activeSlide = document.getElementsByClassName(slideModif)[0];
            let clickedBtnIndex = mapBtnArr.indexOf(mapBtn);
            mapBtnClick(activeSlide, clickedBtnIndex);   
        })
    })

}