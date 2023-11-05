export const newspaper = () => {
    if (document.title != 'News') return
    const newspaperContent = document.getElementsByClassName('newspaper__content')[0];
    const categoryBtnsArr = Array.from(document.getElementsByClassName('categories__li'));
    const template = document.getElementsByClassName('newspaper__template')[0];
    const cardArr = Array.from(template.children);
    let newsPagesArr = document.getElementsByClassName('newspaper__page');

    const categoryBtnModif = 'categories__li_active';
    const newsCardModif = 'newspaper__new-card_visible';

    categoryBtnsArr.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains(categoryBtnModif)) return
            changeAtciveCategory(btn);
            resetPages();
            updateCardsList(btn);
            moveToNewPage();
        })
    })

    const changeAtciveCategory = (li) => {
        categoryBtnsArr.forEach(btn => btn.classList.remove(categoryBtnModif));
        li.classList.add(categoryBtnModif);
    }

    const updateCardsList = (btn) => {
        let category = btn.textContent;
        if (category === 'All News') return cardArr.forEach(card => addToPage(card.cloneNode(true)));
        for (let i = 0; i < cardArr.length; i++) {
            if (category === document.getElementsByClassName('new-card__kategory')[i].textContent) addToPage(cardArr[i].cloneNode(true));
        }
    }

    const addToPage = (card) => {
        newsPagesArr[0].appendChild(card);
    }

    const resetPages = () => {
        newspaperContent.replaceChildren();
        let newPage = document.createElement('div');
        newPage.classList.add('newspaper__page')
        newPage.classList.add('newspaper__page_visible');
        newspaperContent.appendChild(newPage);
    }

    const moveToNewPage = () => {
        let cardsQttOnPage = 4;
        while (newsPagesArr[0].children.length > cardsQttOnPage) {
            console.log('start');
            let newPage = document.createElement('div');
            newPage.classList.add('newspaper__page');
            if (newsPagesArr[0].children.length - cardsQttOnPage >= cardsQttOnPage) {
                for (let i = 0; i < cardsQttOnPage; i++) {
                    newPage.appendChild(newsPagesArr[0].lastChild);
                }
            } else {
                for (let i = 0; i <= (newsPagesArr[0].children.length + 1) - cardsQttOnPage; i++) {
                    newPage.appendChild(newsPagesArr[0].lastChild);
                    console.log(newsPagesArr[0].children.length);
                }
            }

            // if (newsPagesArr[0].children.length === 3) {
            //     newPage.appendChild(newsPagesArr[0].lastChild);
            // } else {
            //     newPage.appendChild(newsPagesArr[0].lastChild);
            //     newPage.appendChild(newsPagesArr[0].lastChild);
            // }
            newspaperContent.appendChild(newPage);
            console.log('done');
        }
    }

    updateCardsList(categoryBtnsArr[0]);
    moveToNewPage();
}
