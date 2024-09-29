# Instruções para Iniciar o Projeto

Este projeto consiste em uma aplicação que possui um frontend e um backend. Abaixo estão as instruções para iniciar ambos os componentes.

## Estrutura do Projeto

```
web/
│
├── frontend/   # Código do frontend
│   └── ...     # Outros arquivos do frontend
│
└── Api/        # Código do backend
    └── ...     # Outros arquivos do backend
```

## Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão recomendada: 22 ou superior)
- npm (geralmente já instalado com o Node.js)

## Iniciando o Frontend

1. Navegue até o diretório do frontend:
   ```bash
   cd ./web/frontend
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento do frontend:
   ```bash
   npm run dev
   ```

O frontend deve estar disponível em `http://localhost:3001`.

## Iniciando o Backend

1. Abra um novo terminal e navegue até o diretório do backend:
   ```bash
   cd ./web/Api
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Inicie o servidor do backend:
   ```bash
   node index.js
   ```

O backend deve estar rodando em `http://localhost:3000` (ou a porta que você configurou).

## Conclusão

Agora você deve ter tanto o frontend quanto o backend em execução. Você pode interagir com a aplicação através do navegador.