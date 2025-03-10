function renderSocialIcons() {
    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'social-icons';

    const socialLinks = [
        { href: 'https://andrearenso.github.io/powerpag/index.html', iconClass: 'fab fa-facebook-f' },
        { href: 'https://www.twitter.com', iconClass: 'fab fa-twitter' },
        { href: 'https://www.instagram.com', iconClass: 'fab fa-instagram' },
        { href: 'https://www.linkedin.com', iconClass: 'fab fa-linkedin-in' }
    ];

    socialLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.target = '_blank';
        anchor.className = 'social-icon';
        anchor.innerHTML = `<i class="${link.iconClass}"></i>`;
        iconsContainer.appendChild(anchor);
    });

    return iconsContainer;
}

// Exporta a função para uso em outros arquivos
export { renderSocialIcons }; 