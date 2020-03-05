import customer from "../models/Customer";
import { prepareSuccess200, throwRefuse401 } from "../utils/responses_struct";

class ControllerCustomer {
  findAll = async (req, res) => {
    const finds = await customer.findAll();

    const result = prepareSuccess200(finds);
    res.json(result);
  };

  findOne = async (req, res) => {
    const query = req.query.id;
    const params = req.params.id;

    const find = await customer.findOne({
      where: {
        id: query || params
      }
    });

    const result = prepareSuccess200(find);
    res.json(result);
  };

  create = async (req, res) => {
    let { username, key, user_admin, ambient_name } = req.body;

    let find = await customer.findOne({
      where: {
        username: username
      }
    });

    if (find) {
      throwRefuse401(res, "Usuário já existe.");
      return;
    }

    let inserted = await customer.create({
      username: username,
      encrypted_psw: md5(key + global.SALT_KEY),
      user_admin: user_admin || false,
      id_ambient: find_amb.id
    });

    inserted.encrypted_psw = undefined;
    const result = prepareSuccess200(inserted);

    res.json(result);
  };
}

export default new ControllerCustomer();
