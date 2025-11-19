Documentação do Projeto Integrador de Desenvolvimento Front-End

Nome do projeto: Barberia Senhor Macho
Integrantes e desenvolvedores: Carlos Henrique e Daniel Luiz

- Site escolhido: https://ladi683.gendo.app/#/ (Barbearia Senhor Macho).
- Objetivo: Melhorar a interface e experiência do usuário, chamando a atenção de mais clientes.
Público-alvo: Homens que prezam sua aparência e saúde capilar.
- Páginas principais: Início, Serviços, Cadastro, e Sobre
- Elementos essenciais: Botão para selecionar corte de cabelo e agendamento.
- Escolha do negócio: Escolhemos essa barbearia como tema porque o site deles é bem simples e nada chamativo, atraindo somente clientes da comunidade que já conheciam a barbearia antiga.	

Protótipo no Figma: https://www.figma.com/design/B8XAjXP5pkrs7BJZj9EGKc/Protótipo-Front-End?node-id=0-1&p=f&t=iNpwRg2MluBQxjYZ-0

Tecnologias utilizadas: HTML5, CSS3, JavaScript, Figma, e Git.

Estrutura de pastas e arquivos: 
+ Componentes/
    css/ 
    style.css
    responsive.css
    img/
    icone-instagram.png
    senhor-macho.jpg
    js/
    footer.html
    header.html
    nav.html

- Index.html: Página inicial do site
- Servicos.html: Página de serviços
- Cadastro.html: Página de cadastro
- Sobre.html: Página de sobre e contato
- Style.css: Arquivo com a estilização da página usando CSS

Etapas realizadas: 
- Parte 1: Escolha do site, protótipo do Figma, desenvolvimento do código.
- Parte 2: Modularização do código, consolidação de acessibilidade, e implementação de integraçõees úteis para o site.
- Parte 3: Otimização, testes, e publicação do site.

Acesso ao Site:
- https://danieluiz15.github.io/ProjetoFrontEnd/index.html
- <img width="1848" height="998" alt="image" src="https://github.com/user-attachments/assets/609feb7c-e874-4421-b64b-4182d3e6c04c" />
- Data de publicação: 19/11/2025

Justificativas design:
- Fontes: Foi escolhida a fonte Inter por sua boa legibilidade em telas digitaise e visual moderno. O estilo da fonte transmite profissionalismo e acessibilidade, alinhando com o nosso público-alvo.
- Paleta de cores: O fundo escuro (#15161B) reforça a identidade visual de barbearias, transmitindo elegância e tradição. O amarelo (#FBBC05) é usado para destaques e botões, pois chama atenção para ações importantes.O laranja (#FF8800) complementa o amarelo e cria contraste visual. O cinza (#53576A) é utilizado em campos e cartões para suavizar o visual e facilitar a leitura.
- Ícones e butões: Os botões estão posicionados próximos aos campos de ação para facilitar o fluxo do usuário. O uso de ícones é minimalista, focando na clareza das funções e evitando poluição visual. Já, o botão “Reservar” em cada serviço está alinhado à direita para destacar a ação principal de cada card.
- Layout: O layout é centralizado e responsivo, garantindo que o conteúdo fique acessível em diferentes tamanhos de tela. Os cards de serviço organizam informações de forma clara, com nome, preço e ação.
- Usabilidade e experiência: O design prioriza a navegação simples e intuitiva, com menus claros e botões destacados. As cores e fontes facilitam a leitura e direcionam o olhar para as ações principais. O layout permite que o usuário encontre rapidamente o que procura, melhorando a experiência.

Melhorias implementadas na Parte 2: 
- Escolhemos usar o Google Maps, o botão de WhatsApp e os links das redes sociais porque são as coisas que realmente ajudam num site de barbearia. O Maps facilita pro cliente achar o lugar, o WhatsApp deixa o contato muito mais rápido, e as redes sociais mostram o trabalho da barbearia na prática. São integrações fáceis de colocar e que deixam o site mais útil sem complicar nada. Tivemos um pouco de dificuldade no começo de integrar a API do Google Maps, mas depois que pesquisamos, não tivemos mais problemas.

Revisão do código: 
- O site está funcionando perfeitamente, com todos os botões levando para uma parte da página, e sem redundâncias.
- Os elementos HTML que se repetem em várias páginas são as tags <header> e <nav> de menu, e a tag <footer> de rodapé.
- Algumas melhorias para um usuário do pequeno négocio seriam a implementação de mais funções dentro da página, mais opções de serviços, e a opção de escolher o profisional e agendar o corte de cabelo.
-Implementamos a interação de voltar ao topo da página, dando mais interatividade para o usuário com o site.

Componentes reutilizáveis: 
- O cabeçalho (header) é idêntico em todas as páginas.
- O menu de navegação (nav) é o mesmo pelo site.
- Rodapé (footer) está presente em todas as páginas.
- Os cards de serviços também possuem a mesma estrutura.

Testes realizados: 
- Testamos o site em diferentes navegadores como o Microsoft Edge, Opera, e Safari.
- Lista de dispositivos testados: Desktop, Iphone SE, Iphone 16, e Ipad Pro.
- Encontramos problemas na hora de utilizar o DevTools, mas conseguimos resolver sem muita dificuldade.
- Os prints dos navegadores e resoluções testas estão em docs/testes-navegadores/testes-responsividade.


