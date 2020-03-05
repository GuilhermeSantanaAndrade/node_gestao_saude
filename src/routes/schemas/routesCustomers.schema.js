import Joi from "@hapi/joi";
import { throwRefuse401 } from "../../utils/responses_struct";

exports.validatePOST = async (req, res, next) => {
  const obj = Joi.object({
    nome: Joi.string()
      .alphanum()
      .min(3)
      .max(25)
      .required(),
    cpf: Joi.string()
      .min(11)
      .max(14)
      .required(),
    rg: Joi.string().required(),
    telefone: Joi.string()
      .min(8)
      .required(),
    email: Joi.string()
      .email()
      .required()
  });

  let input = req.body;
  const result = obj.validate(input);
  if (result.error) {
    throwRefuse401(res, result.error.message);
    return;
  } else {
    next();
  }
};

exports.validatePUT = async (req, res, next) => {
  const obj = Joi.object({
    id: Joi.number().required(),
    nome: Joi.string()
      .alphanum()
      .min(3)
      .max(25)
      .required(),
    cpf: Joi.string()
      .min(11)
      .max(14)
      .required(),
    rg: Joi.string().required(),
    telefone: Joi.string()
      .min(8)
      .required(),
    email: Joi.string()
      .email()
      .required()
  });

  let input = {
    id: req.params.id,
    ...req.body
  };
  const result = obj.validate(input);
  if (result.error) {
    throwRefuse401(res, result.error.message);
    return;
  } else {
    next();
  }
};

exports.validateDELETE = async (req, res, next) => {
  const obj = Joi.object({
    id: Joi.number().required()
  });

  let input = {
    id: req.params.id
  };
  const result = obj.validate(input);
  if (result.error) {
    throwRefuse401(res, result.error.message);
    return;
  } else {
    next();
  }
};

exports.validateGET = async (req, res, next) => {
  const obj = Joi.object({
    id: Joi.number().required()
  });

  let input = req.params;
  const result = obj.validate(input);
  if (result.error) {
    throwRefuse401(res, result.error.message);
    return;
  } else {
    next();
  }
};
