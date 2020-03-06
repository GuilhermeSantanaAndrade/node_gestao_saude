import Customer from "../models/Customer";
import { prepareSuccess200, throwRefuse401 } from "../utils/responses_struct";

class ControllerCustomer {
  findAll = async (req, res) => {
    const finds = await Customer.findAll();
    const result = prepareSuccess200(finds);
    res.json(result);
  };

  findOne = async (req, res) => {
    const query = req.query.id;
    const params = req.params.id;

    const find = await Customer.findOne(query || params);

    const result = prepareSuccess200(find);
    res.json(result);
  };

  create = async (req, res) => {
    let { nome, cpf, email, telefone, rg, endereco } = req.body;
    let inserted = await Customer.create({
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      rg: rg,
      endereco: endereco
    });

    const result = prepareSuccess200(inserted);

    res.json(result);
  };

  alter = async (req, res) => {
    let { nome, cpf, email, telefone, rg, endereco } = req.body;
    let id = req.params.id;

    const find = await Customer.findOne(id);
    if (!find || !find.length) {
      throwRefuse401(res, `ID de cliente "${id}" não encontrado.`);
      return;
    }

    let altered = await Customer.alter({
      id: id,
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      rg: rg,
      endereco: endereco
    });

    const result = prepareSuccess200(altered);

    res.json(result);
  };

  remove = async (req, res) => {
    let id = req.params.id;

    const find = await Customer.findOne(id);
    if (!find || !find.length) {
      throwRefuse401(res, `ID de cliente "${id}" não encontrado.`);
      return;
    }

    let deleted = await Customer.remove({ id: id });
    const result = prepareSuccess200(deleted);

    res.json(result);
  };
}

export default new ControllerCustomer();
