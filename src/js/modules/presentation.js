export const presentation = () => {
    const listItemArr = Array.from(document.getElementsByClassName('presentation__list-item'));
    const slideArr = Array.from(document.getElementsByClassName('presentation__slide'));
    const slidesContainer = document.getElementsByClassName('presentation__slides-sec')[0];
    const btnsArr = Array.from(document.getElementsByClassName('history__button'));
    const listItemModif = 'presentation__list-item_active';
    const slideModif = 'presentation__slide_active';
    const slidesContainerModif = 'presentation__slides-sec_on-transition';

    const setActiveLi = (currentLi) => {
        listItemArr.forEach((li) => {
            li.classList.remove(listItemModif);
            currentLi.classList.add(listItemModif);
        })
    }

    const changeSlide = (i) => {
        slideArr.forEach((slide) => {
            slide.classList.remove(slideModif);
            if (slideArr[i]) {
                slideArr[i].classList.add(slideModif);
            }
        })
    }

    const setSlidesContainerTransition = (i) => {
        slidesContainer.classList.add(slidesContainerModif);
        setTimeout(() => {
            changeSlide(i)
            slidesContainer.classList.remove(slidesContainerModif)
        }, 350)
    }

    const clickForListItem = (li) => {
        if (li.classList.contains(listItemModif)) return
        setActiveLi(li);
        setSlidesContainerTransition(listItemArr.indexOf(li));
    }

    listItemArr.forEach((li) => {
        li.addEventListener('click', () => {clickForListItem(li)})
    })

    btnsArr.forEach((btn) => {
        btn.addEventListener('click', () => {
            let activeLi = document.getElementsByClassName(listItemModif)[0];
            let index = listItemArr.indexOf(activeLi);
            if (btn.classList.contains('next')) {
                if (index === listItemArr.length - 1) return
                setActiveLi(listItemArr[index + 1]);
                setSlidesContainerTransition(index + 1);
            } else {
                if (index === 0) return
                setActiveLi(listItemArr[index - 1]);
                setSlidesContainerTransition(index - 1);
            }
        })
    })
}