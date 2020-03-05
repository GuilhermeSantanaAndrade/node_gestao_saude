import User from "../models/User.js";

const connection = {}; //new Sequelize(dbConfig);
User.init(connection);

global.dbConnection = connection;
export default connection;
