# 🎲 Aluguel de Board Games - Frontend

<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-4.4.9-purple?style=flat-square&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-3.3.2-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind">
</p>

### 🔍 Sobre o Projeto
Esta é a camada de interface (Frontend) da aplicação de **Aluguel de Board Games**, desenvolvida com o objetivo de gerenciar e listar jogos de tabuleiro disponíveis para locação. A aplicação consome uma API REST local para listar os jogos em tempo real, filtrar títulos por nome e alternar instantaneamente o status de aluguel/disponibilidade dos itens.

O projeto foi construído durante os módulos práticos do curso *“JavaScript e TypeScript do básico ao avançado”* da Udemy.

> **📚 Observação:** Este projeto foi desenvolvido com finalidade **didática**, como parte dos meus estudos e prática de desenvolvimento. Seu principal objetivo é aplicar conceitos, boas práticas, padrões de projeto e tecnologias utilizadas no desenvolvimento de aplicações reais.

---

### ⚙️ Funcionalidades Principais
* **Listagem Assíncrona:** Renderização de cards de jogos dinâmicos consumindo dados direto do Backend via Fetch API.
* **Filtro em Tempo Real:** Mecanismo de busca reativo que filtra os jogos por nome à medida que o usuário digita.
* **Alternância de Status Dinâmica:** Atualização de estado imediata no clique do botão (muda de "Alugar" para "Devolver"), enviando uma requisição HTTP `PUT` para persistência no banco de dados.
* **Componentização Reutilizável:** Estrutura baseada em componentes visuais atômicos (`Button`, `Card`, `Input`), otimizando a legibilidade e a manutenção do ecossistema.

---

### 🛠️ Tecnologias e Conceitos Aplicados

* **React (SPA):** Utilização avançada de Hooks como `useState` para controle de filtros/jogos e `useEffect` para gerenciar o ciclo de vida e chamadas de API.
* **Tailwind CSS & PostCSS:** Estilização utilitária focada em design responsivo e interações visuais fluidas (`hover`, `transition`).
* **Vite:** Ferramenta de build ultra-rápida para o ambiente de desenvolvimento.

---

### 📂 Estrutura de Pastas Úteis
```text
src/
├── components/
│   └── ui/              # Componentes de interface genéricos e reutilizáveis
│       ├── button.jsx
│       ├── card.jsx
│       └── input.jsx
├── App.jsx              # Core da aplicação (Lógica de estado e requisições HTTP)
├── main.jsx             # Ponto de entrada do React
└── index.css            # Configurações globais e diretivas do Tailwind
````

### 🚀 Como Executar o Projeto no VS Code

> **Nota:** Esta aplicação depende do repositório de **Backend** rodando na porta `3000` para funcionar perfeitamente.

1. **Clonar o Repositório:**
```bash
git clone https://github.com/brunno333/aluguelDeJogos-frontend.git
```
2. **Abrir no VS Code e Instalar as Dependências:**
> Abra a pasta do projeto no editor, abra o terminal integrado e execute:
```bash
npm install
```
3.**Rodar em Modo de Desenvolvimento:**
>Após a instalação das dependências da `node_modules`, inicie o servidor local do Vite:
```bash
npm run dev
```
4.**Acessar a Aplicação**
>O terminal exibirá um endereço local (geralmente http://localhost:5173).
Ctrl + Clique no link para abrir no seu navegador.


💡 Projeto desenvolvido por Bruno Leonidio como parte de estudos práticos em desenvolvimento de software.
