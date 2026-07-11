# Água da Rocha

Plataforma gratuita para descoberta e download de e-books. Projeto 100% estático (HTML5, CSS3 e JavaScript puro), pronto para publicar no GitHub Pages — sem banco de dados, sem back-end.

> "Conhecimento gratuito para transformar vidas."

## Estrutura de pastas

```
/index.html            → Página inicial
/biblioteca/            → Biblioteca completa (grid, pesquisa e ordenação)
/categorias/             → Lista de categorias + página dinâmica de categoria
/ebooks/                 → Página dinâmica de detalhes do e-book (ebook.html?id=...)
/artigos/                → Lista de artigos + página dinâmica de artigo
/sobre/                  → Missão, história, privacidade, termos e direitos autorais
/apoiar/                 → Doação voluntária via Pix
/pdf/                    → Arquivos PDF dos e-books
/img/capas/              → Capas dos e-books (atualmente SVGs de demonstração)
/css/style.css           → Todo o design system do site
/js/data.js              → Fonte única de dados (e-books, categorias, artigos)
/js/main.js              → Cabeçalho, rodapé, pesquisa, menu, lazy load, animações
```

## Como adicionar um novo e-book (sem mexer em nenhuma página)

1. Coloque o arquivo PDF em `/pdf/`.
2. Coloque a capa (JPG, PNG ou SVG) em `/img/capas/`.
3. Abra `/js/data.js` e adicione um novo objeto ao array `EBOOKS`, seguindo o mesmo formato dos existentes (id, título, categoria, descrições, capa, pdf, etc.).
4. Pronto. O e-book aparece automaticamente na Biblioteca, na página da sua categoria e na pesquisa — nenhuma outra página precisa ser editada.

## Como adicionar uma nova categoria

Adicione um novo objeto ao array `CATEGORIES` em `/js/data.js` (slug, nome e ícone). Ela passa a aparecer automaticamente em `/categorias/`, nas abas de filtro da Biblioteca e no rodapé.

## Como adicionar um novo artigo

Adicione um novo objeto ao array `ARTICLES` em `/js/data.js`. O texto do artigo aceita parágrafos separados por linha em branco (`\n\n`).

## Publicando no GitHub Pages

1. Suba esta pasta para um repositório no GitHub.
2. Em **Settings → Pages**, selecione a branch principal e a pasta raiz (`/`).
3. O site ficará disponível em `https://seu-usuario.github.io/nome-do-repositorio/`.

## Observações

- As capas atuais em `/img/capas/` e os PDFs em `/pdf/` são arquivos de demonstração gerados automaticamente — substitua-os pelos arquivos finais mantendo os mesmos nomes referenciados em `data.js`.
- O código não depende de nenhum framework; as únicas requisições externas são as fontes do Google Fonts (Inter e Poppins).
