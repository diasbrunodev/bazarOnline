![logo](./src/images/logo.png)

<hr>

### Tópicos

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Layout](#layout)

- [Ferramentas utilizadas](#ferramentas-utilizadas)

- [Acesso ao projeto](#acesso-ao-projeto)

- [Abrir e rodar o projeto](#abrir-e-rodar-o-projeto)

- [Desenvolvedor](#desenvolvedor)

## Descrição do projeto
Projeto autoral com a finalidade de atender a uma demanda do Projeto Social [Projeto Tropinha](https://projetotropinha.org/). Instituição da qual eu sou voluntário, e que está sempre fazendo Bazar beneficente, seja presencial ou online, para arrecadar fundos para a manutenção e a ampliação desta organização sem fins lucrativos.

A aplicação conta com página de login, para que somente usuários cadastrados possam inserir e deletar items. A página home pode ser acessada por todos, contando também com a página de detalhes do produto, com link direto para o WhatsApp do administrador do projeto.

<p align="justify">

  
![layout página principal](./src/images/main_page.png)

</p>

## Funcionalidades

:heavy_check_mark: `Funcionalidade 1:` Site para venda de roupas.

:heavy_check_mark: `Funcionalidade 2:` Login do usuário e proteção de rota.

:heavy_check_mark: `Funcionalidade 3:` Formulário para inserir dados e imagens dos produtos.

:heavy_check_mark: `Funcionalidade 4:` Página de detalhes dos produtos com as imagens expostas em slide, e um botão para fazer o pedido. Ao clicar no botão, o usuário é direcionado diretamente ao WhatsApp do administrador com um texto de pedido, indicando o código do produto que é gerado dinamicamente, para que ao ser confirmada a compra, o administrador copie este código, e busque por este item na página de controle, onde somente ele tem acesso, para deletá-lo do catálogo.

## Layout

<div align="center">

![layout página](./src/images/products.png)
![layout página](./src/images/products2.png)

### Layout Responsivo

<img style='width:200px;  margin-right: 20px' src='./src/images/responsive1.png' alt='layout responsivo para celular'> <img style='width:200px;  margin-right: 20px' src='./src/images/responsive2.png' alt='layout responsivo para celular'> <img style='width:200px' src='./src/images/responsive3.png' alt='layout responsivo para celular'> <img style='width:200px' src='./src/images/responsive4.png' alt='layout responsivo para celular'>

  </div>

###

## Ferramentas utilizadas

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="react" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" alt="typescript" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="javascript" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="firebasa" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="html" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="html" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" alt="css" width="40" height="40"/> 

- React
- TypeScript
- JavaScript
- Firebase
- HTML
- Git
- Styled-Components

🎈 <i><b>OBS:</b></i> 

Foi utilizado o Firebase porque traz a estrutura de login e armazenamento de dados no banco sem a necessidade de implementar algo mais complexo.

O uso do Styled-Components resolve alguns problemas, como a repetição de códigos, visto que nos permite criar componentes reutilizáveis e compartilháveis, tornando manutenções e futuras mudanças mais simples.     

###

## Acesso ao projeto

Você pode [acessar o site do projeto](https://bazar-online-tropinha.vercel.app/).

## Abrir e rodar o projeto

```cmd
# Clone este repositório
git clone <link do repositório>

# Acesse a pasta do projeto no seu terminal
cd <nome do projeto>

# Instalar dependências
npm install

# Execute a aplicação
npm run dev
```

## Desenvolvedor

[<img src="./src/assets/image_official.jpg" width=115><br><sub>Bruno Dias de Freitas</sub>](https://www.linkedin.com/in/brunodias-dev)
