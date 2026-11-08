
// SCRIPT DO PET SHOP - AMIGO FIEL


document.addEventListener('DOMContentLoaded', () => {

    // --- 1. BOTÃO "VOLTAR AO TOPO" DINÂMICO ---
    // Cria um botão flutuante elegante no canto inferior direito
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '⬆';
    backToTopButton.id = 'backToTop';
    backToTopButton.setAttribute('aria-label', 'Voltar ao topo');
    
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        background-color: #004e89;
        color: white;
        border: none;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        font-size: 20px;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: background-color 0.3s ease, transform 0.3s ease;
    `;

    document.body.appendChild(backToTopButton);

    // Mostra ou esconde o botão dependendo do scroll da página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Efeito visual ao passar o rato e clique com scroll suave
    backToTopButton.addEventListener('mouseenter', () => {
        backToTopButton.style.transform = 'scale(1.1)';
        backToTopButton.style.backgroundColor = '#00335e';
    });

    backToTopButton.addEventListener('mouseleave', () => {
        backToTopButton.style.transform = 'scale(1)';
        backToTopButton.style.backgroundColor = '#004e89';
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // --- 2. SCROLL SUAVE PARA OS LINKS DO MENU ---
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});