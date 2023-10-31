export const katalogCollaps = () => {
    if (document.title !== 'Work') return
    const btn = document.getElementsByClassName('katalog__collaps-button')[0];
    const container = document.getElementsByClassName('katalog__content')[0];
    
    btn.addEventListener('click', () => {
        container.classList.toggle('katalog__content_open');
    })
} 