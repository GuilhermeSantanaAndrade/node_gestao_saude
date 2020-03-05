import routesCustomers from "./routesUsers";
import { Router } from "express";

const mainRoutes = Router();

mainRoutes.use("/clientes", routesCustomers);
mainRoutes.get("/", (req, res, next) => {
  res.send(
    "Bem vindo! Siga a documentação da API em https://github.com/GuilhermeSantanaAndrade/node_gestao_saude"
  );
});

export default mainRoutes;
