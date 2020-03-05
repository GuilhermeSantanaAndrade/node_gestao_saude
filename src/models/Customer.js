import { executeCypher } from "../database/neo4j/neo4jEngine";

class Customer {
  nome = "";
  cpf = "";
  email = "";
  telefone = "";

  static findAll = () => {
    return executeCypher(`MATCH (c:Cliente) RETURN c`).then(response => {
      return response.records.map(record => {
        return {
          id: record.get("c").identity.low,
          ...record.get("c").properties
        };
      });
    });
  };

  static findOne = id => {
    return executeCypher(`MATCH (c:Cliente) WHERE ID(c) = ${id} RETURN c`).then(
      response => {
        return response.records.map(record => {
          return {
            id: record.get("c").identity.low,
            ...record.get("c").properties
          };
        });
      }
    );
  };

  static create = obj => {
    return executeCypher(
      `CREATE (c:Cliente {nome: "${obj.nome}", cpf: "${obj.cpf}", rg: "${obj.rg}", telefone: "${obj.telefone}", email: "${obj.email}" })`
    ).then(() => {
      return [];
    });
  };

  static alter = obj => {
    return executeCypher(
      `MATCH (c:Cliente)
      WHERE id(c) = ${obj.id}
      SET c = {nome: "${obj.nome}", cpf: "${obj.cpf}", rg: "${obj.rg}", telefone: "${obj.telefone}", email: "${obj.email}" }`
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
