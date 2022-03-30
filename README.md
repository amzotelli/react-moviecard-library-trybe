## Sumário

- [Habilidades](#habilidades)
- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Para rodar localmente](#para-rodar-localmente)
- [Requisitos do projeto](#requisitos-do-projeto)

<br>

## Habilidades

Nesse projeto, eu precisei:
- Saber a melhor forma para instalar um gerenciador de pacotes
- Inicializar um projeto em **React**
- Utilizar JSX no **React**
- Utilizar o **ReactDOM.render** para renderizar elementos numa página web
- Utilizar o `import` para usar código externo junto ao meu
- Criar componentes **React** corretamente
- Fazer uso de `props` corretamente
- Fazer composição de componentes corretamente
- Criar múltiplos componentes dinamicamente
- Utilizar **PropTypes** para checar o tipo de uma prop no uso de um componente
- Utilizar **PropTypes** para garantir a presença de props obrigatórias no uso de um componente
- Utilizar **PropTypes** para checar que uma prop é um objeto de formato específico
- Utilizar **PropTypes** para garantir que uma prop é um array com elementos de um determinado tipo

## O que foi ser desenvolvido

Eu desenvolvi uma biblioteca de cartões de filmes utilizando React. A biblioteca deveria possuir um cabeçalho e uma lista de cartões. Cada cartão representa um filme e possui uma imagem, título, subtítulo, sinopse e avaliação.
Os dados foram fornecidos pela Trybe (data.js)

<br>

## Para rodar localmente:

1. Clone o repositório
  * `git clone git@github.com:amzotelli/shopping-cart-trybe.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd shopping-cart-trybe`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

<br>

## Requisitos do Projeto

- Criar um componente `<Header /`>
- Renderizar um texto no `<Header /`>
- Criar um componente `<MovieList />`
- Renderizar componentes `<MovieCard />` dentro de `<MovieList />`
- Passar uma key para cada `<MovieCard />` renderizado
- Criar um componente `<MovieCard />`
- Renderizar a imagem do filme dentro de uma tag `img`
- Renderizar o título do filme dentro de uma tag `h4`
- Renderizar o subtítulo do filme dentro de uma tag `h5`
- Renderizar a sinopse do filme dentro de uma tag `p`
- Criar um componente `<Rating />`
- Renderizar a nota de um filme dentro de `Rating`
- Renderizar o componente `<Rating />` dentro de `<MovieCard />`
- Passar como prop para o componente `<Rating />` o atributo `rating`
- Criar um componente `<App />`
- Renderizar `<MovieList />` dentro do componente `<App />`
- Adicionar PropTypes a todos os componentes
