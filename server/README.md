<h1 align="center">
    <img alt="Gobarber" src="https://www.matheuspires.dev/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FU26NdDHhQhuB0z2O1qsd&w=750&q=75" width="350px" />
</h1>


**NodeJS**: é uma API REST que faz todo o CRUD da aplicação, persistência de dados, tratativa de exceções e que serve dados tanto para front-end quanto ao mobile.


## Iniciando back-end
```bash
  # Instalar as dependências:
  $ yarn

  # Criar as migrations:
  $ npx typeorm migration:create ./src/shared/migrations/create

  # Rodar as migrations
  $ yarn typeorm migration:run

  # Rodar a aplicação:
  $ yarn dev
```

# Cadastro de carro

**RF**
- Deve ser possível cadastrar um novo carro.


**RN** 
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
- O usuário responsável pelo cadastro deve ser um usuário administrador.
