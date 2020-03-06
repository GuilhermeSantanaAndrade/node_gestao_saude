import { executeCypher } from "../database/neo4j/neo4jEngine";

class Customer {
  nome = "";
  cpf = "";
  email = "";
  telefone = "";

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
            logradouro: props.logradouro,
            numero: props.numero ? props.numero.low : undefined,
            complemento: props.complemento,
            bairro: props.bairro,
            cidade: props.cidade,
            estado: props.estado
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
              logradouro: props.logradouro,
              numero: props.numero ? props.numero.low : undefined,
              complemento: props.complemento,
              bairro: props.bairro,
              cidade: props.cidade,
              estado: props.estado
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
                          logradouro: "${obj.endereco.logradouro || null}",
                          numero: ${obj.endereco.numero || null},
                          complemento: "${obj.endereco.complemento || null}",
                          bairro: "${obj.endereco.bairro || null}",
                          cidade: "${obj.endereco.cidade || null}",
                          estado: "${obj.endereco.estado || null}"
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
               logradouro: "${obj.endereco.logradouro || null}",
               numero: ${obj.endereco.numero || null},
               complemento: "${obj.endereco.complemento || null}",
               bairro: "${obj.endereco.bairro || null}",
               cidade: "${obj.endereco.cidade || null}",
               estado: "${obj.endereco.estado || null}"
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
