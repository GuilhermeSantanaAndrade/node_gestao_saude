function executeCypher(cypherString) {
  var session = global.dbConnection;
  return session.run(cypherString);
}

exports.executeCypher = executeCypher;
