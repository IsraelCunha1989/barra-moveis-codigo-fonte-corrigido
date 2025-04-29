// Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('#main-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainMenu.classList.remove('active');
        });
    });
    
    // Filtros de produtos
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const produtoCards = document.querySelectorAll('.produto-card');
    
    if (filtroBtns.length > 0) {
        filtroBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remover classe active de todos os botões
                filtroBtns.forEach(b => b.classList.remove('active'));
                
                // Adicionar classe active ao botão clicado
                this.classList.add('active');
                
                // Filtrar produtos
                const categoria = this.getAttribute('data-categoria');
                
                produtoCards.forEach(card => {
                    if (categoria === 'todos') {
                        card.style.display = 'block';
                    } else {
                        if (card.getAttribute('data-categoria') === categoria) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Verificar se há parâmetro de categoria na URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaParam = urlParams.get('categoria');
    
    if (categoriaParam && filtroBtns.length > 0) {
        // Encontrar o botão correspondente à categoria
        const botaoCategoria = document.querySelector(`.filtro-btn[data-categoria="${categoriaParam}"]`);
        
        if (botaoCategoria) {
            // Simular clique no botão
            botaoCategoria.click();
        }
    }
    
    // Miniaturas de imagens na página de produto
    const miniaturas = document.querySelectorAll('.miniatura');
    const imagemPrincipal = document.getElementById('imagem-principal');
    
    if (miniaturas.length > 0 && imagemPrincipal) {
        miniaturas.forEach(miniatura => {
            miniatura.addEventListener('click', function() {
                // Remover classe active de todas as miniaturas
                miniaturas.forEach(m => m.classList.remove('active'));
                
                // Adicionar classe active à miniatura clicada
                this.classList.add('active');
                
                // Atualizar imagem principal
                const imgSrc = this.querySelector('img').src;
                imagemPrincipal.src = imgSrc;
            });
        });
    }
    
    // Formulário de contato
    const formularioContato = document.getElementById('formulario-contato');
    
    if (formularioContato) {
        formularioContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar código para enviar o formulário via AJAX
            // ou simplesmente mostrar uma mensagem de sucesso
            
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            formularioContato.reset();
        });
    }
});
