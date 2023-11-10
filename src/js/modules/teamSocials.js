export const teamSocials = () => {
    const teamMembers = document.getElementsByClassName('team-member');
    const socials = document.getElementsByClassName('team-member__socials');
    const socialsModif = 'team-member__socials_active';

    for (let i = 0; i < teamMembers.length; i++) {
        teamMembers[i].addEventListener('click', () => {
            if (window.innerWidth > 766) return
            socials[i].classList.toggle(socialsModif);
        })
    }
}