export const katalogCollaps = () => {
    if (document.title !== 'Work') return
    const btn = document.getElementsByClassName('katalog__collaps-button')[0];
    const container = document.getElementsByClassName('katalog__content')[0];
    const katalodBtnArr = Array.from(document.getElementsByClassName('katalog__button'));
    btn.addEventListener('click', () => {
        container.classList.toggle('katalog__content_open');
        btn.classList.toggle('katalog__collaps-button_open');
        btn.textContent = document.querySelector('.katalog__button_active').textContent
    })
    katalodBtnArr.forEach(item => {
        item.addEventListener('click', () => btn.click())
    })
} 