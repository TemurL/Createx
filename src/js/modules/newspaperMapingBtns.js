export const newspaperMapingBtns = () => {
    if (document.title != 'News') return
    const map = document.getElementsByClassName('newspaper__map')[0];
    let pages = document.getElementsByClassName('newspaper__page');
    const categortBtnsArr = Array.from(document.getElementsByClassName('categories__li'));

    const mapingBtnAct = (i) => {

        let activeBtn = document.getElementsByClassName('newspaper__maping-button_active')[0];
        activeBtn.classList.remove('newspaper__maping-button_active');
        map.children[i].classList.add('newspaper__maping-button_active');

        let activePage = document.getElementsByClassName('newspaper__page_visible')[0];
        activePage.style.animationName = 'fadeOut';
        pages[i].style.animationName = 'fadeIn';
        setTimeout(() => {
            activePage.classList.remove('newspaper__page_visible');
            pages[i].classList.add('newspaper__page_visible');
        }, 350)
    }

    const updateMapingBtn = () => {
        map.innerHTML = '';
        if (pages.length === 1) return
        for (let i = 0; i < pages.length; i++) {
            let newBtn = document.createElement('button');
            newBtn.classList.add('newspaper__maping-button');
            newBtn.textContent = i + 1;
            map.appendChild(newBtn);
            newBtn.addEventListener('click', () => {mapingBtnAct(i)});
        }

        map.children[0].classList.add('newspaper__maping-button_active');
    }

    categortBtnsArr.forEach(btn => btn.addEventListener('click', updateMapingBtn))
    
    updateMapingBtn();
}