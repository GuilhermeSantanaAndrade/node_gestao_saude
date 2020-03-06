# node_gestao_saude
Projeto de gestão de saúde. (Node Backend)

# como utilizar
- Abrir o arquivo .env
- Alterar as variáveis para conexão ao banco de dados neo4j. {URL / User / Password}
- Abrir o terminal neste diretório
- npm install
- Para subir o servidor: npm run start
- Para subir no modo desenvolvimento: npm run dev

# rotas disponíveis
GET: localhost:3000/clientes

GET: localhost:3000/clientes/:id

POST: localhost:3000/clientes 

 body: {
 
   nome = "",
   
   cpf = "",
   
   email = "",
   
   telefone = "",
   
   endereco = {
   
     cep = ""
     
     logradouro = "",
     
     numero = 0,
     
     complemento = "",
     
     bairro = "",
     
     cidade = "",
     
     uf = ""
     
   };
   
PUT: localhost:3000/clientes/:id

DELETE: localhost:3000/clientes/:id
