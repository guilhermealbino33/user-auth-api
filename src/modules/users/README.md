## USERS

# TODO

[] - AppError
[] - Refatorar usersTokens repositories
[] - Verificar onde usava request.ser

# DONE

[x] - Verificar se service usa interface
[x] - Converter as importações para usar injections
[x] - Verificar questão do uso de controller e useCase. Deverá separar por services
[x] - Criar o banco de dados local para testes
[x] - Converter sistema de erros para um centralizado
[x] - Rota show user
[x] - Verificar questão dos mappers e sua necessidade
[x] - Rota delete
[x] - Rota update
[x] - Middleware ensureAdmin

# User Rules

[x] - Rota show user não deverá mostrar password
[x] - Validar se o ID passado por parametro é válido e retornar uma mensagem amigável ao usuário
[x] - Deverá poder editar seu cadastro
[x] - ADMIN - Deverá ter permissão para cadastrar um usuário
[x] - ADMIN - Deverá ter permissão para apagar um usuário

# TESTS

[x] - Deverá criar um usuário
[x] - create session
[] - refresh token
[x] - ensureAuthenticated
[x] - ensureAdmin
[x] - Deverá Realizar login (create session)
