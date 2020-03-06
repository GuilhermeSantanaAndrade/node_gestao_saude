import { executeCypher } from "../database/neo4j/neo4jEngine";

class Customer {
  nome = "";
  cpf = "";
  email = "";
  telefone = "";
  endereco = {
    cep: "",
    logradouro: "",
    numero: undefined,
    complemento: "",
    bairro: "",
    cidade: "",
    uf: ""
  };

  static findAll = () => {
    return executeCypher(`MATCH (c:Cliente) RETURN c`).then(response => {
      return response.records.map(record => {
        let props = record.get("c").properties;
        return {
          id: record.get("c").identity.low,
          nome: props.nome,
          cpf: props.cpf,
          rg: props.rg,
          email: props.email,
          telefone: props.telefone,
          endereco: {
            cep: props.cep,
            logradouro: props.logradouro,
            numero: props.numero ? props.numero.low : undefined,
            complemento: props.complemento,
            bairro: props.bairro,
            cidade: props.cidade,
            uf: props.uf
          }
        };
      });
    });
  };

  static findOne = id => {
    return executeCypher(`MATCH (c:Cliente) WHERE ID(c) = ${id} RETURN c`).then(
      response => {
        return response.records.map(record => {
          let props = record.get("c").properties;
          return {
            id: record.get("c").identity.low,
            nome: props.nome,
            cpf: props.cpf,
            rg: props.rg,
            email: props.email,
            telefone: props.telefone,
            endereco: {
              cep: props.cep,
              logradouro: props.logradouro,
              numero: props.numero ? props.numero.low : undefined,
              complemento: props.complemento,
              bairro: props.bairro,
              cidade: props.cidade,
              uf: props.uf
            }
          };
        });
      }
    );
  };

  static create = obj => {
    return executeCypher(
      `CREATE (c:Cliente {nome: "${obj.nome}", 
                          cpf: "${obj.cpf}",
                          rg: "${obj.rg}", 
                          telefone: "${obj.telefone}", 
                          email: "${obj.email}",
                          cep: "${obj.endereco.cep || null}",
                          logradouro: "${obj.endereco.logradouro || null}",
                          numero: ${obj.endereco.numero || null},
                          complemento: "${obj.endereco.complemento || null}",
                          bairro: "${obj.endereco.bairro || null}",
                          cidade: "${obj.endereco.cidade || null}",
                          uf: "${obj.endereco.uf || null}"
                         })`
    ).then(() => {
      return [];
    });
  };

  static alter = obj => {
    return executeCypher(
      `MATCH (c:Cliente)
      WHERE id(c) = ${obj.id}
      SET c = {nome: "${obj.nome}", 
               cpf: "${obj.cpf}",
               rg: "${obj.rg}", 
               telefone: "${obj.telefone}", 
               email: "${obj.email}",
               cep: "${obj.endereco.cep || null}",
               logradouro: "${obj.endereco.logradouro || null}",
               numero: ${obj.endereco.numero || null},
               complemento: "${obj.endereco.complemento || null}",
               bairro: "${obj.endereco.bairro || null}",
               cidade: "${obj.endereco.cidade || null}",
               uf: "${obj.endereco.uf || null}"
              }`
    ).then(() => {
      return {};
    });
  };

  static remove = obj => {
    return executeCypher(
      `MATCH (c:Cliente)
      WHERE id(c) = ${obj.id}
      DELETE c`
    ).then(() => {
      return {};
    });
  };
}

export default Customer;
