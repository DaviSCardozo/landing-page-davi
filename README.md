# 🚀 Landing Page - Davi Cardozo

Este projeto é uma **Landing Page e Portfólio Profissional** desenvolvido como parte das atividades obrigatórias do **Módulo 02** do programa de formação **+praTi & Codifica**.

A aplicação foi projetada para apresentar minha trajetória profissional, minhas habilidades técnicas na transição de carreira para o desenvolvimento Full Stack, além de demonstrar a aplicação prática de conceitos modernos de front-end, consumo de APIs e responsividade.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

*   **Estrutura:** [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) semântico e estruturado.
*   **Estilização:** [CSS3 Moderno](https://developer.mozilla.org/pt-BR/docs/Web/CSS) (Variáveis CSS, Flexbox, Grid Layout, Animações `@keyframes`, Responsividade com Media Queries).
*   **Comportamento:** [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) para interações assíncronas, manipulação do DOM e lógica de formulários.
*   **Integrações Externas:**
    *   [API ViaCEP](https://viacep.com.br/): Busca assíncrona de endereços a partir do CEP.
    *   [FormSubmit API](https://formsubmit.co/): Envio de mensagens de contato direto para o e-mail cadastrado de forma assíncrona.
    *   [Devicons](https://devicon.dev/): Badges das tecnologias no portfólio.
*   **Fontes:** Google Fonts (Família [Poppins](https://fonts.google.com/specimen/Poppins)).

---

## 🌟 Principais Funcionalidades

1.  **Menu Mobile Responsivo (Hambúrguer):** Navegação adaptável para dispositivos móveis com animações suaves de abertura e fechamento.
2.  **Scroll Suave:** Links de navegação interna que deslizam suavemente até as seções desejadas.
3.  **Consulta de CEP (Fetch API):** 
    *   Máscara automática no campo de CEP (`#####-###`).
    *   Requisição assíncrona à API ViaCEP.
    *   Renderização dinâmica do endereço ou mensagem de erro em caso de CEP inválido/inexistente.
4.  **Formulário de Contato com Envio Assíncrono (AJAX):**
    *   Validação em tempo real dos campos no lado do cliente (tamanho do nome, formato do e-mail, comprimento da mensagem).
    *   Envio integrado com o FormSubmit através da Fetch API, evitando o redirecionamento da página e melhorando a experiência do usuário (UX).
5.  **Sistema de Toast Notifications (Avisos Temporários):** Pop-ups flutuantes que alertam o usuário sobre o status de suas ações (ex: "CEP localizado com sucesso!", "Mensagem enviada!").
6.  **Efeitos de Animação e Interação:** Cards de tecnologias com rotação e zoom sob hover, além de elementos flutuantes animados no cabeçalho.

---

## 📁 Estrutura de Diretórios

```bash
landing-page-davi/
│
├── index.html       # Estrutura principal da Landing Page
├── style.css        # Estilos globais, temas de cores, layout e animações
├── script.js        # Lógica de interações, consumo da API de CEP e AJAX do formulário
├── README.md        # Documentação detalhada do projeto
│
└── img/
    └── perfil-trabalho.png  # Foto de perfil utilizada no cabeçalho (Hero)
```

---

## 💻 Como Rodar o Projeto Localmente

Como o projeto é construído inteiramente com tecnologias web nativas (Vanilla HTML/CSS/JS), não é necessário realizar instalações complexas:

1.  Clone este repositório para sua máquina local:
    ```bash
    git clone https://github.com/DaviSCardozo/landing-page-davi.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd landing-page-davi
    ```
3.  Abra o arquivo `index.html` em qualquer navegador web de sua preferência. 
    *(Dica: se usar o VS Code, você pode clicar com o botão direito no arquivo e selecionar **"Open with Live Server"**).*

---

## 👥 Contato e Conexões

*   **LinkedIn:** [linkedin.com/in/davi-cardozo](https://www.linkedin.com/in/davi-cardozo/)
*   **GitHub:** [github.com/DaviSCardozo](https://github.com/DaviSCardozo)
*   **E-mail:** [dev.davicardozo@gmail.com](mailto:dev.davicardozo@gmail.com)