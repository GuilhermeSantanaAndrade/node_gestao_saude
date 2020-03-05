// ## CUSTOMERS ## //

import { Router } from "express";
import ControllerCustomer from "../controllers/controllerCustomer";
import { throwError } from "../utils/responses_struct";
import input from "./schemas/routesCustomers.schema";

const routes = Router();

routes.get("/", async (req, res, next) => {
  try {
    await ControllerCustomer.findAll(req, res);
  } catch (err) {
    throwError(res, err);
  }
});

routes.post("/", input.validatePOST, async (req, res, next) => {
  try {
    await ControllerCustomer.create(req, res);
  } catch (err) {
    throwError(res, err);
  }
});

routes.put("/:id", input.validatePUT, async (req, res, next) => {
  try {
    await ControllerCustomer.alter(req, res);
  } catch (err) {
    throwError(res, err);
  }
});

routes.delete("/:id", input.validateDELETE, async (req, res, next) => {
  try {
    await ControllerCustomer.remove(req, res);
  } catch (err) {
    throwError(res, err);
  }
});

routes.get("/:id", input.validateGET, async (req, res, next) => {
  try {
    await ControllerCustomer.findOne(req, res);
  } catch (err) {
    throwError(res, err);
  }
});

export default routes;
