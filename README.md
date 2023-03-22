Este projeto contém os requisitos realizados por _[Scarlat Pereira](https://www.linkedin.com/in/scarlatpereira/)_ enquanto estudava na [Trybe](https://www.betrybe.com/) :rocket:

# Project TrybeSmith

Neste projeto, desenvolvi uma loja de itens medievais, no formato de uma API, utilizando TypeScript!

Para isso, foi necessário implementar todas as camadas da aplicação (Models, Service e Controllers), em que foi possível
realizar as operações em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (CRUD).

Além disso, criei alguns endpoints que iriam ler e escrever em um banco de dados, utilizando o MySQL.


## Banco de Dados - TrybeSmith

TrybeSmith
:-------------------------:|
<img width="988" alt="diagram-der" src="https://user-images.githubusercontent.com/108958216/227037622-8f18e930-4072-4de1-b86a-819380000158.png">  |

---

## Demo

![Gravação de tela de 22-03-2023 18_12_03](https://user-images.githubusercontent.com/108958216/227040896-8a8fb41c-807c-4dc9-8082-7d6569af8df7.gif)

---

## Instalação do projeto localmente:
 
Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em engcivil.scarlat@gmail.com

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos
  git clone git@github.com:scarlat-pereira/project-trybesmith.git

3. Acesse o diretório do projeto e depois utilize o comando **npm i** para instalar todas as dependências necessárias:
```javascript
  cd project-trybesmith
  npm i
```

- ✨ **Dica:** Caso queira utilizar _Docker_ para rodar os testes localmente e validar as funcionalidades, basta seguir as seguintes instruções:

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

  > Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `trybesmith` e outro chamado `trybesmith_db`.
  - A partir daqui você pode rodar o container `trybesmith` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybesmith bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  ⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

## Habilidades Desenvolvidas

Neste projeto, desenvolvi as seguintes habilidades:

 - Declarar variáveis e funções com tipagens TypeScript;
 - Construir uma API Node Express utilizando o TypeScript.

 ## Escopo do Projeto

## 1 - Crie um endpoint para o cadastro de produtos

## 2 - Crie um endpoint para a listagem de produtos

## 3 - Crie um endpoint para o cadastro de pessoas usuárias

## 4 - Crie um endpoint para listar todos os pedidos

## 5 - Crie um endpoint para o login de pessoas usuárias

## 6 - Crie as validações dos produtos

## 7 - Crie as validações para as pessoas usuárias

## 8 - Crie um endpoint para o cadastro de um pedido
