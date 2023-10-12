const heroSlider = () => {
    if (document.title === 'Createx') {
        const leftBtn = document.getElementById('slider-button-to-left');
        const rightBtn = document.getElementById('slider-button-to-right');
        const wrapper = document.getElementsByClassName('slider__wrapper')[0];
        const slider = document.getElementsByClassName('slider')[0];
        const mapingBtnArr = Array.from(document.getElementsByClassName('slider__maping-button'));
    
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
    
        const updateMap = () => {
            mapingBtnArr.forEach((btn) => {
                btn.classList.remove('slider__maping-button_active');
            })
            setTimeout(() => {
                let show = Number(wrapper.getAttribute('show'));
                mapingBtnArr[show - 1].classList.add('slider__maping-button_active');
            }, 800)
        }
    
        mapingBtnArr.forEach((btn) => {
            btn.addEventListener('click', () => {
                let show = Number(btn.textContent.split('')[1]);
                if (show !== Number(wrapper.getAttribute('show'))) {
                    rightBtn.parentElement.setAttribute('href', `#slider-block-${show + 1}`);
                    leftBtn.parentElement.setAttribute('href', `#slider-block-${show - 1}`);
                    wrapper.setAttribute('show', show);
                    slider.classList.add('slider_on-transition');
                    setTimeout(() => {
                        slider.setAttribute('show', show);
                    }, 250);
                    setTimeout(() => {
                        slider.classList.remove('slider_on-transition');
                    }, 500);
                    }
            })
        })
    
        setGridTamplate();
        wrapper.addEventListener('scroll', updateMap)
        rightBtn.addEventListener('click', () => setTimeout(moveToRight, 100));
        leftBtn.addEventListener('click', () => setTimeout(moveToLeft, 100));

        wrapper.addEventListener('touchstart', handleTouchStart, false);
        wrapper.addEventListener('touchmove', handleTouchMove, false);
        let xDown = null;
        let yDown = null;
        
        function getTouches(evt) {
            return evt.touches
        }
        
        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];
            xDown = firstTouch.clientX;
            yDown = firstTouch.clientY;
        };
        
        function handleTouchMove(evt) {
            if ( ! xDown || ! yDown ) {
            return;
        }
        
        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;
        
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
        
        if ( Math.abs(xDiff) > Math.abs(yDiff) ) {/* отлавливаем разницу в движении */
            if ( xDiff > 0 ) {
                rightBtn.click();
            } else {
                leftBtn.click();
            }
        } else {
            if ( yDiff > 0 ) {
            /* swipe вверх */
            } else {
            /* swipe вниз */
            }
        }
        /* свайп был, обнуляем координаты */
        xDown = null;
        yDown = null;
        };
    }
}
heroSlider();