export const headerBack = () => {
    if (document.title !== 'Createx') {
        document.getElementsByClassName('header')[0].classList.add('header_transparent');
        document.addEventListener('scroll', () => {
            if (scrollY !== 0) {
                document.getElementsByClassName('header')[0].classList.remove('header_transparent');
            } else {
                setTimeout(() => {
                document.getElementsByClassName('header')[0].classList.add('header_transparent');
                }, 400)
            }
          })
    }

    let title = document.title;
    const menuliArr = Array.from(document.getElementsByClassName('nav__li'));

    menuliArr.forEach((li) => {
        if (li.children[0].textContent === title) {
            li.classList.add('nav__li_active');
        }
    })
}