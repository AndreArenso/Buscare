/**
 * Renders social media icons with secure links
 * @returns {HTMLElement} Container with social media icons
 */
function renderSocialIcons() {
    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'social-icons';

    // Define social media links with proper rel attributes for security
    const socialLinks = [
        { href: 'https://facebook.com/buscare', iconClass: 'fab fa-facebook-f', label: 'Facebook' },
        { href: 'https://twitter.com/buscare', iconClass: 'fab fa-twitter', label: 'Twitter' },
        { href: 'https://instagram.com/buscare', iconClass: 'fab fa-instagram', label: 'Instagram' },
        { href: 'https://linkedin.com/company/buscare', iconClass: 'fab fa-linkedin-in', label: 'LinkedIn' },
        { href: 'https://wa.me/5554999449606', iconClass: 'fab fa-whatsapp', label: 'WhatsApp' }
    ];

    socialLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer'; // Security best practice for external links
        anchor.className = 'social-icon';
        anchor.setAttribute('aria-label', link.label); // Accessibility improvement
        anchor.innerHTML = `<i class="${link.iconClass}"></i>`;
        iconsContainer.appendChild(anchor);
    });

    return iconsContainer;
}

// Export the function for use in other files
export { renderSocialIcons };