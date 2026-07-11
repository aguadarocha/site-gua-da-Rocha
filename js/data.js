/* ============================================================
   ÁGUA DA ROCHA — data.js
   Fonte única de dados do site. Para adicionar um novo e-book,
   basta:
     1. Colocar o PDF em /pdf/
     2. Colocar a capa em /img/capas/
     3. Adicionar um novo objeto no array EBOOKS abaixo
   O e-book aparecerá automaticamente na Biblioteca, na sua
   categoria e será encontrado pela pesquisa — sem precisar
   tocar em nenhuma outra página.
   ============================================================ */

/* ---------- Categorias ---------- */
const CATEGORIES = [
  { slug: "desenvolvimento-pessoal", name: "Desenvolvimento Pessoal", icon: "sprout" },
  { slug: "estudos",                 name: "Estudos",                 icon: "book-open" },
  { slug: "produtividade",           name: "Produtividade",           icon: "target" },
  { slug: "habitos",                 name: "Hábitos",                 icon: "repeat" },
  { slug: "memorizacao",             name: "Memorização",             icon: "brain" },
  { slug: "comunicacao",             name: "Comunicação",              icon: "message-circle" },
  { slug: "inteligencia-emocional",  name: "Inteligência Emocional",  icon: "heart" },
  { slug: "financas",                name: "Finanças",                 icon: "coins" },
  { slug: "vida-crista",             name: "Vida Cristã",              icon: "droplet" },
  { slug: "proverbios",              name: "Provérbios",               icon: "scroll" },
  { slug: "biblia",                  name: "Bíblia",                   icon: "book" },
  { slug: "familia",                 name: "Família",                  icon: "home" },
  { slug: "filosofia",               name: "Filosofia",                icon: "compass" }
];

/* ---------- E-books ---------- */
const EBOOKS = [
  {
    id: "No-Controle-da-Propria-Vida",
    title: "No Controle da Propria Vida",
    author: "Água da Rocha",
    category: "produtividade",
    shortDesc: "Um guia direto para treinar a atenção e aprender com mais profundidade em menos tempo.",
    fullDesc: "Vivemos cercados de estímulos que fragmentam a atenção. \"Foco Que Aprende\" apresenta um caminho prático para reconstruir a capacidade de concentração e transformar o tempo de estudo em aprendizado real e duradouro, unindo técnicas simples a hábitos sustentáveis do dia a dia.",
    summary: "O livro percorre os motivos pelos quais a mente moderna se distrai com facilidade e propõe um método de estudo em ciclos, aliado a pausas estratégicas e revisão espaçada, para que o leitor aprenda mais com menos esforço mental.",
    learn: [
      "Como identificar e eliminar os principais ladrões de foco",
      "A técnica de ciclos de estudo e descanso ativo",
      "Como usar a repetição espaçada para fixar o conteúdo",
      "Rotinas simples para treinar a atenção todos os dias"
    ],
    pages: 42,
    pubDate: "2026-03-10",
    language: "Português (Brasil)",
    keywords: ["foco", "aprendizagem", "estudo", "concentração", "produtividade", "atenção"],
    cover: "../photo_5084776688016624846_y.jpg",
    pdf: "../pdf/1.pdf"
  },
  {
    id: "horta-em-casa",
    title: "Como Ter uma Horta e Legumes em Casa",
    author: "Água da Rocha",
    category: "habitos",
    shortDesc: "Passo a passo simples para cultivar seus próprios alimentos, mesmo em pequenos espaços.",
    fullDesc: "Um manual acessível para quem deseja começar uma horta caseira do zero. Do preparo do solo à colheita, o livro guia o leitor por um processo que aproxima a família da terra, promove alimentação mais saudável e cria um novo hábito de cuidado diário.",
    summary: "Traz orientações práticas sobre espaço, luz, solo, irrigação e escolha das primeiras espécies para o cultivo, além de dicas para manter a horta viva mesmo com pouco tempo disponível.",
    learn: [
      "Como montar uma horta em vasos, canteiros ou espaços pequenos",
      "Quais legumes são mais fáceis para iniciantes",
      "Cuidados essenciais de rega, solo e adubação natural",
      "Como transformar o cultivo em um hábito familiar"
    ],
    pages: 38,
    pubDate: "2026-04-02",
    language: "Português (Brasil)",
    keywords: ["horta", "legumes", "cultivo", "jardinagem", "alimentação", "sustentabilidade"],
    cover: "../img/capas/horta-em-casa.svg",
    pdf: "../pdf/horta-em-casa.pdf"
  },
  {
    id: "ensinar-filho-a-ler",
    title: "Como Ensinar Seu Filho a Ler",
    author: "Água da Rocha",
    category: "familia",
    shortDesc: "Um guia afetuoso e prático para pais que desejam alfabetizar seus filhos em casa.",
    fullDesc: "A leitura é uma das portas mais importantes que os pais podem abrir para os filhos. Este e-book reúne atividades, brincadeiras e uma sequência de passos simples para tornar a alfabetização um momento de conexão familiar, sem pressão e no ritmo da criança.",
    summary: "Apresenta um método gradual que parte do reconhecimento de sons e letras até a formação de frases, com sugestões de jogos e rotinas curtas que podem ser aplicadas em poucos minutos por dia.",
    learn: [
      "Como despertar o interesse da criança pela leitura",
      "Atividades simples para reconhecimento de letras e sons",
      "Uma rotina de 10 minutos por dia para praticar em casa",
      "Como lidar com as dificuldades sem gerar frustração"
    ],
    pages: 46,
    pubDate: "2026-02-18",
    language: "Português (Brasil)",
    keywords: ["alfabetização", "leitura", "crianças", "educação", "família", "pais"],
    cover: "../img/capas/ensinar-filho-a-ler.svg",
    pdf: "../1.pdf"
  },
  {
    id: "alegria-viva",
    title: "Alegria Viva",
    author: "Água da Rocha",
    category: "vida-crista",
    shortDesc: "Reflexões bíblicas sobre encontrar alegria genuína mesmo em tempos difíceis.",
    fullDesc: "\"Alegria Viva\" convida o leitor a redescobrir uma alegria que não depende das circunstâncias, mas nasce de uma vida enraizada na fé. Combinando reflexão bíblica e aplicação prática, o livro é um convite a viver de forma mais leve, grata e presente.",
    summary: "Ao longo dos capítulos, o leitor percorre passagens bíblicas sobre gratidão, esperança e propósito, sempre acompanhadas de perguntas de reflexão e pequenos exercícios para o dia a dia.",
    learn: [
      "Como cultivar gratidão mesmo em períodos difíceis",
      "O que a Bíblia ensina sobre alegria verdadeira",
      "Práticas diárias para renovar a mente e o espírito",
      "Como transformar fé em ação no cotidiano"
    ],
    pages: 34,
    pubDate: "2026-01-22",
    language: "Português (Brasil)",
    keywords: ["alegria", "fé", "bíblia", "gratidão", "vida cristã", "esperança"],
    cover: "../img/capas/alegria-viva.svg",
    pdf: "../pdf/alegria-viva.pdf"
  },
  {
    id: "guerra-psicologica-redes-sociais",
    title: "Guerra Psicológica & Redes Sociais",
    author: "Água da Rocha",
    category: "inteligencia-emocional",
    shortDesc: "Entenda como as redes sociais influenciam suas emoções e decisões — e retome o controle.",
    fullDesc: "As redes sociais foram construídas para capturar atenção e influenciar comportamento. Este e-book explica, de forma acessível, os mecanismos psicológicos por trás do uso excessivo das telas e apresenta estratégias práticas para reconquistar clareza mental e equilíbrio emocional.",
    summary: "O livro expõe táticas comuns de engajamento usadas pelas plataformas digitais e ensina o leitor a reconhecer gatilhos emocionais, reduzindo a ansiedade gerada pelo consumo constante de conteúdo.",
    learn: [
      "Como as plataformas exploram gatilhos psicológicos",
      "Sinais de que o uso das redes está afetando seu bem-estar",
      "Estratégias práticas para consumir conteúdo com mais consciência",
      "Como proteger sua saúde emocional no ambiente digital"
    ],
    pages: 50,
    pubDate: "2025-11-14",
    language: "Português (Brasil)",
    keywords: ["redes sociais", "psicologia", "inteligência emocional", "ansiedade", "bem-estar digital"],
    cover: "../img/capas/guerra-psicologica.svg",
    pdf: "../pdf/guerra-psicologica-redes-sociais.pdf"
  },
  {
    id: "livre-para-ser-feliz",
    title: "Livre Para Ser Feliz",
    author: "Água da Rocha",
    category: "desenvolvimento-pessoal",
    shortDesc: "Um convite ao perdão e à leveza como caminho para reconstruir a felicidade.",
    fullDesc: "Muitas pessoas carregam mágoas que impedem a felicidade genuína. \"Livre Para Ser Feliz\" caminha pelo tema do perdão — a si mesmo e aos outros — como ponto de partida para uma vida mais leve, apresentando reflexões e exercícios práticos de autoconhecimento.",
    summary: "O livro conecta princípios de saúde emocional a passagens bíblicas sobre perdão, propondo um processo gradual para soltar ressentimentos e abrir espaço para relações mais saudáveis.",
    learn: [
      "Por que o perdão é essencial para a saúde emocional",
      "Como identificar mágoas que ainda influenciam suas decisões",
      "Um processo prático para praticar o perdão",
      "Como cultivar relações mais leves e verdadeiras"
    ],
    pages: 40,
    pubDate: "2025-10-05",
    language: "Português (Brasil)",
    keywords: ["felicidade", "perdão", "autoconhecimento", "desenvolvimento pessoal", "emoções"],
    cover: "../img/capas/livre-para-ser-feliz.svg",
    pdf: "../pdf/livre-para-ser-feliz.pdf"
  },
  {
    id: "sabedoria-de-proverbios",
    title: "A Sabedoria de Provérbios para os Dias de Hoje",
    author: "Água da Rocha",
    category: "proverbios",
    shortDesc: "Princípios do livro de Provérbios aplicados a decisões, trabalho e relacionamentos atuais.",
    fullDesc: "O livro de Provérbios reúne milênios de sabedoria prática. Esta obra traduz seus princípios para os desafios contemporâneos — carreira, dinheiro, relacionamentos e caráter — tornando um dos livros mais antigos da Bíblia surpreendentemente atual.",
    summary: "Organizado por temas, o e-book comenta versículos-chave de Provérbios e propõe aplicações práticas para quem busca tomar decisões mais sábias no trabalho, nas finanças e na vida pessoal.",
    learn: [
      "Princípios de Provérbios sobre trabalho e disciplina",
      "O que o livro ensina sobre dinheiro e generosidade",
      "Sabedoria bíblica aplicada aos relacionamentos",
      "Como desenvolver discernimento nas decisões do dia a dia"
    ],
    pages: 44,
    pubDate: "2025-09-12",
    language: "Português (Brasil)",
    keywords: ["provérbios", "sabedoria", "bíblia", "decisões", "caráter"],
    cover: "../img/capas/sabedoria-proverbios.svg",
    pdf: "../pdf/sabedoria-de-proverbios.pdf"
  },
  {
    id: "financas-com-proposito",
    title: "Finanças com Propósito",
    author: "Água da Rocha",
    category: "financas",
    shortDesc: "Organize sua vida financeira com princípios simples de planejamento e propósito.",
    fullDesc: "Mais do que planilhas, uma vida financeira saudável exige propósito claro. Este e-book apresenta um método simples para organizar despesas, criar reservas e planejar compras importantes, unindo praticidade e uma visão de longo prazo sobre dinheiro.",
    summary: "O leitor aprende a mapear seus gastos, definir metas realistas e criar um plano de economia mensal, com exemplos práticos que podem ser adaptados a qualquer realidade financeira.",
    learn: [
      "Como mapear e organizar seus gastos mensais",
      "Um método simples para criar reserva de emergência",
      "Como planejar compras grandes sem comprometer o orçamento",
      "Princípios para dar propósito ao uso do dinheiro"
    ],
    pages: 36,
    pubDate: "2025-08-20",
    language: "Português (Brasil)",
    keywords: ["finanças", "dinheiro", "planejamento", "economia", "orçamento"],
    cover: "../img/capas/financas-com-proposito.svg",
    pdf: "../pdf/financas-com-proposito.pdf"
  }
];

/* ---------- Artigos ---------- */
const ARTICLES = [
  {
    id: "por-que-perdemos-o-foco",
    title: "Por que perdemos o foco tão rápido — e como reverter isso",
    category: "produtividade",
    shortDesc: "Um olhar prático sobre os hábitos que fragmentam nossa atenção no dia a dia.",
    body: "A atenção é um recurso limitado e, na correria diária, ela é disputada por dezenas de estímulos ao mesmo tempo. Notificações, tarefas simultâneas e a expectativa de resposta imediata treinam o cérebro a buscar novidade em vez de profundidade.\n\nRecuperar o foco começa com pequenas mudanças de ambiente: reduzir notificações, definir blocos de tempo dedicados a uma única tarefa e aceitar que a concentração plena é uma habilidade que se treina, não um talento fixo.\n\nCom prática consistente, poucos minutos por dia já são suficientes para notar diferença na qualidade do trabalho e do estudo.",
    pubDate: "2026-05-02",
    readTime: 4
  },
  {
    id: "gratidao-como-pratica-diaria",
    title: "Gratidão como prática diária, não apenas um sentimento",
    category: "vida-crista",
    shortDesc: "Como transformar a gratidão em um hábito concreto, e não apenas em uma emoção passageira.",
    body: "É comum tratar a gratidão como algo que sentimos ocasionalmente, quando algo bom acontece. Mas a gratidão pode ser cultivada como uma prática diária, independente das circunstâncias.\n\nReservar poucos minutos para reconhecer o que já existe de bom na vida — mesmo em meio a dificuldades — muda a forma como enxergamos os desafios. Não se trata de ignorar problemas, mas de não deixar que eles ocupem todo o espaço da mente.\n\nPequenos registros diários de gratidão, feitos com constância, tendem a fortalecer tanto o bem-estar emocional quanto a fé.",
    pubDate: "2026-04-18",
    readTime: 3
  },
  {
    id: "primeiros-passos-horta-caseira",
    title: "Primeiros passos para começar sua horta caseira",
    category: "habitos",
    shortDesc: "Dicas simples para quem quer começar a cultivar alimentos em casa sem complicação.",
    body: "Começar uma horta em casa parece complicado à primeira vista, mas os primeiros passos são mais simples do que parecem. O essencial é escolher um espaço com boa luz solar, ainda que pequeno, e iniciar com espécies fáceis de cuidar.\n\nErvas como manjericão e salsinha, além de legumes como rúcula e alface, costumam se adaptar bem a iniciantes e trazem resultados rápidos, o que ajuda a manter a motivação.\n\nO mais importante é criar uma rotina simples de observação e rega, transformando o cuidado com a horta em um momento de pausa na correria do dia.",
    pubDate: "2026-03-25",
    readTime: 3
  }
];
