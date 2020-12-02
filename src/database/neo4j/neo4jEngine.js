function executeCypher(cypherString) {
  var session = global.dbConnection;
  console.log(cypherString)
  return session.run(cypherString);
}

exports.executeCypher = executeCypher;
