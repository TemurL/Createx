export const serviceCardHover = () => {
    const cardsArr = Array.from(document.getElementsByClassName('services__card'));
    const katalogBtnArr = Array.from(document.getElementsByClassName('katalog__button'));
    const listOfProjects = Array.from(document.getElementsByClassName('project-cards-block__card'));

    const changeImg = (card) => {
        let imgSrc = card.children[0].getAttribute('src');
        let pathArr = imgSrc.split('/');
        if (pathArr[2].split('-').length === 2) {
            pathArr[2] = `hover-${pathArr[2]}`;
            let newSrc = `${pathArr[0]}/${pathArr[1]}/${pathArr[2]}`;
            card.children[0].setAttribute('src', newSrc);
        } else {
            pathArr[2] = pathArr[2].substring(6, pathArr[2].length)
            let newSrc = `${pathArr[0]}/${pathArr[1]}/${pathArr[2]}`;
            card.children[0].setAttribute('src', newSrc);
        }
    }

    katalogBtnArr.forEach((btn) => {
        if (btn.classList.contains('katalog__button_active')) {
            changeImg(btn)
        }
    })

    const updateList = () => {
        let selectedBtn = document.getElementsByClassName('katalog__button_active')[0];
        let keyWord = selectedBtn.children[1].textContent;
        listOfProjects.forEach((card) => {
            card.classList.remove('project-cards-block__card_hide');
            if (card.children[0].children[1].textContent !== keyWord && keyWord !== 'All Projects') {
                card.classList.add('project-cards-block__card_hide');
            }
        })

    }

    cardsArr.forEach((card) => {
        card.addEventListener('mouseover', () => changeImg(card));
        card.addEventListener('mouseout', () => changeImg(card));
    });
    katalogBtnArr.forEach((btn) => {
        btn.addEventListener('click', () => {
            katalogBtnArr.forEach((btn) => {
                if (btn.classList.contains('katalog__button_active')) {
                    btn.classList.remove('katalog__button_active');
                    changeImg(btn);
                }                
            });
            changeImg(btn);
            btn.classList.add('katalog__button_active');
            updateList();
        });
    })
}