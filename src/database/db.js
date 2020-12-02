import variables from "dotenv";

const neo4j = require("neo4j-driver").v1;

variables.config({
  path: ".env"
});

const driver = neo4j.driver(
  process.env.DB_URL,
  neo4j.auth.basic(process.env.DB_USER, process.env.DB_PASSWORD),
  { encrypted: true }
);
const session = driver.session();

global.dbConnection = session;
export default session;
