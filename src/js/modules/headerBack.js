export const headerBack = () => {
    if (document.title !== 'Createx') {
        document.getElementsByClassName('header')[0].classList.add('header_transparent');
        document.addEventListener('scroll', () => {
            console.log(scrollY);
            if (scrollY !== 0) {
                document.getElementsByClassName('header')[0].classList.remove('header_transparent');
            } else {
                setTimeout(() => {
                document.getElementsByClassName('header')[0].classList.add('header_transparent');
                }, 400)
            }
          })
    };
}