const emojis = ['❤️', '😍', '💖', '🌹'];
const leftContainer = document.getElementById('flower-container-left');
const rightContainer = document.getElementById('flower-container-right');

function createEmoji(container) {
    const emoji = document.createElement('div');
    emoji.className = 'flower';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = '0'; 
    emoji.style.top = '-30px'; 
    container.appendChild(emoji);

    let animationDuration = Math.random() * 3 + 2; 
    emoji.style.transition = `transform ${animationDuration}s linear`;
    emoji.style.transform = `translateY(100vh)`; 

    setTimeout(() => {
        emoji.remove();
    }, animationDuration * 1000);
}

setInterval(() => {
    createEmoji(leftContainer);
    createEmoji(rightContainer);
}, 500);

const music = document.getElementById('background-music');
music.volume = 0.4;

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        
        let content = '';
        switch(targetId) {
            case 'sobre-content':
                content = '<h2>Sobre Nós</h2><p>Seja bem-vindo ao site feito especialmente para vocês, casais. É com muito orgulho e carinho que desenvolvi este site, pensando em como agradar minha namorada. Assim como eu, acredito que vocês também querem surpreender seu amor com esta carta digital. Manda aí, ela(e) vai amar!</p>';
                break;
            case 'pagamento-content':
                content = '<h2>Pagamento</h2><p>Atualmente, o site é gratuito!</p>';
                break;
            case 'contato-content':
                content = '<h2>Contato</h2><p>Entre em contato pelo e-mail: siteparacasais@gmail.com</p>';
                break;
        }

        document.getElementById('modal-content').innerHTML = content;
        document.getElementById('overlay').classList.remove('hidden');
        document.getElementById('modal').classList.remove('hidden');
    });
});

// Fechar modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('modal').classList.add('hidden');
});

// Pré-visualização da imagem
document.getElementById('imagem').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            preview.src = e.target.result;
            preview.classList.remove('hidden');
        }
        reader.readAsDataURL(file);
    }
});

// Gerar link
document.getElementById('gerar-link').addEventListener('click', function() {
    const remetente = document.getElementById('remetente').value;
    const destinatario = document.getElementById('destinatario').value;
    const mensagem = document.getElementById('mensagem').value;

    const link = `https://exemplo.com/carta?remetente=${encodeURIComponent(remetente)}&destinatario=${encodeURIComponent(destinatario)}&mensagem=${encodeURIComponent(mensagem)}`;

    document.getElementById('link-area').innerText = `Seu link: ${link}`;
    const linkInput = document.getElementById('link-input');
    linkInput.value = link; 
    linkInput.classList.remove('hidden'); 
    document.getElementById('copy-link').classList.remove('hidden'); 
});

// Copiar link
document.getElementById('copy-link').addEventListener('click', function() {
    const linkInput = document.getElementById('link-input');
    linkInput.select();
    document.execCommand('copy');
    alert('Link copiado para a área de transferência!');
});
