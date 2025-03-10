export function createFooter() {
    const footerHTML = `
        <div class="footer-top">
            <div class="container">
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>Sobre a Buscare</h3>
                        <p>Somos uma empresa especializada em telemedicina, oferecendo atendimento médico de qualidade sem que você precise sair de casa.</p>
                        <div class="footer-contact">
                            <p><i class="fas fa-phone"></i> (54) 99944-9606</p>
                            <p><i class="fas fa-envelope"></i> contato@powerpag.com</p>
                            <p><i class="fas fa-map-marker-alt"></i> Caxias do Sul, RS</p>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h3>Links Rápidos</h3>
                        <ul class="footer-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="sobre-nos.html">Sobre Nós</a></li>
                            <li><a href="servicos.html">Serviços</a></li>
                            <li><a href="precos.html">Preços</a></li>
                            <li><a href="contato.html">Contato</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Horário de Atendimento</h3>
                        <ul class="footer-hours">
                            <li><span>Segunda - Sexta:</span> 8:00 - 20:00</li>
                            <li><span>Sábado:</span> 9:00 - 16:00</li>
                            <li><span>Domingo:</span> Fechado</li>
                        </ul>
                        <p class="emergency-note">Atendimento de emergência 24h</p>
                    </div>
                    <div class="footer-section">
                        <h3>Redes Sociais</h3>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-whatsapp"></i></a>
                        </div>
                        <div class="newsletter">
                            <h4>Receba nossas novidades</h4>
                            <form class="newsletter-form">
                                <input type="email" placeholder="Seu e-mail" required>
                                <button type="submit"><i class="fas fa-paper-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p>PowerPag © ${new Date().getFullYear()} - Todos os direitos reservados</p>
                <p>Razão Social: Power Soluções Empresariais Ltda | CNPJ: 57.564.308/0001-87</p>
            </div>
        </div>
    `;

    const footer = document.createElement('footer');
    footer.innerHTML = footerHTML;
    return footer;
}