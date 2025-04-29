# Instruções para Hospedagem do Site Valdir Móveis da Barra

Este documento contém instruções detalhadas para hospedar o site da Valdir Móveis da Barra em diferentes serviços de hospedagem.

## Conteúdo do Pacote

Este pacote contém um site HTML estático completo com as seguintes páginas:

- Página inicial (index.html)
- Catálogo de produtos (produtos.html)
- Página de detalhes do produto (produto.html)
- Página sobre a empresa (sobre.html)
- Página de contato (contato.html)

Além de arquivos CSS e JavaScript para estilização e funcionalidades.

## Opções de Hospedagem

### 1. Hospedagem Tradicional (Recomendado)

Se você possui uma conta em um serviço de hospedagem como Hostgator, GoDaddy, Locaweb, etc:

1. Faça login no painel de controle da sua hospedagem
2. Localize a opção "Gerenciador de Arquivos" ou "File Manager"
3. Navegue até a pasta raiz do seu domínio (geralmente chamada "public_html", "www" ou "htdocs")
4. Faça upload de todos os arquivos e pastas deste pacote para essa pasta
5. Seu site estará disponível imediatamente no seu domínio

### 2. Hospedagem no GitHub Pages

1. Crie uma conta no GitHub (github.com) se ainda não tiver
2. Crie um novo repositório chamado "username.github.io" (substitua "username" pelo seu nome de usuário do GitHub)
3. Faça upload de todos os arquivos deste pacote para o repositório
4. Seu site estará disponível em "username.github.io"

### 3. Hospedagem no Netlify Drop

1. Acesse app.netlify.com/drop
2. Arraste e solte a pasta inteira do site na área indicada
3. Aguarde o upload e processamento
4. Seu site estará disponível em um endereço fornecido pelo Netlify (algo como random-name.netlify.app)

## Personalização do Site

### Alterando Informações de Contato

Para alterar as informações de contato (telefone, endereço, e-mail):

1. Abra cada arquivo HTML em um editor de texto
2. Localize as seções com informações de contato (geralmente no rodapé e na página de contato)
3. Substitua as informações de exemplo pelas informações reais da Valdir Móveis da Barra

### Alterando Imagens

Para substituir as imagens de exemplo por imagens reais dos produtos:

1. Prepare suas imagens com as mesmas dimensões e nomes dos arquivos existentes
2. Substitua os arquivos na pasta "img"

### Adicionando Novos Produtos

Para adicionar novos produtos:

1. Abra o arquivo "produtos.html" em um editor de texto
2. Copie um bloco de produto existente (começando com `<div class="produto-card"` e terminando com `</div>`)
3. Cole o bloco copiado onde deseja adicionar o novo produto
4. Altere as informações (título, descrição, imagem, etc.) para o novo produto

## Suporte

Se precisar de ajuda adicional com a hospedagem ou personalização do site, entre em contato com o desenvolvedor.
