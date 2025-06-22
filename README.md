# Teste Front Next.js - Aplicação de Listagem e Detalhes de Produtos

## Descrição

Esta é uma aplicação Next.js desenvolvida como parte de um teste de contratação. A aplicação consome uma API pública para exibir uma lista de produtos com paginação e uma página de detalhes de produto (PDP).

## Requisitos Atendidos

*   **Next.js:** A aplicação foi construída utilizando o framework Next.js.
*   **Material-UI:**  O Material-UI foi utilizado para a estilização e a criação dos componentes da interface do usuário.
*   **React-query v5:** O React-query v5 foi implementado para o gerenciamento de estados e requisições assíncronas.
*   **Publicação na Vercel:** A aplicação está hospedada na Vercel.

## O que foi Avaliado

*   **Utilização dos princípios de SOLID:** A aplicação foi estruturada com foco nos princípios SOLID, buscando a separação de responsabilidades e a organização do código.
*   **Utilização dos princípios de renderização do Next.js (SSR, SSG):** A aplicação utiliza as estratégias de renderização do Next.js para otimizar o desempenho e a experiência do usuário.
*   **Utilização do Material-UI:** Os componentes do Material-UI foram utilizados para criar uma interface consistente e responsiva.
*   **Utilização do React-query v5:** O React-query v5 foi utilizado para buscar e gerenciar os dados da API de forma eficiente.
*   **Organização do código e hooks:** O código foi organizado de forma clara e modular, com o uso de hooks para encapsular a lógica e facilitar a reutilização.

## Detalhes da Implementação

*   **Página de Listagem de Produtos:** A aplicação apresenta uma página de listagem de produtos com paginação funcional, utilizando o componente `Pagination` do Material-UI.
*   **Página de Detalhes do Produto (PDP):** A aplicação implementa uma página de detalhes do produto que exibe as informações principais de cada item.
*   **Header e Footer:** Ambas as páginas (listagem e detalhes) incluem um header e um footer consistentes.

## Figma

O Figma não foi disponibilizado para este teste, portanto, um layout customizado foi implementado.

## API

A API original especificada no teste (`https://fakestoreapi.com`) não oferece suporte à paginação de forma nativa.  Portanto, foi utilizada a API `https://fakestoreapi.in`, que é semelhante e permite a paginação.

## Como Executar o Projeto

Para executar o projeto localmente, siga estes passos:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/jimmystelzer/localiza-front
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd localiza-front  # ou o nome do seu projeto
    ```
3.  **Instale as dependências:**
    ```bash
    npm install  # ou yarn install
    ```
4.  **Execute o projeto:**
    ```bash
    npm run dev  # ou yarn dev
    ```
    O projeto estará disponível em `http://localhost:3000`.

## Como Publicar na Vercel

1.  **Crie uma conta na Vercel:** Se você ainda não tiver, crie uma conta em [https://vercel.com/](https://vercel.com/).
2.  **Importe o seu repositório:**  No painel da Vercel, importe o repositório do seu projeto (geralmente, você pode fazer isso conectando sua conta do GitHub, GitLab, etc.).
3.  **Implante:**  A Vercel detectará automaticamente que é um projeto Next.js e configurará a implantação.  Clique em "Deploy" para iniciar o processo.
4.  **Acesse o seu site:**  Após a implantação, a Vercel fornecerá um link para o seu site.


## Links

*   **Link do Repositório:** [https://github.com/jimmystelzer/localiza-front](https://github.com/jimmystelzer/localiza-front)
*   **Link do App na Vercel:** [https://localiza-front-git-main-jimmy-stelzers-projects.vercel.app/](https://localiza-front-git-main-jimmy-stelzers-projects.vercel.app/)

