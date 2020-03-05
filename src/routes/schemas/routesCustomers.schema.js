import Joi from "@hapi/joi";
import { throwRefuse401 } from "../../utils/responses_struct";

exports.validatePOST1 = async (req, res, next) => {
  const obj = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(25)
      .required(),
    key: Joi.string()
      .min(1)
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

exports.validateGET1 = async (req, res, next) => {
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

exports.validatePOST2 = async (req, res, next) => {
  const obj = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(25)
      .required(),
    key: Joi.string()
      .min(1)
      .required(),
    ambient_name: Joi.string()
      .min(1)
      .max(255)
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
