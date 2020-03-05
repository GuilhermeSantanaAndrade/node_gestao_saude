const neo4j = require("neo4j-driver").v1;

const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic(global.DB_USER, global.DB_PASSWORD)
);
const session = driver.session();

global.dbConnection = session;
export default session;
